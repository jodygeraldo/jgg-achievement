import { redirect } from '@remix-run/cloudflare'

export function loader() {
  return redirect('/wonders-of-the-world-wotw')
}
