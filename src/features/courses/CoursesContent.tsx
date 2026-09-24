"use client";

import { useMemo, useState } from "react";

import Pagination from "../../components/ui/Pagination";

import { useSearchParams } from "next/navigation";
import CoursesFilters from "./CoursesFilters";
import CoursesGrid from "./CoursesGrid";
import CoursesToolbar from "./CoursesToolbar";
import {
    courses,
} from "./data";

function toggleValue(
    values: string[],
    value: string
    ) {
    return values.includes(value)
        ? values.filter((item) => item !== value)
        : [...values, value];
    }

    export default function CoursesContent() {
    const searchParams = useSearchParams();

    const search = searchParams.get("search") ?? "";

    const [categories, setCategories] = useState<string[]>([]);
    const [levels, setLevels] = useState<string[]>([]);
    const [deliveryModes, setDeliveryModes] = useState<string[]>([]);
    const [sort, setSort] = useState("newest");
    const [page, setPage] = useState(1);

    const filteredCourses = useMemo(() => {
        const term = search.trim().toLowerCase();

        return courses.filter((course) => {
        const matchesSearch =
            !term ||
            course.title.toLowerCase().includes(term) ||
            course.category.toLowerCase().includes(term) ||
            course.deliveryMode.toLowerCase().includes(term);

        const matchesCategory =
            categories.length === 0 ||
            categories.some((category) =>
            course.category
                .toLowerCase()
                .includes(category.replace("-", " "))
            );

        const matchesDelivery =
            deliveryModes.length === 0 ||
            deliveryModes.some(
            (mode) =>
                course.deliveryMode
                .toLowerCase()
                .replace("-", " ") ===
                mode.replace("-", " ")
            );

        return (
            matchesSearch &&
            matchesCategory &&
            matchesDelivery
        );
        });
    }, [
        search,
        categories,
        deliveryModes,
    ]);

    return (
        <>
            <section className="mx-auto max-w-[1200px] px-6 py-12">
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-10
                        lg:grid-cols-[220px_1fr]
                    "
                    >
                    <CoursesFilters
                        categories={categories}
                        levels={levels}
                        deliveryModes={deliveryModes}
                        onCategoryChange={(value) =>
                        setCategories((current) =>
                            toggleValue(current, value)
                        )
                        }
                        onLevelChange={(value) =>
                        setLevels((current) =>
                            toggleValue(current, value)
                        )
                        }
                        onDeliveryChange={(value) =>
                        setDeliveryModes((current) =>
                            toggleValue(current, value)
                        )
                        }
                    />

                    <div>
                        <CoursesToolbar
                            showing={filteredCourses.length}
                            total={55}
                            sort={sort}
                            onSortChange={setSort}
                        />
                        
                        <CoursesGrid courses={filteredCourses} />

                        <div className="mt-12 flex justify-center">
                            <Pagination
                                currentPage={page}
                                totalPages={3}
                                onPageChange={setPage}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}