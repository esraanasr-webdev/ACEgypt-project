"use client";

import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";

import {
    usePathname,
    useRouter,
} from "@/i18n/navigation";

export default function CourseSearch() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const search = searchParams.get("search") ?? "";

    function handleSearchChange(value: string) {
        const params = new URLSearchParams(
            searchParams.toString()
        );

        if (value.trim()) {
            params.set("search", value);
        } else {
            params.delete("search");
        }

        const query = params.toString();

        router.replace(
            query
                ? `${pathname}?${query}`
                : pathname,
            {
                scroll: false,
            }
        );
    }

    return (
        <div
            className="
                relative
                mx-auto
                mt-8
                w-full
                max-w-[760px]

                sm:mt-10
            "
        >
            <Search
                size={20}
                strokeWidth={1.8}
                className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[var(--color-grey-strong)]

                    sm:left-5
                "
            />

            <input
                type="search"
                value={search}
                onChange={(event) =>
                    handleSearchChange(event.target.value)
                }
                placeholder="Search Courses by title, category, level or Delivery Mode ..."
                className="
                    h-[52px]
                    w-full
                    rounded-[12px]
                    border-0
                    bg-white
                    pl-12
                    pr-4
                    text-[12px]
                    font-normal
                    text-[var(--color-grey-strong)]
                    outline-none

                    placeholder:text-[var(--color-grey-dark)]

                    focus:ring-2
                    focus:ring-white/30

                    sm:h-[58px]
                    sm:pl-14
                    sm:pr-6
                    sm:text-[13px]

                    lg:h-[64px]
                    lg:rounded-[14px]
                    lg:text-[14px]
                "
            />
        </div>
    );
}