import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon, InfoCircledIcon } from '@radix-ui/react-icons'
import * as LabelPrimitive from '@radix-ui/react-label'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import type { ActionArgs, LoaderArgs } from '@remix-run/cloudflare'
import { json, redirect } from '@remix-run/cloudflare'
import {
  Form,
  useFetcher,
  useLoaderData,
  useLocation,
  useTransition,
} from '@remix-run/react'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { getFormDataOrFail } from 'remix-params-helper'
import { useHydrated } from 'remix-utils'
import invariant from 'tiny-invariant'
import { z } from 'zod'
import { Button } from '~/components/Button'
import {
  getUserCategoryEntriesById,
  upsertCategoryEntries,
  upsertCategoryEntry,
} from '~/models/category.server'
import { hasSessionActive } from '~/session.server'
import { useMatchesDataForceSchema } from '~/utils'
import { getCategoryEntries } from '~/utils/category.server'

const FormDataSchema = z.object({
  intent: z.enum(['multiple', 'single']),
  dbId: z.string().optional(),
  achId: z.string().optional(),
  complete: z.string().optional(),
})

export async function action({ request, params, context }: ActionArgs) {
  const { category } = params
  invariant(category, 'Category param is not defined')
  const id = category.split('-').at(-1)!

  const { intent, dbId, achId, complete } = await getFormDataOrFail(
    request,
    FormDataSchema
  )

  const isSessionActive = await hasSessionActive(request)

  if (isSessionActive) {
    if (intent === 'single') {
      invariant(achId, 'achId is not defined on single submit')

      await upsertCategoryEntry({
        id,
        data: {
          id: dbId,
          ach_id: achId,
          complete: complete === 'on' ? true : false,
        },
        request,
        context,
      })
      return json(null)
    }

    if (intent === 'multiple') {
      await upsertCategoryEntries({ id, request, context })

      const pathname = new URL(request.url).pathname
      return redirect(pathname)
    }
  }

  // TODO: save data in cookie if user not logged in

  return json(null)
}

export async function loader({ request, params, context }: LoaderArgs) {
  const { category } = params
  invariant(category, 'Category param is not defined')
  const id = category.split('-').at(-1)!

  const data = await getUserCategoryEntriesById({ id, request, context })

  // TODO: get data from cookie if user not logged in

  return json({
    category: getCategoryEntries({ id, data }),
  })
}

export default function CategoryMainPage() {
  const hydrated = useHydrated()
  if (hydrated) {
    return (
      <ScrollArea>
        <Category />
      </ScrollArea>
    )
  }

  return (
    <div className="h-[calc(100vh-10rem)] min-w-full overflow-y-auto rounded-md [box-shadow:0_2px_10px_var(--blackA7)]">
      <Category />
    </div>
  )
}

