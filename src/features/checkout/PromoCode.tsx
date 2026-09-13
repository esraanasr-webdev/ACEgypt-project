"use client";

import { CircleCheck, CircleX, X } from "lucide-react";
import { useState } from "react";

type PromoStatus =
    | "idle"
    | "success"
    | "error";

export default function PromoCode() {
    const [promoCode, setPromoCode] = useState("");
    const [status, setStatus] =
        useState<PromoStatus>("idle");

    const handleApply = () => {
        if (!promoCode.trim()) return;

        if (
            promoCode.trim().toUpperCase() ===
            "EARLYBIRD10"
        ) {
            setStatus("success");
        } else {
            setStatus("error");
        }
    };

    const handleClear = () => {
        setPromoCode("");
        setStatus("idle");
    };

    const isApplied = status === "success";

    return (
        <div
            className="
                rounded-[20px]
                bg-white
                p-6
                shadow-[0_10px_30px_rgba(0,0,0,0.05)]
            "
        >
            <h2 className="mb-3 text-[16px] font-semibold text-[var(--color-grey-strong)]">
                Have a Promo Code?
            </h2>

            <div className="flex gap-4">
                <div className="flex-1">
                    <div className="relative">
                        <input
                            type="text"
                            value={promoCode}
                            disabled={isApplied}
                            onChange={(event) => {
                                setPromoCode(
                                    event.target.value
                                );

                                setStatus("idle");
                            }}
                            placeholder="Enter Promo Code"
                            className={`
                                min-h-[54px]
                                w-full
                                rounded-[12px]
                                border
                                px-4
                                pr-11
                                text-[14px]
                                outline-none
                                ${
                                    status === "success"
                                        ? "border-[var(--color-green-dark)]"
                                        : status === "error"
                                          ? "border-[var(--color-red-dark)]"
                                          : "border-[var(--color-blue-medium)]"
                                }
                            `}
                        />

                        {promoCode && (
                            <button
                                type="button"
                                onClick={handleClear}
                                className="
                                    absolute
                                    right-3
                                    top-1/2
                                    -translate-y-1/2
                                    text-[var(--color-grey-dark)]
                                "
                            >
                                <X size={18} />
                            </button>
                        )}
                    </div>

                    {status === "success" && (
                        <p className="mt-2 flex items-center gap-2 text-[13px] text-[var(--color-green-dark)]">
                            <CircleCheck size={16} />

                            Promo Code Applied Successfully
                        </p>
                    )}

                    {status === "error" && (
                        <p className="mt-2 flex items-center gap-2 text-[13px] text-[var(--color-red-dark)]">
                            <CircleX size={16} />

                            Please Add a Valid Promo Code
                        </p>
                    )}
                </div>

                <button
                    type="button"
                    disabled={!promoCode}
                    onClick={handleApply}
                    className="
                        min-h-[54px]
                        min-w-[104px]
                        rounded-[12px]
                        border
                        border-[var(--color-grey-strong)]
                        px-5
                        text-[15px]
                        font-medium
                        text-[var(--color-grey-strong)]
                        disabled:cursor-not-allowed
                        disabled:border-[var(--color-grey-disable)]
                        disabled:text-[var(--color-grey-disable)]
                    "
                >
                    {isApplied ? "Applied" : "Apply"}
                </button>
            </div>
        </div>
    );
}