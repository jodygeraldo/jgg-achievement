import type { LoaderArgs } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
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
  useTransition
} from '@remix-run/react'
import NProgress from 'nprogress'
import { useEffect, useMemo } from 'react'
import invariant from 'tiny-invariant'
import tailwindStylesUrl from '~/tailwind.css'
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

export function loader({ context }: LoaderArgs) {
  const supabaseAnonKey = context?.SUPABASE_ANON_KEY
  invariant(supabaseAnonKey, 'Supabase Anon Key is not defined')

  return json({
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
    const supabase = getClient()

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN' && session?.access_token) {
          authFetcher.submit(
            {
              accessToken: session.access_token,
            },
            {
              method: 'post',
              action: '/api/auth/login',
            }
          )
        }
        if (event === 'SIGNED_OUT') {
          authFetcher.submit(null, {
            method: 'post',
            action: '/api/auth/logout',
          })
        }
      }
    )

    return () => {
      listener?.unsubscribe()
    }
  }, [authFetcher])

  return (
    <html lang="en">
      <head className="h-full">
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-gray-2">
        <Outlet />
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
