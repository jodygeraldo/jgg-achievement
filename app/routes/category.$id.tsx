import * as PopoverPrimitive from '@radix-ui/react-popover'
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
import { getFormDataOrFail } from 'remix-params-helper'
import invariant from 'tiny-invariant'
import { z } from 'zod'
import { Button } from '~/components/Button'
import Checkbox from '~/components/Checkbox'
import Completion from '~/components/Completion'
import Icon from '~/components/Icon'
import { getShowAll } from '~/cookies'
import {
  getUserCategoryEntriesById,
  upsertCategoryEntries,
  upsertCategoryEntry,
} from '~/models/category.server'
import { hasSessionActive } from '~/session.server'
import { useMatchesData } from '~/utils'
import { getCategoryEntries } from '~/utils/category.server'
import type { loader as categoryLoader } from './category'

const FormDataSchema = z.object({
  intent: z.enum(['multiple', 'single']),
  dbId: z.string().optional(),
  achId: z.string().optional(),
  complete: z.string().optional(),
})

export async function action({ request, params, context }: ActionArgs) {
  const { id: categoryTitleWithId } = params
  invariant(categoryTitleWithId, 'id param is not defined on action')
  const id = categoryTitleWithId.split('-').at(-1)!

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

  return json(null)
}

export async function loader({ request, params, context }: LoaderArgs) {
  const { id: categoryTitleWithId } = params
  invariant(categoryTitleWithId, 'id param is not defined on loader')
  const id = categoryTitleWithId.split('-').at(-1)!

  const data = await getUserCategoryEntriesById({ id, request, context })

  const showAll = await getShowAll(request)

  return json({
    category: getCategoryEntries({ id, data, showAll }),
  })
}

export default function EntriesPage() {
  const { category } = useLoaderData<typeof loader>()
  const transition = useTransition()

  const { data } = useMatchesData<typeof categoryLoader>('routes/category')

  const title = data.categories.find((c) => c.id === category.id)?.title!
  const completion = data.categories.find((c) => c.id === category.id)
    ?.completion!

  const disabledComplete =
    transition.state === 'submitting' || completion?.percentage === '100%'

  const { pathname, key } = useLocation()

  return (
    <div className="min-w-full rounded-md [box-shadow:0_2px_10px_var(--blackA7)]">
      <div className="rounded-md bg-gray-3 py-2">
        <div className="px-4 py-2 sm:flex sm:items-center sm:justify-between sm:px-6">
          <div className="space-y-1">
            <h3 className="text-lg font-medium leading-6 text-primary-11">
              {title}
            </h3>

            <Completion {...completion} />
          </div>
          {category.entries.length !== 0 && (
            <Form
              className="mt-4 sm:mt-0"
              method="post"
              action={`${pathname}?index`}
              replace
            >
              <input type="hidden" name="intent" value="multiple" />
              <Button
                type="submit"
                disabled={disabledComplete}
                parentBgColorStep={3}
                className="w-full sm:w-auto"
              >
                Set as complete
              </Button>
            </Form>
          )}
        </div>

        <div className="my-2 h-px w-full bg-primary-6" role="separator" />

        <div className="mt-4 mb-2 space-y-1" key={key}>
          {category.entries.length === 0 && (
            <p className="text-center text-sm text-primary-12">
              You already completed this achievement category
            </p>
          )}
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
                {entry.requirements && (
                  <InfoPopover content={entry.requirements} />
                )}
              </div>
              {'description' in entry ? (
                <EntryInput
                  key={entry.id}
                  id={entry.id}
                  description={entry.description}
                  dbId={entry.dbId}
                  defaultChecked={entry.complete}
                />
              ) : (
                <div>
                  {entry.steps.map((step) => (
                    <EntryInput
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
    </div>
  )
}

function EntryInput({
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

  return (
    <fetcher.Form
      method="post"
      replace
      className={clsx(
        extraPadding && 'py-2',
        'flex items-center justify-between gap-12'
      )}
    >
      <input type="hidden" name="intent" value="single" />
      <input type="hidden" name="dbId" value={dbId} />
      <input type="hidden" name="achId" value={id} />

      <span
        id={id}
        className={clsx(
          defaultChecked && 'line-through decoration-primary-12',
          'mt-1 max-w-prose text-sm text-gray-11'
        )}
      >
        {description}
      </span>
      <Checkbox
        type="submit"
        name="complete"
        aria-labelledby={id}
        defaultChecked={defaultChecked}
        disabled={disabled}
        size="lg"
      />
    </fetcher.Form>
  )
}

function InfoPopover({ content }: { content: string }) {
  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger
        aria-label="requirements"
        className="flex items-center justify-center rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-8"
      >
        <Icon
          iconId="infoCircled"
          className="text-gray-11 transition-colors hover:text-gray-12"
        />
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
