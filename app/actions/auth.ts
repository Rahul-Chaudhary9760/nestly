'use server'

import { redirect } from 'next/navigation'
import { DEMO_ACCOUNTS } from '@/lib/auth-shared'
import { clearSession, setSession } from '@/lib/auth'

export type SignInState = { error?: string }

export async function signIn(
  _prev: SignInState,
  formData: FormData,
): Promise<SignInState> {
  const email = String(formData.get('email') ?? '')
    .trim()
    .toLowerCase()
  const password = String(formData.get('password') ?? '')

  const account = DEMO_ACCOUNTS.find(
    (a) => a.email === email && a.password === password,
  )

  if (!account) {
    return { error: 'Invalid email or password. Try a demo account below.' }
  }

  await setSession({
    email: account.email,
    name: account.name,
    role: account.role,
  })

  redirect(account.role === 'admin' ? '/admin' : '/browse')
}

export async function signOut(): Promise<void> {
  await clearSession()
  redirect('/')
}
