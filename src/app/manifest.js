import { siteConfig } from "@/lib/site-config";

export default function manifest() {
  return {
    name: siteConfig.name,
    short_name: "Ebenezer",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fbf9f6",
    theme_color: "#e0672a",
    icons: [
      {
        src: "/images/logo.webp",
        sizes: "107x122",
        type: "image/webp",
      },
    ],
  };
}
