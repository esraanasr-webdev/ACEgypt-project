"use client";

import {
    Check,
    ChevronLeft,
    Info,
    Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import HelpCard from "../HelpCard";
import OrderDetails from "../OrderDetails";

type PaymentState = "form" | "waiting";

export default function MobileWalletPayment() {
    const [phone, setPhone] = useState("");
    const [paymentState, setPaymentState] =
        useState<PaymentState>("form");

    const handleSendRequest = () => {
        if (!phone.trim()) return;

        // TODO: Connect mobile wallet payment API
        setPaymentState("waiting");
    };

    const handleResend = () => {
        if (!phone.trim()) return;

        // TODO: Connect resend payment request API
        console.log("Resend payment request to:", phone);
    };

    return (
        <section className="min-h-screen bg-[var(--color-blue-light)] py-12">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
                {/* Heading */}
                <div className="mb-8">
                    <h1 className="text-[28px] font-semibold text-[var(--color-grey-strong)]">
                        Mobile Wallet Payment
                    </h1>

                    <p className="mt-2 text-[16px] text-[var(--color-grey-strong)]">
                        Enter your mobile number to complete payment
                    </p>
                </div>

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-6
                        lg:grid-cols-[minmax(0,1fr)_384px]
                    "
                >
                    {/* LEFT */}
                    <div className="space-y-6">
                        {paymentState === "form" ? (
                            <MobileNumberForm
                                phone={phone}
                                setPhone={setPhone}
                                onSubmit={handleSendRequest}
                            />
                        ) : (
                            <WaitingForApproval
                                phone={phone}
                                onResend={handleResend}
                            />
                        )}

                        <MobileWalletInstructions />
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-6">
                        <OrderDetails
                            paymentMethod="Mobile Wallet"
                            status="Awaiting Payment"
                        />

                        <HelpCard />
                    </div>
                </div>
            </div>
        </section>
    );
}

function MobileNumberForm({
    phone,
    setPhone,
    onSubmit,
}: {
    phone: string;
    setPhone: (value: string) => void;
    onSubmit: () => void;
}) {
    return (
        <div className="rounded-[18px] bg-white p-6">
            <label
                htmlFor="mobile"
                className="mb-2 block text-[16px] font-semibold text-[var(--color-grey-strong)]"
            >
                Mobile Number *
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
                <select
                    aria-label="Country code"
                    defaultValue="+20"
                    className="
                        min-h-[54px]
                        w-full
                        rounded-[12px]
                        border
                        border-[var(--color-blue-medium)]
                        bg-white
                        px-4
                        outline-none
                        sm:w-[120px]
                        sm:shrink-0
                    "
                >
                    <option value="+20">+20</option>
                </select>

                <input
                    id="mobile"
                    type="tel"
                    inputMode="numeric"
                    value={phone}
                    onChange={(event) =>
                        setPhone(event.target.value)
                    }
                    placeholder="123456789"
                    className="
                        min-h-[54px]
                        min-w-0
                        flex-1
                        rounded-[12px]
                        border
                        border-[var(--color-blue-medium)]
                        px-4
                        outline-none
                        transition
                        focus:border-[var(--color-blue-vibrant)]
                    "
                />
            </div>

            <p className="mt-2 text-[12px] text-[var(--color-grey-strong)]">
                You will receive a payment notification on this number
            </p>

            <button
                type="button"
                onClick={onSubmit}
                disabled={!phone.trim()}
                className="
                    mt-8
                    flex
                    min-h-[60px]
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-[14px]
                    bg-[var(--color-blue-vibrant)]
                    px-6
                    text-[16px]
                    font-medium
                    text-white
                    shadow-[0_10px_24px_rgba(2,101,212,0.20)]
                    transition
                    hover:bg-[var(--color-blue-dark)]
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                "
            >
                <Smartphone size={19} />
                Send Payment Request
            </button>
        </div>
    );
}

function WaitingForApproval({
    phone,
    onResend,
}: {
    phone: string;
    onResend: () => void;
}) {
    return (
        <div
            className="
                flex
                min-h-[375px]
                flex-col
                items-center
                rounded-[18px]
                bg-white
                px-6
                py-7
                text-center
            "
        >
            <h2 className="text-[20px] font-semibold text-[var(--color-grey-strong)]">
                Waiting for Approval
            </h2>

            <p className="mt-2 text-[15px] leading-[1.6] text-[var(--color-grey-strong)]">
                We&apos;ve sent a payment request to your mobile wallet{" "}
                <strong>(+20 {phone}).</strong>
                <br />
                Please open your wallet app to confirm the transaction.
            </p>

            <div
                className="
                    mt-8
                    flex
                    h-[120px]
                    w-[120px]
                    items-center
                    justify-center
                    rounded-full
                    border-[6px]
                    border-[var(--color-orange-dark)]
                "
            >
                <div
                    className="
                        flex
                        h-[80px]
                        w-[80px]
                        items-center
                        justify-center
                        rounded-full
                        bg-[var(--color-orange-light)]
                        text-[var(--color-orange-dark)]
                    "
                >
                    <Smartphone
                        size={34}
                        strokeWidth={2}
                    />
                </div>
            </div>

            <div className="mt-8 flex items-center gap-3 text-[var(--color-blue-dark)]">
                <span
                    className="
                        h-[15px]
                        w-[15px]
                        animate-spin
                        rounded-full
                        border-2
                        border-[var(--color-blue-dark)]
                        border-t-transparent
                    "
                />

                <span className="text-[15px] font-semibold">
                    Waiting for confirmation...
                </span>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-[13px]">
                <span className="text-[var(--color-grey-strong)]">
                    Didn&apos;t receive the request?
                </span>

                <button
                    type="button"
                    onClick={onResend}
                    className="
                        font-medium
                        text-[var(--color-grey-strong)]
                        underline
                        underline-offset-2
                    "
                >
                    Resend
                </button>
            </div>
        </div>
    );
}

function MobileWalletInstructions() {
    const steps = [
        "Enter your mobile number registered with your wallet provider",
        "You'll receive a payment notification on your phone",
        "Open your wallet app and confirm the payment",
        "Payment is processed instantly upon confirmation",
    ];

    return (
        <div className="rounded-[18px] bg-white p-6">
            <div className="flex items-center gap-3">
                <Info size={21} />

                <h2 className="text-[20px] font-semibold text-[var(--color-grey-strong)]">
                    How Mobile Wallet Payment Works
                </h2>
            </div>

            <div className="mt-7 space-y-5">
                {steps.map((item) => (
                    <div
                        key={item}
                        className="flex items-center gap-4"
                    >
                        <span
                            className="
                                flex
                                h-6
                                w-6
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[var(--color-green-dark)]
                                text-white
                            "
                        >
                            <Check size={15} />
                        </span>

                        <p className="text-[15px] text-[var(--color-grey-strong)]">
                            {item}
                        </p>
                    </div>
                ))}
            </div>

            <div className="my-8 border-t border-dashed border-[var(--color-grey-medium)]" />

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                <WalletProvider
                    image="/images/payment/vodafone-cash.png"
                    name="Vodafone Cash"
                />

                <WalletProvider
                    image="/images/payment/orange-cash.png"
                    name="Orange Cash"
                />

                <WalletProvider
                    image="/images/payment/etisalat-cash.png"
                    name="Etisalat Cash"
                />

                <WalletProvider
                    image="/images/payment/we-pay.png"
                    name="WE Pay"
                />
            </div>

            <div className="mt-8 flex justify-center">
                <Link
                    href="/courses/tefl-certification/checkout"
                    className="
                        flex
                        min-h-[58px]
                        w-full
                        max-w-[365px]
                        items-center
                        justify-center
                        gap-4
                        rounded-[14px]
                        border
                        border-[var(--color-grey-strong)]
                        px-6
                        text-[15px]
                        font-medium
                        text-[var(--color-grey-strong)]
                        transition
                        hover:bg-[var(--color-grey-light)]
                    "
                >
                    <ChevronLeft size={19} />

                    Choose Different Payment Method
                </Link>
            </div>
        </div>
    );
}

function WalletProvider({
    image,
    name,
}: {
    image: string;
    name: string;
}) {
    return (
        <div
            className="
                flex
                min-h-[56px]
                items-center
                gap-2
                rounded-[10px]
                border
                border-[var(--color-grey-medium)]
                bg-[var(--color-grey-light)]
                px-3
            "
        >
            <Image
                src={image}
                alt={name}
                width={32}
                height={32}
                className="object-contain"
            />

            <span className="whitespace-nowrap text-[13px]">
                {name}
            </span>
        </div>
    );
}