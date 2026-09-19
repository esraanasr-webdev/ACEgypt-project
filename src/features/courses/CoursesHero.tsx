"use client";

import { Search } from "lucide-react";

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
                bg-[var(--color-blue-dark)]
                px-6
                pb-12
                text-white
            "
        >
            <div className="mx-auto max-w-[1200px]">
                <div
                    className="
                        mx-auto
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
        </section>
    );
}