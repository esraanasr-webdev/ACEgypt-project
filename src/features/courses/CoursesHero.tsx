"use client";

import { Search } from "lucide-react";
import Link from "next/link";

type CoursesHeroProps = {
    search: string;
    onSearchChange: (value: string) => void;
};

export default function CoursesHero({
    search,
    onSearchChange,
    }: CoursesHeroProps) {
    return (
        <section
            className="
                relative
                overflow-hidden
                rounded-b-[28px]
                bg-[var(--color-blue-dark)]
                px-6
                pb-12
                pt-4
                text-white
            "
        >
        <div className="mx-auto max-w-[1200px]">
            {/* Breadcrumb */}
            <div className="text-[12px]">
            <Link href="/" className="hover:opacity-80">
                Home
            </Link>

            <span className="mx-2">›</span>

            <span>Courses</span>
            </div>

            <div className="mt-6 text-center">
            <h1 className="text-[48px] font-bold">
                Explore Our Courses
            </h1>

            <p className="mt-3 text-[18px]">
                Limitless learning, more possibilities
            </p>

            <div
                className="
                mx-auto
                mt-8
                flex
                max-w-[700px]
                items-center
                gap-3
                rounded-[12px]
                bg-white
                px-4
                py-5
                text-[var(--color-grey-strong)]
                "
            >
                <Search size={18} />

                <input
                    type="search"
                    value={search}
                    onChange={(event) =>
                        onSearchChange(event.target.value)
                    }
                    placeholder="Search Courses by title, category, level or Delivery Mode ..."
                    className="
                        w-full
                        bg-transparent
                        text-[14px]
                        outline-none
                        placeholder:text-[var(--color-grey-dark)]
                    "
                />
            </div>
            </div>
        </div>
        </section>
    );
}