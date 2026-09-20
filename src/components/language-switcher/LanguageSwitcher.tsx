"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const switchLanguage = () => {
        const nextLocale = locale === "en" ? "ar" : "en";

        router.replace(pathname, {
            locale: nextLocale,
        });
    };

    return (
        <button
            type="button"
            onClick={switchLanguage}
            className="text-[14px] font-medium"
            aria-label={
                locale === "en"
                    ? "Switch to Arabic"
                    : "Switch to English"
            }
        >
            {locale === "en" ? "العربية" : "English"}
        </button>
    );
}