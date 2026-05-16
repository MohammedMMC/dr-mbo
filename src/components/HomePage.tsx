"use client";

import { locales } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import ScreenLayout from "@/components/ScreenLayout";

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  const otherLocales = locales.filter((language) => language !== locale);

  return (
    <ScreenLayout>
      <div>
        <h1>
          {t("name")}
        </h1>
        <p>
          Current language: <span className="font-semibold uppercase">{locale}</span>
        </p>
      </div>

      <section id="home" className="h-screen">aaaaa</section>
      <section id="about" className="h-screen">bbbbb</section>
    </ScreenLayout>
  );
}