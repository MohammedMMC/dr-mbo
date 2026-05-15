"use client";

import { useTranslations } from "next-intl";

export default function Navbar() {
    const t = useTranslations();

    return (
        <nav>
            {["home", "about", "books", "blog", "contact"].map((item) => (
                <a
                    key={item}
                    href={`#${item}`}
                    className="text-white hover:text-gray-300"
                >{t(`navbar.${item}`)}</a>
            ))}
        </nav>
    );
} 