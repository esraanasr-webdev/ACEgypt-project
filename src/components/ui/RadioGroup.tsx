"use client";

type RadioOption = {
    label: string;
    value: string;
    disabled?: boolean;
};

type RadioGroupProps = {
    title?: string;
    name: string;
    options: RadioOption[];
    value?: string;
    onChange?: (value: string) => void;
};

export default function RadioGroup({
    title,
    name,
    options,
    value,
    onChange,
    }: RadioGroupProps) {
    return (
        <div>
        {title && (
            <h3 className="mb-4 text-[18px] font-semibold text-[var(--color-grey-strong)]">
            {title}
            </h3>
        )}

        <div className="flex flex-col gap-4">
            {options.map((option) => (
            <label
                key={option.value}
                className={`
                flex items-center gap-2
                text-[14px] font-medium
                ${
                    option.disabled
                    ? "cursor-not-allowed text-[var(--color-grey-disable)]"
                    : "cursor-pointer text-[var(--color-grey-strong)]"
                }
                `}
            >
                <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                disabled={option.disabled}
                onChange={() => onChange?.(option.value)}
                className="peer sr-only"
                />

                <span
                className="
                    flex h-4 w-4 shrink-0 items-center justify-center
                    rounded-full border border-[var(--color-blue-medium)]
                    bg-white

                    peer-checked:border-[var(--color-blue-dark)]

                    peer-checked:after:block
                    peer-checked:after:h-2
                    peer-checked:after:w-2
                    peer-checked:after:rounded-full
                    peer-checked:after:bg-[var(--color-blue-dark)]

                    peer-disabled:border-[var(--color-grey-disable)]
                    peer-disabled:bg-[var(--color-grey-light)]
                "
                />

                <span
                className="
                    peer-checked:text-[var(--color-blue-dark)]
                    peer-checked:font-semibold
                "
                >
                {option.label}
                </span>
            </label>
            ))}
        </div>
        </div>
    );
}