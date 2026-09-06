import {
    CheckCircle2,
    CircleAlert,
} from "lucide-react";

type TextInputStatus = "default" | "error" | "success";

type TextInputProps = {
    label: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    status?: TextInputStatus;
    hint?: string;
    type?: "text" | "email" | "password" | "tel";
    name?: string;
};

export default function TextInput({
    label,
    placeholder = "Text goes here",
    value,
    onChange,
    disabled = false,
    status = "default",
    hint,
    type = "text",
    name,
    }: TextInputProps) {
    const isError = status === "error";
    const isSuccess = status === "success";

    return (
        <div className="w-full mb-[24px]">
        <label className="mb-2 block text-[16px] font-semibold leading-[1.25] text-[var(--color-grey-strong)]">
            {label}
        </label>

        <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            onChange={(event) => onChange?.(event.target.value)}
            className={`
            h-[42px]
            w-full
            rounded-[10px]
            border
            bg-white
            px-3
            text-[12px]
            font-normal
            text-[var(--color-grey-strong)]
            outline-none
            transition-colors
            duration-150

            placeholder:text-[var(--color-grey-dark)]

            ${
                isError
                ? "border-[var(--color-red-dark)] focus:border-[var(--color-red-dark)]"
                : isSuccess
                    ? "border-[var(--color-green-dark)] focus:border-[var(--color-green-dark)]"
                    : "border-transparent focus:border-[var(--color-blue-vibrant)]"
            }

            ${
                disabled
                ? "cursor-not-allowed bg-[var(--color-grey-light)] text-[var(--color-grey-disable)] placeholder:text-[var(--color-grey-disable)]"
                : ""
            }
            `}
        />

        {hint && (isError || isSuccess) && (
            <div
            className={`
                mt-2 flex items-center gap-1 text-[10px]
                ${
                isError
                    ? "text-[var(--color-red-dark)]"
                    : "text-[var(--color-green-dark)]"
                }
            `}
            >
            {isError ? (
                <CircleAlert
                size={13}
                strokeWidth={2}
                fill="currentColor"
                />
            ) : (
                <CheckCircle2
                size={13}
                strokeWidth={2}
                fill="currentColor"
                />
            )}

            <span>{hint}</span>
            </div>
        )}
        </div>
    );
}