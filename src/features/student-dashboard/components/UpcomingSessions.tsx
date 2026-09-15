import Image from "next/image";

export default function UpcomingSessions() {
    return (
        <section
            className="
                h-[390px]
                w-full
                rounded-[24px]
                bg-white
                px-[24px]
                py-[24px]
            "
        >
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2
                    className="
                        text-[20px]
                        font-semibold
                        leading-[1.25]
                        text-[var(--color-grey-strong)]
                    "
                >
                    Upcoming Sessions
                </h2>

                <p
                    className="
                        text-[14px]
                        font-normal
                        text-[var(--color-grey-dark)]
                    "
                >
                    2 Upcoming Sessions
                </p>
            </div>

            {/* Empty State */}
            <div
                className="
                    flex
                    flex-col
                    items-center
                    text-center
                "
            >
                <Image
                    src="/images/dashboard/upcoming-sessions.png"
                    alt=""
                    width={210}
                    height={170}
                    className="
                        mt-[30px]
                        h-[170px]
                        w-[210px]
                        object-contain
                    "
                />

                <h3
                    className="
                        mt-[8px]
                        text-[20px]
                        font-semibold
                        leading-[1.25]
                        text-[var(--color-grey-strong)]
                    "
                >
                    No Upcoming Sessions
                </h3>

                <p
                    className="
                        mt-[12px]
                        text-[16px]
                        font-normal
                        leading-[1.5]
                        text-[var(--color-grey-strong)]
                    "
                >
                    You don&apos;t have any scheduled sessions at the moment
                </p>
            </div>
        </section>
    );
}