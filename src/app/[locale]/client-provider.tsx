"use client";

import { NextIntlClientProvider } from "next-intl";
import { ReactNode, useEffect } from "react";

interface ClientProviderProps {
  children: ReactNode;
  locale: string;
  messages: Record<string, string>;
}

export function ClientProvider({
  children,
  locale,
  messages,
}: ClientProviderProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
