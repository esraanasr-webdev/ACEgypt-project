import { ChevronRight } from "lucide-react";
import Link from "next/link";

type BreadcrumbItem = {
    label: string;
    href?: string;
};

type PageHeaderProps = {
    title: string;
    breadcrumbs: BreadcrumbItem[];
};

export default function PageHeader({
    title,
    breadcrumbs,
    }: PageHeaderProps) {
    return (
        <section
            className="
                rounded-b-[28px]
                bg-[var(--color-blue-dark)]
                px-6
                pb-10
                pt-4
                text-white
            "
        >
            <div className="mx-auto max-w-[1200px]">
                <nav
                    aria-label="Breadcrumb"
                    className="flex items-center gap-1 text-[16px] font-normal"
                >
                {breadcrumbs.map((item, index) => {
                    const isLast = index === breadcrumbs.length - 1;

                    return (
                    <div
                        key={`${item.label}-${index}`}
                        className="flex items-center gap-1"
                    >
                        {item.href && !isLast ? (
                        <Link
                            href={item.href}
                            className="transition-opacity hover:opacity-80"
                        >
                            {item.label}
                        </Link>
                        ) : (
                        <span className="font-medium">{item.label}</span>
                        )}

                        {!isLast && (
                        <ChevronRight
                            size={12}
                            strokeWidth={1.75}
                            aria-hidden="true"
                        />
                        )}
                    </div>
                    );
                })}
                </nav>

                <h1
                    className="
                        mt-8
                        text-center
                        text-[48px]
                        font-semibold
                        leading-[1.5]
                    "
                >
                {title}
                </h1>
            </div>
        </section>
    );
}