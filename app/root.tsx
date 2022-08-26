import type { LoaderArgs } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import type { SubmitOptions } from '@remix-run/react'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
  useFetchers,
  useLoaderData,
  useLocation,
  useTransition
} from '@remix-run/react'
import NProgress from 'nprogress'
import { useEffect, useMemo } from 'react'
import invariant from 'tiny-invariant'
import tailwindStylesUrl from '~/tailwind.css'
import { hasSessionActive } from './session.server'
import { getClient } from './supabase'

NProgress.configure({ showSpinner: false })

declare module '@remix-run/cloudflare' {
  export interface AppLoadContext {
    SUPABASE_URL?: string
    SUPABASE_ANON_KEY?: string
    SUPABASE_SERVICE_ROLE?: string
  }
}

export function links() {
  return [{ rel: 'stylesheet', href: tailwindStylesUrl }]
}

export function meta() {
  return {
    charset: 'utf-8',
    viewport: 'width=device-width,initial-scale=1',
    title: 'JGG Achievement',
    description: 'JGG Achievement is Genshin Impact achievement tracker.',
    keywords: 'Genshin Impact,achievement,tracker',
  }
}

export async function loader({ request, context }: LoaderArgs) {
  const supabaseAnonKey = context?.SUPABASE_ANON_KEY
  invariant(supabaseAnonKey, 'Supabase Anon Key is not defined')

  const isSessionActive = await hasSessionActive(request)

  return json({
    isSessionActive,
    ENV: {
      SUPABASE_ANON_KEY: supabaseAnonKey,
    },
  })
}

export default function App() {
  const { ENV } = useLoaderData<typeof loader>()
  const transition = useTransition()
  const fetchers = useFetchers()
  const authFetcher = useFetcher()
  const { pathname } = useLocation()

  const state = useMemo<'idle' | 'loading'>(
    function getGlobalState() {
      let states = [
        transition.state,
        ...fetchers.map((fetcher) => fetcher.state),
      ]
      if (states.every((state) => state === 'idle')) return 'idle'
      return 'loading'
    },
    [transition.state, fetchers]
  )

  useEffect(() => {
    if (state === 'loading') NProgress.start()
    if (state === 'idle') NProgress.done()
  }, [state])

  useEffect(() => {
    const supabase = getClient(ENV.SUPABASE_ANON_KEY)

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        const authFetcherOptions: SubmitOptions = {
          method: 'post',
          action: '/api/auth',
        }

        if (event === 'SIGNED_IN' && session?.access_token) {
          authFetcher.submit(
            {
              intent: 'login',
              accessToken: session.access_token,
              refreshToken: session.refresh_token ?? '',
              expiresIn: session.expires_in?.toString() ?? '0',
              redirectTo: pathname,
            },
            authFetcherOptions
          )
        }
        if (event === 'SIGNED_OUT') {
          authFetcher.submit(
            { intent: 'logout', redirectTo: '/' },
            authFetcherOptions
          )
        }
      }
    )

    return () => {
      listener?.unsubscribe()
    }
  }, [ENV.SUPABASE_ANON_KEY, authFetcher, pathname])

  return (
    <html lang="en">
      <head className="h-full">
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-gray-2">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
