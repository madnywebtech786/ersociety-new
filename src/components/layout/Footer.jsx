import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { programs } from "@/lib/content/programs";
import { services } from "@/lib/content/services";

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Mission", href: "/mission" },
  { label: "Vision", href: "/vision" },
  { label: "Board of Directors", href: "/board" },
  { label: "Activities", href: "/activities" },
  { label: "Gallery", href: "/gallery" },
];

const CONTACT_DETAILS = [
  { icon: Mail, label: "info@ersociety.ca", href: "mailto:info@ersociety.ca" },
  { icon: Phone, label: "(403) 708-8214", href: "tel:+14037088214" },
  { icon: MapPin, label: "Calgary, Alberta, Canada", href: null },
];

function FooterColumn({ title, children }) {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-primary">
        {title}
      </span>
      {children}
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="font-sans text-sm text-foreground/80 transition-colors hover:text-primary"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="border-t-2 border-primary bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.1fr] lg:gap-6">
          <div className="col-span-2 flex flex-col gap-5 sm:col-span-3 lg:col-span-1">
            <Link href="/#top" className="flex items-center gap-3">
              <Image
                src="/images/logo.webp"
                alt="Ebenezer Relief Society logo"
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
              <span className="font-display text-xl text-foreground">Ebenezer Relief Society</span>
            </Link>
            <p className="max-w-sm font-sans text-sm leading-relaxed text-muted-foreground text-pretty">
              A Calgary, Alberta nonprofit helping immigrant and refugee families settle and
              thrive through education, employment, health, and community programs.
            </p>
          </div>

          <FooterColumn title="Programs">
            <nav className="flex flex-col gap-2.5">
              {programs.map((program) => (
                <FooterLink key={program.slug} href={`/programs/${program.slug}`}>
                  {program.title}
                </FooterLink>
              ))}
            </nav>
          </FooterColumn>

          <FooterColumn title="Services">
            <nav className="flex flex-col gap-2.5">
              {services.map((service) => (
                <FooterLink key={service.slug} href={`/services/${service.slug}`}>
                  {service.title}
                </FooterLink>
              ))}
              <FooterLink href="/programs">
                <span className="inline-flex items-center gap-1.5">
                  All programs
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </FooterLink>
            </nav>
          </FooterColumn>

          <FooterColumn title="Quick Links">
            <nav className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          </FooterColumn>

          <FooterColumn title="Reach Us">
            <div className="flex flex-col gap-3">
              {CONTACT_DETAILS.map(({ icon: Icon, label, href }) => {
                const content = (
                  <>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-sans text-sm text-foreground/80 group-hover:text-primary">
                      {label}
                    </span>
                  </>
                );
                return href ? (
                  <a key={label} href={href} className="group flex items-center gap-3">
                    {content}
                  </a>
                ) : (
                  <div key={label} className="flex items-center gap-3">
                    {content}
                  </div>
                );
              })}
            </div>
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-8 font-sans text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Ebenezer Relief Society. All rights reserved.</p>
          <p>Building hope and changing lives in Calgary, Alberta.</p>
        </div>
      </div>
    </footer>
  );
}
