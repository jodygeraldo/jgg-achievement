import { json } from '@remix-run/cloudflare'
import invariant from 'tiny-invariant'
import { categories, categoryEntries } from '~/data/achievement/en.server'
import type { definitions } from '~/supabase'

export function getCategories() {
  const updatedCategories = categories.map((category) => {
    const entries = categoryEntries.find(
      (entries) => entries.id === category.id
    )
    if (!entries) throw new Error('Category id is not defined')
    return {
      ...category,
      entries: {
        done: 15,
        total: entries.entries.reduce(
          (prev, curr) => ('description' in curr ? prev + 1 : prev + 3),
          0
        ),
      },
    }
  })
  return {
    entries: {
      done: updatedCategories.reduce(
        (prev, curr) => prev + curr.entries.done,
        0
      ),
      total: updatedCategories.reduce(
        (prev, curr) => prev + curr.entries.total,
        0
      ),
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
}: {
  id: string
  data: Omit<definitions['wotw'], 'user_id'>[] | null
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
      const steps = entry.steps.map((step) => {
        const userEntry = data.find((ue) => ue.ach_id === step.id)
        if (!userEntry) return step
        return {
          ...step,
          dbId: userEntry.id,
          complete: userEntry.complete,
        }
      })

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

  return {
    id,
    title,
    entries: updatedEntries,
  }
}
