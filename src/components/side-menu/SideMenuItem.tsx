import type { LucideIcon } from "lucide-react";

type SideMenuItemProps = {
    label: string;
    icon: LucideIcon;
    active?: boolean;
};

export default function SideMenuItem({
    label,
    icon: Icon,
    active = false,
    }: SideMenuItemProps) {
    return (
        <button
        type="button"
        className={`
            flex w-full items-center gap-3 rounded-[6px] px-3 py-2
            text-left text-[14px] leading-[1.25]
            ${
            active
                ? "bg-[#003AA6] font-medium text-white"
                : `
                    font-normal text-[#2B2B2B]
                    hover:bg-[#003AA6]
                    hover:text-white
                `
            }
        `}
        >
        <Icon
            size={18}
            strokeWidth={1.5}
            className="shrink-0"
        />

        <span>{label}</span>
        </button>
    );
}