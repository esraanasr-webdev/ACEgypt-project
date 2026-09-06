"use client";

import { Search } from "lucide-react";

type SearchBoxProps = {
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
};

export default function SearchBox({
    value,
    onChange,
    placeholder = "Text goes here",
    disabled = false,
    }: SearchBoxProps) {
    return (
        <div
        className="
            flex h-[48px] w-full items-center gap-3
            rounded-[10px] border border-transparent
            bg-white px-3
            transition-colors
            focus-within:border-[var(--color-blue-vibrant)]
        "
        >
        <Search
            size={18}
            strokeWidth={1.75}
            className="shrink-0 text-[var(--color-grey-strong)]"
        />

        <input
            type="search"
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            onChange={(event) => onChange?.(event.target.value)}
            className="
            w-full bg-transparent
            text-[12px] text-[var(--color-grey-strong)]
            outline-none
            placeholder:text-[var(--color-grey-dark)]
            disabled:cursor-not-allowed
            disabled:text-[var(--color-grey-disable)]
            "
        />
        </div>
    );
}