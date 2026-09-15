import {
    ChevronRight,
    ClipboardList,
    Target,
} from "lucide-react";
import Image from "next/image";

export default function AssignmentsAndQuizzes() {
    return (
        <section
            className="
                h-auto xl:h-[498px]
                w-full
                min-w-0
                rounded-[24px]
                bg-white
                px-[24px]
                py-[24px]
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
                Assignments and Quizzes
            </h2>

            <div
                className="
                    mt-[28px]
                    grid
                    grid-cols-1
                    gap-[24px]
                    xl:h-[390px]
                    xl:grid-cols-2
                "
            >
                <AssignmentsCard />
                <QuizzesCard />
            </div>
        </section>
    );
}

function AssignmentsCard() {
    return (
        <article
            className="
                flex
                min-w-0
                flex-col
                rounded-[20px]
                bg-[var(--color-grey-light)]
                px-[24px]
                py-[24px]
            "
        >
            {/* Title */}
            <div className="flex items-center gap-[16px]">
                <div
                    className="
                        flex
                        h-[54px]
                        w-[54px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[var(--color-orange-dark)]
                        text-white
                    "
                >
                    <ClipboardList
                        size={27}
                        strokeWidth={1.8}
                    />
                </div>

                <h3
                    className="
                        text-[20px]
                        font-semibold
                        text-[var(--color-grey-strong)]
                    "
                >
                    Assignments
                </h3>
            </div>

            {/* Stats */}
            <div className="mt-[30px] grid grid-cols-2">
                <Metric
                    value="0"
                    label="Pending"
                />

                <Metric
                    value="0"
                    label="Completed"
                    divider
                />
            </div>

            {/* Illustration */}
            <div className="mt-[22px] flex justify-center">
                <Image
                    src="/images/dashboard/assignments.png"
                    alt=""
                    width={170}
                    height={110}
                    className="
                        h-[110px]
                        w-[170px]
                        object-contain
                    "
                />
            </div>

            {/* Action */}
            <button
                type="button"
                disabled
                className="
                    mt-auto
                    flex
                    h-[42px]
                    w-full
                    cursor-not-allowed
                    items-center
                    justify-center
                    gap-[12px]
                    rounded-[10px]
                    border
                    border-[var(--color-grey-disable)]
                    text-[16px]
                    font-normal
                    text-[var(--color-grey-disable)]
                "
            >
                View All Assignments

                <ChevronRight
                    size={18}
                    strokeWidth={1.8}
                />
            </button>
        </article>
    );
}

function QuizzesCard() {
    return (
        <article
            className="
                flex
                min-w-0
                flex-col
                rounded-[20px]
                bg-[var(--color-grey-light)]
                px-[24px]
                py-[24px]
            "
        >
            {/* Title */}
            <div className="flex items-center gap-[16px]">
                <div
                    className="
                        flex
                        h-[54px]
                        w-[54px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[var(--color-green-dark)]
                        text-white
                    "
                >
                    <Target
                        size={28}
                        strokeWidth={1.8}
                    />
                </div>

                <h3
                    className="
                        text-[20px]
                        font-semibold
                        text-[var(--color-grey-strong)]
                    "
                >
                    Quizzes
                </h3>
            </div>

            {/* Stats */}
            <div className="mt-[30px] grid grid-cols-2">
                <Metric
                    value="0"
                    label="Quiz Available"
                />

                <Metric
                    value="0%"
                    label="Average Score"
                    divider
                />
            </div>

            {/* Illustration */}
            <div className="mt-[22px] flex justify-center">
                <Image
                    src="/images/dashboard/quizzes.png"
                    alt=""
                    width={170}
                    height={110}
                    className="
                        h-[110px]
                        w-[170px]
                        object-contain
                    "
                />
            </div>

            {/* Action */}
            <button
                type="button"
                disabled
                className="
                    mt-auto
                    flex
                    h-[42px]
                    w-full
                    cursor-not-allowed
                    items-center
                    justify-center
                    gap-[12px]
                    rounded-[10px]
                    border
                    border-[var(--color-grey-disable)]
                    text-[16px]
                    font-normal
                    text-[var(--color-grey-disable)]
                "
            >
                Start Quiz

                <ChevronRight
                    size={18}
                    strokeWidth={1.8}
                />
            </button>
        </article>
    );
}

type MetricProps = {
    value: string;
    label: string;
    divider?: boolean;
};

function Metric({
    value,
    label,
    divider = false,
}: MetricProps) {
    return (
        <div
            className={`
                min-w-0
                ${
                    divider
                        ? "border-l border-dashed border-[var(--color-grey-disable)] pl-[28px]"
                        : "pr-[20px]"
                }
            `}
        >
            <p
                className="
                    text-[20px]
                    font-semibold
                    leading-[1.25]
                    text-[var(--color-grey-strong)]
                "
            >
                {value}
            </p>

            <p
                className="
                    mt-[8px]
                    text-[16px]
                    font-normal
                    leading-[1.5]
                    text-[var(--color-grey-strong)]
                "
            >
                {label}
            </p>
        </div>
    );
}