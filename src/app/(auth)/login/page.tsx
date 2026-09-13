"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent } from "react";

export default function LoginPage() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // TODO: connect login API
    };

    return (
        <div className="mx-auto w-full max-w-[486px]">
            {/* Heading */}
            <h1
                className="
                    text-center
                    text-[32px]
                    font-semibold
                    leading-[1.25]
                    text-[var(--color-grey-strong)]
                    sm:text-[36px]
                "
            >
                Sign In
            </h1>

            {/* Google */}
            <button
                type="button"
                className="
                    mt-8
                    flex
                    min-h-[58px]
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-[14px]
                    border
                    border-[var(--color-grey-strong)]
                    bg-white
                    px-6
                    text-[16px]
                    font-medium
                    text-[var(--color-grey-strong)]
                    transition
                    hover:bg-[var(--color-grey-light)]
                "
            >
                <Image
                    src="/images/auth/google.svg"
                    alt=""
                    width={24}
                    height={24}
                />

                Sign In with Google
            </button>

            {/* OR divider */}
            <div className="my-5 flex items-center gap-4">
                <div className="h-px flex-1 border-t border-dashed border-[var(--color-grey-disable)]" />

                <span className="text-[13px] text-[var(--color-grey-dark)]">
                    OR
                </span>

                <div className="h-px flex-1 border-t border-dashed border-[var(--color-grey-disable)]" />
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >
                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="
                            mb-2
                            block
                            text-[14px]
                            font-semibold
                            text-[var(--color-grey-strong)]
                        "
                    >
                        Email Address
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
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
                </div>

                {/* Password */}
                <div>
                    <label
                        htmlFor="password"
                        className="
                            mb-2
                            block
                            text-[14px]
                            font-semibold
                            text-[var(--color-grey-strong)]
                        "
                    >
                        Password
                    </label>

                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter Your Password"
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

                    <div className="mt-2 flex justify-end">
                        <Link
                            href="/forgot-password"
                            className="
                                text-[14px]
                                text-[var(--color-grey-dark)]
                                transition
                                hover:text-[var(--color-blue-dark)]
                            "
                        >
                            Forgot Password?
                        </Link>
                    </div>
                </div>

                {/* Submit */}
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
                    Sign In
                </button>
            </form>

            {/* Signup */}
            <p className="mt-4 text-center text-[14px] text-[var(--color-grey-dark)]">
                Don&apos;t have an account?{" "}
                <Link
                    href="/signup"
                    className="
                        font-semibold
                        text-[var(--color-blue-dark)]
                        hover:underline
                    "
                >
                    Sign Up
                </Link>
            </p>
        </div>
    );
}