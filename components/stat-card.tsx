import { Star } from 'lucide-react'

export default function StatCard({
  value,
  label,
  showStar = false,
}: {
  value: string
  label: string
  showStar?: boolean
}) {
  return (
    <div className="rounded-card border border-border bg-card px-4 py-5 text-center shadow-sm sm:px-6 sm:py-6">
      <p className="flex items-center justify-center gap-1 font-display text-2xl font-semibold text-primary sm:text-3xl">
        {value}
        {showStar && (
          <Star className="size-5 fill-accent text-accent sm:size-6" />
        )}
      </p>
      <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{label}</p>
    </div>
  )
}
