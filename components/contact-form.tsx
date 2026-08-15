"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: wire this up to a real backend endpoint once available
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-card border border-border bg-card p-10 text-center">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="mt-4 font-display text-xl font-semibold text-ink">
          Message sent
        </h3>
        <p className="mt-1 max-w-sm text-sm text-muted-foreground">
          Thanks for reaching out — we&apos;ll get back to you within 1–2
          business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-card border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="h-11 w-full rounded-xl border border-border bg-secondary/50 px-3.5 text-sm text-ink outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="h-11 w-full rounded-xl border border-border bg-secondary/50 px-3.5 text-sm text-ink outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="How can we help?"
          className="h-11 w-full rounded-xl border border-border bg-secondary/50 px-3.5 text-sm text-ink outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us more..."
          className="w-full resize-none rounded-xl border border-border bg-secondary/50 px-3.5 py-2.5 text-sm text-ink outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="h-12 w-full text-base sm:w-fit sm:self-end sm:px-8"
      >
        <Send className="size-4" /> {loading ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
