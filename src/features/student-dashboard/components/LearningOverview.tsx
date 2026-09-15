export default function LearningOverview() {
    return (
        <section
            className="
                h-auto
                w-full
                min-w-0
                rounded-[24px]
                bg-white
                px-[24px]
                py-[24px]
                xl:h-[498px]
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
                Learning Overview
            </h2>

            {/* Success Rate */}
            <div className="mt-[48px] flex justify-center">
                <div
                    className="
                        flex
                        h-[180px]
                        w-[180px]
                        items-center
                        justify-center
                        rounded-full
                        border-[18px]
                        border-[var(--color-blue-light)]
                    "
                >
                    <div className="text-center">
                        <p
                            className="
                                text-[38px]
                                font-semibold
                                leading-none
                                text-[var(--color-grey-strong)]
                            "
                        >
                            0%
                        </p>

                        <p
                            className="
                                mt-[12px]
                                text-[16px]
                                font-normal
                                leading-[1.5]
                                text-[var(--color-grey-strong)]
                            "
                        >
                            Success Rate
                        </p>
                    </div>
                </div>
            </div>

            {/* Progress */}
            <div className="mt-[38px] space-y-[20px]">
                <ProgressItem
                    value="0"
                    label="Hours Learned"
                    progress={0}
                />

                <ProgressItem
                    value="0"
                    label="Assignments Completed"
                    progress={0}
                />

                <ProgressItem
                    value="0%"
                    label="Average Quiz Score"
                    progress={0}
                />
            </div>
        </section>
    );
}

type ProgressItemProps = {
    value: string;
    label: string;
    progress: number;
};

function ProgressItem({
    value,
    label,
    progress,
}: ProgressItemProps) {
    return (
        <div>
            <p
                className="
                    text-[16px]
                    font-normal
                    leading-[1.5]
                    text-[var(--color-grey-strong)]
                "
            >
                <span className="font-semibold">
                    {value}
                </span>{" "}
                {label}
            </p>

            <div
                className="
                    mt-[8px]
                    h-[10px]
                    w-full
                    overflow-hidden
                    rounded-full
                    bg-[var(--color-grey-medium)]
                "
            >
                <div
                    className="
                        h-full
                        rounded-full
                        bg-[var(--color-blue-vibrant)]
                    "
                    style={{
                        width: `${Math.min(
                            Math.max(progress, 0),
                            100,
                        )}%`,
                    }}
                />
            </div>
        </div>
    );
}