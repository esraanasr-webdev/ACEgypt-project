import type { LucideIcon } from "lucide-react";
import Link from "next/link";

type DashboardSidebarItemProps = {
    label: string;
    href: string;
    icon: LucideIcon;
    active?: boolean;
};

export default function DashboardSidebarItem({
    label,
    href,
    icon: Icon,
    active = false,
}: DashboardSidebarItemProps) {
    return (
        <Link
            href={href}
            className={`
                flex
                min-h-[44px]
                items-center
                gap-4
                rounded-[8px]
                px-4
                text-[16px]
                font-medium
                transition-colors
                ${
                    active
                        ? "bg-[var(--color-blue-dark)] text-white"
                        : `
                            text-[var(--color-grey-strong)]
                            hover:bg-[var(--color-blue-light)]
                            hover:text-[var(--color-blue-dark)]
                        `
                }
            `}
        >
            <Icon
                size={21}
                strokeWidth={1.8}
                className="shrink-0"
            />

            <span>{label}</span>
        </Link>
    );
}