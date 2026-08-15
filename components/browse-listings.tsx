'use client'

import { useMemo, useState } from 'react'
import { SlidersHorizontal, X } from 'lucide-react'
import PgCard from '@/components/pg-card'
import type { PG } from '@/lib/types'

const roomTypes = ['Single', 'Double sharing', 'Studio', 'Co-living'] as const
const genders = ['Any', 'Men', 'Women'] as const
type SortKey = 'recommended' | 'price-asc' | 'price-desc' | 'rating'

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
        active
          ? 'border-primary bg-primary text-primary-foreground'
          : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-ink'
      }`}
    >
      {children}
    </button>
  )
}

export default function BrowseListings({
  pgs,
  cities,
}: {
  pgs: PG[]
  cities: string[]
}) {
  const [city, setCity] = useState<string | null>(null)
  const [room, setRoom] = useState<string | null>(null)
  const [gender, setGender] = useState<string | null>(null)
  const [sort, setSort] = useState<SortKey>('recommended')

  const results = useMemo(() => {
    let out = pgs.filter(
      (pg) =>
        (!city || pg.city === city) &&
        (!room || pg.roomType === room) &&
        (!gender || pg.gender === gender || pg.gender === 'Any'),
    )
    out = [...out]
    if (sort === 'price-asc') out.sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') out.sort((a, b) => b.price - a.price)
    else if (sort === 'rating') out.sort((a, b) => b.rating - a.rating)
    return out
  }, [pgs, city, room, gender, sort])

  const hasFilters = city || room || gender
  const clearAll = () => {
    setCity(null)
    setRoom(null)
    setGender(null)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-card border border-border bg-card p-4 sm:p-5">
        <div className="flex items-center gap-2 text-ink">
          <SlidersHorizontal className="size-4" />
          <span className="font-display text-lg font-semibold">Filters</span>
          {hasFilters && (
            <button
              type="button"
              onClick={clearAll}
              className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80"
            >
              <X className="size-3.5" /> Clear all
            </button>
          )}
        </div>

        <div className="mt-4 flex flex-col gap-4">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              City
            </p>
            <div className="flex flex-wrap gap-2">
              {cities.map((c) => (
                <Chip
                  key={c}
                  active={city === c}
                  onClick={() => setCity(city === c ? null : c)}
                >
                  {c}
                </Chip>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Room type
            </p>
            <div className="flex flex-wrap gap-2">
              {roomTypes.map((r) => (
                <Chip
                  key={r}
                  active={room === r}
                  onClick={() => setRoom(room === r ? null : r)}
                >
                  {r}
                </Chip>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              For
            </p>
            <div className="flex flex-wrap gap-2">
              {genders.map((g) => (
                <Chip
                  key={g}
                  active={gender === g}
                  onClick={() => setGender(gender === g ? null : g)}
                >
                  {g}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-ink">{results.length}</span>{' '}
          {results.length === 1 ? 'stay' : 'stays'} available
        </p>
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          Sort by
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="h-9 rounded-lg border border-input bg-card px-2.5 text-sm font-medium text-ink outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
          >
            <option value="recommended">Recommended</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top rated</option>
          </select>
        </label>
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((pg) => (
            <PgCard key={pg.id} pg={pg} />
          ))}
        </div>
      ) : (
        <div className="rounded-card border border-dashed border-border bg-card p-12 text-center">
          <p className="font-display text-lg font-semibold text-ink">
            No stays match those filters
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try clearing a filter or picking a different city.
          </p>
          <button
            type="button"
            onClick={clearAll}
            className="mt-4 inline-flex rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}
