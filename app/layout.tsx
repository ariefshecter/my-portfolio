import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import { profile, SITE_URL } from "@/content/profile";
import { PersonJsonLd, WebSiteJsonLd } from "@/components/json-ld";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK"],
});

const description =
  "Junior Full Stack Developer from Lampung, Indonesia. Next.js and TypeScript frontends, Laravel and Go/Fiber backends, PostgreSQL and MySQL workflows, plus applied Python and machine learning.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description,
  applicationName: `${profile.name} portfolio`,
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  keywords: [
    "Ferry Khusnil Arief",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "Laravel",
    "Go Fiber",
    "PostgreSQL",
    "Lampung",
    "Indonesia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: `${profile.name} — ${profile.role}`,
    title: `${profile.name} — ${profile.role}`,
    description,
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        url: "/images/projects/campus-reservation/home-hero.jpg",
        width: 1350,
        height: 576,
        alt: "UniSpace campus reservation landing page built with Next.js and a Go/Fiber API.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description,
    images: ["/images/projects/campus-reservation/home-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.ico"],
  },
};

export const viewport: Viewport = {
  themeColor: "#171613",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-editorial focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <PersonJsonLd />
        <WebSiteJsonLd />
      </body>
    </html>
  );
}
