"use client";

import { locales } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  const otherLocales = locales.filter((language) => language !== locale);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <div>
          <h1>
            {t("welcome")}
          </h1>
          <p>
            Current language: <span className="font-semibold uppercase">{locale}</span>
          </p>
        </div>

        <div>
          {otherLocales.map((language) => (
            <Link
              key={language}
              href={`/${language}`}
            >
              Switch to {language.toUpperCase()}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}