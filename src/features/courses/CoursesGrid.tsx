import CourseCard from "./CourseCard";

import type { Course } from "./types";

type CoursesGridProps = {
    courses: Course[];
};

export default function CoursesGrid({
    courses,
    }: CoursesGridProps) {
    if (courses.length === 0) {
        return (
        <div className="py-12 text-center">
            <p className="text-[14px] text-[var(--color-grey-dark)]">
                No courses found.
            </p>
        </div>
        );
    }

    return (
        <div
            className="
                grid
                grid-cols-1
                gap-6
                sm:grid-cols-2
                xl:grid-cols-3
            "
        >
        {courses.map((course) => (
            <CourseCard
                key={course.id}
                image={course.image}
                imageAlt={course.title}
                badge={course.deliveryMode}
                title={course.title}
                description={course.description}
                currency={course.currency}
                amount={course.amount}
                actionText={course.category}
                variant="compact"
            />
        ))}
        </div>
    );
}