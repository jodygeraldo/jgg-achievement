import type { ActionArgs } from '@remix-run/cloudflare'
import { getFormDataOrFail } from 'remix-params-helper'
import invariant from 'tiny-invariant'
import { z } from 'zod'
import { createUserSession, logout } from '~/session.server'
import { getClient } from '~/supabase'

const FormDataSchema = z.object({
  intent: z.enum(['login', 'logout']),
  accessToken: z.string().optional(),
  refreshToken: z.string().optional(),
  expiresIn: z.number().optional(),
  redirectTo: z.string(),
})

export async function action({ request, context }: ActionArgs) {
  const { intent, accessToken, refreshToken, expiresIn, redirectTo } =
    await getFormDataOrFail(request, FormDataSchema)

  if (intent === 'login') {
    const userSession = z
      .object({
        accessToken: z.string(),
        refreshToken: z.string(),
        expiresIn: z.number(),
      })
      .parse({ accessToken, refreshToken, expiresIn })

    invariant(
      accessToken,
      'AccessToken is not defined on api/auth login intent'
    )

    const supabaseKey = context?.SUPABASE_SERVICE_ROLE
    invariant(supabaseKey)
    const supabase = getClient(supabaseKey)
    const { data: user, error } = await supabase.auth.api.getUser(
      userSession.accessToken
    )
    if (error) return await logout(request)
    invariant(user, 'user is not defined')

    return await createUserSession({
      request,
      userSession,
      redirectTo,
    })
  }

  if (intent === 'logout') {
    return await logout(request)
  }

  throw new Error('Unhandled intent on api/auth')
}
