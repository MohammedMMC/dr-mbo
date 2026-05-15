import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "ar", "tr"] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = locale ?? "ar";
  return {
    locale: resolvedLocale,
    messages: (await import(`./translation/${resolvedLocale}.json`)).default,
  };
});
