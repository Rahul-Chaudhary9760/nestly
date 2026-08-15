import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, BadgeCheck } from "lucide-react";
import type { PG } from "@/lib/types";

export default function PgCard({ pg }: { pg: PG }) {
  return (
    <Link href={`/pg/${pg.id}`} className="block">
      <article className="group overflow-hidden rounded-card border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
        <div className="relative aspect-4/3 overflow-hidden">
          <Image
            src={pg.image || "/placeholder.svg"}
            alt={`${pg.name} in ${pg.area}, ${pg.city}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3 flex gap-2">
            {pg.verified && (
              <span className="inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                <BadgeCheck className="size-3.5" /> Verified
              </span>
            )}
          </div>
          <span className="absolute bottom-3 left-3 rounded-full bg-ink/80 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {pg.roomType}
          </span>
        </div>

        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-lg font-semibold leading-tight text-ink">
              {pg.name}
            </h3>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-primary-light px-2 py-1 text-sm font-semibold text-primary">
              <Star className="size-3.5 fill-accent text-accent" />
              {pg.rating}
            </span>
          </div>

          <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="size-3.5" />
            {pg.area}, {pg.city}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {pg.amenities.slice(0, 3).map((a) => (
              <span
                key={a}
                className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
              >
                {a}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-end justify-between border-t border-border pt-3">
            <p className="text-sm text-muted-foreground">
              <span className="font-display text-xl font-semibold text-ink">
                ₹{pg.price.toLocaleString("en-IN")}
              </span>
              /mo
            </p>
            <span className="text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
              View details
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
