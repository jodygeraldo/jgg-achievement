import type { SerializeFrom } from '@remix-run/cloudflare'
import { entries, get, set } from 'idb-keyval'
import type { loader as categoriesLoader } from '~/routes/category'
import type { loader as categoryLoader } from '~/routes/category.$id'
import type { CategoryEntries } from '~/types/category'
import { getFormattedCompletionPercentage } from '~/utils'

type CategoriesData = SerializeFrom<typeof categoriesLoader>
type CategoryData = SerializeFrom<typeof categoryLoader>

export async function getOffileCategories(data: CategoriesData['data']) {
  const localData = await entries<string, string[]>()

  let totalCount = 0

  const updatedCategories = data.categories.map((category) => {
    const completedEntries = localData.find((kv) => kv[0] === category.id)
    if (completedEntries) {
      const count = completedEntries[1].length
      totalCount += count

      const completion = {
        done: count,
        total: category.completion.total,
      }

      return {
        ...category,
        completion: {
          ...completion,
          percentage: getFormattedCompletionPercentage({
            complete: completion.done,
            total: completion.total,
          }),
        },
      }
    }
    return category
  })

  const completion = {
    done: totalCount,
    total: updatedCategories.reduce(
      (prev, curr) => prev + curr.completion.total,
      0
    ),
  }

  return {
    completion: {
      ...completion,
      percentage: getFormattedCompletionPercentage({
        complete: completion.done,
        total: completion.total,
      }),
    },
    categories: updatedCategories,
  }
}

export async function getOffileCategoryEntries(
  category: CategoryData['category'],
  showAll: boolean
) {
  const localData = await get<string[]>(category.id)
  if (!localData) return category

  const updatedEntries = category.entries.map((entry) => {
    if ('steps' in entry) {
      const steps: typeof entry.steps = []
      entry.steps.forEach((step, idx) => {
        const userEntry = localData.includes(step.id)
        if (!userEntry) {
          steps.push({
            ...step,
            disabled:
              idx === 0 ? false : steps[idx - 1].complete ? false : true,
          })
        } else {
          steps.push({
            ...step,
            complete: true,
            disabled:
              idx === 0 ? false : steps[idx - 1].complete ? false : true,
          })
        }
      })

      if (steps[2].complete) {
        steps[0].disabled = true
        steps[1].disabled = true
      } else if (steps[1].complete) {
        steps[0].disabled = true
      }

      return {
        ...entry,
        steps,
      }
    }

    const userEntry = localData.includes(entry.id)
    if (!userEntry) return entry
    return {
      ...entry,
      complete: true,
    }
  })

  const filteredEntries = showAll
    ? updatedEntries
    : updatedEntries.filter((entry) => {
        if ('steps' in entry)
          return !entry.steps.every((step) => step.complete === true)
        return !entry.complete
      })

  return {
    ...category,
    entries: filteredEntries,
  }
}

export async function upsertOffileCategoryEntry({
  categoryId,
  entryId,
  complete,
}: {
  categoryId: string
  entryId: string
  complete: boolean
}) {
  const userCategoriesEntries = (await get<string[]>(categoryId)) ?? []

  const entryIdx = userCategoriesEntries.findIndex((entry) => entry === entryId)
  if (entryIdx === -1 && complete) {
    await set(categoryId, [...userCategoriesEntries, entryId])
  }

  if (entryIdx !== -1 && !complete) {
    userCategoriesEntries.splice(entryIdx, 1)
    await set(categoryId, userCategoriesEntries)
  }
}

export async function upsertOffileCategoryEntries({
  categoryId,
  entries,
}: {
  categoryId: string
  entries: CategoryEntries['entries']
}) {
  const entriesId = entries
    .map((entry) => {
      if (typeof entry.steps !== 'undefined') {
        return entry.steps.map((step) => step.id)
      }
      return entry.id
    })
    .flat()

  await set(categoryId, entriesId)
}
