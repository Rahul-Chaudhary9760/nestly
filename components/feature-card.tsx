import type { LucideIcon } from 'lucide-react'

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon
  title: string
  description: string
}) {
  return (
    <div className="rounded-card border border-border bg-card p-6 transition-colors hover:border-primary/40">
      <span className="flex size-12 items-center justify-center rounded-xl bg-primary-light text-primary">
        <Icon className="size-6" />
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold text-ink">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}
