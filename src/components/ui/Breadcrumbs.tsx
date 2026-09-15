import { ChevronRight } from "lucide-react";
import Link from "next/link";

type BreadcrumbItem = {
    label: string;
    href?: string;
};

type BreadcrumbsProps = {
    items: BreadcrumbItem[];
};

export default function Breadcrumbs({
    items,
    }: BreadcrumbsProps) {
    return (
        <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2">
            {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
                <li
                key={`${item.label}-${index}`}
                className="flex items-center gap-2"
                >
                {item.href && !isLast ? (
                    <Link
                        href={item.href}
                        className="
                            text-[16px]
                            font-normal
                            transition-colors
                            hover:text-[var(--color-blue-medium)]
                        "
                    >
                    {item.label}
                    </Link>
                ) : (
                    <span>
                        {item.label}
                    </span>
                )}

                {!isLast && (
                    <ChevronRight
                    size={16}
                    strokeWidth={1.75}
                    className="text-[var(--color-grey-disable)]"
                    aria-hidden="true"
                    />
                )}
                </li>
            );
            })}
        </ol>
        </nav>
    );
}