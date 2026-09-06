"use client";

import { Check } from "lucide-react";

type CheckboxOption = {
    label: string;
    value: string;
    disabled?: boolean;
};

type CheckboxGroupProps = {
    title?: string;
    options: CheckboxOption[];
    values?: string[];
    onChange?: (values: string[]) => void;
};

export default function CheckboxGroup({
    title,
    options,
    values = [],
    onChange,
    }: CheckboxGroupProps) {
    function toggleValue(value: string) {
        if (values.includes(value)) {
        onChange?.(values.filter((item) => item !== value));
        } else {
        onChange?.([...values, value]);
        }
    }

    return (
        <div>
        {title && (
            <h3 className="mb-4 text-[18px] font-semibold text-[var(--color-grey-strong)]">
            {title}
            </h3>
        )}

        <div className="flex flex-col gap-4">
            {options.map((option) => {
            const checked = values.includes(option.value);

            return (
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
                    type="checkbox"
                    checked={checked}
                    disabled={option.disabled}
                    onChange={() => toggleValue(option.value)}
                    className="sr-only"
                />

                <span
                    className={`
                    flex h-4 w-4 shrink-0 items-center justify-center
                    rounded-[4px] border
                    ${
                        checked
                        ? "border-[var(--color-blue-dark)] bg-[var(--color-blue-dark)] text-white"
                        : "border-[var(--color-blue-medium)] bg-white"
                    }
                    ${
                        option.disabled
                        ? "border-[var(--color-grey-disable)] bg-[var(--color-grey-light)]"
                        : ""
                    }
                    `}
                >
                    {checked && (
                    <Check
                        size={12}
                        strokeWidth={3}
                    />
                    )}
                </span>

                <span
                    className={
                    checked
                        ? "font-semibold text-[var(--color-blue-dark)]"
                        : ""
                    }
                >
                    {option.label}
                </span>
                </label>
            );
            })}
        </div>
        </div>
    );
}