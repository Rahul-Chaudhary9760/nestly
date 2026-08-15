import { Wallet, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PG } from "@/lib/types";

export default function PgBookingCard({ pg }: { pg: PG }) {
  return (
    <div className="rounded-card border border-border bg-card p-5 shadow-lg shadow-primary/5">
      <p className="text-sm text-muted-foreground">Starting from</p>
      <p className="mt-1 font-display text-3xl font-semibold text-ink">
        ₹{pg.price.toLocaleString("en-IN")}
        <span className="text-base font-normal text-muted-foreground">/mo</span>
      </p>

      <Button size="lg" className="mt-5 h-12 w-full text-base">
        Request a callback
      </Button>

      <div className="mt-5 flex flex-col gap-2 border-t border-border pt-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="size-4 text-primary" /> Inspected in person
        </span>
        <span className="flex items-center gap-1.5">
          <Wallet className="size-4 text-primary" /> Zero brokerage
        </span>
      </div>
    </div>
  );
}
