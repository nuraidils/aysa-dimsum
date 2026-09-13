import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
// @ts-ignore - Next.js resolves global CSS imports at build time.
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = "https://aysadimsum.com";
const title = "Aysa Dimsum — Dimsum Kukus & Goreng Balaraja, Pesan via WhatsApp";
const description =
  "Aysa Dimsum, Griya Sutera Balaraja. Dimsum original, goreng, mentai, tartar, chili oil, sampai kuah keju creamy — dibuat fresh setiap hari, siap pesan lewat WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Aysa Dimsum",
    "dimsum Balaraja",
    "dimsum Tangerang",
    "jual dimsum",
    "dimsum kukus",
    "dimsum goreng",
    "dimsum mentai",
    "dimsum kuah keju",
    "dimsum bakar",
    "pesan dimsum online",
    "dimsum Griya Sutera",
    "frozen dimsum Balaraja",
  ],
  authors: [{ name: "Aysa Dimsum" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Aysa Dimsum",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/logo-hero.webp",
        width: 640,
        height: 640,
        alt: "Logo Aysa Dimsum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo-hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${outfit.variable} ${jakarta.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
