import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact us · Nestly",
  description: "Get in touch with the Nestly team.",
};

const contactPoints = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@nestly.example",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 00000 00000",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Bengaluru, India",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-light/70 via-background to-background" />
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-14 text-center sm:px-6 sm:pt-20">
          <h1 className="text-pretty font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Questions about a listing, need help as a resident, or want to list
            your PG on Nestly? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex flex-col gap-4 lg:col-span-1">
            {contactPoints.map((c) => (
              <div
                key={c.label}
                className="flex items-start gap-3 rounded-card border border-border bg-card p-4"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <c.icon className="size-4.5" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-ink">
                    {c.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
