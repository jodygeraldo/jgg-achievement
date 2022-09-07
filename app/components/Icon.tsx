import * as React from 'react'
import iconsUrl from '~/assets/icons.svg'

type IconId = 'infoCircled' | 'check' | 'arrowLeft' | 'update'

export default function Icon({
  iconId,
  ...props
}: { iconId: IconId } & React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg width="15" height="15" fill="none" {...props}>
      <use href={`${iconsUrl}#${iconId}`} />
    </svg>
  )
}
