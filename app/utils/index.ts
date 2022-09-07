import type { SerializeFrom } from '@remix-run/cloudflare'
import { useMatches } from '@remix-run/react'
import { useMemo } from 'react'
import type { z } from 'zod'
import type { loader as rootLoader } from '~/root'

/**
 * This base hook is used in other hooks to quickly search for specific data
 * across all loader data using useMatches.
 * @param {string} id The route id
 * @returns {JSON} The router data or undefined if not found
 */
export function useMatchesData<T>(id: string): SerializeFrom<T> {
  type DataType = SerializeFrom<T>
  const matchingRoutes = useMatches()
  const route = useMemo(
    () => matchingRoutes.find((route) => route.id === id),
    [matchingRoutes, id]
  )
  return route?.data as DataType
}

export function useMatchesDataForceSchema<T extends z.ZodTypeAny>({
  id,
  schema,
}: {
  id: string
  schema: T
}) {
  type SchemaType = z.infer<T>
  const data = useMatchesData(id)

  const result = schema.parse(data)

  return result as SchemaType
}

export const DEFAULT_REDIRECT = '/category/wonders-of-the-world-wotw'

export function useRootData() {
  return useMatchesData<typeof rootLoader>('root')
}

export function getFormattedCompletionPercentage({
  complete,
  total,
}: {
  complete: number
  total: number
}) {
  const completionPercentage = (complete / total) * 100
  return `${
    completionPercentage.toString().includes('.')
      ? completionPercentage.toFixed(2)
      : completionPercentage
  }%`
}
