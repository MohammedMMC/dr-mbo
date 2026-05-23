"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LocaleDropdown from "@/components/LocaleDropdown";

const navItems = ["home", "about", "books", /* "blog", */ "contact"];

export default function Navbar() {
    const locale = useLocale();
    const t = useTranslations();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);

    const handleLocaleSelect = (nextLocale: string) => {
        if (nextLocale === locale) {
            setIsOpen(false);
            return;
        }

        const hash = typeof window !== "undefined" ? window.location.hash : "";
        setIsOpen(false);
        router.replace(`${pathname}${hash}`, { locale: nextLocale });
    };

    return (
        <nav>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="sm:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-20 self-end ms-auto"
                aria-label="Toggle menu"
            >
                <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -8, scaleY: 0.92 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: -8, scaleY: 0.92 }}
                        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                        style={{ transformOrigin: "top" }}
                        className={`sm:hidden absolute top-[calc(100%+0.5rem)] ${locale === "ar" ? "left-0" : "right-0"}
                                   bg-primary/90 backdrop-blur-lg border-2 border-e-0 border-primary
                                   rounded-s-2xl shadow-lg shadow-primary/20
                                   flex flex-col items-stretch overflow-hidden z-50 py-2`}
                    >
                        {navItems.map((item, i) => (
                            <motion.a
                                key={item}
                                href={`#${item}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.2, delay: i * 0.05 }}
                                onClick={() => setIsOpen(false)}
                                className="text-sm text-white px-6 py-2.5 mx-2 my-0.5 rounded-xl text-center
                                           hover:bg-white/10 active:bg-white/20
                                           transition-colors duration-200"
                            >
                                {t(`navbar.${item}`)}
                            </motion.a>
                        ))}
                        <div className="mt-1 px-6 py-2 border-t border-white/10">
                            <p className="text-[0.7rem] text-white/70 uppercase tracking-[0.2em]">
                                {t("navbar.language")}
                            </p>
                            <div className="mt-2">
                                <LocaleDropdown
                                    id="mobile-language"
                                    label={t("navbar.language")}
                                    value={locale}
                                    isMobile={true}
                                    onChange={handleLocaleSelect}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="hidden sm:flex items-center justify-end relative">
                {navItems.map((item) => (
                    <a
                        key={item}
                        href={`#${item}`}
                        className="relative text-sm z-10 text-white px-8 py-1.5 transition-colors duration-200 rounded-full"
                        onMouseEnter={() => setHoveredSection(item)}
                        onMouseLeave={() => setHoveredSection(null)}
                    >
                        {(hoveredSection || "home") === item && (
                            <motion.div
                                layoutId="nav-pill"
                                className="absolute inset-0 bg-secondary rounded-full -z-10"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        {t(`navbar.${item}`)}
                    </a>
                ))}
                <div className="ms-3">
                    <LocaleDropdown
                        id="desktop-language"
                        label={t("navbar.language")}
                        value={locale}
                        isMobile={false}
                        onChange={handleLocaleSelect}
                    />
                </div>
            </div>
        </nav>
    );
}