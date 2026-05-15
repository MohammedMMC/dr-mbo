import HomePage from "@/components/HomePage";
import { ClientProvider } from "./[locale]/client-provider";
import { setRequestLocale } from "next-intl/server";

export default async function RootPage() {
    const locale = "ar";
    const messages = (await import(`@/translation/${locale}.json`)).default;

    setRequestLocale(locale);

    return (
        <ClientProvider locale={locale} messages={messages}>
            <HomePage />
        </ClientProvider>
    );
} 