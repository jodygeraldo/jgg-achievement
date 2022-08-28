import { redirect } from '@remix-run/cloudflare'
import { DEFAULT_REDIRECT } from '~/utils'

export function loader() {
  return redirect(DEFAULT_REDIRECT)
}
