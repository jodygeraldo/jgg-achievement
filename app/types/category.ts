type BaseEntry = {
  id: string
  title: string
  version: string
  requirements?: string
  commission?: boolean
}

type Entry = {
  description: string
  steps?: undefined
  dbId?: string
  complete?: boolean
} & BaseEntry

type EntryWithStep = {
  description?: undefined
  steps: {
    id: string
    description: string
    disabled?: boolean
    dbId?: string
    complete?: boolean
  }[]
  dbId?: undefined
  complete?: undefined
} & BaseEntry

export type CategoryEntries = {
  id: string
  entries: (Entry | EntryWithStep)[]
}
