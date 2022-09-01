import { json } from '@remix-run/cloudflare'
import invariant from 'tiny-invariant'
import { categories, categoryEntries } from '~/data/achievement/en.server'
import type { definitions } from '~/supabase'

export function getCategoriesId() {
  return categories.map((category) => category.id)
}

export function getCategories({
  categoriesData,
  totalCount,
}: {
  categoriesData: {
    id: string
    count: number | null
  }[]
  totalCount: number
}) {
  const updatedCategories = categories.map((category) => {
    const entries = categoryEntries.find(
      (entries) => entries.id === category.id
    )
    if (!entries) throw new Error('Category id is not defined')
    const { count } = categoriesData.find((cd) => cd.id === entries.id)!

    const completion = {
      done: count ? count : 0,
      total: entries.entries.reduce(
        (prev, curr) => ('description' in curr ? prev + 1 : prev + 3),
        0
      ),
    }

    const completionPercentage = (completion.done / completion.total) * 100
    const formattedCompletionPercentage = `${
      completionPercentage.toString().includes('.')
        ? completionPercentage.toFixed(2)
        : completionPercentage
    }%`

    return {
      ...category,
      completion: {
        ...completion,
        percentage: formattedCompletionPercentage,
      },
    }
  })

  const completion = {
    done: totalCount,
    total: updatedCategories.reduce(
      (prev, curr) => prev + curr.completion.total,
      0
    ),
  }

  const completionPercentage = (completion.done / completion.total) * 100
  const formattedCompletionPercentage = `${
    completionPercentage.toString().includes('.')
      ? completionPercentage.toFixed(2)
      : completionPercentage
  }%`

  return {
    completion: {
      done: totalCount,
      total: updatedCategories.reduce(
        (prev, curr) => prev + curr.completion.total,
        0
      ),
      percentage: formattedCompletionPercentage,
    },
    categories: updatedCategories,
  }
}

function getCategoryDataById(id: string) {
  const category = categoryEntries.find((entries) => entries.id === id)
  invariant(category, 'entries not found')
  return category
}

export function getCategoryEntriesId(id: string) {
  const { entries } = getCategoryDataById(id)
  return entries
    .map((entry) => {
      if (typeof entry.steps === 'undefined') return entry.id
      return entry.steps.map((step) => step.id)
    })
    .flat()
}

export function getCategoryEntries({
  id,
  data,
  showAll,
}: {
  id: string
  data: Omit<definitions['wotw'], 'user_id'>[] | null
  showAll: boolean
}) {
  const { id: categoryId, entries } = getCategoryDataById(id)
  const title = categories.find((category) => category.id === categoryId)?.title

  if (!entries || !title) throw json('Category not found', 404)

  if (!data) {
    return {
      id,
      title,
      entries,
    }
  }

  const updatedEntries: typeof entries = entries.map((entry) => {
    if (entry.steps) {
      const steps: typeof entry.steps = []
      entry.steps.forEach((step, idx) => {
        const userEntry = data.find((ue) => ue.ach_id === step.id)
        if (!userEntry) {
          steps.push({
            ...step,
            disabled:
              idx === 0 ? false : steps[idx - 1].complete ? false : true,
          })
        } else {
          steps.push({
            ...step,
            dbId: userEntry.id,
            complete: userEntry.complete,
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

    const userEntry = data.find((ue) => ue.ach_id === entry.id)
    if (!userEntry) return entry
    return {
      ...entry,
      dbId: userEntry.id,
      complete: userEntry.complete,
    }
  })

  const filteredEntries = showAll
    ? updatedEntries
    : updatedEntries.filter((entry) => {
        if (entry.steps)
          return !entry.steps.every((step) => step.complete === true)
        return !entry.complete
      })

  return {
    id,
    title,
    entries: filteredEntries,
  }
}
