"use client";

import { usePathname } from "next/navigation";

import PageHeader from "./PageHeader";

type PageHeaderConfig = {
    title: string;
    description?: string;
};

const pageHeaders: Record<string, PageHeaderConfig> = {
    "/about": {
        title: "About Us",
    },

    "/courses": {
        title: "Explore Our Courses",
        description: "Limitless learning, more possibilities",
    },

    "/careers": {
        title: "Careers",
    },

    "/contact": {
        title: "Contact Us",
    },

    "/blog": {
        title: "Blog",
    },

    "/policy": {
        title: "Privacy Policy",
    },

    "/terms": {
        title: "Terms & Conditions",
    },
};

export default function DynamicPageHeader() {
    const pathname = usePathname();

    // Homepage has its own hero, so don't show PageHeader.
    if (pathname === "/") {
        return null;
    }

    const page = pageHeaders[pathname];

    // Dynamic/special pages can provide their own PageHeader.
    if (!page) {
        return null;
    }

    return (
        <PageHeader
            title={page.title}
            description={page.description}
            breadcrumbs={[
                {
                    label: "Home",
                    href: "/",
                },
                {
                    label: page.title,
                },
            ]}
        />
    );
}