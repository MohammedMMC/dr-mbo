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
        <div className="absolute top-1/6 right-0 h-20 w-1/6 bg-primary/60 rounded-l-full"></div>
        <div className="absolute top-1/4 translate-y-1/4 right-0 h-20 w-1/4 bg-primary/30 rounded-l-full"></div>
        <div className="relative w-full">
          <div className={"flex flex-row justify-center"}>
            <h1 className={"font-black text-primary mt-[clamp(1.5rem,5.5vw,5rem)] text-[clamp(1.5rem,5.5vw,4.8rem)]"}>
              {t("firstname")}
            </h1>
            <div className="relative w-[clamp(10rem,30vw,100%)]">
              <div className="absolute -left-1/3 bottom-0 h-1/4 w-full bg-primary/30 rounded-full -z-10"></div>
              <div className="absolute -right-1/2 sm:-bottom-12 -bottom-8 h-1/4 w-[120%] bg-primary/50 rounded-full -z-10"></div>
              {/* <div className="absolute -right-1/2 sm:-top-12 -left-8 h-[calc(50%+50px)] w-full bg-primary/50 rounded-full -z-10"></div> */}

              <Image
                className="shadow-[0_15px_20px_-28px_black] h-auto w-[clamp(10rem,30vw,100%)] max-h-125 rounded-br-[clamp(3rem,8vw,9rem)] self-start object-contain z-10"
                src="/images/person-side.png"
                alt={`${t("name")}'s picture`}
                width={500}
                height={600}
              />
            </div>
            <h1 className={"font-black whitespace-nowrap text-primary self-end ms-[clamp(0rem,5vw,2rem)] mb-[clamp(1.5rem,5.5vw,5rem)] text-[clamp(2rem,5.5vw,4.8rem)]"}>
              {t("lastname")}
            </h1>
          </div>
        </div>
      </section>

      <section id="about" className="h-screen">bbbbb</section>
    </ScreenLayout>
  );
}