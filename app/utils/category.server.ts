import { json } from '@remix-run/cloudflare'
import { categories, categoryEntries } from '~/data/achievement/en.server'

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

export function getCategoryEntries(id: string) {
  const entries = categoryEntries.find((entries) => entries.id === id)!
  const title = categories.find((category) => category.id === entries.id)?.title

  if (!entries || !title) throw json('Category not found', 404)

  return {
    title,
    ...entries,
  }
}
