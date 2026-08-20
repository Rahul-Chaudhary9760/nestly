"use client";

import { MapPin, ChevronDown } from "lucide-react";
import { cities, areasByCity } from "@/lib/mock-data";

interface LocationSelectProps {
  city: string;
  area: string;
  onCityChange: (city: string) => void;
  onAreaChange: (area: string) => void;
  size?: "md" | "lg";
  required?: boolean;
  cityPlaceholder?: string;
  areaPlaceholder?: string;
}

export default function LocationSelect({
  city,
  area,
  onCityChange,
  onAreaChange,
  size = "lg",
  required = false,
  cityPlaceholder = "Any city",
  areaPlaceholder = "Any area",
}: LocationSelectProps) {
  const areas = city ? (areasByCity[city] ?? []) : [];
  const height = size === "lg" ? "h-12" : "h-10";
  const bg = size === "lg" ? "bg-secondary/50" : "bg-background";

  return (
    <div className="flex flex-1 flex-col gap-3 sm:flex-row">
      <div className="relative flex-1">
        <MapPin className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-primary" />
        <select
          aria-label="Select city"
          required={required}
          value={city}
          onChange={(e) => {
            onCityChange(e.target.value);
            onAreaChange("");
          }}
          className={`${height} w-full appearance-none rounded-xl border border-border ${bg} pl-10 pr-9 text-sm font-medium text-ink outline-none focus:border-primary focus:ring-2 focus:ring-primary/20`}
        >
          <option value="" disabled={required}>
            {cityPlaceholder}
          </option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      </div>

      <div className="relative flex-1">
        <select
          aria-label="Select area"
          required={required}
          value={area}
          disabled={!city}
          onChange={(e) => onAreaChange(e.target.value)}
          className={`${height} w-full appearance-none rounded-xl border border-border ${bg} pl-4 pr-9 text-sm font-medium text-ink outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50`}
        >
          <option value="" disabled={required}>
            {city ? areaPlaceholder : "Pick a city first"}
          </option>
          {areas.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      </div>
    </div>
  );
}
