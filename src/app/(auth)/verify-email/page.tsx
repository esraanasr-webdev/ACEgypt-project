"use client";

import { Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function VerifyEmailPage() {
    const [seconds, setSeconds] = useState(60);

    const canResend = seconds === 0;

    // For Counter
    useEffect(() => {
        if (seconds <= 0) return;

        const timer = window.setInterval(() => {
            setSeconds((current) => {
                if (current <= 1) {
                    window.clearInterval(timer);
                    return 0;
                }

                return current - 1;
            });
        }, 1000);

        return () => window.clearInterval(timer);
    }, [seconds]);


    const handleResend = () => {
        if (!canResend) return;

        // TODO: Call resend verification email API
        setSeconds(60);
    };
    
    return (
        <div className="mx-auto w-full max-w-[486px] text-center">

            {/* Email icon */}
            <div
                className="
                    mx-auto
                    flex
                    h-[112px]
                    w-[112px]
                    items-center
                    justify-center
                    rounded-[32px]
                    bg-[var(--color-orange-light)]
                "
            >
                <Mail
                    size={52}
                    strokeWidth={1.8}
                    className="text-[var(--color-orange-dark)]"
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
                Check Your Inbox
            </h1>

            <p
                className="
                    mt-4
                    text-[16px]
                    leading-[1.6]
                    text-[var(--color-grey-strong)]
                "
            >
                We&apos;ve sent a verification email to
            </p>

            <p
                className="
                    mt-3
                    text-[16px]
                    font-semibold
                    text-[var(--color-grey-strong)]
                "
            >
                Ahmed.Mohamed@gmail.com
            </p>

            {/* Resend */}
            <div className="mt-20">
                <p className="text-[16px] text-[var(--color-grey-strong)]">
                    Didn&apos;t receive the email?
                </p>

                <button
                    type="button"
                    disabled={!canResend}
                    onClick={handleResend}
                    className="
                        mt-5
                        flex
                        min-h-[60px]
                        w-full
                        items-center
                        justify-center
                        rounded-[14px]
                        bg-[var(--color-blue-vibrant)]
                        px-6
                        text-[16px]
                        font-medium
                        text-white
                        transition
                        hover:bg-[var(--color-blue-dark)]
                        disabled:cursor-not-allowed
                        disabled:bg-[var(--color-grey-medium)]
                        disabled:text-[var(--color-grey-disable)]
                    "
                >
                    Resend Verification Email
                </button>

                {!canResend && (
                    <p className="mt-4 text-[14px] text-[var(--color-grey-dark)]">
                        You can request a new email in {seconds} seconds
                    </p>
                )}
            </div>

            {/* Divider */}
            <div className="my-10 border-t border-dashed border-[var(--color-grey-medium)]" />

            {/* Update email */}
            <p className="text-[14px] text-[var(--color-grey-strong)]">
                Wrong email address?{" "}
                <Link
                    href="/signup"
                    className="
                        font-semibold
                        text-[var(--color-blue-dark)]
                        hover:underline
                    "
                >
                    Update your email
                </Link>
            </p>
        </div>
    );
}