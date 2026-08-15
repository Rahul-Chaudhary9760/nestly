import type { Metadata } from "next";
import { ShieldCheck, Wallet, MessageCircleHeart, Users } from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import StatCard from "@/components/stat-card";
import FeatureCard from "@/components/feature-card";

export const metadata: Metadata = {
  title: "About us · Nestly",
  description: "Why Nestly exists and how we verify every PG we list.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-light/70 via-background to-background" />
        <div className="mx-auto max-w-3xl px-5 pb-14 pt-14 text-center sm:px-6 sm:pt-20">
          <h1 className="text-pretty font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Finding a room shouldn&apos;t feel like a gamble.
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nestly started because moving to a new city for work or college
            meant choosing a place to live off a handful of blurry photos and a
            broker&apos;s word. We wanted something better — listings you can
            actually trust.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          <StatCard value="500+" label="Verified PGs" />
          <StatCard value="18" label="Cities covered" />
          <StatCard value="4.6" label="Average rating" showStar />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            What we stand for
          </h2>
          <p className="mt-2 text-muted-foreground">
            A few principles that shape every listing on Nestly.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FeatureCard
            icon={ShieldCheck}
            title="Verified in person"
            description="Every listing is inspected before it goes live — no surprises on move-in day."
          />
          <FeatureCard
            icon={Wallet}
            title="Zero brokerage"
            description="Talk to owners directly. What you see is what you pay, every single month."
          />
          <FeatureCard
            icon={MessageCircleHeart}
            title="Real reviews"
            description="Ratings from residents who've actually lived there, not marketing copy."
          />
          <FeatureCard
            icon={Users}
            title="Built for renters"
            description="We work for the people looking for a room, not the brokers listing one."
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-6">
        <div className="rounded-card border border-border bg-card p-8 sm:p-10">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Our story
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Nestly is a small team obsessed with a simple problem: finding
            reliable, fairly-priced accommodation shouldn&apos;t take weeks of
            scrolling through outdated listings and calling brokers who never
            pick up. We visit every property ourselves, verify the details, and
            put renters directly in touch with owners.
          </p>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            This is placeholder copy for now — swap it out with your real
            founding story whenever you&apos;re ready.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
