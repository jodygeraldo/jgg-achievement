import { useMatches } from '@remix-run/react'
import { useMemo } from 'react'
import type { z } from 'zod'

/**
 * This base hook is used in other hooks to quickly search for specific data
 * across all loader data using useMatches.
 * @param {string} id The route id
 * @returns {JSON|undefined} The router data or undefined if not found
 */
export function useMatchesData(
  id: string
): Record<string, unknown> | undefined {
  const matchingRoutes = useMatches()
  const route = useMemo(
    () => matchingRoutes.find((route) => route.id === id),
    [matchingRoutes, id]
  )
  return route?.data
}

export default function useMatchesDataForceSchema<T extends z.ZodTypeAny>({
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