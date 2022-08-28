import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon, InfoCircledIcon } from '@radix-ui/react-icons'
import * as LabelPrimitive from '@radix-ui/react-label'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import type { LoaderArgs } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import { useFetcher, useLoaderData, useLocation } from '@remix-run/react'
import invariant from 'tiny-invariant'
import { z } from 'zod'
import { Button } from '~/components/Button'
import { useMatchesDataForceSchema } from '~/utils'
import { getCategoryEntries } from '~/utils/category.server'

export async function loader({ params, context }: LoaderArgs) {
  const { category } = params
  invariant(category, 'Category param is not defined')
  const id = category.split('-').at(-1)!

  return json({
    category: getCategoryEntries(id),
  })
}

export default function CategoryMainPage() {
  const { category } = useLoaderData<typeof loader>()
  const fetcher = useFetcher()
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
    fetcher.state === 'submitting' || len?.done === len?.total

  return (
    <ScrollArea>
      <div className="rounded-md bg-gray-3 py-2">
        <div className="flex items-center justify-between px-4 py-2 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-primary-11">
            {title}
          </h3>
          <fetcher.Form method="post">
            <input type="hidden" name="complete" value="true" />
            <Button
              type="submit"
              name="id"
              value={category.id}
              disabled={disabledComplete}
              parentBgColorStep={3}
            >
              Set as complete
            </Button>
          </fetcher.Form>
        </div>
        <div className="mt-4 space-y-1">
          {category.entries.map((entry) => (
            <div
              key={entry.id}
              className="rounded-md px-4 py-2 transition-colors hover:bg-gray-4 sm:px-6"
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
                <div className="flex items-center justify-between gap-12">
                  <LabelPrimitive.Root asChild>
                    <label
                      htmlFor={entry.id}
                      className="mt-1 max-w-prose text-sm text-gray-11"
                    >
                      {entry.description}
                    </label>
                  </LabelPrimitive.Root>
                  <Checkbox id={entry.id} />
                </div>
              ) : (
                <div>
                  {entry.steps.map((step) => (
                    <div
                      key={step.id}
                      className="flex items-center justify-between gap-12 py-2"
                    >
                      <LabelPrimitive.Root asChild>
                        <label
                          htmlFor={step.id}
                          className="mt-1 max-w-prose text-sm text-gray-11"
                        >
                          {step.description}
                        </label>
                      </LabelPrimitive.Root>
                      <Checkbox id={step.id} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
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

function Checkbox({ id }: { id: string }) {
  return (
    <CheckboxPrimitive.Root
      id={id}
      name={id}
      defaultValue="on"
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
        className="flex touch-none select-none bg-overlay-6 p-0.5 transition-colors ease-out hover:bg-overlay-8 radix-orientation-vertical:w-2"
      >
        <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-lg bg-gray-10 before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2" />
      </ScrollAreaPrimitive.Scrollbar>
    </ScrollAreaPrimitive.Root>
  )
}
