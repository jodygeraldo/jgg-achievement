import type { ActionArgs } from '@remix-run/cloudflare'
import { logout } from '~/session.server'

export async function action({ request }: ActionArgs) {
  return await logout(request)
}
