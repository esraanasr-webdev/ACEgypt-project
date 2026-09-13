"use client";

import { CreditCard } from "lucide-react";
import { useState } from "react";

type PaymentMethod = "card" | "wallet" | "fawry";

export default function PaymentMethods() {
    const [paymentMethod, setPaymentMethod] =
        useState<PaymentMethod>("card");

    const methods = [
        {
            id: "card" as const,
            title: "Credit / Debit Card",
            description:
                "Pay securely with your credit or debit card.",
        },
        {
            id: "wallet" as const,
            title: "Mobile Wallet",
            description:
                "Pay using your mobile wallet service.",
        },
        {
            id: "fawry" as const,
            title: "Fawry (Cash Payment)",
            description:
                "Get a reference number and pay at any Fawry location.",
        },
    ];

    return (
        <div
            className="
                rounded-[20px]
                bg-white
                p-6
                shadow-[0_10px_30px_rgba(0,0,0,0.05)]
            "
        >
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-[20px] font-semibold text-[var(--color-grey-strong)]">
                    Payment Method
                </h2>

                <CreditCard
                    size={22}
                    strokeWidth={1.7}
                    className="text-[var(--color-grey-strong)]"
                />
            </div>

            <div className="space-y-4">
                {methods.map((method) => {
                    const selected =
                        paymentMethod === method.id;

                    return (
                        <button
                            key={method.id}
                            type="button"
                            onClick={() =>
                                setPaymentMethod(method.id)
                            }
                            className={`
                                flex
                                w-full
                                items-start
                                gap-4
                                rounded-[14px]
                                border
                                p-4
                                text-left
                                transition
                                ${
                                    selected
                                        ? "border-[var(--color-blue-vibrant)] bg-[var(--color-blue-light)]"
                                        : "border-[var(--color-grey-medium)] bg-white"
                                }
                            `}
                        >
                            {/* Radio */}
                            <span
                                className={`
                                    mt-1
                                    flex
                                    h-[20px]
                                    w-[20px]
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    border-2
                                    ${
                                        selected
                                            ? "border-[var(--color-blue-vibrant)]"
                                            : "border-[var(--color-blue-medium)]"
                                    }
                                `}
                            >
                                {selected && (
                                    <span className="h-[10px] w-[10px] rounded-full bg-[var(--color-blue-vibrant)]" />
                                )}
                            </span>

                            <div className="flex-1">
                                <p
                                    className={`
                                        text-[16px]
                                        font-semibold
                                        ${
                                            selected
                                                ? "text-[var(--color-blue-dark)]"
                                                : "text-[var(--color-grey-strong)]"
                                        }
                                    `}
                                >
                                    {method.title}
                                </p>

                                <p className="mt-2 text-[14px] text-[var(--color-grey-strong)]">
                                    {method.description}
                                </p>
                            </div>

                            {/* Payment logos */}
                            {method.id === "card" && (
                                <div className="flex items-center gap-2">
                                    <span className="text-[12px] font-bold text-[#1434CB]">
                                        VISA
                                    </span>

                                    <span className="text-[12px] font-bold">
                                        MC
                                    </span>
                                </div>
                            )}

                            {method.id === "wallet" && (
                                <div className="text-[12px] text-[var(--color-grey-dark)]">
                                    Wallets
                                </div>
                            )}

                            {method.id === "fawry" && (
                                <div className="text-[12px] font-semibold text-[var(--color-grey-strong)]">
                                    Fawry
                                </div>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}