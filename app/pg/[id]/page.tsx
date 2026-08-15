import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import {
  PgGallery,
  PgAmenities,
  PgBookingCard,
  PgHeader,
  PgReviews,
  PgBackButton,
} from "@/components/pg-details";
import { pgs, reviews } from "@/lib/mock-data";

interface PgDetailsPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return pgs.map((pg) => ({ id: pg.id }));
}

export async function generateMetadata({
  params,
}: PgDetailsPageProps): Promise<Metadata> {
  const { id } = await params;
  const pg = pgs.find((p) => p.id === id);
  if (!pg) return { title: "PG not found · Nestly" };
  return {
    title: `${pg.name} · ${pg.area}, ${pg.city} · Nestly`,
    description: `${pg.roomType} PG in ${pg.area}, ${pg.city} starting at ₹${pg.price.toLocaleString("en-IN")}/mo.`,
  };
}

export default async function PgDetailsPage({ params }: PgDetailsPageProps) {
  const { id } = await params;
  const pg = pgs.find((p) => p.id === id);
  if (!pg) notFound();

  const pgReviews = reviews.filter((r) =>
    r.location.toLowerCase().startsWith(pg.name.toLowerCase()),
  );

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10">
        <PgBackButton />

        <div className="mt-4">
          <PgGallery image={pg.image} name={pg.name} />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="flex flex-col gap-10 lg:col-span-2">
            <PgHeader pg={pg} />
            <PgAmenities amenities={pg.amenities} />

            {pgReviews.length > 0 && (
              <section>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  What residents say
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Reviews from people who&apos;ve lived at {pg.name}.
                </p>
                <div className="mt-6">
                  <PgReviews reviews={reviews} />
                </div>
              </section>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <PgBookingCard pg={pg} />
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
