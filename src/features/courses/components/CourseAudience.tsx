import {
    BookOpen,
    BriefcaseBusiness,
    Globe2,
    GraduationCap,
} from "lucide-react";

import type { CourseDetails } from "../types";

type CourseAudienceProps = {
    course: CourseDetails;
};

const audienceIcons = [
    BriefcaseBusiness,
    Globe2,
    BookOpen,
    GraduationCap,
];

export default function CourseAudience({
    course,
}: CourseAudienceProps) {
    return (
        <section>
            <div className="mx-auto max-w-[1200px] px-6">
                <div className="max-w-[792px]">
                    <h2
                        className="
                            text-[26px]
                            font-bold
                            leading-[1.5]
                            text-[var(--color-grey-strong)]
                        "
                    >
                        Who The Course is For?
                    </h2>

                    <div
                        className="
                            mt-6
                            grid
                            grid-cols-1
                            gap-5
                            md:grid-cols-2
                        "
                    >
                        {course.audience.map((item, index) => {
                            const Icon =
                                audienceIcons[
                                    index % audienceIcons.length
                                ];

                            return (
                                <article
                                    key={item.title}
                                    className="
                                        flex
                                        min-h-[142px]
                                        items-start
                                        gap-4
                                        rounded-[14px]
                                        bg-[var(--color-orange-light)]
                                        p-5
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            h-[50px]
                                            w-[50px]
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[var(--color-orange-dark)]
                                            text-white
                                        "
                                    >
                                        <Icon
                                            size={22}
                                            strokeWidth={1.75}
                                        />
                                    </div>

                                    <div className="pt-1">
                                        <h3
                                            className="
                                                text-[20px]
                                                font-semibold
                                                leading-[1.5]
                                                text-[var(--color-grey-strong)]
                                            "
                                        >
                                            {item.title}
                                        </h3>

                                        <p
                                            className="
                                                mt-3
                                                text-[16px]
                                                font-normal
                                                leading-[1.5]
                                                text-[var(--color-grey-strong)]
                                            "
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}