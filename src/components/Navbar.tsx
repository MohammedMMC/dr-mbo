"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion } from "framer-motion";

const navItems = ["home", "about", "books", "blog", "contact"];

export default function Navbar() {
    const t = useTranslations();
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);

    return (
        <nav className="relative flex items-center justify-start p-4">
            <div className="flex items-center justify-end gap-2 relative">
                {navItems.map((item) => (
                    <a
                        key={item}
                        href={`#${item}`}
                        className="relative px-4 py-2 text-sm transition-colors duration-300 z-10 hover:text-white"
                        onMouseEnter={() => setHoveredSection(item)}
                        onMouseLeave={() => setHoveredSection(null)}
                    >
                        {(hoveredSection || "home") === item && (
                            <motion.div
                                layoutId="nav-pill"
                                className="absolute inset-0 bg-white/20 rounded-full -z-10"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        {t(`navbar.${item}`)}
                    </a>
                ))}
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="sm:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-20"
                aria-label="Toggle menu"
            >
                <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
        </nav>
    );
} 