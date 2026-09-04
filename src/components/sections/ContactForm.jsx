"use client";

import { useState } from "react";
import { MagneticButton } from "../ui/MagneticButton";

const INQUIRY_TYPES = [
  { value: "donation", label: "Donation" },
  { value: "volunteer", label: "Volunteer" },
  { value: "help", label: "Need Help" },
];

const fieldClasses =
  "w-full rounded-md border border-border bg-background px-4 py-3 font-sans text-base text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState("donation");

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex h-full min-h-96 flex-col items-center justify-center gap-3 rounded-2xl bg-surface p-10 text-center shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)]">
        <p className="font-display text-2xl text-foreground">Thank you.</p>
        <p className="max-w-sm font-sans text-sm leading-relaxed text-muted-foreground text-pretty">
          Your message has been received. Someone from Ebenezer Relief Society will follow up
          with you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-7 rounded-2xl bg-surface p-7 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)] sm:p-9"
    >
      <div className="flex flex-col gap-2.5">
        <span className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          I am reaching out about
        </span>
        <div className="flex flex-wrap gap-2">
          {INQUIRY_TYPES.map((type) => (
            <button
              key={type.value}
              type="button"
              onClick={() => setInquiryType(type.value)}
              aria-pressed={inquiryType === type.value}
              className={`rounded-full border px-4 py-2 font-sans text-sm font-medium transition-colors duration-300 ${
                inquiryType === type.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border-strong text-foreground/70 hover:border-foreground"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
        <input type="hidden" name="inquiry-type" value={inquiryType} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Your Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Jane Doe" className={fieldClasses} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Your Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@email.com" className={fieldClasses} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={3}
          placeholder="Tell us a little about what you need."
          className={`${fieldClasses} resize-none`}
        />
      </div>

      <MagneticButton type="submit" variant="primary" className="w-fit">
        Submit Inquiry
      </MagneticButton>
    </form>
  );
}
