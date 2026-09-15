import type { CourseDetails } from "../types";

type CourseOverviewProps = {
    course: CourseDetails;
};

export default function CourseOverview({
    course,
}: CourseOverviewProps) {
    return (
        <section id="overview">
            <p
                className="
                    text-[20px]
                    font-semibold
                    text-[var(--color-green-dark)]
                "
            >
                {course.overview.eyebrow}
            </p>

            <h2
                className="
                    mt-5
                    text-[38px]
                    font-bold
                    leading-[1.3]
                    text-[var(--color-grey-strong)]
                    md:text-[36px]
                "
            >
                {course.overview.title}
            </h2>

            <h3
                className="
                    mt-12
                    text-[26px]
                    font-bold
                    text-[var(--color-grey-strong)]
                    md:text-[26px]
                "
            >
                Course Description
            </h3>

            <p
                className="
                    mt-6
                    max-w-[700px]
                    text-[18px]
                    leading-[1.8]
                    text-[var(--color-grey-strong)]
                "
            >
                {course.overview.description}
            </p>
        </section>
    );
}