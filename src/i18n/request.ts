import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { hasLocale } from "next-intl";

export default getRequestConfig(async ({ locale }) => {
  const requestedLocale = await locale;
  const resolvedLocale = hasLocale(routing.locales, requestedLocale)
    ? requestedLocale
    : routing.defaultLocale;

  return {
    locale: resolvedLocale,
    timeZone: "UTC",
    messages: (await import(`../translation/${resolvedLocale}.json`)).default,
  };
});
