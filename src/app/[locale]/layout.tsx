import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, locales } from "@/data/translations";
import "../globals.css";

// Use the Geist files shipped with the pinned Next.js dependency; no build-time download.
const sans = localFont({ src: "../../../node_modules/next/dist/next-devtools/server/font/geist-latin.woff2", variable: "--font-geist-sans", weight: "100 900", display: "swap" });
const mono = localFont({ src: "../../../node_modules/next/dist/next-devtools/server/font/geist-mono-latin.woff2", variable: "--font-geist-mono", weight: "100 900", display: "swap" });
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return {
    metadataBase: new URL("https://www.gabrielmoraisdev.com.br"),
    title: { default: "Gabriel Morais | Software Engineer · Full-Stack & Mobile", template: "%s | Gabriel Morais" },
    description: getDictionary(locale).metadata.description,
  };
}
export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <html lang={locale === "pt" ? "pt-BR" : "en"} className={`${sans.variable} ${mono.variable} antialiased`}><body>{children}</body></html>;
}
