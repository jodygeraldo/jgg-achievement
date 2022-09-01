import type { ActionArgs } from '@remix-run/cloudflare'
import invariant from 'tiny-invariant'
import { setShowAllCookie } from '~/cookies'

export async function action({ request }: ActionArgs) {
  const formData = await request.formData()
  const redirectTo = formData.get('redirectTo')
  invariant(typeof redirectTo === 'string')
  await setShowAllCookie({ request, redirectTo })
}
