"use client";

type ToggleProps = {
    checked: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
};

export default function Toggle({
    checked,
    onChange,
    disabled = false,
    }: ToggleProps) {
    return (
        <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={`
            relative
            h-[18px] w-[34px]
            rounded-full
            transition-colors duration-200

            ${
            checked
                ? "bg-[var(--color-green-dark)]"
                : "bg-[var(--color-grey-dark)]"
            }

            disabled:cursor-not-allowed
            disabled:opacity-50
        `}
        >
        <span
            className={`
            absolute top-[2px]
            h-[14px] w-[14px]
            rounded-full
            bg-white
            transition-transform duration-200

            ${
                checked
                ? "translate-x-[18px]"
                : "translate-x-[2px]"
            }
            `}
        />
        </button>
    );
}