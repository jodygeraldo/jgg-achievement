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

NProgress.configure({ showSpinner: false })

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
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
