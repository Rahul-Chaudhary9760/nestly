"use client";

import {
  Wifi,
  Snowflake,
  WashingMachine,
  Sparkles,
  UtensilsCrossed,
  Car,
  Zap,
  ShieldCheck,
  Dumbbell,
  Flame,
  Refrigerator,
  Tv,
  Sofa,
  Camera,
  type LucideIcon,
} from "lucide-react";

export const AMENITIES: { label: string; icon: LucideIcon }[] = [
  { label: "WiFi", icon: Wifi },
  { label: "AC", icon: Snowflake },
  { label: "Washing machine", icon: WashingMachine },
  { label: "Housekeeping", icon: Sparkles },
  { label: "Meals included", icon: UtensilsCrossed },
  { label: "Parking", icon: Car },
  { label: "Power backup", icon: Zap },
  { label: "24x7 Security", icon: ShieldCheck },
  { label: "Gym", icon: Dumbbell },
  { label: "Hot water", icon: Flame },
  { label: "Fridge", icon: Refrigerator },
  { label: "TV", icon: Tv },
  { label: "Furnished", icon: Sofa },
  { label: "CCTV", icon: Camera },
];

interface AmenitiesSelectProps {
  value: string[];
  onChange: (amenities: string[]) => void;
}

export default function AmenitiesSelect({
  value,
  onChange,
}: AmenitiesSelectProps) {
  function toggle(label: string) {
    onChange(
      value.includes(label)
        ? value.filter((a) => a !== label)
        : [...value, label],
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {AMENITIES.map(({ label, icon: Icon }) => {
        const selected = value.includes(label);
        return (
          <button
            key={label}
            type="button"
            onClick={() => toggle(label)}
            aria-pressed={selected}
            className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              selected
                ? "border-primary bg-primary-light text-primary"
                : "border-border bg-background text-muted-foreground hover:bg-muted hover:text-ink"
            }`}
          >
            <Icon className="size-3.5" />
            {label}
          </button>
        );
      })}
    </div>
  );
}
