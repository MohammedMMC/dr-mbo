import { setRequestLocale } from "next-intl/server";
import { ClientProvider } from "./client-provider";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const localeMessages = await import(`@/translation/${locale}.json`).then(
    (mod) => mod.default
  );

  return (
    <ClientProvider locale={locale} messages={localeMessages}>
      {children}
    </ClientProvider>
  );
}
