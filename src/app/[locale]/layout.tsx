import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n.config";
import { ClientProvider } from "./client-provider";

export const metadata: Metadata = {
  title: "Dr. MBO",
  description: "Dr. MBO Website",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  
  setRequestLocale(locale);

  // Dynamically import messages for the current locale
  const localeMessages = await import(`@/translation/${locale}.json`).then(
    (mod) => mod.default
  );

  return (
    <ClientProvider locale={locale} messages={localeMessages}>
      {children}
    </ClientProvider>
  );
}
