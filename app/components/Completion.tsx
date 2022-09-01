import clsx from 'clsx'

export default function Completion({
  done,
  total,
  percentage,
}: {
  done: number
  total: number
  percentage: string
}) {
  return (
    <p
      className={clsx(
        done === total ? 'font-medium text-primary-12' : 'text-gray-11',
        'flex items-center gap-0.5 text-sm tabular-nums'
      )}
    >
      <span>{done}</span>/<span>{total}</span>
      &nbsp;&bull;&nbsp;
      <span>{percentage}</span>
    </p>
  )
}
