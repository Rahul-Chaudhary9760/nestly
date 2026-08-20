import { pgs } from "@/lib/mock-data";
import PgDashboardClient from "@/components/admin/pg-dashboard";

export const metadata = {
  title: "Admin — Listings | Nestly",
};

export default function AdminPage() {
  return <PgDashboardClient initialPgs={pgs} />;
}
