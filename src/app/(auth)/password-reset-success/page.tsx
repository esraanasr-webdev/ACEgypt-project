import { LockKeyhole } from "lucide-react";
import Link from "next/link";

export default function PasswordResetSuccessPage() {
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
                    bg-[var(--color-green-light)]
                "
            >
                <LockKeyhole
                    size={50}
                    strokeWidth={1.8}
                    className="text-[var(--color-green-dark)]"
                />
            </div>

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
                Password Reset
                <br />
                Successfully!
            </h1>

            <p
                className="
                    mx-auto
                    mt-4
                    max-w-[340px]
                    text-[16px]
                    leading-[1.6]
                    text-[var(--color-grey-strong)]
                "
            >
                Your password has been reset
                <br />
                successfully.
            </p>

            <Link
                href="/login"
                className="
                    mx-auto
                    mt-16
                    flex
                    min-h-[58px]
                    w-full
                    max-w-[205px]
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
                Back to Login Page
            </Link>
        </div>
    );
}