"use client";

import { useLocale, useTranslations } from "next-intl";
import ScreenLayout from "@/components/ScreenLayout";
import Image from "next/image";
import { Brain, HeartPulse, LockKeyhole, Search, MapPin, Phone, Mail } from "lucide-react";

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <ScreenLayout>
      <section className="mb-40">
        <div className={`-z-10 absolute top-[clamp(3rem,12vw,18rem)] ${locale == "ar" ? "right-0" : "left-0"} h-[clamp(2rem,5.5vw,5rem)] sm:w-1/6 w-1/8 bg-primary/60 rounded-e-full backdrop-blur-lg`}></div>
        <div className={`-z-10 absolute top-[calc(clamp(3rem,12vw,18rem)+clamp(2rem,5.5vw,5rem))] translate-y-1/4 ${locale == "ar" ? "right-0" : "left-0"} h-[clamp(2rem,5.5vw,5rem)] sm:w-1/4 w-1/5 bg-primary/30 rounded-e-full backdrop-blur-lg`}></div>

        <div className="relative w-full">
          <p className={`font-bold text-neutral-400 text-[clamp(1rem,3vw,2rem)] absolute ${locale == "ar" ? "left-1/9" : "right-1/9"} top-1/4`}>{`“${t("quote")}”`}</p>
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

            <a href="https://kashkoolbooks.com/product/%D8%A8%D8%A7%D8%B1%D8%A7%D9%86%D9%88%D9%8A%D8%A7-%D8%AD%D9%84%D8%A8" className="text-center cursor-pointer bg-[#8b1237] hover:bg-[#6a0d2a] text-white font-bold md:py-3 py-2 px-6 rounded-3xl mt-6">
              {t("books.buy")}
            </a>
          </div>
        </div>
      </section>

      {/* <section id="blog" className="py-40">bbbbb</section> */}

      <section id="contact" className="py-40">
        <h2 className="section-title">{t("titles.contact")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-20">
          <a href="https://maps.google.com/?q=Mezitli,+Mersin,+Turkey" target="_blank" rel="noreferrer" className="flex items-center gap-3 sm:gap-4 bg-primary/20 hover:bg-primary/30 transition-colors p-3 sm:p-4 rounded-2xl sm:rounded-3xl border-2 border-primary/20 backdrop-blur-[1px]">
            <div className="bg-primary/30 p-2.5 sm:p-4 rounded-full text-primary">
              <MapPin strokeWidth={2} className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[0.7rem] sm:text-sm text-neutral-500 font-bold uppercase tracking-wider">{t("contact.location")}</span>
              <span className="font-semibold text-neutral-700 text-base sm:text-lg break-words">Mezitli, Mersin, Turkey</span>
            </div>
          </a>

          <a href="tel:+905525035191" className="flex items-center gap-3 sm:gap-4 bg-primary/20 hover:bg-primary/30 transition-colors p-3 sm:p-4 rounded-2xl sm:rounded-3xl border-2 border-primary/20 backdrop-blur-[1px]">
            <div className="bg-primary/30 p-2.5 sm:p-4 rounded-full text-primary">
              <Phone strokeWidth={2} className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[0.7rem] sm:text-sm text-neutral-500 font-bold uppercase tracking-wider">{t("contact.phone")}</span>
              <span className="font-semibold text-neutral-700 text-base sm:text-lg break-words" dir="ltr">+90 552 503 51 91</span>
            </div>
          </a>

          <a href="mailto:drmahmutbesiroglu@gmail.com" className="flex items-center gap-3 sm:gap-4 bg-primary/20 hover:bg-primary/30 transition-colors p-3 sm:p-4 rounded-2xl sm:rounded-3xl border-2 border-primary/20 backdrop-blur-[1px]">
            <div className="bg-primary/30 p-2.5 sm:p-4 rounded-full text-primary">
              <Mail strokeWidth={2} className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[0.7rem] sm:text-sm text-neutral-500 font-bold uppercase tracking-wider">{t("contact.email")}</span>
              <span className="font-semibold text-neutral-700 text-base sm:text-lg break-words">drmahmutbesiroglu@gmail.com</span>
            </div>
          </a>

          <a href="https://instagram.com/dr.mahmut_besiroglu" target="_blank" rel="noreferrer" className="flex items-center gap-3 sm:gap-4 bg-primary/20 hover:bg-primary/30 transition-colors p-3 sm:p-4 rounded-2xl sm:rounded-3xl border-2 border-primary/20 backdrop-blur-[1px]">
            <div className="bg-primary/30 p-2.5 sm:p-4 rounded-full text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="currentColor" viewBox="60 60 520 520">
                <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
              </svg>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[0.7rem] sm:text-sm text-neutral-500 font-bold uppercase tracking-wider">{t("contact.instagram")}</span>
              <span className="font-semibold text-neutral-700 text-base sm:text-lg break-words">@dr.mahmut_besiroglu</span>
            </div>
          </a>
        </div>
      </section>
    </ScreenLayout>
  );
}