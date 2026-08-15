import Link from "next/link";
import { Home, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex flex-1 items-center justify-center px-5 py-20 sm:px-6">
        <div className="mx-auto max-w-md text-center">
          <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary-light text-primary">
            <SearchX className="size-8" />
          </span>
          <h1 className="mt-6 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-3 text-pretty text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or may have
            moved. Let&apos;s get you back to finding a room.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" className="h-12 px-6 text-base">
              <Link href="/">
                <Home className="size-4" /> Back to home
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-6 text-base">
              <Link href="/#listings">Browse PGs</Link>
            </Button>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
