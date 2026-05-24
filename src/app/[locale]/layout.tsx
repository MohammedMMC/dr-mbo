import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ClientProvider } from "./client-provider";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale });
  const ogLocaleMap: Record<string, string> = {
    en: "en_US",
    ar: "ar_AR",
    tr: "tr_TR",
  };
  const rawKeywords = t.raw("seo.keywords");
  const keywords = Array.isArray(rawKeywords)
    ? rawKeywords
    : rawKeywords
      ? [String(rawKeywords)]
      : undefined;
  const nameTitle = t("name");
  const professionalTitle = t("professional.title");
  const fullTitle = professionalTitle
    ? `${nameTitle} | ${professionalTitle}`
    : nameTitle;
  const ogLocale = ogLocaleMap[locale] ?? locale;
  const alternateLocale = routing.locales
    .filter((item) => item !== locale)
    .map((item) => ogLocaleMap[item] ?? item);

  return {
    title: fullTitle,
    description: t("seo.description"),
    applicationName: t("seo.siteName"),
    authors: [{ name: nameTitle }],
    creator: nameTitle,
    publisher: nameTitle,
    keywords,
    referrer: "origin-when-cross-origin",
    category: "Health",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: locale === routing.defaultLocale ? "/" : `/${locale}`,
      languages: routing.locales.reduce<Record<string, string>>(
        (acc, currentLocale) => {
          acc[currentLocale] =
            currentLocale === routing.defaultLocale ? "/" : `/${currentLocale}`;
          return acc;
        },
        {}
      ),
    },
    openGraph: {
      type: "website",
      title: fullTitle,
      description: t("seo.description"),
      siteName: t("seo.siteName"),
      url: locale === routing.defaultLocale ? "/" : `/${locale}`,
      locale: ogLocale,
      alternateLocale,
      images: [
        {
          url: "/images/person-side.png",
          alt: t("seo.imageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: t("seo.description"),
      images: ["/images/person-side.png"],
    },
  };
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
