"use client";

import ReviewsCarousel from "@/components/reviews-carousel";
import type { Review } from "@/lib/types";

export default function PgReviews({ reviews }: { reviews: Review[] }) {
  return <ReviewsCarousel reviews={reviews} />;
}
