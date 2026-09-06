"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange?: (page: number) => void;
};

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    }: PaginationProps) {
    const pages = Array.from(
        { length: Math.min(totalPages, 3) },
        (_, index) => index + 1
    );

    return (
        <nav
        className="flex items-center gap-2"
        aria-label="Pagination"
        >
        <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => onPageChange?.(currentPage - 1)}
            className="
            flex h-[30px] w-[30px] items-center justify-center
            rounded-full
            bg-white
            text-[var(--color-blue-vibrant)]
            disabled:text-[var(--color-blue-medium)]
            "
            aria-label="Previous page"
        >
            <ChevronLeft size={16} strokeWidth={2} />
        </button>

        {pages.map((page) => {
            const active = page === currentPage;

            return (
            <button
                key={page}
                type="button"
                onClick={() => onPageChange?.(page)}
                className={`
                flex h-[30px] w-[30px] items-center justify-center
                rounded-full
                text-[12px] font-medium
                ${
                    active
                    ? "bg-[var(--color-blue-dark)] text-white"
                    : "bg-white text-[var(--color-blue-dark)]"
                }
                `}
            >
                {page}
            </button>
            );
        })}

        {totalPages > 3 && (
            <span className="px-1 text-[14px] text-[var(--color-grey-dark)]">
            ...
            </span>
        )}

        <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange?.(currentPage + 1)}
            className="
            flex h-[30px] w-[30px] items-center justify-center
            rounded-full
            border border-[var(--color-blue-vibrant)]
            bg-white
            text-[var(--color-blue-vibrant)]
            disabled:border-[var(--color-blue-medium)]
            disabled:text-[var(--color-blue-medium)]
            "
            aria-label="Next page"
        >
            <ChevronRight size={16} strokeWidth={2} />
        </button>
        </nav>
    );
}