function Category() {
  const { category } = useLoaderData<typeof loader>()
  const transition = useTransition()
  const { data } = useMatchesDataForceSchema({
    id: 'routes/$category',
    schema: z.object({
      data: z.object({
        categories: z
          .object({
            id: z.string(),
            title: z.string(),
            entries: z.object({
              done: z.number(),
              total: z.number(),
            }),
          })
          .array(),
      }),
    }),
  })

  const title = data.categories.find((c) => c.id === category.id)?.title
  const len = data.categories.find((c) => c.id === category.id)?.entries

  const disabledComplete =
    transition.state === 'submitting' || len?.done === len?.total

  const { pathname, key } = useLocation()

  return (
    <div className="rounded-md bg-gray-3 py-2">
      <div className="flex items-center justify-between px-4 py-2 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-primary-11">
          {title}
        </h3>
        <Form method="post" action={`${pathname}?index`} replace>
          <input type="hidden" name="intent" value="multiple" />
          <Button
            type="submit"
            disabled={disabledComplete}
            parentBgColorStep={3}
          >
            Set as complete
          </Button>
        </Form>
      </div>
      <div className="mt-4 space-y-1" key={key}>
        {category.entries.map((entry) => (
          <div
            key={entry.id}
            className="px-4 py-2 transition-colors hover:bg-gray-4 sm:px-6"
          >
            <div className="flex items-center gap-2">
              <h4 className="font-medium leading-6 text-primary-11">
                {entry.title}
              </h4>
              <span className="rounded-md bg-gray-2 px-2 py-1 text-xs font-medium text-gray-11">
                {entry.version}
              </span>
              {entry.commission && (
                <span className="rounded-md bg-gray-2 px-2 py-1 text-xs font-medium uppercase text-gray-11">
                  Commission
                </span>
              )}
              {entry.requirements && <Popover content={entry.requirements} />}
            </div>
            {'description' in entry ? (
              <AchievementInput
                key={entry.id}
                id={entry.id}
                description={entry.description}
                dbId={entry.dbId}
                defaultChecked={entry.complete}
              />
            ) : (
              <div>
                {entry.steps.map((step) => (
                  <AchievementInput
                    key={step.id}
                    id={step.id}
                    description={step.description}
                    dbId={step.dbId}
                    defaultChecked={step.complete}
                    disabled={step.disabled}
                    extraPadding
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function AchievementInput({
  id,
  description,
  dbId,
  defaultChecked,
  disabled,
  extraPadding,
}: {
  id: string
  description: string
  dbId?: string
  defaultChecked?: boolean
  disabled?: boolean
  extraPadding?: boolean
}) {
  const fetcher = useFetcher()
  const { pathname } = useLocation()
  const [checked, setChecked] = useState(defaultChecked)

  function handleCheckChange(e: React.FormEvent<HTMLFormElement>) {
    fetcher.submit(new FormData(e.currentTarget), {
      action: pathname + '?index',
      method: 'post',
      replace: true,
    })
  }

  useEffect(() => {
    if (fetcher.submission) {
      const checked = fetcher.submission?.formData.get('complete') === 'on'
      setChecked(checked)
    }
  }, [fetcher.submission])

  return (
    <fetcher.Form
      className={clsx(
        extraPadding && 'py-2',
        'flex items-center justify-between gap-12'
      )}
      onChange={(e) => handleCheckChange(e)}
    >
      <input type="hidden" name="intent" value="single" />
      <input type="hidden" name="dbId" value={dbId} />
      <input type="hidden" name="achId" value={id} />
      <LabelPrimitive.Root
        htmlFor={id}
        className={clsx(
          checked && 'line-through decoration-primary-12',
          'mt-1 max-w-prose text-sm text-gray-11'
        )}
      >
        {description}
      </LabelPrimitive.Root>
      <Checkbox id={id} defaultChecked={checked} disabled={disabled} />
    </fetcher.Form>
  )
}

function Popover({ content }: { content: string }) {
  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger
        aria-label="requirements"
        className="flex items-center justify-center rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-8"
      >
        <InfoCircledIcon className="text-gray-11 transition-colors hover:text-gray-12" />
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          className="max-w-xs rounded-md bg-gray-2 p-2 text-sm text-gray-11"
          side="top"
          sideOffset={10}
          hideWhenDetached
        >
          {content}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}

function Checkbox({
  id,
  defaultChecked,
  disabled,
}: {
  id: string
  defaultChecked?: boolean
  disabled?: boolean
}) {
  return (
    <CheckboxPrimitive.Root
      aria-label="checkbox"
      id={id}
      defaultChecked={defaultChecked}
      disabled={disabled}
      name="complete"
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gray-6 transition-colors [box-shadow:0_2px_10px_var(--blackA7)] hover:bg-gray-7 focus:outline-none focus:ring-2 focus:ring-primary-8 disabled:bg-gray-5"
    >
      <CheckboxPrimitive.Indicator className="text-primary-11">
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

function ScrollArea({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()

  return (
    <ScrollAreaPrimitive.Root
      key={pathname}
      className="h-[calc(100vh-10rem)] min-w-full overflow-hidden rounded-md [box-shadow:0_2px_10px_var(--blackA7)]"
    >
      <ScrollAreaPrimitive.Viewport className="h-full w-full [border-radius:inherit]">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar
        orientation="vertical"
        className="flex touch-none select-none bg-overlay-6 p-0.5 transition-colors ease-out hover:bg-overlay-7 radix-orientation-vertical:w-2"
      >
        <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-lg bg-gray-10 before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2" />
      </ScrollAreaPrimitive.Scrollbar>
    </ScrollAreaPrimitive.Root>
  )
}
