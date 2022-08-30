import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import type { LoaderArgs } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import { Form, NavLink, Outlet, useLoaderData } from '@remix-run/react'
import clsx from 'clsx'
import * as React from 'react'
import { useHydrated } from 'remix-utils'
import { Button, ButtonLink } from '~/components/Button'
import Image from '~/components/Image'
import { getCompleteCount } from '~/models/category.server'
import { checkSession } from '~/session.server'
import { useRootData } from '~/utils'
import { getCategories } from '~/utils/category.server'

export async function loader({ request, context }: LoaderArgs) {
  await checkSession(request)

  return json({
    data: getCategories(await getCompleteCount({ request, context })),
  })
}

export default function CategoryLayout() {
  const { data } = useLoaderData<typeof loader>()
  const { isSessionActive } = useRootData()

  const percentage = (data.entries.done / data.entries.total) * 100

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold leading-8 tracking-tight text-primary-12 sm:text-4xl sm:tracking-tight">
            Genshin Impact Achievement
          </h1>
          <p
            className={clsx(
              data.entries.done === data.entries.total
                ? 'font-medium text-primary-12'
                : 'text-gray-11',
              'mt-2 flex items-center gap-0.5 tabular-nums'
            )}
          >
            {isSessionActive ? (
              <>
                <span>{data.entries.done}</span>/
                <span>{data.entries.total}</span>
                &nbsp;&bull;&nbsp;
                <span>
                  {percentage.toString().includes('.')
                    ? percentage.toFixed(2)
                    : percentage}
                  %
                </span>
              </>
            ) : (
              <span>Sign in to save your data</span>
            )}
          </p>
        </div>

        {isSessionActive ? (
          <Form method="post" action="/logout">
            <Button type="submit" variant="secondary" parentBgColorStep={2}>
              Sign out
            </Button>
          </Form>
        ) : (
          <ButtonLink
            to="/login"
            prefetch="intent"
            parentBgColorStep={2}
            extendClass="relative"
          >
            Sign in
            <span className="absolute -top-2 -left-2 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-8 opacity-75" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-primary-7" />
            </span>
          </ButtonLink>
        )}
      </div>
      <div className="mt-6 flex gap-4">
        <NavigationList />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

function NavigationList() {
  const { data } = useLoaderData<typeof loader>()
  const hydrated = useHydrated()

  return (
    <nav aria-label="Sidebar">
      {hydrated ? (
        <ScrollArea>
          <div className="space-y-1">
            {data.categories.map((category) => (
              <NavigationItem key={category.title} {...category} />
            ))}
          </div>
        </ScrollArea>
      ) : (
        <div className="h-[calc(100vh-10rem)] max-w-xs space-y-1 overflow-y-auto rounded-md [box-shadow:0_2px_10px_var(--blackA7)]">
          {data.categories.map((category) => (
            <NavigationItem key={category.title} {...category} />
          ))}
        </div>
      )}
    </nav>
  )
}

function NavigationItem({
  id,
  title,
  src,
  entries,
}: {
  id: string
  title: string
  src: string
  entries: { done: number; total: number }
}) {
  const link = `/${title.replace(/\s/g, '-').toLowerCase()}-${id}`

  const percentage = (entries.done / entries.total) * 100

  return (
    <div>
      <NavLink
        to={id === title.toLowerCase() ? `/${id}` : link}
        prefetch="intent"
        className={({ isActive }) =>
          clsx(
            isActive
              ? 'bg-primary-5'
              : 'bg-primary-3 transition-colors hover:bg-primary-4',
            'flex items-center gap-2 rounded-md p-2 focus:z-10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-8'
          )
        }
      >
        <Image src={src} alt="" width={48} height={48} className="h-12 w-12" />
        <div>
          <h2 className="text-sm font-medium text-primary-11">{title}</h2>
          <p
            className={clsx(
              entries.done === entries.total
                ? 'font-medium text-primary-12'
                : 'text-gray-11',
              'flex items-center gap-0.5 text-sm tabular-nums'
            )}
          >
            <span>{entries.done}</span>/<span>{entries.total}</span>
            &nbsp;&bull;&nbsp;
            <span>
              {percentage.toString().includes('.')
                ? percentage.toFixed(2)
                : percentage}
              %
            </span>
          </p>
        </div>
      </NavLink>
    </div>
  )
}

function ScrollArea({ children }: { children: React.ReactNode }) {
  return (
    <ScrollAreaPrimitive.Root className="h-[calc(100vh-10rem)] max-w-xs overflow-hidden rounded-md [box-shadow:0_2px_10px_var(--blackA7)]">
      <ScrollAreaPrimitive.Viewport className="h-full w-full [border-radius:inherit]">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar
        orientation="vertical"
        className="flex touch-none select-none bg-overlay-6 p-0.5 transition-colors ease-out hover:bg-overlay-7 radix-orientation-vertical:w-2"
      >
        <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-lg bg-gray-10 before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2" />
      </ScrollAreaPrimitive.Scrollbar>
    </ScrollAreaPrimitive.Root>
  )
}
