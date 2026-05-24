import type { Metadata, Viewport } from "next";
import { Inter, Cairo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const FONT_INTER = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const FONT_CAIRO = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#059089",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  other: {
    "msapplication-TileColor": "#059089",
  },
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
      <Analytics />
      
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
