import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";

const FONT_INTER = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const FONT_CAIRO = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Dr. MBO",
  description: "Dr. MBO Website",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale = "ar" } = await params;

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${FONT_INTER.variable} ${FONT_CAIRO.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
