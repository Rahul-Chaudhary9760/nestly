"use client";

import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Wallet,
  MessageCircleHeart,
  Search,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import LocationSelect from "@/components/location-select";
import HeroCarousel from "@/components/hero-carousel";
import ReviewsCarousel from "@/components/reviews-carousel";
import PgCard from "@/components/pg-card";
import StatCard from "@/components/stat-card";
import FeatureCard from "@/components/feature-card";
import { pgs, reviews } from "@/lib/mock-data";
import { useRouter } from "next/navigation";

export default function Page() {
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");

  const router = useRouter();

  function handleSearch() {
    document
      .getElementById("listings")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const featured = pgs.slice(0, 4);

  return (
    <div id="top" className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-light/70 via-background to-background" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)",
            backgroundSize: "26px 26px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
          }}
        />

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-2 lg:gap-12 lg:pb-28">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary-light px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="size-3.5" />
              Verified PGs · Zero brokerage
            </span>
            <h1 className="mt-5 text-pretty font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              A room that actually feels like home.
            </h1>
            <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Single rooms, double sharing and co-living spaces across India —
              hand-picked for comfort, not just cost.
            </p>

            <div className="mt-8 rounded-card border border-border bg-card p-3 shadow-lg shadow-primary/5 sm:p-4">
              <div className="flex flex-col gap-3 sm:flex-row">
                <LocationSelect
                  city={city}
                  area={area}
                  onCityChange={setCity}
                  onAreaChange={setArea}
                />
                <Button
                  size="lg"
                  onClick={handleSearch}
                  className="h-12 shrink-0 px-6 text-base"
                >
                  <Search className="size-4" /> Search
                </Button>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-primary" /> Inspected in
                person
              </span>
              <span className="flex items-center gap-1.5">
                <Wallet className="size-4 text-primary" /> No hidden fees
              </span>
            </div>
          </div>

          <div className="lg:pl-4">
            <HeroCarousel items={featured} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          <StatCard value="500+" label="Verified PGs" />
          <StatCard value="18" label="Cities covered" />
          <StatCard value="4.6" label="Average rating" showStar />
        </div>
      </section>

      {/* Listings */}
      <section
        id="listings"
        className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20"
      >
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Popular right now
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Hand-picked stays people are booking this week.
            </p>
          </div>
          <a
            href="#listings"
            className="flex shrink-0 items-center gap-1 text-sm font-medium text-primary transition-all hover:gap-1.5"
          >
            View all <ArrowRight className="size-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pgs.map((pg) => (
            <PgCard key={pg.id} pg={pg} />
          ))}
        </div>
      </section>

      {/* Why */}
      <section id="why" className="bg-primary-light/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Why people choose Nestly
            </h2>
            <p className="mt-2 text-muted-foreground">
              We do the legwork so your first day in a new city feels easy.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
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
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section
        id="reviews"
        className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20"
      >
        <div className="mb-8 text-center">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            What residents say
          </h2>
          <p className="mt-2 text-muted-foreground">
            Real stories from people who found their room with Nestly.
          </p>
        </div>
        <ReviewsCarousel reviews={reviews} />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6">
        <div className="relative overflow-hidden rounded-card bg-primary px-6 py-12 text-center sm:px-10 sm:py-16">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative">
            <h2 className="text-balance font-display text-3xl font-semibold text-primary-foreground sm:text-4xl">
              Ready to find your next room?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-primary-foreground/80">
              Browse verified PGs in your city — no sign-up needed to look
              around.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                onClick={() => router.push("/browse")}
                className="h-12 bg-accent px-6 text-base text-accent-foreground hover:bg-accent/90"
              >
                Browse all PGs
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="h-12 border-primary-foreground/30 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                List your PG
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
