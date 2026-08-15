import { Check } from "lucide-react";

export default function PgAmenities({ amenities }: { amenities: string[] }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold text-ink">
        What this place offers
      </h2>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {amenities.map((a) => (
          <div
            key={a}
            className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-ink"
          >
            <Check className="size-4 shrink-0 text-primary" />
            {a}
          </div>
        ))}
      </div>
    </section>
  );
}
