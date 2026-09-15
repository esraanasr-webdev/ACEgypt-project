import { Check } from "lucide-react";

import type { CourseDetails } from "../types";

type CourseLearningOutcomesProps = {
    course: CourseDetails;
};

export default function CourseLearningOutcomes({
    course,
}: CourseLearningOutcomesProps) {
    return (
        <section className="
            sm:px-6
            bg-[var(--color-grey-light)]
            rounded-[28px]
            md:px-12
            lg:px-[100px]
            lg:py-20
            mx-5
            my-32
            sm:py-6"
            
        >
            <div
                className="
                    mx-auto
                    max-w-[1200px]"
            >
                <div className="max-w-[792px]">
                    <h2
                        className="
                            text-[26px]
                            font-bold
                            leading-[1.5]
                            text-[var(--color-grey-strong)]
                            pb-10
                        "
                    >
                        What You’ll Learn:
                    </h2>

                    <div
                        className="
                            mt-5
                            grid
                            grid-cols-1
                            gap-x-12
                            gap-y-5
                            md:grid-cols-2
                        "
                    >
                        {course.learningOutcomes.map((outcome) => (
                            <div
                                key={outcome.title}
                                className="flex items-start gap-4"
                            >
                                <span
                                    className="
                                        flex
                                        h-[30px]
                                        w-[30px]
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[var(--color-blue-vibrant)]
                                        text-white
                                    "
                                >
                                    <Check
                                        size={16}
                                        strokeWidth={2}
                                    />
                                </span>

                                <div>
                                    <h3
                                        className="
                                            text-[20px]
                                            font-semibold
                                            leading-[1.5]
                                            text-[var(--color-grey-strong)]
                                        "
                                    >
                                        {outcome.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-2
                                            text-[16px]
                                            font-normal
                                            leading-[1.5]
                                            text-[var(--color-grey-strong)]
                                        "
                                    >
                                        {outcome.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}