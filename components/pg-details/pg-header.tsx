import { MapPin, Star, BadgeCheck, Users } from "lucide-react";
import type { PG } from "@/lib/types";

export default function PgHeader({ pg }: { pg: PG }) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-ink/80 px-2.5 py-1 text-xs font-medium text-white">
          {pg.roomType}
        </span>
        {pg.verified && (
          <span className="inline-flex items-center gap-1 rounded-full bg-primary-light px-2.5 py-1 text-xs font-medium text-primary">
            <BadgeCheck className="size-3.5" /> Verified
          </span>
        )}
        <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
          <Users className="size-3.5" />
          {pg.gender === "Any" ? "Open to all" : `For ${pg.gender}`}
        </span>
      </div>

      <h1 className="mt-4 text-pretty font-display text-3xl font-semibold text-ink sm:text-4xl">
        {pg.name}
      </h1>

      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <MapPin className="size-4 text-primary" /> {pg.area}, {pg.city}
        </span>
        <span className="flex items-center gap-1 font-medium text-ink">
          <Star className="size-4 fill-accent text-accent" /> {pg.rating}
          <span className="font-normal text-muted-foreground">
            ({pg.reviewCount} reviews)
          </span>
        </span>
      </div>
    </div>
  );
}
