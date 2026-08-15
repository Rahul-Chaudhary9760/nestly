import Link from 'next/link'
import Image from 'next/image'
import {
  BadgeCheck,
  Wallet,
  ShieldCheck,
  MessagesSquare,
  Camera,
  HeartHandshake,
  Check,
  X,
  ArrowRight,
} from 'lucide-react'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import FeatureCard from '@/components/feature-card'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Why Nestly — Verified stays, zero brokerage',
  description:
    'Nestly makes finding a PG honest and simple: verified listings, real reviews, zero brokerage, and support that actually helps.',
}

const pillars = [
  {
    icon: BadgeCheck,
    title: 'Every listing verified',
    description:
      'Our team physically checks each PG and captures real photos, so what you see is exactly what you get.',
  },
  {
    icon: Wallet,
    title: 'Zero brokerage',
    description:
      'You pay the rent that is listed — nothing hidden, no surprise commission, no middlemen taking a cut.',
  },
  {
    icon: MessagesSquare,
    title: 'Honest resident reviews',
    description:
      'Reviews come only from people who actually lived there, so you can decide with real confidence.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety first',
    description:
      'Security details, gender preferences, and neighbourhood info are upfront on every single listing.',
  },
  {
    icon: Camera,
    title: 'What you see is real',
    description:
      'No stock photos or stretched wide angles — just accurate images of the actual room you will move into.',
  },
  {
    icon: HeartHandshake,
    title: 'Support that helps',
    description:
      'From first enquiry to move-in day, a real person is available to answer questions and sort issues.',
  },
]

const steps = [
  {
    title: 'Search your city',
    description:
      'Filter by area, room type, budget, and gender preference to shortlist stays that fit your life.',
  },
  {
    title: 'Compare with confidence',
    description:
      'Read verified reviews, browse real photos, and check amenities — all in one honest place.',
  },
  {
    title: 'Move in, brokerage-free',
    description:
      'Connect directly with the owner, book your stay, and settle in. No commission, ever.',
  },
]

const comparison = [
  { label: 'Verified listings & real photos', nestly: true, others: false },
  { label: 'Zero brokerage', nestly: true, others: false },
  { label: 'Reviews from actual residents', nestly: true, others: false },
  { label: 'Transparent, all-in pricing', nestly: true, others: false },
  { label: 'Dedicated move-in support', nestly: true, others: false },
]

export default function WhyNestlyPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background" id="top">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-primary-light/40">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-background px-3 py-1.5 text-sm font-medium text-primary">
                <ShieldCheck className="size-4" /> Why Nestly
              </span>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink text-balance sm:text-5xl">
                Finding a home shouldn&apos;t feel like a gamble
              </h1>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
                We rebuilt the PG search from the ground up — verified stays,
                real reviews, and honest pricing — so you can move in without
                second-guessing.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button size="lg" render={<Link href="/browse" />}>
                  Browse verified PGs <ArrowRight className="size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  render={<Link href="/signin" />}
                >
                  List your PG
                </Button>
              </div>
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-4xl border border-border shadow-xl shadow-primary/5">
              <Image
                src="/images/hero-collage.png"
                alt="A resident relaxing in a bright, welcoming Nestly co-living room"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden bg-border sm:grid-cols-4">
            {[
              { value: '12k+', label: 'Verified stays' },
              { value: '₹0', label: 'Brokerage' },
              { value: '4.6', label: 'Avg. rating' },
              { value: '30+', label: 'Cities' },
            ].map((s) => (
              <div key={s.label} className="bg-background px-5 py-8 text-center">
                <p className="font-display text-3xl font-semibold text-primary">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pillars */}
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl">
              What makes Nestly different
            </h2>
            <p className="mt-3 text-muted-foreground text-pretty">
              Six promises we hold ourselves to on every single listing.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <FeatureCard
                key={p.title}
                icon={p.icon}
                title={p.title}
                description={p.description}
              />
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl">
                How it works
              </h2>
              <p className="mt-3 text-muted-foreground text-pretty">
                From first search to move-in day, in three simple steps.
              </p>
            </div>
            <ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="relative rounded-card border border-border bg-card p-6"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary font-display text-lg font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Comparison */}
        <section className="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl">
              Nestly vs. the usual way
            </h2>
            <p className="mt-3 text-muted-foreground text-pretty">
              The difference is transparency at every step.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-card border border-border bg-card">
            <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-border bg-secondary/50 px-5 py-3 text-sm font-medium text-muted-foreground sm:gap-8 sm:px-6">
              <span>What you get</span>
              <span className="w-16 text-center text-primary sm:w-20">
                Nestly
              </span>
              <span className="w-16 text-center sm:w-20">Others</span>
            </div>
            {comparison.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-border px-5 py-4 last:border-0 sm:gap-8 sm:px-6"
              >
                <span className="text-sm text-ink">{row.label}</span>
                <span className="flex w-16 justify-center sm:w-20">
                  <span className="flex size-7 items-center justify-center rounded-full bg-primary-light text-primary">
                    <Check className="size-4" />
                  </span>
                </span>
                <span className="flex w-16 justify-center sm:w-20">
                  <span className="flex size-7 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <X className="size-4" />
                  </span>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6">
          <div className="relative overflow-hidden rounded-4xl bg-primary px-6 py-14 text-center sm:px-12">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-primary-foreground text-balance sm:text-4xl">
              Ready to find a place that feels like home?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-primary-foreground/80 text-pretty">
              Join thousands of residents who found their stay the honest way.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button
                size="lg"
                variant="secondary"
                render={<Link href="/browse" />}
              >
                Start browsing <ArrowRight className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                render={<Link href="/signin" />}
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Sign in
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
