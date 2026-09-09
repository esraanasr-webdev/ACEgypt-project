"use client";

import type { FilterOption } from "./types";

type FilterGroupProps = {
    title: string;
    options: FilterOption[];
    selected: string[];
    onChange: (value: string) => void;
};

function FilterGroup({
    title,
    options,
    selected,
    onChange,
    }: FilterGroupProps) {
    return (
        <div className="border-b border-dashed border-[var(--color-grey-medium)] pb-6">
        <h3 className="mb-4 text-[16px] font-semibold text-[var(--color-grey-strong)]">
            {title}
        </h3>

        <div className="space-y-3">
            {options.map((option) => {
            const checked = selected.includes(option.value);

            return (
                <label
                key={option.value}
                className="flex cursor-pointer items-center gap-2"
                >
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onChange(option.value)}
                    className="
                    h-4
                    w-4
                    accent-[var(--color-blue-dark)]
                    "
                />

                <span
                    className={`text-[13px] ${
                    checked
                        ? "font-semibold text-[var(--color-blue-dark)]"
                        : "font-medium text-[var(--color-grey-strong)]"
                    }`}
                >
                    {option.label} ({String(option.count).padStart(2, "0")})
                </span>
                </label>
            );
            })}
        </div>
        </div>
    );
}

type CoursesFiltersProps = {
    categories: string[];
    levels: string[];
    deliveryModes: string[];
    onCategoryChange: (value: string) => void;
    onLevelChange: (value: string) => void;
    onDeliveryChange: (value: string) => void;
};

import {
    categoryFilters,
    deliveryFilters,
    levelFilters,
} from "./data";

export default function CoursesFilters({
    categories,
    levels,
    deliveryModes,
    onCategoryChange,
    onLevelChange,
    onDeliveryChange,
    }: CoursesFiltersProps) {
    return (
        <aside className="space-y-6">
        <FilterGroup
            title="Category"
            options={categoryFilters}
            selected={categories}
            onChange={onCategoryChange}
        />

        <FilterGroup
            title="Level"
            options={levelFilters}
            selected={levels}
            onChange={onLevelChange}
        />

        <FilterGroup
            title="Delivery Mode"
            options={deliveryFilters}
            selected={deliveryModes}
            onChange={onDeliveryChange}
        />
        </aside>
    );
}