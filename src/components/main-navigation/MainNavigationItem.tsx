import Image from "next/image";

type MainNavigationItemProps = {
    label: string;
    active?: boolean;
    hasDropdown?: boolean;
};

export default function MainNavigationItem({
    label,
    active = false,
    hasDropdown = false,
    }: MainNavigationItemProps) {
    return (
        <button
        type="button"
        className={`group flex flex-col items-center ${
            active ? "gap-[3px] pt-[5px]" : "gap-[4px]"
        }`}
        >
        <div className="flex items-center gap-2 rounded-[12px] px-4 py-3">
            <span
            className={`whitespace-nowrap text-[14px] leading-[1.25] text-white ${
                active ? "font-semibold" : "font-medium"
            } group-hover:font-semibold`}
            >
            {label}
            </span>

            {hasDropdown && (
            <Image
                src="/images/navigation/down.svg"
                alt=""
                width={16}
                height={16}
            />
            )}
        </div>

        <div
            className={`
            relative h-[2px] w-full
            transition-opacity duration-200
            ${
                active
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            }
            `}
        >
            <Image
            src="/images/navigation/menu-gradient-line.svg"
            alt=""
            fill
            className="object-fill"
            />
        </div>
        </button>
    );
}