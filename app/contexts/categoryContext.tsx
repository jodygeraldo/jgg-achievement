import type { SerializeFrom } from '@remix-run/cloudflare'
import * as React from 'react'
import type { loader as categoryLoader } from '~/routes/category.$id'

type CategoryData = SerializeFrom<typeof categoryLoader>

export const CategoryContext = React.createContext<
  | [
      category: CategoryData['category'],
      setCategory: React.Dispatch<
        React.SetStateAction<CategoryData['category']>
      >
    ]
  | null
>(null)
