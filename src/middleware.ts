import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n.config";

export default createMiddleware({
  locales,
  defaultLocale: "ar",
  localePrefix: "always",
});

export const config = {
  matcher: [
    "/(ar|en|tr)/:path*",
    "/((?!_next|_vercel|.*\\..*).+)",
  ],
};
