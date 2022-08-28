import { createClient } from '@supabase/supabase-js'

export function getClient(key: string) {
  return createClient('https://vtjftugyiqqowxmynddp.supabase.co', key)
}
