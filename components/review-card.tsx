import { Star } from 'lucide-react'
import type { Review } from '@/lib/types'

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex h-full flex-col rounded-card border border-border bg-card p-6">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={
              i < review.rating
                ? 'size-4 fill-accent text-accent'
                : 'size-4 text-border'
            }
          />
        ))}
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink">
        &ldquo;{review.text}&rdquo;
      </p>

      <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
        <span className="flex size-10 items-center justify-center rounded-full bg-primary-light font-display text-sm font-semibold text-primary">
          {review.initials}
        </span>
        <div>
          <p className="text-sm font-semibold text-ink">{review.name}</p>
          <p className="text-xs text-muted-foreground">{review.location}</p>
        </div>
      </div>
    </div>
  )
}
