import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { ArrowLeftIcon, CheckIcon } from '@radix-ui/react-icons'
import * as LabelPrimitive from '@radix-ui/react-label'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import type { LoaderArgs } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import {
  Form,
  NavLink,
  Outlet,
  useLoaderData,
  useLocation,
} from '@remix-run/react'
import clsx from 'clsx'
import * as React from 'react'
import { useHydrated } from 'remix-utils'
import { Button, ButtonLink } from '~/components/Button'
import Completion from '~/components/Completion'
import Image from '~/components/Image'
import { getShowAll } from '~/cookies'
import { getCompleteCount } from '~/models/category.server'
import { useRootData } from '~/utils'
import { getCategories } from '~/utils/category.server'

export async function loader({ request, context }: LoaderArgs) {
  return json({
    showAll: await getShowAll(request),
    data: getCategories(await getCompleteCount({ request, context })),
  })
}

export default function CategoryPage() {
  const { data, showAll } = useLoaderData<typeof loader>()
  const { isSessionActive } = useRootData()

  const { pathname } = useLocation()
  const hideAuthButton =
    pathname === '/category/login' ||
    pathname === '/category/passwordless' ||
    pathname === '/category/signup'

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold leading-7 text-primary-12 sm:truncate sm:text-3xl sm:tracking-tight">
            JGG Achievement
          </h1>
          <div className="mt-2">
            <Completion {...data.completion} />
          </div>

          <div className="mt-2">
            <Form
              action="/api/showall"
              method="post"
              replace
              className="flex items-center gap-4"
            >
              <input type="hidden" name="redirectTo" value={pathname} />

              <LabelPrimitive.Root
                htmlFor="showAll"
                className="mt-1 text-sm text-gray-11"
              >
                Show completed achievement
              </LabelPrimitive.Root>
              <CheckboxPrimitive.Root
                type="submit"
                id="showAll"
                defaultChecked={showAll}
                name="showAll"
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gray-6 transition-colors [box-shadow:0_2px_10px_var(--blackA7)] hover:bg-gray-7 focus:outline-none focus:ring-2 focus:ring-primary-8"
              >
                <CheckboxPrimitive.Indicator className="text-primary-11">
                  <CheckIcon />
                </CheckboxPrimitive.Indicator>
              </CheckboxPrimitive.Root>
            </Form>
          </div>
        </div>

        {hideAuthButton ? null : (
          <div className="mt-4 flex items-center gap-4 md:mt-0">
            {pathname !== '/category' && (
              <ButtonLink
                className="inline-flex items-center justify-center gap-2 lg:hidden"
                to="/category"
                prefetch="intent"
                parentBgColorStep={2}
              >
                <ArrowLeftIcon />
                Back
              </ButtonLink>
            )}
            {isSessionActive ? (
              <Form method="post" action="/logout">
                <Button type="submit" variant="secondary" parentBgColorStep={2}>
                  Sign out
                </Button>
              </Form>
            ) : (
              <ButtonLink
                to="/category/login"
                prefetch="intent"
                parentBgColorStep={2}
                className="relative"
              >
                Sign in
                <span className="absolute -top-2 -left-2 flex h-4 w-4">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-8 opacity-75" />
                  <span className="relative inline-flex h-4 w-4 rounded-full bg-primary-7" />
                </span>
              </ButtonLink>
            )}
          </div>
        )}
      </div>
      <div className="mt-6 lg:flex lg:gap-4">
        {/* Mobile */}
        <div
          className={clsx(pathname === '/category' ? 'lg:hidden' : 'hidden')}
        >
          <Navigation />
        </div>

        <main
          className={clsx(
            pathname === '/category' ? 'hidden' : 'lg:hidden',
            'flex-1'
          )}
        >
          <Outlet />
        </main>

        {/* Desktop */}
        <div className="hidden lg:block">
          <Navigation />
        </div>

        <main className="hidden flex-1 lg:block">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

function Navigation() {
  const { data } = useLoaderData<typeof loader>()
  const { categories } = data

  return (
    <nav aria-label="Sidebar">
      <ScrollArea>
        {categories.map(({ id, src, title, completion }) => (
          <NavLink
            key={title}
            to={
              id === title.toLowerCase()
                ? `/category/${id}`
                : `/category/${title.replace(/\s/g, '-').toLowerCase()}-${id}`
            }
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
            <Image
              src={src}
              alt=""
              width={48}
              height={48}
              className="h-12 w-12"
            />
            <div>
              <h2 className="text-sm font-medium text-primary-11">{title}</h2>

              <Completion {...completion} />
            </div>
          </NavLink>
        ))}
      </ScrollArea>
    </nav>
  )
}

function ScrollAreaCustom({ children }: { children: React.ReactNode }) {
  return (
    <ScrollAreaPrimitive.Root className="h-[calc(100vh-14rem)] overflow-hidden rounded-md [box-shadow:0_2px_10px_var(--blackA7)] md:h-[calc(100vh-11rem)] lg:max-w-sm">
      <ScrollAreaPrimitive.Viewport className="h-full w-full [border-radius:inherit]">
        <div className="space-y-1">{children}</div>
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

function ScrollAreaNative({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[calc(100vh-14rem)] space-y-1 overflow-y-auto rounded-md [box-shadow:0_2px_10px_var(--blackA7)] md:h-[calc(100vh-11rem)] lg:max-w-sm">
      {children}
    </div>
  )
}

function ScrollArea({ children }: { children: React.ReactNode }) {
  const hydrated = useHydrated()

  if (hydrated) {
    return <ScrollAreaCustom>{children}</ScrollAreaCustom>
  }

  return <ScrollAreaNative>{children}</ScrollAreaNative>
}
