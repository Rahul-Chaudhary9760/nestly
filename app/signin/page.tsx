import { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Home, ArrowLeft, ShieldCheck } from 'lucide-react'
import SignInForm from '@/components/sign-in-form'

export const metadata = {
  title: 'Sign in — Nestly',
  description: 'Sign in to your Nestly account as a resident or admin.',
}

export default function SignInPage() {
  return (
    <main className="grid min-h-dvh lg:grid-cols-2">
      {/* Left: form */}
      <div className="flex flex-col px-5 py-8 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Home className="size-4.5" />
            </span>
            <span className="font-display text-xl font-semibold tracking-tight text-ink">
              Nestly
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4" /> Back home
          </Link>
        </div>

        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-10">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ink text-balance">
            Welcome back
          </h1>
          <p className="mt-2 text-muted-foreground text-pretty">
            Sign in to manage your bookings, or access the admin dashboard to
            manage listings.
          </p>

          <div className="mt-8">
            <Suspense fallback={null}>
              <SignInForm />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Right: visual */}
      <div className="relative hidden lg:block">
        <Image
          src="/images/pg-3.png"
          alt="A bright, modern co-living lounge"
          fill
          sizes="50vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-sm font-medium text-primary backdrop-blur">
            <ShieldCheck className="size-4" /> Verified stays, zero brokerage
          </span>
          <p className="mt-4 max-w-md font-display text-2xl font-semibold leading-snug text-white text-balance">
            Find a place that feels like home — no hidden fees, no surprises.
          </p>
        </div>
      </div>
    </main>
  )
}
