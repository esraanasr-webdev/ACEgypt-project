"use client";

import { useTranslations } from "next-intl";

import { usePathname } from "@/i18n/navigation";
import PageHeader from "./PageHeader";

type PageHeaderConfig = {
    key: string;
    hasDescription?: boolean;
    breadcrumbKey?: string;
};

const pageHeaders: Record<string, PageHeaderConfig> = {
    "/about": {
        key: "about",
    },

    "/courses": {
        key: "courses",
        hasDescription: true,
        breadcrumbKey: "courses.breadcrumb",
    },

    "/careers": {
        key: "careers",
    },

    "/contact": {
        key: "contact",
    },

    "/blog": {
        key: "blog",
    },

    "/policy": {
        key: "policy",
    },

    "/terms": {
        key: "terms",
    },
};

export default function DynamicPageHeader() {
    const pathname = usePathname();
    const t = useTranslations("PageHeader");

    // Homepage has its own hero, so don't show PageHeader.
    if (pathname === "/") {
        return null;
    }

    const page = pageHeaders[pathname];

    // Dynamic/special pages can provide their own PageHeader.
    if (!page) {
        return null;
    }

    const title = t(`${page.key}.title`);

    return (
        <PageHeader
            title={title}
            description={
                page.hasDescription
                    ? t(`${page.key}.description`)
                    : undefined
            }
            breadcrumbs={[
                {
                    label: t("home"),
                    href: "/",
                },
                {
                    label: page.breadcrumbKey
                        ? t(page.breadcrumbKey)
                        : title,
                },
            ]}
        />
    );
}