import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { BrandIntro, introScript } from "@/components/layout/BrandIntro";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

const title = "Clikium — Desarrollo web y software a medida en Chile";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s · Clikium",
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title, description: site.description },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#07111f",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/clikium-logo.png`,
  email: site.email,
  telephone: site.phone,
  description: site.description,
  areaServed: { "@type": "Country", name: "Chile" },
  address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
  knowsAbout: ["Desarrollo web", "E-commerce", "Software a medida", "Integraciones", "Diseño UI/UX"],
  sameAs: [site.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* data-intro se agrega antes de hidratar; de ahí suppressHydrationWarning */}
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body>
        <BrandIntro />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-silver-100 focus:px-4 focus:py-2 focus:text-ink-950"
        >
          Saltar al contenido
        </a>
        <MotionProvider>{children}</MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
