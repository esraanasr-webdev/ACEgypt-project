"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function ForgotPasswordPage() {
    const router = useRouter();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // TODO: send password reset request to API

        router.push("/forgot-password-sent");
    };

    return (
        <div className="mx-auto w-full max-w-[486px]">
            <div className="text-center">
                <h1 className="text-[32px] font-semibold leading-[1.25] text-[var(--color-grey-strong)] sm:text-[36px]">
                    Forgot Password
                </h1>

                <p className="mx-auto mt-4 max-w-[440px] text-[16px] leading-[1.6] text-[var(--color-grey-strong)]">
                    Enter your email address and we&apos;ll send you a link to reset
                    your password
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="mt-9"
            >
                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block text-[14px] font-semibold text-[var(--color-grey-strong)]"
                    >
                        Email Address
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="Enter Your Email Address"
                        className="
                            min-h-[54px]
                            w-full
                            rounded-[12px]
                            border
                            border-[var(--color-blue-medium)]
                            px-4
                            text-[14px]
                            outline-none
                            transition
                            placeholder:text-[var(--color-grey-dark)]
                            focus:border-[var(--color-blue-vibrant)]
                        "
                    />

                    <p className="mt-2 text-[13px] text-[var(--color-grey-dark)]">
                        We&apos;ll send a password reset link to this email address
                    </p>
                </div>

                <button
                    type="submit"
                    className="
                        mt-8
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
                        shadow-[0_10px_24px_rgba(2,101,212,0.22)]
                        transition
                        hover:bg-[var(--color-blue-dark)]
                    "
                >
                    Submit
                </button>
            </form>

            <div className="mt-9 border-t border-dashed border-[var(--color-grey-medium)] pt-7 text-center">
                <p className="text-[14px] text-[var(--color-grey-dark)]">
                    Remember your password?
                </p>

                <Link
                    href="/login"
                    className="
                        mt-3
                        inline-flex
                        min-h-[40px]
                        items-center
                        justify-center
                        rounded-[10px]
                        border
                        border-[var(--color-grey-strong)]
                        px-5
                        text-[14px]
                        font-medium
                        text-[var(--color-grey-strong)]
                        transition
                        hover:bg-[var(--color-grey-light)]
                    "
                >
                    Sign In
                </Link>
            </div>
        </div>
    );
}