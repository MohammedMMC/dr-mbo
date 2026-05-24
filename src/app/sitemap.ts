import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = routing.locales.map((locale) =>
    locale === routing.defaultLocale ? "/" : `/${locale}`
  );

  return routes.map((path) => ({
    url: new URL(path, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
