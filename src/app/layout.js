import { Allerta, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site-config";

const allerta = Allerta({
  variable: "--font-allerta",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Ebenezer Relief Society | Immigrant & Refugee Support in Calgary, Alberta",
    template: "%s | Ebenezer Relief Society",
  },
  description: siteConfig.description,
  keywords: [
    "Ebenezer Relief Society",
    "immigrant support Calgary",
    "refugee support Alberta",
    "settlement services Calgary",
    "employment guidance immigrants",
    "community development Calgary",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ebenezer Relief Society | Building Hope, Changing Lives in Calgary",
    description:
      "A Calgary based nonprofit helping immigrant and refugee families settle and thrive through education, employment, health, and community programs.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.logo,
        width: 107,
        height: 122,
        alt: "Ebenezer Relief Society logo",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ebenezer Relief Society | Building Hope, Changing Lives in Calgary",
    description:
      "A Calgary based nonprofit helping immigrant and refugee families settle and thrive through education, employment, health, and community programs.",
    images: [siteConfig.logo],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.logo}`,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    ...siteConfig.address,
  },
  areaServed: {
    "@type": "City",
    name: "Calgary",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${allerta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
