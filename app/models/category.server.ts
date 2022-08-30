import type { AppLoadContext } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import { z } from 'zod'
import { getUserId, initSupabaseAuth } from '~/session.server'
import type { definitions } from '~/supabase'
import { getCategoriesId, getCategoryEntriesId } from '~/utils/category.server'

export async function getCache<T extends z.ZodTypeAny>({
  key,
  schema,
  context,
}: {
  key: string
  schema: T
  context: AppLoadContext
}) {
  type SchemaType = z.infer<T>

  const cache = await context.KV_CACHE?.get(key)
  if (!cache) return
  const result = schema.safeParse(JSON.parse(cache))
  if (result.success) {
    return result.data as SchemaType
  }
}

export async function deleteCacheKeys({
  id,
  request,
  context,
}: {
  id: string
  request: Request
  context: AppLoadContext
}) {
  const userId = await getUserId(request)

  const keys = [
    `${userId}:getCompleteCount`,
    `${userId}:${id}:getUserCategoryEntriesById`,
  ]
  await Promise.all(keys.map((key) => context.KV_CACHE?.delete(key)))
}

export async function getCompleteCount({
  request,
  context,
}: {
  request: Request
  context: AppLoadContext
}) {
  const userId = await getUserId(request)
  const key = `${userId}:getCompleteCount`

  const cache = await getCache({
    key,
    schema: z.object({
      categoriesData: z
        .object({
          id: z.string(),
          count: z.number().nullable(),
        })
        .array(),
      totalCount: z.number(),
    }),
    context,
  })

  if (cache) return cache

  const supabase = await initSupabaseAuth(request, context)
  const categoriesId = getCategoriesId()

  const categories = categoriesId.map((id) => {
    return {
      id,
      supabaseQuery: supabase
        .from<Pick<definitions['wotw'], 'complete'>>(id)
        .select('complete', {
          count: 'exact',
        })
        .filter('complete', 'eq', true),
    }
  })

  const ids = categories.map((category) => category.id)
  const queries = categories.map((category) => category.supabaseQuery)

  const userData = await Promise.all(queries)

  const error = userData.map((d) => d.error).some(Boolean)

  if (error) {
    throw json({ message: 'Something went wrong' }, 500)
  }

  const data = {
    categoriesData: userData.map((c, i) => ({
      id: ids[i],
      count: c.count,
    })),
    totalCount: userData.reduce((prev, curr) => prev + (curr.count ?? 0), 0),
  }

  await context.KV_CACHE?.put(key, JSON.stringify(data))

  return data
}

export async function getUserCategoryEntriesById({
  id,
  request,
  context,
}: {
  id: string
  request: Request
  context: AppLoadContext
}) {
  const userId = await getUserId(request)
  const key = `${userId}:${id}:getUserCategoryEntriesById`

  const schema = z
    .object({
      id: z.string(),
      ach_id: z.string(),
      complete: z.boolean(),
    })
    .array()

  type ReturnType = z.infer<typeof schema>

  const cache = await getCache({
    key,
    schema,
    context,
  })

  if (cache) return cache

  const supabase = await initSupabaseAuth(request, context)
  const { data, error, status } = await supabase
    .from<definitions['wotw']>(id)
    .select('id,ach_id,complete')

  if (error) {
    throw json({ message: error.message }, status)
  }

  await context.KV_CACHE?.put(key, JSON.stringify(data))

  return data as ReturnType
}

export async function upsertCategoryEntry({
  id,
  data,
  request,
  context,
}: {
  id: string
  data: {
    id?: string
    ach_id: string
    complete: boolean
  }
  request: Request
  context: AppLoadContext
}) {
  const supabase = await initSupabaseAuth(request, context)
  const { status } = await supabase.from<definitions['wotw']>(id).upsert(data, {
    returning: 'minimal',
    onConflict: 'id',
  })

  if (status === 500) {
    throw new Error('Something went wrong')
  }

  await deleteCacheKeys({ id, request, context })
}

export async function upsertCategoryEntries({
  id,
  request,
  context,
}: {
  id: string
  request: Request
  context: AppLoadContext
}) {
  const supabase = await initSupabaseAuth(request, context)
  const entriesId = getCategoryEntriesId(id)
  await supabase
    .from<definitions['wotw']>(id)
    .delete({
      returning: 'minimal',
    })
    .neq('ach_id', '')

  const completeEntries = entriesId.map((id) => ({
    ach_id: id,
    complete: true,
  }))

  const { status } = await supabase
    .from<definitions['wotw']>(id)
    .upsert(completeEntries, { returning: 'minimal' })

  if (status === 500) {
    throw new Error('Something went wrong')
  }

  await deleteCacheKeys({ id, request, context })
}
