import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/constants/data";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import CustomCursor from "@/components/shared/CustomCursor";
import LoadingScreen from "@/components/shared/LoadingScreen";
import BackToTop from "@/components/shared/BackToTop";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name} | ${SITE.role}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Portfolio of Ahmed Raza, a Web Developer specializing in Next.js, React and TypeScript — building fast, premium, production-ready web experiences.",
  keywords: [
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Engineer",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: SITE.name, url: SITE.domain }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    url: SITE.domain,
    title: `${SITE.name} | ${SITE.role}`,
    description: SITE.tagline,
    siteName: SITE.name,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: SITE.name }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.role}`,
    description: SITE.tagline,
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: SITE.role,
  url: SITE.domain,
  email: SITE.email,
  address: { "@type": "PostalAddress", addressLocality: SITE.location },
  sameAs: ["https://github.com/", "https://linkedin.com/"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-bg text-text antialiased selection:bg-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LoadingScreen />
        <CustomCursor />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <BackToTop />
      </body>
    </html>
  );
}
