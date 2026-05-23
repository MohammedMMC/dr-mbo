"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const localeOptions = [
    { value: "ar", label: "العربية" },
    { value: "en", label: "English" },
    { value: "tr", label: "Türkçe" },
];

type LocaleDropdownProps = {
    id: string;
    label: string;
    value: string;
    isMobile: boolean;
    onChange: (nextLocale: string) => void;
};

export default function LocaleDropdown({
    id,
    label,
    value,
    isMobile,
    onChange,
}: LocaleDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const activeOption = localeOptions.find((option) => option.value === value) ?? localeOptions[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!wrapperRef.current) return;
            if (!wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <div
            ref={wrapperRef}
            className={isMobile ? "relative w-full" : "relative w-18"}
        >
            <button
                id={`${id}-button`}
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className={`flex w-auto items-center ${isMobile ? "rounded-xl px-3 py-2" : "rounded-full px-3 py-1.5"} justify-between gap-2 bg-white/10 text-sm text-white border border-white/20 transition-colors duration-200 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70`}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-controls={`${id}-listbox`}
                aria-label={label}
            >
                <span className="text-sm font-semibold tracking-[0.2em]">
                    {activeOption.label}
                </span>
                <ChevronDown
                    className={`h-4 w-4 text-white/70 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        id={`${id}-listbox`}
                        role="listbox"
                        aria-labelledby={`${id}-button`}
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                        className={
                            isMobile
                                ? "mt-2 w-full rounded-xl border border-white/15 bg-primary/95 p-1 shadow-lg shadow-primary/20 backdrop-blur-lg"
                                : "absolute inset-e-0 mt-2 w-30 rounded-xl border border-white/15 bg-primary/95 p-1 shadow-lg shadow-primary/20 backdrop-blur-lg"
                        }
                    >
                        {localeOptions.map((option) => {
                            const isSelected = option.value === value;
                            return (
                                <li key={option.value}>
                                    <button
                                        type="button"
                                        role="option"
                                        aria-selected={isSelected}
                                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-white/90 transition-colors duration-150 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 ${isSelected ? "bg-white/15 text-white" : ""}`}
                                        onClick={() => {
                                            onChange(option.value);
                                            setIsOpen(false);
                                        }}
                                    >
                                        <span className="font-semibold tracking-[0.2em]">
                                            {option.label}
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}
