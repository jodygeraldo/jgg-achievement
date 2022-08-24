import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as LabelPrimitive from '@radix-ui/react-label'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import type { LoaderArgs } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import { useFetcher, useLoaderData } from '@remix-run/react'
import invariant from 'tiny-invariant'
import { z } from 'zod'
import useMatchesDataSchema from '~/utils'
import { getCategoryEntries } from '~/utils/category.server'

export function loader({ params }: LoaderArgs) {
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
  const { data } = useMatchesDataSchema({
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
            <button
              type="submit"
              name="id"
              value={category.id}
              disabled={disabledComplete}
              className="rounded-md bg-primary-9 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-8 focus:ring-offset-2 focus:ring-offset-gray-3 hover:enabled:bg-primary-10 disabled:cursor-not-allowed disabled:bg-primary-6"
            >
              Set as complete
            </button>
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
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-11 transition-colors hover:text-gray-12"
        >
          <path
            d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
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
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

function ScrollArea({ children }: { children: React.ReactNode }) {
  return (
    <ScrollAreaPrimitive.Root className="h-[calc(100vh-8rem)] min-w-full overflow-hidden rounded-md [box-shadow:0_2px_10px_var(--blackA7)]">
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
