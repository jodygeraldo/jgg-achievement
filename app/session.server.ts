import type { AppLoadContext, Session } from '@remix-run/cloudflare'
import { createCookieSessionStorage, redirect } from '@remix-run/cloudflare'
import invariant from 'tiny-invariant'
import { getClient } from './supabase'

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__session',
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secrets: ['actual_insane_secur3_s3cret'],
    secure: process.env.NODE_ENV === 'production',
  },
})

const USER_ACCESS_TOKEN = 'accessToken'
const USER_REFRESH_TOKEN = 'refreshToken'
const USER_EXPIRES_AT = 'expiresAt'

export async function getSession(request: Request) {
  const cookie = request.headers.get('Cookie')
  return sessionStorage.getSession(cookie)
}

export async function hasSessionActive(request: Request) {
  const session = await getSession(request)
  return session.has(USER_ACCESS_TOKEN)
}

export async function initSupabaseAuth(
  request: Request,
  context: AppLoadContext | undefined
) {
  const session = await getSession(request)
  const accessToken = session.get(USER_ACCESS_TOKEN)
  const refreshToken = session.get(USER_REFRESH_TOKEN)
  const expiresAt = session.get(USER_EXPIRES_AT)
  const supabaseKey = context?.SUPABASE_SERVICE_ROLE
  invariant(supabaseKey)
  const supabase = getClient(supabaseKey)
  supabase.auth.setAuth(accessToken)

  const now = new Date().getTime() / 1000

  if (parseInt(expiresAt) > now) {
    const { data: user, error } = await supabase.auth.api.refreshAccessToken(
      refreshToken
    )
    if (error) throw new Error(error.message)
    invariant(user, 'user data is not defined in initSupabaseAuth')
    throw await refreshUserSession({
      session,
      userSession: {
        accessToken: user.access_token,
        refreshToken: user.refresh_token ?? '',
        expiresIn: user.expires_in ?? 0,
      },
    })
  }

  return { supabase }
}

async function refreshUserSession({
  session,
  userSession,
}: {
  session: Session
  userSession: {
    accessToken: string
    refreshToken: string
    expiresIn: number
  }
}) {
  const expiresAt = new Date().getTime() + userSession.expiresIn
  session.set(USER_ACCESS_TOKEN, userSession.accessToken)
  session.set(USER_REFRESH_TOKEN, userSession.refreshToken)
  session.set(USER_EXPIRES_AT, expiresAt)
  return redirect('/', {
    headers: {
      'Set-Cookie': await sessionStorage.commitSession(session, {
        maxAge: userSession.expiresIn - 60,
      }),
    },
  })
}

export async function createUserSession({
  request,
  userSession,
  redirectTo,
}: {
  request: Request
  userSession: {
    accessToken: string
    refreshToken: string
    expiresIn: number
  }
  redirectTo: string
}) {
  const session = await getSession(request)
  const expiresAt = new Date().getTime() + userSession.expiresIn
  session.set(USER_ACCESS_TOKEN, userSession.accessToken)
  session.set(USER_REFRESH_TOKEN, userSession.refreshToken)
  session.set(USER_EXPIRES_AT, expiresAt)
  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await sessionStorage.commitSession(session, {
        maxAge: userSession.expiresIn - 60,
      }),
    },
  })
}

export async function logout(request: Request) {
  const session = await getSession(request)
  return redirect('/', {
    headers: {
      'Set-Cookie': await sessionStorage.destroySession(session),
    },
  })
}
