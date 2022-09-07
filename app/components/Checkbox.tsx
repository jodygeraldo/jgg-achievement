import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import clsx from 'clsx'
import * as React from 'react'
import Icon from './Icon'

type BaseProps = {
  size?: 'sm' | 'md' | 'lg'
}

type Props = BaseProps &
  CheckboxPrimitive.CheckboxProps &
  Omit<React.ComponentPropsWithoutRef<'button'>, keyof BaseProps>

const SizeVariant: Record<NonNullable<Props['size']>, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
}

export default function Checkbox({ size = 'md', ...props }: Props) {
  return (
    <CheckboxPrimitive.Root
      className={clsx(
        SizeVariant[size],
        'flex shrink-0 items-center justify-center rounded-md bg-gray-6 transition-colors [box-shadow:0_2px_10px_var(--blackA7)] hover:bg-gray-7 focus:outline-none focus:ring-2 focus:ring-primary-8 disabled:bg-gray-5'
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="text-primary-11">
        <Icon iconId="check" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
