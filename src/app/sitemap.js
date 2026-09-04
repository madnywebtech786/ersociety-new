import { siteConfig } from "@/lib/site-config";
import { programs } from "@/lib/content/programs";
import { services } from "@/lib/content/services";

const STATIC_ROUTES = [
  { path: "", changeFrequency: "yearly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/mission", changeFrequency: "yearly", priority: 0.6 },
  { path: "/vision", changeFrequency: "yearly", priority: 0.6 },
  { path: "/board", changeFrequency: "monthly", priority: 0.6 },
  { path: "/programs", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/activities", changeFrequency: "weekly", priority: 0.7 },
  { path: "/gallery", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
];

export default function sitemap() {
  const lastModified = new Date();

  const staticEntries = STATIC_ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const programEntries = programs.map((program) => ({
    url: `${siteConfig.url}/programs/${program.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const serviceEntries = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...programEntries, ...serviceEntries];
}
