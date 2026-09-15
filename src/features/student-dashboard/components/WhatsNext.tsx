import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WhatsNext() {
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
                    items-center
                    justify-between
                    gap-4
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
                    What&apos;s Next?
                </h2>

                <Link
                    href="/dashboard/schedule"
                    className="
                        flex
                        shrink-0
                        items-center
                        gap-[8px]
                        text-[14px]
                        font-medium
                        text-[var(--color-blue-dark)]
                        transition-opacity
                        hover:opacity-75
                    "
                >
                    Full Schedule

                    <ChevronRight
                        size={18}
                        strokeWidth={1.8}
                    />
                </Link>
            </div>

            {/* Empty State */}
            <div
                className="
                    flex
                    min-h-[420px]
                    flex-col
                    items-center
                    justify-center
                    px-5
                    text-center
                "
            >
                <Image
                    src="/images/dashboard/calenderDay.png"
                    alt=""
                    width={205}
                    height={107}
                    className="object-contain"
                />

                <h3
                    className="
                        mt-[24px]
                        text-[20px]
                        font-semibold
                        leading-[1.25]
                        text-[var(--color-grey-strong)]
                    "
                >
                    Nothing scheduled yet
                </h3>

                <p
                    className="
                        mt-[10px]
                        max-w-[290px]
                        text-[16px]
                        font-normal
                        leading-[1.5]
                        text-[var(--color-grey-dark)]
                    "
                >
                    Your upcoming sessions, assignments and
                    quizzes will be shown here.
                </p>
            </div>
        </section>
    );
}