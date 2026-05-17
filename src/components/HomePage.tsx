"use client";

import { useLocale, useTranslations } from "next-intl";
import ScreenLayout from "@/components/ScreenLayout";
import Image from "next/image";
import { routing } from "@/i18n/routing";

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const isAR = locale === "ar";
  const otherLocales = routing.locales.filter((language) => language !== locale);

  return (
    <ScreenLayout>
      <section id="home" className="h-screen">
        <div className="-z-10 absolute top-1/6 right-0 h-20 w-1/6 bg-primary/60 rounded-l-full"></div>
        <div className="-z-10 absolute top-1/4 translate-y-1/4 right-0 h-20 w-1/4 bg-primary/30 rounded-l-full"></div>
        <svg className="-z-10 absolute -top-24 -left-1/2 h-96 fill-primary/30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.7,-52.2C40,-50,45,-39.5,55.4,-29.4C65.9,-19.3,81.7,-9.6,84.2,1.4C86.7,12.5,75.8,25,63.1,31.2C50.4,37.3,35.9,37.1,25.1,44.2C14.2,51.3,7.1,65.6,-3.7,72C-14.6,78.5,-29.1,77,-42.9,71.7C-56.8,66.4,-69.9,57.2,-73.7,44.6C-77.5,32,-72,16,-68.9,1.8C-65.7,-12.4,-65,-24.8,-58.3,-32.3C-51.6,-39.9,-38.9,-42.6,-28.2,-43.4C-17.5,-44.2,-8.7,-43.1,1.5,-45.6C11.7,-48.1,23.3,-54.4,31.7,-52.2Z" transform="translate(100 100)" />
        </svg>

        <div className="relative w-full">
          <div className={"flex flex-row justify-center"}>
            <h1 className={"font-black text-primary mt-[clamp(1.5rem,5.5vw,5rem)] text-[clamp(1.5rem,5.5vw,4.8rem)]"}>
              {t("firstname")}
            </h1>
            <div className="relative w-[clamp(10rem,30vw,100%)]">
              <div className="absolute -left-1/3 bottom-0 h-1/4 w-full bg-primary/30 rounded-full -z-10"></div>
              <div className="absolute -right-1/2 sm:-bottom-12 -bottom-8 h-1/4 w-[120%] bg-secondary/90 rounded-full -z-10"></div>
              {/* <div className="absolute -right-1/2 sm:-top-12 -left-8 h-[calc(50%+50px)] w-full bg-primary/50 rounded-full -z-10"></div> */}

              <Image
                className="shadow-[0_15px_20px_-28px_black] h-auto min-w-24 w-[clamp(10rem,30vw,100%)] max-h-125 rounded-br-[clamp(3rem,6vw,8rem)] self-start object-contain z-10"
                src="/images/person-side.png"
                alt={`${t("name")}'s picture`}
                width={500}
                height={600}
                priority
                loading="eager"
              />
            </div>
            <h1 className={"font-black whitespace-nowrap text-primary self-end ms-[clamp(0rem,5vw,2rem)] mb-[clamp(1.5rem,5.5vw,5rem)] text-[clamp(1.5rem,5.5vw,4.8rem)]"}>
              {t("lastname")}
            </h1>
          </div>
        </div>
      </section>

      <section id="about" className="h-screen">bbbbb</section>
    </ScreenLayout>
  );
}