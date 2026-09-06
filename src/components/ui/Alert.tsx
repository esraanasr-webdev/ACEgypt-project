import {
    AlertCircle,
    CheckCircle2,
    Info,
    XCircle,
} from "lucide-react";

type AlertVariant = "warning" | "info" | "success" | "error";

type AlertProps = {
    title: string;
    description: string;
    variant?: AlertVariant;
};

export default function Alert({
    title,
    description,
    variant = "info",
    }: AlertProps) {
    const config = {
        warning: {
        color: "text-[var(--color-orange-dark)]",
        border: "border-l-[var(--color-orange-dark)]",
        icon: AlertCircle,
        },

        info: {
        color: "text-[var(--color-blue-vibrant)]",
        border: "border-l-[var(--color-blue-vibrant)]",
        icon: Info,
        },

        success: {
        color: "text-[var(--color-green-dark)]",
        border: "border-l-[var(--color-green-dark)]",
        icon: CheckCircle2,
        },

        error: {
        color: "text-[var(--color-red-dark)]",
        border: "border-l-[var(--color-red-dark)]",
        icon: XCircle,
        },
    };

    const {
        color,
        border,
        icon: Icon,
    } = config[variant];

    return (
        <div
        className={`
            flex
            w-full
            gap-4
            rounded-[14px]
            border-l-[4px]
            bg-white
            px-4
            py-5
            shadow-[0_10px_25px_rgba(0,0,0,0.08)]
            ${border}
        `}
        >
        <Icon
            size={18}
            strokeWidth={2}
            className={`mt-[2px] shrink-0 ${color}`}
        />

        <div>
            <h4 className="m-0 text-[14px] font-semibold leading-[1.5] text-[var(--color-grey-strong)]">
            {title}
            </h4>

            <p className="mt-1 mb-0 text-[12px] font-normal leading-[1.5] text-[var(--color-grey-dark)]">
            {description}
            </p>
        </div>
        </div>
    );
}