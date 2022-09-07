import type { SerializeFrom } from '@remix-run/cloudflare'
import * as React from 'react'
import type { loader as categoriesLoader } from '~/routes/category'

type CategoriesData = SerializeFrom<typeof categoriesLoader>

export const CompleteContext = React.createContext<
  | [
      category: CategoriesData['data'],
      setCategory: React.Dispatch<React.SetStateAction<CategoriesData['data']>>
    ]
  | null
>(null)
