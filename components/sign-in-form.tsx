'use client'

import { useActionState, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Loader2, Lock, Mail, ShieldCheck, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { signIn, type SignInState } from '@/app/actions/auth'

const demoAccounts = [
  {
    role: 'User',
    email: 'user@nestly.com',
    password: 'user123',
    icon: User,
  },
  {
    role: 'Admin',
    email: 'admin@nestly.com',
    password: 'admin123',
    icon: ShieldCheck,
  },
]

export default function SignInForm() {
  const params = useSearchParams()
  const reason = params.get('reason')
  const [state, formAction, pending] = useActionState<SignInState, FormData>(
    signIn,
    {},
  )
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="w-full">
      {reason === 'auth' && (
        <p className="mb-5 rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-accent-foreground">
          Please sign in to continue to that page.
        </p>
      )}
      {reason === 'forbidden' && (
        <p className="mb-5 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          That area is for admins only. Sign in with an admin account.
        </p>
      )}

      <form action={formAction} className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Email
          </label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 size-4.5 -translate-y-1/2 text-muted-foreground" />
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="h-11 w-full rounded-xl border border-input bg-background pl-10 pr-3 text-sm text-ink outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Password
          </label>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-3 top-1/2 size-4.5 -translate-y-1/2 text-muted-foreground" />
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="h-11 w-full rounded-xl border border-input bg-background pl-10 pr-3 text-sm text-ink outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
            />
          </div>
        </div>

        {state.error && (
          <p className="text-sm text-destructive">{state.error}</p>
        )}

        <Button type="submit" size="lg" disabled={pending} className="mt-1">
          {pending && <Loader2 className="size-4 animate-spin" />}
          {pending ? 'Signing in…' : 'Sign in'}
        </Button>
      </form>

      <div className="mt-6 rounded-2xl border border-border bg-secondary/50 p-4">
        <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Demo accounts — tap to fill
        </p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {demoAccounts.map((acc) => (
            <button
              key={acc.email}
              type="button"
              onClick={() => {
                setEmail(acc.email)
                setPassword(acc.password)
              }}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5 text-left transition-colors hover:border-primary/40 hover:bg-primary-light/40"
            >
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary-light text-primary">
                <acc.icon className="size-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium text-ink">
                  {acc.role}
                </span>
                <span className="block truncate text-xs text-muted-foreground">
                  {acc.email}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
