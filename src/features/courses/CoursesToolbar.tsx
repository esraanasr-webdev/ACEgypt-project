type CoursesToolbarProps = {
    showing: number;
    total: number;
    sort: string;
    onSortChange: (value: string) => void;
};

export default function CoursesToolbar({
    showing,
    total,
    sort,
    onSortChange,
    }: CoursesToolbarProps) {
    return (
        <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-[14px] text-[var(--color-grey-dark)]">
                Showing <span className="text-[var(--color-grey-strong)]">01–{String(showing).padStart(2, "0")}</span> of <span className="text-[var(--color-grey-strong)]">{total}</span> results
            </p>

            <div className="flex items-center gap-3">
                <span className="text-[14px] text-[var(--color-grey-dark)]">
                Sort By :
                </span>

                <select
                    value={sort}
                    onChange={(event) =>
                        onSortChange(event.target.value)
                    }
                    className="
                        rounded-[8px]
                        border
                        border-[var(--color-blue-medium)]
                        bg-white
                        px-4
                        py-2
                        text-[11px]
                        outline-none
                    "
                >
                <option value="newest">
                    Newly Published
                </option>

                <option value="price-low">
                    Price: Low to High
                </option>

                <option value="price-high">
                    Price: High to Low
                </option>
                </select>
            </div>
        </div>
    );
}