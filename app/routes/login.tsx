import { useFieldset, useForm } from '@conform-to/react'
import { ifNonEmptyString, resolve } from '@conform-to/zod'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import * as LabelPrimitive from '@radix-ui/react-label'
import type { ActionArgs, LoaderArgs } from '@remix-run/cloudflare'
import { json, redirect } from '@remix-run/cloudflare'
import {
  Form,
  Link,
  useActionData,
  useSearchParams,
  useTransition,
} from '@remix-run/react'
import { useEffect, useRef } from 'react'
import { z } from 'zod'
import { Button, ButtonLink } from '~/components/Button'
import { createUserSession, hasSessionActive } from '~/session.server'
import { getClient } from '~/supabase.server'
import { DEFAULT_REDIRECT } from '~/utils'

export function meta() {
  return { title: 'Login - JGG Achievement' }
}

const Credential = resolve(
  z.object({
    email: z
      .string({ required_error: 'Email is required' })
      .email('Invalid email format'),
    password: z
      .string({ required_error: 'Password is required' })
      .min(8, 'Password should have at least 8 characters')
      .max(16, 'Password can be at most 16 characters'),
    remember: z
      .preprocess(
        ifNonEmptyString((value) => value === 'on'),
        z.boolean()
      )
      .optional(),
    redirectTo: z.string(),
  })
)

export async function action({ request, context }: ActionArgs) {
  const submission = Credential.parse(await request.formData())

  if (submission.state !== 'accepted') {
    return submission.form
  }

  const { email, password, remember, redirectTo } = submission.data

  const supabase = getClient(context)

  const { error, session } = await supabase.auth.signIn({
    email,
    password,
  })

  if (error) {
    const supabaseError = {
      message:
        error.message !== 'User already registered'
          ? error.message
          : 'A user already exists with this email',
      ...submission.form.error,
    }

    const modifiedSubmissionForm = {
      ...submission.form,
      error: supabaseError,
    }

    return modifiedSubmissionForm
  }

  return createUserSession({
    request,
    email,
    userSession: {
      accessToken: session?.access_token ?? '',
      refreshToken: session?.refresh_token ?? '',
      expiresIn: session?.expires_in ? session.expires_in.toString() : '0',
    },
    remember,
    redirectTo,
  })
}

export async function loader({ request }: LoaderArgs) {
  const isSessionActive = await hasSessionActive(request)
  if (isSessionActive) return redirect(DEFAULT_REDIRECT)
  return json(null)
}

export default function LoginPage() {
  const formState = useActionData<typeof action>()
  const formProps = useForm({
    initialReport: 'onBlur',
    validate: Credential.validate,
  })

  const { email, password, remember } = useFieldset<
    z.infer<typeof Credential.source>
  >(formProps.ref, {
    defaultValue: formState?.value,
    initialError: formState?.error.details,
  })

  const [searchParams] = useSearchParams()
  const redirectTo = searchParams.get('redirectTo') ?? DEFAULT_REDIRECT

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (formState?.error.details?.email) {
      emailRef.current?.focus()
    } else if (formState?.error.details?.password) {
      passwordRef.current?.focus()
    }
  }, [formState])

  const busy = useTransition().state === 'submitting'

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          {/* <Logo className="mx-auto h-12 w-auto" /> */}
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-12">
            Sign in to your account
          </h1>
          <p className="mt-2 text-center text-sm text-gray-11">
            Or{' '}
            <Link
              to="/signup"
              className="font-medium text-primary-9 hover:text-primary-10"
            >
              create new account
            </Link>
          </p>
        </div>
        <Form method="post" className="mt-8 space-y-6" {...formProps}>
          <fieldset>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  id="email"
                  name={email.config.name}
                  defaultValue={email.config.defaultValue}
                  className="relative block w-full appearance-none rounded-t-md border border-gray-7 bg-gray-3 px-3 py-2 text-gray-12 placeholder-gray-8 focus:z-10 focus:border-primary-8 focus:outline-none focus:ring-primary-8 sm:text-sm"
                  placeholder="Email address"
                  autoComplete="email"
                  autoFocus={true}
                  aria-invalid={email.error ? true : undefined}
                  aria-describedby="email-error"
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  ref={passwordRef}
                  type="password"
                  id="password"
                  name={password.config.name}
                  defaultValue={password.config.defaultValue}
                  className="relative block w-full appearance-none rounded-b-md border border-gray-7 bg-gray-3 px-3 py-2 text-gray-12 placeholder-gray-8 focus:z-10 focus:border-primary-8 focus:outline-none focus:ring-primary-8 sm:text-sm"
                  placeholder="Password"
                  autoComplete="current-password"
                  aria-invalid={password.error ? true : undefined}
                  aria-describedby="password-error"
                />
              </div>
            </div>

            <div className="mt-1 text-sm text-red-400">
              {formState?.error.message && (
                <div id="email-error">{formState?.error.message}</div>
              )}
              {email.error && <div id="email-error">{email.error}</div>}
              {password.error && (
                <div id="password-error">{password.error}</div>
              )}
            </div>

            <input type="hidden" name="redirectTo" value={redirectTo} />

            <div className="mt-4 flex items-center">
              <CheckboxPrimitive.Root
                id="remember"
                name={remember.config.name}
                defaultChecked={!!remember.config.defaultValue}
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gray-6 transition-colors [box-shadow:0_2px_10px_var(--blackA7)] hover:bg-gray-7 focus:outline-none focus:ring-2 focus:ring-primary-8 disabled:bg-gray-5"
              >
                <CheckboxPrimitive.Indicator className="text-primary-11">
                  <CheckIcon />
                </CheckboxPrimitive.Indicator>
              </CheckboxPrimitive.Root>
              <LabelPrimitive.Root
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-12"
              >
                Remember me
              </LabelPrimitive.Root>
            </div>
          </fieldset>

          <div className="sm:flex sm:items-center sm:gap-4">
            <ButtonLink
              to="/passwordless"
              prefetch="intent"
              parentBgColorStep={2}
              variant="secondary"
              extendClass="w-full"
            >
              Passwordless sign in
            </ButtonLink>

            <Button
              type="submit"
              parentBgColorStep={2}
              extendClass="w-full mt-4 sm:mt-0"
              disabled={busy}
            >
              {busy ? 'Processing...' : 'Sign in'}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
