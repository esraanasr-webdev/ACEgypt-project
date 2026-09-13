"use client";

import { Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function ForgotPasswordSentPage() {
    const [seconds, setSeconds] = useState(60);

    const canResend = seconds === 0;

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

        // TODO: call resend reset-link API

        setSeconds(60);
    };

    return (
        <div className="mx-auto w-full max-w-[486px] text-center">
            <div
                className="
                    mx-auto
                    flex
                    h-[106px]
                    w-[106px]
                    items-center
                    justify-center
                    rounded-[30px]
                    bg-[var(--color-orange-light)]
                "
            >
                <Mail
                    size={50}
                    strokeWidth={1.8}
                    className="text-[var(--color-orange-dark)]"
                />
            </div>

            <h1 className="mt-10 text-[32px] font-semibold text-[var(--color-grey-strong)] sm:text-[36px]">
                Forgot Password
            </h1>

            <p className="mt-3 text-[16px] text-[var(--color-grey-strong)]">
                A reset link has been sent
            </p>

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
                        min-h-[56px]
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
                    Resend reset link Email
                </button>

                {!canResend && (
                    <p className="mt-4 text-[14px] text-[var(--color-grey-dark)]">
                        You can request a new email in {seconds} seconds
                    </p>
                )}
            </div>
        </div>
    );
}