import { createCookie, redirect } from '@remix-run/cloudflare' // or cloudflare/deno

export const userPrefs = createCookie('user-prefs', {
  httpOnly: true,
  path: '/',
  sameSite: 'lax',
  secrets: ['actual_insane_secur3_s3cret_2'],
  secure: process.env.NODE_ENV === 'production',
})

export async function getShowAll(request: Request): Promise<boolean> {
  const cookie = (await userPrefs.parse(request.headers.get('Cookie'))) || {}
  return cookie.showAll ?? true
}

export async function setShowAllCookie({
  request,
  redirectTo,
}: {
  request: Request
  redirectTo?: string
}) {
  const cookie = (await userPrefs.parse(request.headers.get('Cookie'))) || {}
  cookie.showAll = cookie.showAll !== true

  const pathname = new URL(request.url).pathname
  throw redirect(redirectTo ?? pathname, {
    headers: {
      'Set-Cookie': await userPrefs.serialize(cookie),
    },
  })
}
