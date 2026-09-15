import type { ReactNode } from "react";

type BadgeColor =
    | "orange"
    | "blue"
    | "violet"
    | "green"
    | "grey";

type BadgeVariant = "filled" | "light";

type BadgeProps = {
    children: ReactNode;
    color?: BadgeColor;
    variant?: BadgeVariant;
};

export default function Badge({
    children,
    color = "blue",
    variant = "filled",
}: BadgeProps) {
    const styles = {
        orange: {
            filled:
                "bg-[var(--color-orange-dark)] text-white border-transparent",
            light:
                "bg-[var(--color-orange-light)] text-[var(--color-orange-dark)] border-[var(--color-orange-dark)]",
        },

        blue: {
            filled:
                "bg-[var(--color-blue-dark)] text-white border-transparent",
            light:
                "bg-[var(--color-blue-light)] text-[var(--color-blue-dark)] border-[var(--color-blue-medium)]",
        },

        violet: {
            filled:
                "bg-[var(--color-violet-dark)] text-white border-transparent",
            light:
                "bg-[var(--color-violet-light)] text-[var(--color-violet-dark)] border-[var(--color-violet-dark)]",
        },

        green: {
            filled:
                "bg-[var(--color-green-dark)] text-white border-transparent",
            light:
                "bg-[var(--color-green-light)] text-[var(--color-green-dark)] border-[var(--color-green-dark)]",
        },

        grey: {
            filled:
                "bg-[var(--color-grey-dark)] text-white border-transparent",
            light:
                "bg-[var(--color-grey-light)] text-[var(--color-grey-dark)] border-[var(--color-grey-disable)]",
        },
    };

    return (
        <span
            className={`
                inline-flex
                items-center
                justify-center
                rounded-full
                border-1
                px-4
                py-2
                text-[12px]
                font-medium
                leading-none
                ${styles[color][variant]}
            `}
        >
            {children}
        </span>
    );
}