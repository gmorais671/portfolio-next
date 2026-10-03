import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/data/translations";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { LiveSystems } from "@/components/LiveSystems";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return { alternates: { canonical: `/${locale}`, languages: { "pt-BR": "/pt", en: "/en", "x-default": "/pt" } } };
}
export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <><Header locale={locale} /><main id="main-content"><Hero locale={locale} /><ProjectsSection locale={locale} featured /><LiveSystems locale={locale} /><ProjectsSection locale={locale} /><AboutSection locale={locale} /><ContactSection locale={locale} /></main><Footer locale={locale} /></>;
}
