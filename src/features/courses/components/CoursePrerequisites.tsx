import { Check } from "lucide-react";

import type { CourseDetails } from "../types";

type CoursePrerequisitesProps = {
    course: CourseDetails;
};

export default function CoursePrerequisites({
    course,
}: CoursePrerequisitesProps) {
    return (
        <section id="prerequisites">
            <h2
                className="
                    text-[26px]
                    font-bold
                    leading-[1.5]
                    text-[var(--color-grey-strong)]
                "
            >
                Prerequisites
            </h2>

            <div
                className="
                    mt-6
                    grid
                    grid-cols-1
                    gap-x-14
                    gap-y-4
                    md:grid-cols-2
                "
            >
                {course.prerequisites.map((item) => (
                    <div
                        key={item}
                        className="flex items-start gap-3"
                    >
                        <span
                            className="
                                mt-[2px]
                                flex
                                h-[20px]
                                w-[20px]
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[var(--color-green-dark)]
                                text-white
                            "
                        >
                            <Check
                                size={12}
                                strokeWidth={2.5}
                            />
                        </span>

                        <p
                            className="
                                max-w-[280px]
                                text-[16px]
                                leading-[1.5]
                                text-[var(--color-grey-strong)]
                            "
                        >
                            {item}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}