import type { Metadata } from "next";
import { ShieldCheck, FileText } from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Safety & Terms · Nestly",
  description: "Nestly safety guidelines and terms of use.",
};

const navItems = [
  { href: "#safety", label: "Safety", icon: ShieldCheck },
  { href: "#terms", label: "Terms", icon: FileText },
];

export default function LegalPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-light/70 via-background to-background" />
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-14 text-center sm:px-6 sm:pt-20">
          <h1 className="text-pretty font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Safety & Terms
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            How we keep Nestly trustworthy, and the terms that govern using it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[200px_1fr]">
          <nav className="hidden lg:block">
            <div className="sticky top-24 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary-light hover:text-primary"
                >
                  <item.icon className="size-4" />
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="flex flex-col gap-14">
            <section id="safety" className="scroll-mt-24">
              <div className="flex items-center gap-2">
                <span className="flex size-9 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <ShieldCheck className="size-4.5" />
                </span>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Safety
                </h2>
              </div>

              <div className="mt-5 flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  This is placeholder safety copy — replace with your actual
                  policy before launch.
                </p>
                <p>
                  Every PG listed on Nestly is inspected in person before it
                  goes live. We verify ownership documents, check that common
                  areas and rooms match the photos, and confirm basic safety
                  measures like fire exits and secure entry points are in place.
                </p>
                <p>
                  If you ever feel unsafe at a listed PG, or notice a
                  discrepancy between what&apos;s shown online and what you find
                  in person, report it immediately through the contact page — we
                  take every report seriously and will re-investigate the
                  listing.
                </p>
                <p>
                  We recommend always visiting a PG in person before making any
                  payment, and never transferring money outside of agreed,
                  documented channels.
                </p>
              </div>
            </section>

            <section id="terms" className="scroll-mt-24">
              <div className="flex items-center gap-2">
                <span className="flex size-9 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <FileText className="size-4.5" />
                </span>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Terms of use
                </h2>
              </div>

              <div className="mt-5 flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  This is placeholder terms copy — replace with your actual
                  legal terms (ideally reviewed by a lawyer) before launch.
                </p>
                <p>
                  By using Nestly, you agree to use the platform only to search
                  for and inquire about accommodation listings in good faith.
                  Listings are provided by PG owners and, while we verify them
                  before publishing, Nestly does not own or manage any of the
                  properties listed.
                </p>
                <p>
                  Any agreement, payment, or lease made between a resident and a
                  PG owner is between those two parties. Nestly is not a party
                  to that agreement and is not responsible for disputes arising
                  from it, though we&apos;re happy to help mediate where we can.
                </p>
                <p>
                  We may update these terms from time to time; continued use of
                  Nestly after changes constitutes acceptance of the updated
                  terms.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
