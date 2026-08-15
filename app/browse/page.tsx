import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import BrowseListings from '@/components/browse-listings'
import { pgs, cities } from '@/lib/mock-data'

export const metadata = {
  title: 'Browse PGs — Nestly',
  description:
    'Browse verified PGs and co-living spaces across India. Filter by city, room type, and budget.',
}

export default function BrowsePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background" id="top">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-primary-light/40">
          <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-14">
            <p className="text-sm font-medium text-primary">
              {pgs.length} verified stays
            </p>
            <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl">
              Browse PGs & co-living spaces
            </h1>
            <p className="mt-3 max-w-2xl text-muted-foreground text-pretty">
              Every listing is verified with real photos and honest resident
              reviews. Zero brokerage, no hidden fees — just pick a place that
              feels like home.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10">
          <BrowseListings pgs={pgs} cities={cities} />
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
