import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { useTranslations } from "next-intl";

type ScreenLayoutProps = {
    children?: ReactNode;
};

export default function ScreenLayout({
    children,
}: ScreenLayoutProps) {
    const t = useTranslations();

    return (
        <div className="min-h-screen flex flex-col relative overflow-x-hidden">
            <Navbar />

            <main className="mx-auto w-full max-w-6xl px-6 py-10">
                {children}
            </main>

            <footer className="bg-primary text-white font-semibold text-center text-sm py-12 mt-auto border-b-8 border-secondary">
                {t("name")} &copy; {new Date().getFullYear()}
            </footer>
        </div>
    );
} 