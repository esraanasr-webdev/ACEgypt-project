import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant =
    | "primary"
    | "secondary"
    | "outlined"
    | "tertiary"
    | "link";

type ButtonSize = "default" | "small";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
};

export default function Button({
    children,
    variant = "primary",
    size = "default",
    className = "",
    disabled,
    ...props
    }: ButtonProps) {
    const baseClasses =
        "inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none disabled:cursor-not-allowed";

    const sizeClasses =
        variant === "tertiary" || variant === "link"
            ? size === "small"
            ? "text-[12px]"
            : "text-[14px]"
            : size === "small"
            ? "min-h-[36px] rounded-[10px] px-4 text-[12px]"
            : "min-h-[48px] rounded-[14px] px-6 text-[14px]";

    const variantClasses = {
        primary: `
        bg-[var(--color-blue-vibrant)]
        text-white

        hover:bg-[#3F7CC8]

        active:bg-[var(--color-blue-dark)]

        disabled:bg-[var(--color-grey-light)]
        disabled:text-[var(--color-grey-disable)]
        `,

        secondary: `
        bg-white
        text-[var(--color-blue-dark)]

        hover:bg-[var(--color-blue-light)]

        active:bg-[var(--color-blue-light)]

        disabled:bg-[var(--color-grey-light)]
        disabled:text-[var(--color-grey-disable)]
        `,

        outlined: `
        border
        border-[var(--color-grey-strong)]
        bg-transparent
        text-[var(--color-grey-strong)]

        hover:bg-transparent

        active:bg-[var(--color-blue-light)]

        disabled:border-[var(--color-grey-disable)]
        disabled:text-[var(--color-grey-disable)]
        `,

        tertiary: `
        bg-transparent
        text-[var(--color-grey-strong)]

        hover:text-[var(--color-blue-vibrant)]

        active:text-[var(--color-blue-dark)]

        disabled:text-[var(--color-grey-disable)]
        `,

        link: `
        bg-transparent
        p-0
        underline
        text-[var(--color-grey-strong)]

        hover:text-[var(--color-blue-vibrant)]

        active:text-[var(--color-blue-dark)]

        disabled:text-[var(--color-grey-disable)]
        `,
    };

    return (
        <button
        type="button"
        disabled={disabled}
        className={`
            ${baseClasses}
            ${sizeClasses}
            ${variantClasses[variant]}
            ${className}
        `}
        {...props}
        >
        {children}
        </button>
    );
}