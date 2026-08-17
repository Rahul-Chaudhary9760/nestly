import Link from "next/link";
import { Home } from "lucide-react";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Browse PGs", href: "#" },
      { label: "Cities", href: "#" },
      { label: "Co-living", href: "#" },
      { label: "Studios", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help center", href: "#" },
      { label: "Safety", href: "/legal#safety" },
      { label: "Terms", href: "/legal#terms" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Home className="size-4.5" />
              </span>
              <span className="font-display text-xl font-semibold text-ink">
                Nestly
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Verified PGs and co-living spaces across India. A room that
              actually feels like home.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-ink">{col.title}</h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nestly. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made for renters, not brokers.
          </p>
        </div>
      </div>
    </footer>
  );
}
