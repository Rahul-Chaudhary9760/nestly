import Link from "next/link";
import { Home, LogOut, LayoutDashboard, Building2 } from "lucide-react";
import { getSession } from "@/lib/auth";
import { signOut } from "@/app/actions/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <div className="min-h-dvh bg-secondary/40">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Home className="size-4.5" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-ink">
                Nestly
              </span>
            </Link>
            <span className="hidden rounded-full bg-primary-light px-2.5 py-1 text-xs font-semibold text-primary sm:inline-block">
              Admin
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium leading-tight text-ink">
                {session?.name ?? "Admin"}
              </p>
              <p className="text-xs text-muted-foreground">{session?.email}</p>
            </div>
            <form action={signOut}>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-muted"
              >
                <LogOut className="size-4" /> Sign out
              </button>
            </form>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl gap-6 px-5 py-8 sm:px-6">
        {/* <aside className="hidden w-52 shrink-0 lg:block">
          <nav className="sticky top-24 flex flex-col gap-1">
            <span className="flex items-center gap-2.5 rounded-xl bg-primary px-3 py-2.5 text-sm font-medium text-primary-foreground">
              <LayoutDashboard className="size-4" /> Listings
            </span>
            <span className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground">
              <Building2 className="size-4" /> Properties
            </span>
          </nav>
        </aside> */}

        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
