"use client";

import {
    Bell,
    ChevronDown,
    ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardHeader() {
    return (
        <header
            className="
                flex
                flex-col
                gap-6
                xl:flex-row
                xl:items-start
                xl:justify-between
            "
        >
            {/* Welcome */}
            <div>
                <h1
                    className="
                        text-[28px]
                        font-semibold
                        leading-[1.25]
                        text-[var(--color-grey-strong)]
                    "
                >
                    Welcome back, Ahmed! 👋
                </h1>

                <p
                    className="
                        mt-[6px]
                        text-[16px]
                        font-normal
                        leading-[1.5]
                        text-[var(--color-grey-dark)]
                    "
                >
                    Continue your learning journey. You have 3 active courses.
                </p>
            </div>

            {/* Actions */}
            <div
                className="
                    flex
                    flex-wrap
                    items-center
                    gap-[14px]
                    xl:pt-[2px]
                "
            >
                {/* Browse Courses */}
                <Link
                    href="/courses"
                    className="
                        flex
                        h-[44px]
                        items-center
                        justify-center
                        gap-[10px]
                        rounded-[12px]
                        border
                        border-[var(--color-grey-strong)]
                        px-[16px]
                        text-[14px]
                        font-medium
                        text-[var(--color-grey-strong)]
                        transition-colors
                        hover:border-[var(--color-blue-vibrant)]
                        hover:text-[var(--color-blue-vibrant)]
                    "
                >
                    Browse Courses

                    <ExternalLink
                        size={15}
                        strokeWidth={1.8}
                    />
                </Link>

                <HeaderDivider />

                {/* Notifications */}
                <button
                    type="button"
                    aria-label="Notifications"
                    className="
                        relative
                        flex
                        h-[40px]
                        w-[40px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        text-[var(--color-grey-strong)]
                        transition-colors
                        hover:bg-white
                    "
                >
                    <Bell
                        size={21}
                        strokeWidth={1.8}
                    />

                    <span
                        className="
                            absolute
                            right-[8px]
                            top-[7px]
                            h-[6px]
                            w-[6px]
                            rounded-full
                            bg-[var(--color-red-dark)]
                            ring-2
                            ring-[var(--color-blue-light)]
                        "
                    />
                </button>

                {/* Language */}
                <button
                    type="button"
                    aria-label="Change language"
                    className="
                        flex
                        h-[40px]
                        w-[40px]
                        shrink-0
                        items-center
                        justify-center
                    "
                >
                    <span
                        className="
                            flex
                            h-[24px]
                            min-w-[30px]
                            items-center
                            justify-center
                            rounded-[3px]
                            bg-[var(--color-green-dark)]
                            px-1
                            text-[10px]
                            font-medium
                            text-white
                        "
                    >
                        عربي
                    </span>
                </button>

                <HeaderDivider />

                {/* User */}
                <button
                    type="button"
                    className="
                        flex
                        h-[48px]
                        items-center
                        gap-[10px]
                        rounded-[12px]
                        bg-white
                        px-[10px]
                        pr-[14px]
                        text-[var(--color-grey-strong)]
                        shadow-[0_4px_16px_rgba(0,0,0,0.04)]
                    "
                >
                    <span
                        className="
                            relative
                            h-[34px]
                            w-[34px]
                            shrink-0
                            overflow-hidden
                            rounded-full
                            bg-[var(--color-grey-medium)]
                        "
                    >
                        <Image
                            src="/images/dashboard/profile.jpg"
                            alt="Ahmed"
                            fill
                            sizes="34px"
                            className="object-cover"
                        />
                    </span>

                    <span
                        className="
                            whitespace-nowrap
                            text-[14px]
                            font-medium
                        "
                    >
                        Hi, Ahmed
                    </span>

                    <ChevronDown
                        size={15}
                        strokeWidth={1.8}
                    />
                </button>
            </div>
        </header>
    );
}

function HeaderDivider() {
    return (
        <span
            aria-hidden="true"
            className="
                hidden
                h-[24px]
                w-px
                bg-[var(--color-blue-medium)]
                sm:block
            "
        />
    );
}