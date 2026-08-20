"use client";

import { useMemo, useState } from "react";
import { Building2, BadgeCheck, Star, Wallet, CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import PgTable from "@/components/admin/pg-table";
import PgFormSheet from "@/components/admin/pg-form-sheet";
import type { PG } from "@/lib/types";

const iconMap = {
  building: Building2,
  badge: BadgeCheck,
  star: Star,
  wallet: Wallet,
};

export default function PgDashboardClient({
  initialPgs,
}: {
  initialPgs: PG[];
}) {
  const [rows, setRows] = useState<PG[]>(initialPgs);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [sheetMode, setSheetMode] = useState<"create" | "edit">("create");
  const [editingPg, setEditingPg] = useState<PG | null>(null);

  const stats = useMemo(() => {
    const total = rows.length;
    const verified = rows.filter((p) => p.verified).length;
    const avgRating = total
      ? (rows.reduce((s, p) => s + p.rating, 0) / total).toFixed(1)
      : "0.0";
    const avgRent = total
      ? Math.round(rows.reduce((s, p) => s + p.price, 0) / total)
      : 0;

    return [
      {
        label: "Total listings",
        value: String(total),
        icon: "building" as const,
      },
      { label: "Verified", value: String(verified), icon: "badge" as const },
      { label: "Avg. rating", value: avgRating, icon: "star" as const },
      {
        label: "Avg. rent",
        value: `₹${avgRent.toLocaleString("en-IN")}`,
        icon: "wallet" as const,
      },
    ];
  }, [rows]);

  function openCreate() {
    setSheetMode("create");
    setEditingPg(null);
    setSheetOpen(true);
  }

  function openEdit(pg: PG) {
    setSheetMode("edit");
    setEditingPg(pg);
    setSheetOpen(true);
  }

  function handleSave(pg: PG) {
    setRows((prev) => {
      const exists = prev.some((p) => p.id === pg.id);
      return exists
        ? prev.map((p) => (p.id === pg.id ? pg : p))
        : [pg, ...prev];
    });
  }

  function toggleVerified(id: string) {
    setRows((prev) =>
      prev.map((pg) => (pg.id === id ? { ...pg, verified: !pg.verified } : pg)),
    );
  }

  function remove(id: string) {
    setRows((prev) => prev.filter((pg) => pg.id !== id));
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between p-2">
        <div>
          <h1 className="font-display text-2xl font-semibold tracking-tight text-ink">
            Listings dashboard
          </h1>
          <p className="mt-1 text-muted-foreground">
            Manage every PG on Nestly — verify, review, and remove listings.
          </p>
        </div>
        <Button
          size="lg"
          className="h-12 shrink-0 px-6 text-base"
          onClick={openCreate}
        >
          <CirclePlus className="size-4" /> Create PG
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((s) => {
          const Icon = iconMap[s.icon];
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
          );
        })}
      </div>

      <PgTable
        pgs={rows}
        onEdit={openEdit}
        onToggleVerified={toggleVerified}
        onDelete={remove}
      />

      <PgFormSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        mode={sheetMode}
        pg={editingPg}
        onSave={handleSave}
      />
    </div>
  );
}
