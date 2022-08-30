import { ifNonEmptyString } from '@conform-to/zod'
import type { ActionArgs } from '@remix-run/cloudflare'
import { getFormDataOrFail, getSearchParamsOrFail } from 'remix-params-helper'
import invariant from 'tiny-invariant'
import { z } from 'zod'
import { createUserSession, logout } from '~/session.server'
import { getClient } from '~/supabase.server'

const FormDataSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
  expiresIn: z.string(),
})

const SearchParamsSchema = z.object({
  remember: z
    .preprocess(
      ifNonEmptyString((value) => value === 'on'),
      z.boolean()
    )
    .optional(),
  redirectTo: z.string(),
})

export async function action({ request, context }: ActionArgs) {
  const { accessToken, refreshToken, expiresIn } = await getFormDataOrFail(
    request,
    FormDataSchema
  )

  const { remember, redirectTo } = getSearchParamsOrFail(
    request,
    SearchParamsSchema
  )

  const supabase = getClient(context)

  const userSession = z
    .object({
      accessToken: z.string(),
      refreshToken: z.string(),
      expiresIn: z.string(),
    })
    .parse({ accessToken, refreshToken, expiresIn })

  invariant(accessToken, 'AccessToken is not defined on api/auth login intent')

  const { data: user, error } = await supabase.auth.api.getUser(
    userSession.accessToken
  )
  if (error) return await logout(request)
  invariant(user?.email, 'user email is not defined')

  return createUserSession({
    request,
    userId: user.id,
    userSession,
    remember,
    redirectTo,
  })
}
