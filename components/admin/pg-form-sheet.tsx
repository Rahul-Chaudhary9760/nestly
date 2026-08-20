"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Home, Pencil } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import type { PG } from "@/lib/types";
import LocationSelect from "../location-select";
import AmenitiesSelect from "../amenities-select";

const ROOM_TYPES: PG["roomType"][] = [
  "Single",
  "Double sharing",
  "Studio",
  "Co-living",
];
const GENDERS: PG["gender"][] = ["Any", "Men", "Women"];

type FormState = {
  name: string;
  city: string;
  area: string;
  image: string;
  price: string;
  rating: string;
  reviewCount: string;
  roomType: PG["roomType"];
  gender: PG["gender"];
  amenities: string[];
  verified: boolean;
};

const emptyForm: FormState = {
  name: "",
  city: "",
  area: "",
  image: "",
  price: "",
  rating: "",
  reviewCount: "0",
  roomType: "Single",
  gender: "Any",
  amenities: [],
  verified: false,
};

function pgToForm(pg: PG): FormState {
  return {
    name: pg.name,
    city: pg.city,
    area: pg.area,
    image: pg.image,
    price: String(pg.price),
    rating: String(pg.rating),
    reviewCount: String(pg.reviewCount),
    roomType: pg.roomType,
    gender: pg.gender,
    amenities: pg.amenities,
    verified: pg.verified,
  };
}

function makeId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto)
    return crypto.randomUUID();
  return `pg-${Date.now()}`;
}

interface PgFormSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "create" | "edit";
  pg?: PG | null;
  onSave: (pg: PG) => void;
}

export default function PgFormSheet({
  open,
  onOpenChange,
  mode,
  pg,
  onSave,
}: PgFormSheetProps) {
  const [form, setForm] = useState<FormState>(emptyForm);

  useEffect(() => {
    if (!open) return;
    setForm(mode === "edit" && pg ? pgToForm(pg) : emptyForm);
  }, [open, mode, pg]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const result: PG = {
      id: mode === "edit" && pg ? pg.id : makeId(),
      name: form.name.trim(),
      city: form.city.trim(),
      area: form.area.trim(),
      image: form.image.trim() || "/placeholder.svg",
      price: Number(form.price) || 0,
      rating: Math.min(5, Math.max(0, Number(form.rating) || 0)),
      reviewCount: Number(form.reviewCount) || 0,
      roomType: form.roomType,
      gender: form.gender,
      amenities: form.amenities,
      verified: form.verified,
    };

    onSave(result);
    onOpenChange(false);
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col overflow-y-auto p-0">
        <SheetHeader>
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary-light text-primary">
              {mode === "create" ? (
                <Home className="size-4" />
              ) : (
                <Pencil className="size-4" />
              )}
            </span>
            <SheetTitle>
              {mode === "create" ? "Add a new PG" : "Edit PG details"}
            </SheetTitle>
          </div>
          <SheetDescription>
            {mode === "create"
              ? "Fill in the details below to list a new property on Nestly."
              : "Update the details for this property."}
          </SheetDescription>
        </SheetHeader>

        <form
          id="pg-form"
          onSubmit={handleSubmit}
          className="flex-1 space-y-5 overflow-y-auto px-6 py-5"
        >
          <div className="space-y-1.5">
            <Label htmlFor="name">Property name</Label>
            <Input
              id="name"
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="The Maple House"
            />
          </div>

          <div className="space-y-1.5">
            <Label>Location</Label>
            <LocationSelect
              city={form.city}
              area={form.area}
              onCityChange={(c) => update("city", c)}
              onAreaChange={(a) => update("area", a)}
              size="md"
              required
              cityPlaceholder="Select city"
              areaPlaceholder="Select area"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              value={form.image}
              onChange={(e) => update("image", e.target.value)}
              placeholder="https://…"
            />
            <div className="mt-2 flex items-center gap-3 rounded-lg border border-dashed border-border p-2">
              <div className="relative size-12 shrink-0 overflow-hidden rounded-md bg-muted">
                {form.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={form.image}
                    alt=""
                    className="size-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.visibility = "hidden";
                    }}
                  />
                ) : null}
              </div>
              <p className="text-xs text-muted-foreground">
                Preview — leave blank to use a placeholder image.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="roomType">Room type</Label>
              <select
                id="roomType"
                value={form.roomType}
                onChange={(e) =>
                  update("roomType", e.target.value as PG["roomType"])
                }
                className="h-10 w-full rounded-xl border border-input bg-background px-3 text-sm text-ink outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
              >
                {ROOM_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="gender">Gender</Label>
              <select
                id="gender"
                value={form.gender}
                onChange={(e) =>
                  update("gender", e.target.value as PG["gender"])
                }
                className="h-10 w-full rounded-xl border border-input bg-background px-3 text-sm text-ink outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
              >
                {GENDERS.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="price">Rent (₹)</Label>
              <Input
                id="price"
                type="number"
                min={0}
                required
                value={form.price}
                onChange={(e) => update("price", e.target.value)}
                placeholder="12500"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="rating">Rating</Label>
              <Input
                id="rating"
                type="number"
                min={0}
                max={5}
                step={0.1}
                value={form.rating}
                onChange={(e) => update("rating", e.target.value)}
                placeholder="4.8"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="reviewCount">Reviews</Label>
              <Input
                id="reviewCount"
                type="number"
                min={0}
                value={form.reviewCount}
                onChange={(e) => update("reviewCount", e.target.value)}
                placeholder="0"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="amenities">Amenities</Label>
            <AmenitiesSelect
              value={form.amenities}
              onChange={(a) => update("amenities", a)}
            />
            <p className="text-xs text-muted-foreground">Comma-separated.</p>
          </div>

          <label className="flex items-center gap-2 pt-1 text-sm text-ink">
            <input
              type="checkbox"
              checked={form.verified}
              onChange={(e) => update("verified", e.target.checked)}
              className="size-4 rounded border-input accent-primary"
            />
            Mark as verified
          </label>
        </form>

        <SheetFooter className="px-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button type="submit" form="pg-form">
            {mode === "create" ? "Create PG" : "Save changes"}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
