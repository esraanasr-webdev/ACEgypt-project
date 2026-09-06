"use client";

import { ChevronDown, ChevronUp, CircleAlert } from "lucide-react";
import { useState } from "react";

type DropdownOption = {
    label: string;
    value: string;
};

type DropdownProps = {
    label: string;
    placeholder?: string;
    options: DropdownOption[];
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    error?: string;
    };

    export default function Dropdown({
    label,
    placeholder = "Text goes here",
    options,
    value,
    onChange,
    disabled = false,
    error,
    }: DropdownProps) {
    const [open, setOpen] = useState(false);

    const selectedOption = options.find(
        (option) => option.value === value
    );

    const hasError = Boolean(error);

    function handleSelect(optionValue: string) {
        onChange?.(optionValue);
        setOpen(false);
    }

    return (
        <div className="relative w-full">
        {/* Label */}
        <label className="mb-2 block text-[14px] font-semibold leading-[1.25] text-[var(--color-grey-strong)]">
            {label}
        </label>

        {/* Trigger */}
        <button
            type="button"
            disabled={disabled}
            onClick={() => setOpen((previous) => !previous)}
            className={`
            flex h-[40px] w-full items-center justify-between
            rounded-[10px] border bg-white px-3
            text-left text-[12px] font-normal
            transition-colors duration-150

            ${
                hasError
                ? "border-[var(--color-red-dark)]"
                : open
                    ? "border-[var(--color-blue-vibrant)]"
                    : "border-[var(--color-blue-medium)]"
            }

            ${
                disabled
                ? "cursor-not-allowed bg-[var(--color-grey-light)] text-[var(--color-grey-disable)]"
                : "text-[var(--color-grey-strong)]"
            }
            `}
            aria-expanded={open}
        >
            <span
            className={
                selectedOption
                ? ""
                : disabled
                    ? "text-[var(--color-grey-disable)]"
                    : "text-[var(--color-grey-dark)]"
            }
            >
            {selectedOption?.label ?? placeholder}
            </span>

            {open ? (
            <ChevronUp
                size={18}
                strokeWidth={1.75}
                className="shrink-0"
            />
            ) : (
            <ChevronDown
                size={18}
                strokeWidth={1.75}
                className="shrink-0"
            />
            )}
        </button>

        {/* Error hint */}
        {hasError && (
            <div className="mt-2 flex items-center gap-1 text-[10px] text-[var(--color-red-dark)]">
            <CircleAlert
                size={13}
                strokeWidth={2}
                fill="currentColor"
                className="text-[var(--color-red-dark)]"
            />

            <span>{error}</span>
            </div>
        )}

        {/* Dropdown menu */}
        {open && !disabled && (
            <div
            className="
                absolute left-0 top-full z-20 mt-1
                w-full overflow-hidden
                rounded-[10px] bg-white
                py-1
                shadow-[0_8px_18px_rgba(0,0,0,0.14)]
            "
            >
            <div className="max-h-[165px] overflow-y-auto py-1">
                {options.map((option) => (
                <button
                    key={option.value}
                    type="button"
                    onClick={() => handleSelect(option.value)}
                    className="
                    block w-full
                    px-3 py-2
                    text-left text-[12px]
                    text-[var(--color-grey-strong)]
                    hover:bg-[var(--color-blue-light)]
                    "
                >
                    {option.label}
                </button>
                ))}
            </div>
            </div>
        )}
        </div>
    );
}