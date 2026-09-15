import type { LucideIcon } from "lucide-react";
import {
    BookOpen,
    CalendarClock,
    ChevronRight,
    Download,
    ShoppingCart,
} from "lucide-react";
import Link from "next/link";

type QuickAction = {
    label: string;
    href: string;
    icon: LucideIcon;
    disabled?: boolean;
};

const actions: QuickAction[] = [
    {
        label: "Explore Our Courses",
        href: "/courses",
        icon: BookOpen,
    },
    {
        label: "View My Orders",
        href: "/dashboard/orders",
        icon: ShoppingCart,
    },
    {
        label: "Book Oral Exam",
        href: "/dashboard/schedule",
        icon: CalendarClock,
        disabled: true,
    },
    {
        label: "Download Certificate",
        href: "/dashboard/certificates",
        icon: Download,
        disabled: true,
    },
];

export default function QuickActions() {
    return (
        <section
            className="
                h-[390px]
                w-full
                rounded-[24px]
                bg-white
                px-[24px]
                py-[24px]
            "
        >
            <h2
                className="
                    text-[20px]
                    font-semibold
                    leading-[1.25]
                    text-[var(--color-grey-strong)]
                "
            >
                Quick Actions
            </h2>

            <div
                className="
                    mt-[28px]
                    grid
                    grid-cols-2
                    gap-x-[20px]
                    gap-y-[24px]
                "
            >
                {actions.map((action) => (
                    <QuickActionItem
                        key={action.label}
                        {...action}
                    />
                ))}
            </div>
        </section>
    );
}

function QuickActionItem({
    label,
    href,
    icon: Icon,
    disabled = false,
}: QuickAction) {
    const content = (
        <>
            <Icon
                size={26}
                strokeWidth={1.8}
                className={
                    disabled
                        ? "text-[var(--color-blue-medium)]"
                        : "text-[var(--color-blue-dark)]"
                }
            />

            <div
                className="
                    mt-auto
                    flex
                    w-full
                    items-end
                    justify-between
                    gap-[8px]
                "
            >
                <span
                    className={`
                        max-w-[100px]
                        text-[16px]
                        font-semibold
                        leading-[1.45]
                        ${
                            disabled
                                ? "text-[var(--color-blue-medium)]"
                                : "text-[var(--color-grey-strong)]"
                        }
                    `}
                >
                    {label}
                </span>

                <ChevronRight
                    size={22}
                    strokeWidth={2}
                    className={`
                        mb-[3px]
                        shrink-0
                        ${
                            disabled
                                ? "text-[var(--color-blue-medium)]"
                                : "text-[var(--color-grey-strong)]"
                        }
                    `}
                />
            </div>
        </>
    );

    const className = `
        flex
        h-[128px]
        min-w-0
        flex-col
        items-start
        rounded-[18px]
        bg-[var(--color-grey-light)]
        px-[16px]
        py-[18px]
        text-left
        ${
            disabled
                ? "cursor-not-allowed"
                : "transition-colors hover:bg-[var(--color-blue-light)]"
        }
    `;

    if (disabled) {
        return (
            <div
                className={className}
                aria-disabled="true"
            >
                {content}
            </div>
        );
    }

    return (
        <Link
            href={href}
            className={className}
        >
            {content}
        </Link>
    );
}