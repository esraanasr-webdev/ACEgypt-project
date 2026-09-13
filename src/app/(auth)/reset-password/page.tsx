"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function ResetPasswordPage() {
    const router = useRouter();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // TODO:
        // 1. read token from search params
        // 2. validate passwords
        // 3. call reset password API

        router.push("/password-reset-success");
    };

    return (
        <div className="mx-auto w-full max-w-[486px]">
            <div className="text-center">
                <h1 className="text-[32px] font-semibold leading-[1.25] text-[var(--color-grey-strong)] sm:text-[36px]">
                    Reset Your Password
                </h1>

                <p className="mx-auto mt-4 max-w-[440px] text-[16px] leading-[1.6] text-[var(--color-grey-strong)]">
                    Enter your email address and we&apos;ll send you a link to reset
                    your password
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="mt-9 space-y-5"
            >
                <div>
                    <label
                        htmlFor="password"
                        className="mb-2 block text-[14px] font-semibold text-[var(--color-grey-strong)]"
                    >
                        New Password
                    </label>

                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        placeholder="Enter Your New Password"
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
                </div>

                <div>
                    <label
                        htmlFor="confirmPassword"
                        className="mb-2 block text-[14px] font-semibold text-[var(--color-grey-strong)]"
                    >
                        Confirm New Password
                    </label>

                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        required
                        placeholder="Confirm New Password"
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
                </div>

                <button
                    type="submit"
                    className="
                        mt-3
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
        </div>
    );
}