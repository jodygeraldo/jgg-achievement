import { useFieldset, useForm } from '@conform-to/react'
import { ifNonEmptyString, resolve } from '@conform-to/zod'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon, UpdateIcon } from '@radix-ui/react-icons'
import * as LabelPrimitive from '@radix-ui/react-label'
import type { ActionArgs, LoaderArgs } from '@remix-run/cloudflare'
import { json, redirect } from '@remix-run/cloudflare'
import {
  Form,
  Link,
  useActionData,
  useLocation,
  useSearchParams,
  useSubmit,
  useTransition,
} from '@remix-run/react'
import { useEffect, useRef, useState } from 'react'
import { z } from 'zod'
import { Button, ButtonLink } from '~/components/Button'
import { hasSessionActive } from '~/session.server'
import { getClient } from '~/supabase.server'
import { DEFAULT_REDIRECT } from '~/utils'

export function meta() {
  return { title: 'Passwordless Login - JGG Achievement' }
}

const Credential = resolve(
  z.object({
    email: z
      .string({ required_error: 'Email is required' })
      .email('Invalid email format'),
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
  const host =
    request.headers.get('X-Forwarded-Host') ?? request.headers.get('host')

  const submission = Credential.parse(await request.formData())

  if (submission.state !== 'accepted') {
    return submission.form
  }

  const { email, remember, redirectTo } = submission.data

  const supabase = getClient(context)

  const url = new URL('/category/passwordless', `http://${host}`)
  if (remember) url.searchParams.set('redirectTo', redirectTo)
  if (remember) url.searchParams.set('remember', 'true')

  const { error } = await supabase.auth.signIn(
    { email },
    { redirectTo: url.toString() }
  )

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

  return null
}

export async function loader({ request }: LoaderArgs) {
  const isSessionActive = await hasSessionActive(request)
  if (isSessionActive) return redirect(DEFAULT_REDIRECT)
  return json(null)
}

export default function PasswordlessAuthPage() {
  const [show, setShow] = useState(false)
  const [isValidHash, setIsValidHash] = useState(true)
  const submit = useSubmit()
  const { hash } = useLocation()

  const formState = useActionData<typeof action>()
  const formProps = useForm({
    initialReport: 'onBlur',
    validate: Credential.validate,
  })

  const { email, remember } = useFieldset<z.infer<typeof Credential.source>>(
    formProps.ref,
    {
      defaultValue: formState?.value,
      initialError: formState?.error.details,
    }
  )

  const [rememberState, setRememberState] = useState(
    !!remember.config.defaultValue
  )

  const [searchParams] = useSearchParams()
  const redirectTo = searchParams.get('redirectTo') ?? DEFAULT_REDIRECT

  const emailRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (formState?.error.details?.email) {
      emailRef.current?.focus()
    }
  }, [formState])

  useEffect(() => {
    if (hash.includes('#')) {
      setShow(true)
    } else {
      return
    }
    const session = hash.slice(1).split('&')
    const accessToken = session.find((s) => s.startsWith('access_token='))
    const refreshToken = session.find((s) => s.startsWith('refresh_token='))
    const expiresIn = session.find((s) => s.startsWith('expires_in='))
    if (!(accessToken && refreshToken && expiresIn)) {
      return setIsValidHash(false)
    }

    let actionPath = `/api/passwordless?redirectTo=${redirectTo}`
    if (rememberState) actionPath += '&remember=on'

    submit(
      {
        accessToken: accessToken.replace('access_token=', ''),
        refreshToken: refreshToken.replace('refresh_token=', ''),
        expiresIn: expiresIn.replace('expires_in=', ''),
      },
      {
        action: actionPath,
        method: 'post',
        replace: true,
      }
    )
  }, [hash, redirectTo, rememberState, submit])

  const busy = useTransition().state === 'submitting'

  return (
    <>
      <div className="flex min-h-full items-center justify-center lg:min-h-fit">
        <div className="w-full max-w-md space-y-8">
          <div>
            {/* <Logo className="mx-auto h-12 w-auto" /> */}
            <h1 className="text-center text-3xl font-extrabold text-gray-12">
              Sign in to your account
            </h1>
            <p className="mt-2 text-center text-sm text-gray-11">
              Or{' '}
              <Link
                to="/category/signup"
                className="font-medium text-primary-9 hover:text-primary-10"
              >
                create new account
              </Link>
            </p>
          </div>
          <Form method="post" replace className="mt-8 space-y-6" {...formProps}>
            <fieldset>
              <div className="rounded-md shadow-sm">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  id="email"
                  name={email.config.name}
                  defaultValue={email.config.defaultValue}
                  className="relative block w-full appearance-none rounded-md border border-gray-7 bg-gray-3 px-3 py-2 text-gray-12 placeholder-gray-8 focus:z-10 focus:border-primary-8 focus:outline-none focus:ring-primary-8 sm:text-sm"
                  placeholder="Email address"
                  autoComplete="email"
                  autoFocus={true}
                  aria-invalid={email.error ? true : undefined}
                  aria-describedby="email-error"
                />
              </div>

              <div className="mt-1 text-sm text-red-400">
                {formState?.error.message && (
                  <div id="email-error">{formState?.error.message}</div>
                )}
                {email.error && <div id="email-error">{email.error}</div>}
              </div>

              <input type="hidden" name="redirectTo" value={redirectTo} />

              <div className="mt-4 flex items-center">
                <CheckboxPrimitive.Root
                  id="remember"
                  name={remember.config.name}
                  checked={rememberState}
                  onCheckedChange={(state) => {
                    if (state !== 'indeterminate') setRememberState(state)
                  }}
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
                to="/category/login"
                prefetch="intent"
                parentBgColorStep={2}
                variant="secondary"
                className="w-full"
              >
                Password sign in
              </ButtonLink>

              <Button
                id="signup"
                type="submit"
                parentBgColorStep={2}
                className="mt-4 w-full sm:mt-0"
                disabled={busy}
              >
                {busy ? 'Sending email...' : 'Send email'}
              </Button>
            </div>
          </Form>
        </div>
      </div>

      <AuthProcess showProcess={show} isValidAuth={isValidHash} />
    </>
  )
}

function AuthProcess({
  showProcess,
  isValidAuth,
}: {
  showProcess: boolean
  isValidAuth: boolean
}) {
  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        {showProcess && (
          <div
            key={isValidAuth ? 'true' : 'false'}
            className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-gray-11 shadow-lg ring-1 ring-overlay-1"
          >
            <div className="p-4">
              <div className="flex items-center gap-4">
                <UpdateIcon className="h-5 w-5 animate-spin text-primary-3" />
                <p className="w-0 flex-1 text-sm font-medium text-primary-3">
                  {isValidAuth
                    ? 'Processing your authentication'
                    : 'Invalid authentication information'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
