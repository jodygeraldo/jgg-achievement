import type { LoaderArgs } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetchers,
  useTransition,
} from '@remix-run/react'
import NProgress from 'nprogress'
import { useEffect, useMemo } from 'react'
import tailwindStylesUrl from '~/tailwind.css'
import { checkSession, hasSessionActive } from './session.server'

NProgress.configure({ showSpinner: false })

declare module '@remix-run/cloudflare' {
  export interface AppLoadContext {
    SUPABASE_URL?: string
    SUPABASE_ANON_KEY?: string
    SUPABASE_SERVICE_ROLE?: string
    KV_CACHE?: KVNamespace
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

export async function loader({ request }: LoaderArgs) {
  await checkSession(request)

  return json({
    isSessionActive: await hasSessionActive(request),
  })
}

export default function App() {
  const transition = useTransition()
  const fetchers = useFetchers()

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

  return (
    <html lang="en" className="h-full">
      <head>
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
