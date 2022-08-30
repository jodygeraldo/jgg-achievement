import type { AppLoadContext } from '@remix-run/cloudflare'
import { createCookieSessionStorage, redirect } from '@remix-run/cloudflare'
import { getClient } from './supabase.server'
import { DEFAULT_REDIRECT } from './utils'

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

const USER_ID = 'userId'
const USER_ACCESS_TOKEN = 'accessToken'
const USER_REFRESH_TOKEN = 'refreshToken'
const USER_EXPIRES_AT = 'expiresAt'

export async function getSession(request: Request) {
  const cookie = request.headers.get('Cookie')
  return sessionStorage.getSession(cookie)
}

export async function getUserId(request: Request) {
  const session = await getSession(request)
  return session.has(USER_ID)
}

export async function hasSessionActive(request: Request) {
  const session = await getSession(request)
  return session.has(USER_ACCESS_TOKEN)
}

export async function checkSession(request: Request) {
  const session = await getSession(request)
  const expiresAt = session.get(USER_EXPIRES_AT)
  const now = new Date().getTime()

  if (expiresAt && parseInt(expiresAt) < now) {
    throw redirect(DEFAULT_REDIRECT, {
      headers: {
        'Set-Cookie': await sessionStorage.destroySession(session),
      },
    })
  }
}

export async function initSupabaseAuth(
  request: Request,
  context: AppLoadContext
) {
  const session = await getSession(request)
  const accessToken = session.get(USER_ACCESS_TOKEN)

  const supabase = getClient(context)

  supabase.auth.setAuth(accessToken)

  return supabase
}

export async function createUserSession({
  request,
  userId,
  userSession,
  remember,
  redirectTo,
}: {
  request: Request
  userId: string
  userSession: {
    accessToken: string
    refreshToken: string
    expiresIn: string
  }
  remember?: boolean
  redirectTo: string
}) {
  const expiresIn = parseInt(userSession.expiresIn)
  const session = await getSession(request)
  const expiresAt = new Date().getTime() + expiresIn * 1000

  session.set(USER_ID, userId)
  session.set(USER_ACCESS_TOKEN, userSession.accessToken)
  session.set(USER_REFRESH_TOKEN, userSession.refreshToken)
  session.set(USER_EXPIRES_AT, expiresAt)
  throw redirect(redirectTo, {
    headers: {
      'Set-Cookie': await sessionStorage.commitSession(session, {
        maxAge: remember ? expiresIn - 60 : undefined,
      }),
    },
  })
}

export async function logout(request: Request) {
  const session = await getSession(request)
  throw redirect(DEFAULT_REDIRECT, {
    headers: {
      'Set-Cookie': await sessionStorage.destroySession(session),
    },
  })
}
