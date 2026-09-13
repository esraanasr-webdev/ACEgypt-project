"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent } from "react";

export default function SignUpPage() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Backend integration later
    };

    return (
        <div className="w-full">
            {/* Header */}
            <div>
                <h1 className="text-[32px] font-semibold leading-[1.25] text-[var(--color-grey-strong)] sm:text-[36px]">
                    Create Your Account
                </h1>

                <p className="mt-3 text-[16px] font-normal text-[var(--color-grey-strong)]">
                    Join thousands of learners and start your journey
                </p>
            </div>

            {/* Google */}
            <button
                type="button"
                className="
                    mt-9
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

                Sign Up with Google
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
                {/* Name */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="firstName"
                            className="mb-2 block text-[14px] font-semibold text-[var(--color-grey-strong)]"
                        >
                            First Name
                        </label>

                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="Enter Your First Name"
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
                            htmlFor="lastName"
                            className="mb-2 block text-[14px] font-semibold text-[var(--color-grey-strong)]"
                        >
                            Last Name
                        </label>

                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Enter Your Last Name"
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
                </div>

                {/* Email */}
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
                        className="mb-2 block text-[14px] font-semibold text-[var(--color-grey-strong)]"
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
                </div>

                {/* Confirm Password */}
                <div>
                    <label
                        htmlFor="confirmPassword"
                        className="mb-2 block text-[14px] font-semibold text-[var(--color-grey-strong)]"
                    >
                        Confirm Password
                    </label>

                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
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

                {/* Submit */}
                <button
                    type="submit"
                    className="
                        mt-2
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
                        shadow-[0_10px_24px_rgba(2,101,212,0.24)]
                        transition
                        hover:bg-[var(--color-blue-dark)]
                    "
                >
                    Sign Up
                </button>
            </form>

            {/* Sign in */}
            <p className="mt-4 text-center text-[14px] text-[var(--color-grey-dark)]">
                Already have an account?{" "}
                <Link
                    href="/login"
                    className="font-semibold text-[var(--color-blue-dark)]"
                >
                    Sign In
                </Link>
            </p>
        </div>
    );
}