import { Link } from '@remix-run/react'
import type { RemixLinkProps } from '@remix-run/react/dist/components'
import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

type Variant = 'primary' | 'secondary'

type Props = {
  variant?: 'primary' | 'secondary'
  extendClass?: string
  parentBgColorStep: 1 | 2 | 3
}

const ButtonVariantStyles: Record<Variant, string> = {
  primary: 'bg-primary-9 text-white hover:enabled:bg-primary-10',
  secondary: 'bg-primary-3 text-primary-11 hover:enabled:bg-primary-4',
}

const ButtonLinkVariantStyles: Record<Variant, string> = {
  primary: 'bg-primary-9 text-white hover:bg-primary-10',
  secondary: 'bg-primary-3 text-primary-11 hover:bg-primary-4',
}

const ParentBgColorStep: Record<Props['parentBgColorStep'], string> = {
  1: 'focus:ring-offset-gray-1',
  2: 'focus:ring-offset-gray-2',
  3: 'focus:ring-offset-gray-3',
}

function Button({
  parentBgColorStep,
  variant = 'primary',
  extendClass,
  children,
  ...props
}: Props & ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-8 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-primary-6',
        ButtonVariantStyles[variant],
        ParentBgColorStep[parentBgColorStep],
        extendClass
      )}
      {...props}
    >
      {children}
    </button>
  )
}

function ButtonLink({
  parentBgColorStep,
  variant = 'primary',
  extendClass,
  children,
  ...props
}: Props & RemixLinkProps) {
  return (
    <Link
      className={clsx(
        'inline-flex items-center justify-center rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-8 focus:ring-offset-2',
        ButtonLinkVariantStyles[variant],
        ParentBgColorStep[parentBgColorStep],
        extendClass
      )}
      {...props}
    >
      {children}
    </Link>
  )
}

export { Button, ButtonLink }
