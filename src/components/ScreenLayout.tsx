import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "./Footer";

type ScreenLayoutProps = {
    children?: ReactNode;
};

export default function ScreenLayout({
    children,
}: ScreenLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col relative overflow-x-hidden">
            <Navbar />

            <main className="mx-auto w-full max-w-6xl px-6 py-10">
                {/* max width: max-w-6xl */}
                {children}
            </main>

            <Footer />
        </div>
    );
}