import { Suspense } from "react";

import Breadcrumbs from "@/components/ui/Breadcrumbs";

import CourseSearch from "./CourseSearch";

type BreadcrumbItem = {
    label: string;
    href?: string;
};

type PageHeaderProps = {
    title: string;
    breadcrumbs: BreadcrumbItem[];
    description?: string;
    showSearch?: boolean;
};

export default function PageHeader({
    title,
    breadcrumbs,
    description,
    showSearch = false,
}: PageHeaderProps) {
    return (
        <section className="mt-10 text-white">
            {/* Breadcrumb */}
            <Breadcrumbs items={breadcrumbs} />

            {/* Header Content */}
            <div
                className="
                    mx-auto
                    py-8
                    text-center

                    sm:py-10

                    lg:py-12
                "
            >
                {/* Title */}
                <h1
                    className="
                        text-[30px]
                        font-semibold
                        leading-[1.25]

                        sm:text-[38px]

                        lg:text-[48px]
                    "
                >
                    {title}
                </h1>

                {/* Description */}
                {description && (
                    <p
                        className="
                            mx-auto
                            mt-4
                            max-w-[700px]
                            text-[14px]
                            font-normal
                            leading-[1.5]

                            sm:text-[16px]

                            lg:text-[18px]
                        "
                    >
                        {description}
                    </p>
                )}

                {/* Courses Search */}
                {showSearch && (
                    <Suspense
                        fallback={
                            <div
                                className="
                                    mx-auto
                                    mt-8
                                    h-[52px]
                                    w-full
                                    max-w-[760px]
                                    rounded-[12px]
                                    bg-white/10

                                    sm:mt-10
                                    sm:h-[58px]

                                    lg:h-[64px]
                                    lg:rounded-[14px]
                                "
                            />
                        }
                    >
                        <CourseSearch />
                    </Suspense>
                )}
            </div>
        </section>
    );
}