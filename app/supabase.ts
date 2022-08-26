import { createClient } from '@supabase/supabase-js'
import invariant from 'tiny-invariant'

declare global {
  interface Window {
    ENV?: {
      SUPABASE_ANON_KEY?: string
    }
  }
}

export function getClient(key?: string) {
  const isServer = typeof window === 'undefined'

  const supabaseKey = key ? key : window.ENV?.SUPABASE_ANON_KEY
  invariant(
    supabaseKey,
    `Supabase key is not defined on ${isServer ? 'server' : 'client'}`
  )

  return createClient('https://vtjftugyiqqowxmynddp.supabase.co', supabaseKey)
}
