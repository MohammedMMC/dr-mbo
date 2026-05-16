"use client";

import { locales } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import ScreenLayout from "@/components/ScreenLayout";
import Image from "next/image";

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const isAR = locale === "ar";

  const otherLocales = locales.filter((language) => language !== locale);

  return (
    <ScreenLayout>
      <section id="home" className="h-screen">
        <div className="relative w-full">
          <h1 className={"text-8xl font-bold text-primary absolute top-20 left-[3%] " + (isAR ? "right-[5%] left-px" : "")}>
            {t("firstname")}
          </h1>
          <h1 className={"text-8xl font-bold text-primary absolute top-60 left-[50%] " + (isAR ? "right-[50%] left-px" : "")}>
            {t("lastname")}
          </h1>
          <div className={"absolute max-w-md left-[24%] -top-6 " + (isAR ? "right-[24%] left-px" : "")}>
            <Image
              className="h-125 w-auto"
              src="/images/person-side.png"
              alt={`${t("name")}'s picture`}
              width={500}
              height={600}
            />
          </div>
        </div>
      </section>

      <section id="about" className="h-screen">bbbbb</section>
    </ScreenLayout>
  );
}