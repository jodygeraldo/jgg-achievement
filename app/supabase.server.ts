import type { AppLoadContext } from '@remix-run/cloudflare'
import { createClient } from '@supabase/supabase-js'
import invariant from 'tiny-invariant'

export function getClient(context: AppLoadContext) {
  const key = context.SUPABASE_ANON_KEY
  invariant(key, 'SUPABASE_ANON_KEY is not defined')

  return createClient('https://vtjftugyiqqowxmynddp.supabase.co', key)
}
