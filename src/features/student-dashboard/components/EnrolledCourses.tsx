"use client";

import Image from "next/image";
import { useState } from "react";

type CourseTab = "all" | "progress" | "completed";

const tabs: {
    label: string;
    value: CourseTab;
}[] = [
    {
        label: "All Courses",
        value: "all",
    },
    {
        label: "In Progress",
        value: "progress",
    },
    {
        label: "Completed",
        value: "completed",
    },
];

export default function EnrolledCourses() {
    const [activeTab, setActiveTab] =
        useState<CourseTab>("all");

    return (
        <section
            className="
                min-h-[520px]
                rounded-[24px]
                bg-white
                px-[24px]
                py-[24px]
            "
        >
            {/* Header */}
            <div
                className="
                    flex
                    flex-col
                    gap-5
                    md:flex-row
                    md:items-start
                    md:justify-between
                "
            >
                <h2
                    className="
                        text-[20px]
                        font-semibold
                        leading-[1.25]
                        text-[var(--color-grey-strong)]
                    "
                >
                    Enrolled Courses
                </h2>

                {/* Tabs */}
                <div
                    className="
                        flex
                        items-center
                        gap-[28px]
                        overflow-x-auto
                    "
                >
                    {tabs.map((tab) => {
                        const active =
                            activeTab === tab.value;

                        return (
                            <button
                                key={tab.value}
                                type="button"
                                onClick={() =>
                                    setActiveTab(tab.value)
                                }
                                className={`
                                    relative
                                    shrink-0
                                    pb-[10px]
                                    text-[16px]
                                    font-semibold
                                    transition-colors
                                    ${
                                        active
                                            ? "font-semibold text-[var(--color-blue-dark)]"
                                            : "font-normal text-[var(--color-grey-dark)] hover:text-[var(--color-blue-dark)]"
                                    }
                                `}
                            >
                                {tab.label}

                                {active && (
                                    <span
                                        className="
                                            absolute
                                            bottom-0
                                            left-0
                                            h-[2px]
                                            w-full
                                            rounded-full
                                            bg-[var(--color-blue-dark)]
                                        "
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Empty State */}
            <div
                className="
                    flex
                    min-h-[420px]
                    flex-col
                    items-center
                    justify-center
                    px-6
                    text-center
                "
            >
                <div
                    className="
                        relative
                        h-[261px]
                        w-[286px]
                        max-w-full
                    "
                >
                    <Image
                        src="/images/dashboard/no-courses.png"
                        alt=""
                        fill
                        sizes="260px"
                        className="object-contain"
                    />
                </div>

                <h3
                    className="
                        mt-[18px]
                        text-[20px]
                        font-semibold
                        leading-[1.25]
                        text-[var(--color-grey-strong)]
                    "
                >
                    No Courses Yet
                </h3>

                <p
                    className="
                        mt-[10px]

                        text-[16px]
                        font-normal
                        leading-[1.5]
                        text-[var(--color-grey-dark)]
                    "
                >
                    Start your learning journey by exploring
                    our available courses
                </p>
            </div>
        </section>
    );
}