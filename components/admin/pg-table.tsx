"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Search,
  BadgeCheck,
  Star,
  Trash2,
  Pencil,
  ShieldCheck,
  ShieldOff,
} from "lucide-react";
import type { PG } from "@/lib/types";

interface PgTableProps {
  pgs: PG[];
  onEdit: (pg: PG) => void;
  onToggleVerified: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function PgTable({
  pgs,
  onEdit,
  onToggleVerified,
  onDelete,
}: PgTableProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return pgs;
    return pgs.filter(
      (pg) =>
        pg.name.toLowerCase().includes(q) ||
        pg.city.toLowerCase().includes(q) ||
        pg.area.toLowerCase().includes(q),
    );
  }, [pgs, query]);

  return (
    <div className="rounded-card border border-border bg-card">
      <div className="flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-lg font-semibold text-ink">
            All listings
          </h2>
          <p className="text-sm text-muted-foreground">
            {filtered.length} of {pgs.length} properties
          </p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search listings…"
            className="h-10 w-full rounded-xl border border-input bg-background pl-9 pr-3 text-sm text-ink outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
          />
        </div>
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs uppercase tracking-wide text-muted-foreground">
              <th className="px-4 py-3 font-medium">Property</th>
              <th className="px-4 py-3 font-medium">Location</th>
              <th className="px-4 py-3 font-medium">Type</th>
              <th className="px-4 py-3 font-medium">Rent</th>
              <th className="px-4 py-3 font-medium">Rating</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((pg) => (
              <tr
                key={pg.id}
                className="border-b border-border last:border-0 hover:bg-secondary/40"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="relative size-10 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={pg.image || "/placeholder.svg"}
                        alt={pg.name}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium text-ink">{pg.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {pg.area}, {pg.city}
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {pg.roomType}
                </td>
                <td className="px-4 py-3 font-medium text-ink">
                  ₹{pg.price.toLocaleString("en-IN")}
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-1 text-ink">
                    <Star className="size-3.5 fill-accent text-accent" />
                    {pg.rating}
                  </span>
                </td>
                <td className="px-4 py-3">
                  {pg.verified ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary-light px-2.5 py-1 text-xs font-medium text-primary">
                      <BadgeCheck className="size-3.5" /> Verified
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      Pending
                    </span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-1.5">
                    <button
                      type="button"
                      onClick={() => onToggleVerified(pg.id)}
                      title={pg.verified ? "Unverify" : "Verify"}
                      className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-ink"
                    >
                      {pg.verified ? (
                        <ShieldOff className="size-4" />
                      ) : (
                        <ShieldCheck className="size-4" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => onEdit(pg)}
                      title="Edit"
                      className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-ink"
                    >
                      <Pencil className="size-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onDelete(pg.id)}
                      title="Delete"
                      className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-destructive/40 hover:bg-destructive/10 hover:text-destructive"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="divide-y divide-border md:hidden">
        {filtered.map((pg) => (
          <div key={pg.id} className="flex gap-3 p-4">
            <div className="relative size-14 shrink-0 overflow-hidden rounded-lg">
              <Image
                src={pg.image || "/placeholder.svg"}
                alt={pg.name}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <p className="font-medium text-ink">{pg.name}</p>
                <span className="shrink-0 font-medium text-ink">
                  ₹{pg.price.toLocaleString("en-IN")}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {pg.area}, {pg.city} · {pg.roomType}
              </p>
              <div className="mt-2 flex items-center justify-between">
                {pg.verified ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary-light px-2.5 py-1 text-xs font-medium text-primary">
                    <BadgeCheck className="size-3.5" /> Verified
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    Pending
                  </span>
                )}
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => onToggleVerified(pg.id)}
                    className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground hover:bg-muted hover:text-ink"
                  >
                    {pg.verified ? (
                      <ShieldOff className="size-4" />
                    ) : (
                      <ShieldCheck className="size-4" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => onEdit(pg)}
                    className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground hover:bg-muted hover:text-ink"
                  >
                    <Pencil className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onDelete(pg.id)}
                    className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground hover:border-destructive/40 hover:bg-destructive/10 hover:text-destructive"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="p-10 text-center text-sm text-muted-foreground">
          No listings match your search.
        </div>
      )}
    </div>
  );
}
