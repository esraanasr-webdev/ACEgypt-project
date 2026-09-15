import {
    Heart,
    Play,
    Share2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { CourseDetails } from "../types";

type CourseEnrollmentCardProps = {
    course: CourseDetails;
};

export default function CourseEnrollmentCard({
    course,
}: CourseEnrollmentCardProps) {
    const hasDiscount =
        course.originalPrice &&
        course.originalPrice > course.currentPrice;

    return (
        <aside
            className="
                relative
                z-20
                rounded-[20px]
                bg-white
                p-5
                text-[var(--color-grey-strong)]
                shadow-[0_20px_45px_rgba(0,0,0,0.14)]
            "
        >
            {/* Course Preview */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-[14px]">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    priority
                    className="object-cover"
                />

                <button
                    type="button"
                    aria-label="Play course preview"
                    className="
                        absolute
                        left-1/2
                        top-1/2
                        flex
                        h-[60px]
                        w-[60px]
                        -translate-x-1/2
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-full
                        bg-white/70
                        backdrop-blur-sm
                        transition
                        hover:bg-white/90
                    "
                >
                    <Play
                        size={26}
                        fill="white"
                        className="ml-1 text-white"
                    />
                </button>
            </div>

            {/* Price */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
                <span
                    className="
                        text-[27px]
                        font-semibold
                        text-[var(--color-blue-dark)]
                    "
                >
                    {course.currency}{" "}
                    {course.currentPrice.toLocaleString()}
                </span>

                {hasDiscount && (
                    <span
                        className="
                            text-[15px]
                            text-[var(--color-grey-dark)]
                            line-through
                        "
                    >
                        {course.currency}{" "}
                        {course.originalPrice?.toLocaleString()}
                    </span>
                )}

                {course.discount && (
                    <span
                        className="
                            ml-auto
                            rounded-full
                            bg-[var(--color-green-dark)]
                            px-3
                            py-2
                            text-[11px]
                            font-medium
                            text-white
                        "
                    >
                        {course.discount}% OFF
                    </span>
                )}
            </div>

            {course.offerEndsInDays && (
                <p
                    className="
                        mt-2
                        text-[14px]
                        text-[var(--color-grey-strong)]
                    "
                >
                    Limited time offer ends in{" "}
                    {course.offerEndsInDays} days
                </p>
            )}

            {/* Actions */}
            <Link
                href={`/courses/${course.slug}/checkout`}
                className="
                    mt-6
                    flex
                    min-h-[58px]
                    w-full
                    items-center
                    justify-center
                    rounded-[14px]
                    bg-[var(--color-blue-vibrant)]
                    px-6
                    text-[15px]
                    font-medium
                    text-white
                    shadow-[0_10px_24px_rgba(2,101,212,0.22)]
                    transition
                    hover:bg-[var(--color-blue-dark)]
                "
            >
                Enroll Now
            </Link>

            <button
                type="button"
                className="
                    mt-3
                    flex
                    min-h-[54px]
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-[14px]
                    border
                    border-[var(--color-grey-strong)]
                    bg-white
                    px-6
                    text-[15px]
                    font-medium
                    text-[var(--color-grey-strong)]
                    transition
                    hover:bg-[var(--color-grey-light)]
                "
            >
                <Heart size={20} />
                Join Wait List
            </button>

            {/* Course Info */}
            <div
                className="
                    mt-7
                    space-y-4
                    border-t
                    border-dashed
                    border-[var(--color-grey-medium)]
                    pt-6
                    text-[13px]
                "
            >
                <DetailRow
                    label="Duration"
                    value={course.duration}
                />

                <DetailRow
                    label="Delivery Mode"
                    value={course.deliveryMode}
                />

                <DetailRow
                    label="Next Intake"
                    value={course.nextIntake}
                />
            </div>

            {/* Share */}
            <div
                className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    gap-4
                    border-t
                    border-dashed
                    border-[var(--color-grey-medium)]
                    pt-5
                "
            >
                <div className="flex items-center gap-2">
                    <Share2
                        size={18}
                        className="text-[var(--color-grey-strong)]"
                    />

                    <span className="text-[13px] font-medium">
                        Share This Course
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <SocialButton label="Facebook">
                        f
                    </SocialButton>

                    <SocialButton label="X">
                        X
                    </SocialButton>

                    <SocialButton label="LinkedIn">
                        in
                    </SocialButton>

                    <SocialButton label="Copy Link">
                        ↗
                    </SocialButton>
                </div>
            </div>
        </aside>
    );
}

function DetailRow({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-center justify-between gap-4">
            <span className="text-[var(--color-grey-strong)]">
                {label}
            </span>

            <strong className="text-right font-semibold">
                {value}
            </strong>
        </div>
    );
}

function SocialButton({
    label,
    children,
}: {
    label: string;
    children: React.ReactNode;
}) {
    return (
        <button
            type="button"
            aria-label={label}
            className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-[var(--color-blue-light)]
                text-[12px]
                font-semibold
                text-[var(--color-blue-dark)]
                transition
                hover:bg-[var(--color-blue-medium)]
            "
        >
            {children}
        </button>
    );
}