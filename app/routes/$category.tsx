import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { json } from '@remix-run/cloudflare'
import { NavLink, Outlet, useLoaderData } from '@remix-run/react'
import clsx from 'clsx'
import * as React from 'react'
import Image from '~/components/Image'
import { getCategories } from '~/utils/category.server'

export function loader() {
  return json({ data: getCategories() })
}

export default function CategoryLayout() {
  const { data } = useLoaderData<typeof loader>()

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold leading-8 tracking-tight text-primary-12 sm:text-4xl sm:tracking-tight">
          Genshin Impact Achievement
        </h1>
        <p
          className={clsx(
            data.entries.done === data.entries.total
              ? 'font-medium text-primary-12'
              : 'text-gray-11',
            'flex items-center gap-0.5 tabular-nums'
          )}
        >
          <span>{data.entries.done}</span>/<span>{data.entries.total}</span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
              fill="currentColor"
            />
          </svg>
          <span>
            {((data.entries.done / data.entries.total) * 100).toFixed(2)}%
          </span>
        </p>
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

  return (
    <nav aria-label="Sidebar">
      <ScrollArea>
        <div className="space-y-1">
          {data.categories.map((category) => (
            <NavigationItem key={category.title} {...category} />
          ))}
        </div>
      </ScrollArea>
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
  return (
    <div>
      <NavLink
        to={id === title.toLowerCase() ? `/${id}` : link}
        prefetch="intent"
        className={({ isActive }) =>
          clsx(
            isActive ? 'bg-primary-5' : 'transition-colors hover:bg-primary-4',
            'flex items-center gap-2 rounded-md bg-primary-3 p-2 focus:z-10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-8'
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
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
                fill="currentColor"
              />
            </svg>
            <span>{(entries.done / entries.total) * 100}%</span>
          </p>
        </div>
      </NavLink>
    </div>
  )
}

function ScrollArea({ children }: { children: React.ReactNode }) {
  return (
    <ScrollAreaPrimitive.Root className="h-[calc(100vh-8rem)] max-w-xs overflow-hidden rounded-md [box-shadow:0_2px_10px_var(--blackA7)]">
      <ScrollAreaPrimitive.Viewport className="h-full w-full [border-radius:inherit]">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar
        orientation="vertical"
        className="flex touch-none select-none bg-overlay-6 p-0.5 transition-colors ease-out hover:bg-overlay-8 radix-orientation-vertical:w-2"
      >
        <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-lg bg-gray-10 before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2" />
      </ScrollAreaPrimitive.Scrollbar>
    </ScrollAreaPrimitive.Root>
  )
}
