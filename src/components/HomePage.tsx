"use client";

import { useLocale, useTranslations } from "next-intl";
import ScreenLayout from "@/components/ScreenLayout";
import Image from "next/image";
import { routing } from "@/i18n/routing";
import { Brain, HeartPulse, LockKeyhole, Search } from "lucide-react";

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const isAR = locale === "ar";
  const otherLocales = routing.locales.filter((language) => language !== locale);

  return (
    <ScreenLayout>
      <section id="home" className="mb-40">
        <div className="-z-10 absolute top-[clamp(3rem,12vw,18rem)] right-0 h-[clamp(2rem,5.5vw,5rem)] sm:w-1/6 w-1/8 bg-primary/60 rounded-l-full backdrop-blur-lg"></div>
        <div className="-z-10 absolute top-[calc(clamp(3rem,12vw,18rem)+clamp(2rem,5.5vw,5rem))] translate-y-1/4 right-0 h-[clamp(2rem,5.5vw,5rem)] sm:w-1/4 w-1/5 bg-primary/30 rounded-l-full backdrop-blur-lg"></div>

        <div className="relative w-full">
          <p className="font-bold text-neutral-400 text-[clamp(1rem,3vw,2rem)] absolute left-1/9 top-1/4">{`“${t("quote")}”`}</p>
          <div className={"flex flex-row justify-center"}>
            <h1 className={"font-black text-primary mt-[clamp(1.5rem,5.5vw,5rem)] text-[clamp(1.5rem,5.5vw,4.8rem)] md:drop-shadow-[3px_2px_1px_var(--secondary)] drop-shadow-[2px_1px_1px_var(--secondary)]"}>
              {t("firstname")}
            </h1>
            <div className="relative w-[clamp(10rem,30vw,100%)] xl:w-auto!">
              <div className="absolute -left-1/3 bottom-0 h-1/4 w-full bg-primary/30 rounded-full -z-10 backdrop-blur-lg"></div>
              <div className="absolute -right-1/2 -bottom-[clamp(1rem,5.5vw,3rem)] h-1/4 w-[120%] bg-secondary/90 rounded-full -z-10 backdrop-blur-lg"></div>
              {/* <div className="absolute -right-1/2 sm:-top-12 -left-8 h-[calc(50%+50px)] w-full bg-primary/50 rounded-full -z-10"></div> */}

              <Image
                className="shadow-[0_15px_20px_-28px_black] h-auto min-w-24 w-[clamp(10rem,30vw,100%)] xl:w-auto! max-h-125 rounded-br-[clamp(3rem,6vw,8rem)] self-start object-contain z-10"
                src="/images/person-side.png"
                alt={`${t("name")}'s picture`}
                width={500}
                height={600}
                priority
                loading="eager"
              />
            </div>
            <h1 className={"font-black whitespace-nowrap text-primary self-end ms-[clamp(0rem,5vw,2rem)] mb-[clamp(1.5rem,5.5vw,5rem)] text-[clamp(1.5rem,5.5vw,4.8rem)] md:drop-shadow-[3px_2px_1px_var(--secondary)] drop-shadow-[2px_1px_1px_var(--secondary)]"}>
              {t("lastname")}
            </h1>
          </div>
        </div>
      </section>

      <section id="about" className="py-40">
        <h2 className="section-title">{t("titles.whoami")}</h2>

        <div className="bg-primary/30 rounded-3xl p-6 border-2 border-primary backdrop-blur-[1px] w-full">
          <p className="mt-2 text-base md:text-lg lg:text-xl font-bold text-neutral-700">
            {t("aboutme.0")}
          </p>
          <div className="w-full h-px bg-primary/50 my-4 rounded-full"></div>
          <p className="mt-2 text-base md:text-lg font-semibold text-neutral-700">
            {t("aboutme.1")}
          </p>
          <div className="flex flex-row items-center my-4">
            <div className="w-full h-px bg-primary/50 rounded-full"></div>
            <div className="min-w-1 h-1 bg-primary/50 mx-3 rounded-full"></div>
            <div className="min-w-1 h-1 bg-primary/50 mx-1 rounded-full"></div>
            <div className="min-w-1 h-1 bg-primary/50 mx-3 rounded-full"></div>
            <div className="w-full h-px bg-primary/50 rounded-full"></div>
          </div>
          <p className="mt-2 text-base md:text-lg font-semibold text-neutral-700">
            {t("aboutme.2")}
          </p>
          <br />
          <p className="mt-2 text-base md:text-lg font-semibold text-neutral-700">
            {t("aboutme.3")}
          </p>
          <br />
          <p className="mt-2 text-base md:text-lg font-semibold text-neutral-700">
            {t("aboutme.4")}
          </p>
          <div className="w-full h-px bg-primary/50 my-4 rounded-full"></div>
          <p className="mt-2 text-base md:text-lg font-semibold text-neutral-700">
            {t("aboutme.5")}
          </p>
        </div>

      </section>

      <section id="books" className="py-40 relative">
        <h2 className="section-title">{t("titles.books")}</h2>
        <div className="bg-[#f3e4d1] flex sm:flex-row flex-col p-4 rounded-4xl border-2 border-[#8b1237]">
          <Image
            className="block lg:block sm:hidden object-contain sm:w-[clamp(10rem,20vw,20rem)] w-full h-full my-auto saturate-80 rounded-3xl"
            src="/images/books/paranoia-aleppo.jpg"
            alt={`${t("books.paranoia-aleppo.title")} book cover`}
            width={500}
            height={600}
            loading="lazy"
          />
          <div className="flex flex-col justify-between lg:ps-6 pt-2 sm:pt-0">
            <div className="flex flex-row gap-4 lg:gap-0">
              <Image
                className="hidden sm:block lg:hidden row-span-2 object-contain sm:w-[clamp(10rem,20vw,20rem)] w-full h-auto saturate-80 rounded-3xl"
                src="/images/books/paranoia-aleppo.jpg"
                alt={`${t("books.paranoia-aleppo.title")} book cover`}
                width={500}
                height={600}
                loading="lazy"
              />
              <div>
                <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-black text-[#8b1237]">{t("books.paranoia-aleppo.title")}</h2>
                <p className="mt-2 text-base md:text-lg lg:text-xl font-semibold text-neutral-700">{t("books.paranoia-aleppo.description")}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 mt-6">
              <div className="flex flex-col items-center text-center p-2.5">
                <LockKeyhole strokeWidth={2} size={48} color="#8b1237" />
                <p className="mt-2 text-sm md:text-base font-semibold text-neutral-700">{t("books.paranoia-aleppo.why.0")}</p>
              </div>
              <div className="flex flex-col items-center text-center p-2.5 border-s-2 border-[#8b1237]">
                <Search strokeWidth={2} size={48} color="#8b1237" />
                <p className="mt-2 text-sm md:text-base font-semibold text-neutral-700">{t("books.paranoia-aleppo.why.1")}</p>
              </div>
              <div className="flex flex-col items-center text-center p-2.5 sm:border-s-2 sm:border-[#8b1237]">
                <HeartPulse strokeWidth={2} size={48} color="#8b1237" />
                <p className="mt-2 text-sm md:text-base font-semibold text-neutral-700">{t("books.paranoia-aleppo.why.2")}</p>
              </div>
              <div className="flex flex-col items-center text-center p-2.5 border-s-2 border-[#8b1237]">
                <Brain strokeWidth={2} size={48} color="#8b1237" />
                <p className="mt-2 text-sm md:text-base font-semibold text-neutral-700">{t("books.paranoia-aleppo.why.3")}</p>
              </div>
            </div>

            <a href="#" className="text-center cursor-pointer bg-[#8b1237] hover:bg-[#6a0d2a] text-white font-bold md:py-3 py-2 px-6 rounded-3xl mt-6">
              {t("books.buy")}
            </a>
          </div>
        </div>
      </section>

      <section id="blog" className="py-40">bbbbb</section>

      <section id="contact" className="py-40">bbbbb</section>

    </ScreenLayout>
  );
}