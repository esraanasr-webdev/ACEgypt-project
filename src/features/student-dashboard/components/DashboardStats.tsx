import type { LucideIcon } from "lucide-react";
import {
    Award,
    BarChart3,
    CheckCircle2,
    ClipboardList,
    Clock3,
    Target,
} from "lucide-react";

type StatItem = {
    label: string;
    value: string;
    icon: LucideIcon;
    iconClassName: string;
};

const stats: StatItem[] = [
    {
        label: "Active Courses",
        value: "0",
        icon: CheckCircle2,
        iconClassName:
            "bg-[var(--color-blue-light)] text-[var(--color-blue-dark)]",
    },
    {
        label: "Certificates",
        value: "0",
        icon: Award,
        iconClassName:
            "bg-[var(--color-orange-light)] text-[var(--color-orange-dark)]",
    },
    {
        label: "Hours Learned",
        value: "0",
        icon: Clock3,
        iconClassName:
            "bg-[var(--color-violet-light)] text-[var(--color-violet-dark)]",
    },
    {
        label: "Quizzes",
        value: "0",
        icon: Target,
        iconClassName:
            "bg-[var(--color-green-light)] text-[var(--color-green-dark)]",
    },
    {
        label: "Assignments",
        value: "0",
        icon: ClipboardList,
        iconClassName:
            "bg-[var(--color-grey-medium)] text-[var(--color-grey-dark)]",
    },
    {
        label: "Success Rate",
        value: "0%",
        icon: BarChart3,
        iconClassName:
            "bg-[var(--color-green-light)] text-[var(--color-green-dark)]",
    },
];

export default function DashboardStats() {
    return (
        <section
            aria-label="Learning statistics"
            className="
                grid
                grid-cols-1
                gap-[20px]
                sm:grid-cols-2
                md:grid-cols-3
                xl:grid-cols-6
            "
        >
            {stats.map((stat) => (
                <DashboardStatCard
                    key={stat.label}
                    {...stat}
                />
            ))}
        </section>
    );
}

function DashboardStatCard({
    label,
    value,
    icon: Icon,
    iconClassName,
}: StatItem) {
    return (
        <article
            className="
                min-h-[158px]
                rounded-[20px]
                bg-white
                px-[16px]
                py-[14px]
            "
        >
            {/* Icon */}
            <div
                className={`
                    flex
                    h-[48px]
                    w-[48px]
                    items-center
                    justify-center
                    rounded-[14px]
                    ${iconClassName}
                `}
            >
                <Icon
                    size={25}
                    strokeWidth={1.8}
                />
            </div>

            {/* Value */}
            <p
                className="
                    mt-[18px]
                    text-[26px]
                    font-semibold
                    leading-none
                    text-[var(--color-grey-strong)]
                "
            >
                {value}
            </p>

            {/* Label */}
            <p
                className="
                    mt-[8px]
                    whitespace-nowrap
                    text-[14px]
                    font-medium
                    leading-[1.25]
                    text-[var(--color-grey-strong)]
                "
            >
                {label}
            </p>
        </article>
    );
}