import { BadgeCheck } from "lucide-react";
import Link from "next/link";

export default function EmailVerifiedPage() {
    return (
        <div className="mx-auto w-full max-w-[486px] text-center">

            {/* Success icon */}
            <div
                className="
                    mx-auto
                    flex
                    h-[112px]
                    w-[112px]
                    items-center
                    justify-center
                    rounded-[32px]
                    bg-[var(--color-green-light)]
                "
            >
                <BadgeCheck
                    size={54}
                    strokeWidth={1.8}
                    className="text-[var(--color-green-dark)]"
                />
            </div>

            {/* Heading */}
            <h1
                className="
                    mt-10
                    text-[32px]
                    font-semibold
                    leading-[1.25]
                    text-[var(--color-grey-strong)]
                    sm:text-[36px]
                "
            >
                Email Verified
                <br />
                Successfully!
            </h1>

            {/* Description */}
            <p
                className="
                    mx-auto
                    mt-5
                    max-w-[420px]
                    text-[16px]
                    leading-[1.7]
                    text-[var(--color-grey-strong)]
                "
            >
                Your email{" "}
                <span className="font-medium">
                    Ahmed.Mohamed@gmail.com
                </span>{" "}
                has been successfully verified.
            </p>

            {/* Actions */}
            <div
                className="
                    mt-20
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                    sm:justify-center
                "
            >
                <Link
                    href="/courses"
                    className="
                        flex
                        min-h-[60px]
                        w-full
                        items-center
                        justify-center
                        rounded-[14px]
                        bg-[var(--color-blue-vibrant)]
                        px-7
                        text-[16px]
                        font-medium
                        text-white
                        shadow-[0_10px_24px_rgba(2,101,212,0.22)]
                        transition
                        hover:bg-[var(--color-blue-dark)]
                        sm:w-[194px]
                    "
                >
                    Browse Courses
                </Link>

                <Link
                    href="/profile"
                    className="
                        flex
                        min-h-[60px]
                        w-full
                        items-center
                        justify-center
                        rounded-[14px]
                        border
                        border-[var(--color-grey-strong)]
                        bg-white
                        px-7
                        text-[16px]
                        font-medium
                        text-[var(--color-grey-strong)]
                        transition
                        hover:bg-[var(--color-grey-light)]
                        sm:w-[198px]
                    "
                >
                    Complete Profile
                </Link>
            </div>
        </div>
    );
}