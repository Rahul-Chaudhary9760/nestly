import { Building2, BadgeCheck, Star, Wallet } from 'lucide-react'
import { pgs } from '@/lib/mock-data'
import PgTable from '@/components/admin/pg-table'

export const metadata = {
  title: 'Admin — Listings | Nestly',
}

const iconMap = {
  building: Building2,
  badge: BadgeCheck,
  star: Star,
  wallet: Wallet,
}

export default function AdminPage() {
  const total = pgs.length
  const verified = pgs.filter((p) => p.verified).length
  const avgRating = (
    pgs.reduce((s, p) => s + p.rating, 0) / total
  ).toFixed(1)
  const avgRent = Math.round(
    pgs.reduce((s, p) => s + p.price, 0) / total,
  )

  const stats: {
    label: string
    value: string
    icon: keyof typeof iconMap
  }[] = [
    { label: 'Total listings', value: String(total), icon: 'building' },
    { label: 'Verified', value: String(verified), icon: 'badge' },
    { label: 'Avg. rating', value: avgRating, icon: 'star' },
    {
      label: 'Avg. rent',
      value: `₹${avgRent.toLocaleString('en-IN')}`,
      icon: 'wallet',
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl font-semibold tracking-tight text-ink">
          Listings dashboard
        </h1>
        <p className="mt-1 text-muted-foreground">
          Manage every PG on Nestly — verify, review, and remove listings.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((s) => {
          const Icon = iconMap[s.icon]
          return (
            <div
              key={s.label}
              className="rounded-card border border-border bg-card p-4"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary-light text-primary">
                <Icon className="size-4.5" />
              </span>
              <p className="mt-3 font-display text-2xl font-semibold text-ink">
                {s.value}
              </p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          )
        })}
      </div>

      <PgTable initialPgs={pgs} />
    </div>
  )
}
