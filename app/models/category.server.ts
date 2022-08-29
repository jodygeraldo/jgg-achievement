import type { AppLoadContext } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import { initSupabaseAuth } from '~/session.server'
import type { definitions } from '~/supabase'
import { getCategoryEntriesId } from '~/utils/category.server'

export async function getUserCategoryEntriesById({
  id,
  request,
  context,
}: {
  id: string
  request: Request
  context: AppLoadContext
}) {
  const supabase = await initSupabaseAuth(request, context)
  const { data, error, status } = await supabase
    .from<Omit<definitions['wotw'], 'user_id'>>(id)
    .select('id,ach_id,complete')

  if (error) {
    throw json({ message: error.message }, status)
  }

  return data
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
  const { error, status } = await supabase
    .from<definitions['wotw']>(id)
    .upsert(data, {
      returning: 'minimal',
      onConflict: 'id',
    })

  console.log(error)

  if (status === 500) {
    throw new Error('Something went wrong')
  }
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
}
