"use client";

import Link from "next/link";
import { useState } from "react";

export default function TermsAgreement() {
    const [accepted, setAccepted] =
        useState(true);

    return (
        <div
            className="
                rounded-[20px]
                bg-white
                p-6
                shadow-[0_10px_30px_rgba(0,0,0,0.05)]
            "
        >
            <label className="flex cursor-pointer items-start gap-3">
                <input
                    type="checkbox"
                    checked={accepted}
                    onChange={(event) =>
                        setAccepted(event.target.checked)
                    }
                    className="mt-1 h-5 w-5 accent-[var(--color-blue-dark)]"
                />

                <div>
                    <p className="text-[15px] font-medium text-[var(--color-grey-strong)]">
                        I agree to the{" "}
                        <Link
                            href="/terms"
                            className="font-semibold text-[var(--color-blue-dark)] underline"
                        >
                            Terms &amp; Conditions
                        </Link>
                    </p>

                    <p className="mt-2 text-[13px] text-[var(--color-grey-strong)]">
                        By enrolling, you agree to our
                        Terms of Service, Privacy Policy,
                        and Refund Policy.
                    </p>
                </div>
            </label>
        </div>
    );
}