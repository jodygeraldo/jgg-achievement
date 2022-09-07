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
import * as React from 'react'
import { getFormDataOrFail } from 'remix-params-helper'
import invariant from 'tiny-invariant'
import { z } from 'zod'
import { Button } from '~/components/Button'
import Checkbox from '~/components/Checkbox'
import Completion from '~/components/Completion'
import Icon from '~/components/Icon'
import { CategoryContext } from '~/contexts/categoryContext'
import { CompleteContext } from '~/contexts/completeContext'
import { getShowAll } from '~/cookies'
import {
  getUserCategoryEntriesById,
  upsertCategoryEntries,
  upsertCategoryEntry,
} from '~/models/category.server'
import {
  getOffileCategories,
  getOffileCategoryEntries,
  upsertOffileCategoryEntries,
  upsertOffileCategoryEntry,
} from '~/models/offline.client'
import { hasSessionActive } from '~/session.server'
import { useRootData } from '~/utils'
import { getCategoryEntries } from '~/utils/category.server'

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
  const { category: defaultCategory } = useLoaderData<typeof loader>()
  const [category, setCategory] = React.useState(defaultCategory)

  const { isSessionActive, showAll } = useRootData()
  const completeContext = React.useContext(CompleteContext)
  const categoryContext = React.useContext(CategoryContext)

  const { pathname, key } = useLocation()
  const transition = useTransition()

  React.useEffect(() => {
    if (!isSessionActive) {
      async function updateCategory() {
        setCategory(await getOffileCategoryEntries(defaultCategory, showAll))
      }
      updateCategory()
    }
  }, [defaultCategory, isSessionActive, showAll])

  const title = completeContext?.[0].categories.find(
    (c) => c.id === defaultCategory.id
  )?.title!

  const completion = completeContext?.[0].categories.find(
    (c) => c.id === defaultCategory.id
  )?.completion!
  const disabledComplete =
    transition.state === 'submitting' || completion?.percentage === '100%'

  const [divKey, setDivKey] = React.useState(123123)

  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <div className="min-w-full rounded-md [box-shadow:0_2px_10px_var(--blackA7)]">
        <div className="rounded-md bg-gray-3 py-2">
          <div className="px-4 py-2 sm:flex sm:items-center sm:justify-between sm:px-6">
            <div className="space-y-1">
              <h3 className="text-lg font-medium leading-6 text-primary-11">
                {title}
              </h3>

              <Completion {...completion} />
            </div>

            {categoryContext?.[0].entries.length !== 0 && (
              <Form
                className="mt-4 sm:mt-0"
                method="post"
                action={`${pathname}?index`}
                replace
                onSubmit={async (e) => {
                  if (!isSessionActive) {
                    e.preventDefault()
                    await upsertOffileCategoryEntries({
                      categoryId: defaultCategory.id,
                      entries: defaultCategory.entries,
                    })
                    setCategory(
                      await getOffileCategoryEntries(defaultCategory, showAll)
                    )
                    completeContext?.[1](
                      await getOffileCategories(completeContext?.[0])
                    )
                    setDivKey((prevValue) => prevValue + 1)
                  }
                }}
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

          <div
            className="mt-4 mb-2 space-y-1"
            key={isSessionActive ? key : divKey}
          >
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
    </CategoryContext.Provider>
  )
}

// function SetCompleteForm() {
//   const { category: defaultCategory } = useLoaderData<typeof loader>()
//   const [category, setCategory] = React.useState(defaultCategory)

//   const { isSessionActive, showAll } = useRootData()
//   const completeContext = React.useContext(CompleteContext)

//   const transition = useTransition()
//   const {pathname} = useLocation()
//   const disabledComplete =
//     transition.state === 'submitting' || completion?.percentage === '100%'

//     const completion = completeContext?.[0].categories.find(
//       (c) => c.id === defaultCategory.id
//     )?.completion!

//   return (
//     {category.entries.length !== 0 && (
//       <Form
//         className="mt-4 sm:mt-0"
//         method="post"
//         action={`${pathname}?index`}
//         replace
//         onSubmit={async (e) => {
//           if (!isSessionActive) {
//             e.preventDefault()
//             await upsertOffileCategoryEntries({
//               categoryId: defaultCategory.id,
//               entries: defaultCategory.entries,
//             })
//             setCategory(
//               await getOffileCategoryEntries(defaultCategory, showAll)
//             )
//             completeContext?.[1](
//               await getOffileCategories(completeContext?.[0])
//             )
//           }
//         }}
//       >
//         <input type="hidden" name="intent" value="multiple" />
//         <Button
//           type="submit"
//           disabled={disabledComplete}
//           parentBgColorStep={3}
//           className="w-full sm:w-auto"
//         >
//           Set as complete
//         </Button>
//       </Form>
//     )}
//   )
// }

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
  const { category: defaultCategory } = useLoaderData<typeof loader>()
  const fetcher = useFetcher()
  const { isSessionActive, showAll } = useRootData()
  const categoryContext = React.useContext(CategoryContext)
  const completeContext = React.useContext(CompleteContext)

  return (
    <fetcher.Form
      method="post"
      replace
      className={clsx(
        extraPadding && 'py-2',
        'flex items-center justify-between gap-12'
      )}
      onSubmit={async (e) => {
        if (!isSessionActive) {
          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          const entryId = formData.get('achId')
          invariant(typeof entryId === 'string', 'typeError entryId')
          const complete = formData.get('complete') === 'on'
          await upsertOffileCategoryEntry({
            categoryId: defaultCategory.id,
            entryId,
            complete,
          })
          categoryContext?.[1](
            await getOffileCategoryEntries(defaultCategory, showAll)
          )
          completeContext?.[1](await getOffileCategories(completeContext?.[0]))
        }
      }}
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
