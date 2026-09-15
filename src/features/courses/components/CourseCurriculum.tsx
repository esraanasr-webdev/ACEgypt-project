"use client";

import {
    ChevronDown,
    ChevronUp,
    CircleHelp,
    FileText,
    Lock,
    PlayCircle,
} from "lucide-react";
import { useState } from "react";

import type { CourseDetails } from "../types";

type CourseCurriculumProps = {
    course: CourseDetails;
};

export default function CourseCurriculum({
    course,
}: CourseCurriculumProps) {
    const [openModule, setOpenModule] = useState<number>(
        course.modules[0]?.id ?? 0
    );

    return (
        <section
            id="curriculum"
            className="
                bg-[var(--color-blue-light)]
                py-16
                rounded-[28px]
                md:px-12
                lg:px-[100px]
                lg:py-20
                mx-5
                my-32
            "
        >
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
                        Course Curriculum
                    </h2>

                    <div className="mt-6 space-y-4">
                        {course.modules.map((module) => {
                            const isOpen =
                                openModule === module.id;

                            return (
                                <div
                                    key={module.id}
                                    className="
                                        overflow-hidden
                                        rounded-[14px]
                                        bg-white
                                    "
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenModule(
                                                isOpen
                                                    ? 0
                                                    : module.id
                                            )
                                        }
                                        className={`
                                            flex
                                            w-full
                                            items-center
                                            justify-between
                                            gap-4
                                            px-5
                                            py-5
                                            text-left
                                            ${
                                                isOpen
                                                    ? "bg-[var(--color-blue-dark)] text-white"
                                                    : "text-[var(--color-grey-strong)]"
                                            }
                                        `}
                                    >
                                        <div>
                                            <h3
                                                className="
                                                    text-[20px]
                                                    font-semibold
                                                    leading-[1.5]
                                                "
                                            >
                                                {module.title}
                                            </h3>

                                            <p
                                                className={`
                                                    mt-1
                                                    text-[14px]
                                                    leading-[1.5]
                                                    ${
                                                        isOpen
                                                            ? "text-white/90"
                                                            : "text-[var(--color-grey-dark)]"
                                                    }
                                                `}
                                            >
                                                {module.summary}
                                            </p>
                                        </div>

                                        <div className="flex shrink-0 items-center gap-4">
                                            <Lock
                                                size={18}
                                                strokeWidth={1.8}
                                            />

                                            {isOpen ? (
                                                <ChevronUp
                                                    size={20}
                                                    strokeWidth={1.8}
                                                />
                                            ) : (
                                                <ChevronDown
                                                    size={20}
                                                    strokeWidth={1.8}
                                                />
                                            )}
                                        </div>
                                    </button>

                                    {isOpen &&
                                        module.lessons?.length ? (
                                        <div className="px-5">
                                            {module.lessons.map(
                                                (
                                                    lesson,
                                                    index
                                                ) => (
                                                    <div
                                                        key={lesson.id}
                                                        className={`
                                                            flex
                                                            items-center
                                                            justify-between
                                                            gap-4
                                                            py-4
                                                            ${
                                                                index !==
                                                                module.lessons!
                                                                    .length -
                                                                    1
                                                                    ? "border-b border-dashed border-[var(--color-grey-medium)]"
                                                                    : ""
                                                            }
                                                        `}
                                                    >
                                                        <div className="flex items-start gap-4">
                                                            <Lock
                                                                size={17}
                                                                strokeWidth={1.8}
                                                                className="
                                                                    mt-1
                                                                    shrink-0
                                                                    text-[var(--color-grey-dark)]
                                                                "
                                                            />

                                                            <div>
                                                                <p
                                                                    className="
                                                                        text-[14px]
                                                                        font-medium
                                                                        leading-[1.5]
                                                                        text-[var(--color-grey-strong)]
                                                                    "
                                                                >
                                                                    {
                                                                        lesson.title
                                                                    }
                                                                </p>

                                                                <div
                                                                    className="
                                                                        mt-1
                                                                        flex
                                                                        items-center
                                                                        gap-1.5
                                                                        text-[12px]
                                                                        text-[var(--color-grey-dark)]
                                                                    "
                                                                >
                                                                    {lesson.type ===
                                                                    "Video" ? (
                                                                        <PlayCircle
                                                                            size={
                                                                                13
                                                                            }
                                                                        />
                                                                    ) : lesson.type ===
                                                                        "Reading" ? (
                                                                            <FileText
                                                                                size={
                                                                                    13
                                                                                }
                                                                            />
                                                                        ) : (
                                                                            <CircleHelp
                                                                                size={
                                                                                    13
                                                                                }
                                                                            />
                                                                        )}

                                                                    <span>
                                                                        {
                                                                            lesson.type
                                                                        }
                                                                    </span>

                                                                    <span>
                                                                        •
                                                                    </span>

                                                                    <span>
                                                                        {
                                                                            lesson.meta
                                                                        }
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <span
                                                            className="
                                                                shrink-0
                                                                text-[12px]
                                                                font-medium
                                                                text-[var(--color-grey-dark)]
                                                            "
                                                        >
                                                            Locked
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    ) : null}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}