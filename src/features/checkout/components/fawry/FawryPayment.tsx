"use client";

import {
    Check,
    ChevronLeft,
    Copy,
    Info,
    MapPin,
    Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import HelpCard from "../HelpCard";
import OrderDetails from "../OrderDetails";

const referenceNumber = "8472 5639 1047";

export default function FawryPayment() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(
                referenceNumber.replaceAll(" ", "")
            );

            setCopied(true);

            window.setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (error) {
            console.error("Failed to copy reference number:", error);
        }
    };

    return (
        <section className="min-h-screen bg-[var(--color-blue-light)] py-12">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6">

                {/* Heading */}
                <div className="mb-8">
                    <h1 className="text-[28px] font-semibold text-[var(--color-grey-strong)]">
                        Fawry Cash Payment
                    </h1>

                    <p className="mt-2 text-[16px] text-[var(--color-grey-strong)]">
                        Pay in cash at any Fawry location
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

                        {/* Reference Number */}
                        <div
                            className="
                                rounded-[18px]
                                bg-white
                                px-6
                                py-8
                                text-center
                            "
                        >
                            <h2 className="text-[20px] font-semibold text-[var(--color-grey-strong)]">
                                Your Payment Reference Number
                            </h2>

                            <div
                                className="
                                    mt-7
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    gap-3
                                    sm:flex-row
                                "
                            >
                                <div
                                    className="
                                        flex
                                        min-h-[70px]
                                        w-full
                                        max-w-[275px]
                                        items-center
                                        justify-center
                                        rounded-[14px]
                                        border
                                        border-[var(--color-grey-dark)]
                                        px-6
                                        text-[22px]
                                        font-semibold
                                        tracking-[2px]
                                        text-[var(--color-grey-strong)]
                                    "
                                >
                                    {referenceNumber}
                                </div>

                                <button
                                    type="button"
                                    onClick={handleCopy}
                                    aria-label="Copy reference number"
                                    className="
                                        flex
                                        h-[70px]
                                        w-[70px]
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-[14px]
                                        bg-[var(--color-blue-light)]
                                        text-[var(--color-blue-dark)]
                                        transition
                                        hover:bg-[var(--color-blue-medium)]
                                    "
                                >
                                    {copied ? (
                                        <Check size={25} />
                                    ) : (
                                        <Copy size={25} />
                                    )}
                                </button>
                            </div>

                            <p className="mt-6 text-[13px] text-[var(--color-grey-strong)]">
                                Use this reference number to complete your payment
                                at any Fawry location
                            </p>
                        </div>

                        {/* How to Pay */}
                        <div className="rounded-[18px] bg-white p-6">
                            <div className="flex items-center justify-between gap-4">
                                <h2 className="text-[21px] font-semibold text-[var(--color-grey-strong)]">
                                    How to Pay with Fawry Cash
                                </h2>

                                <Image
                                    src="/images/payment/fawry.png"
                                    alt="Fawry"
                                    width={110}
                                    height={42}
                                    className="h-auto object-contain"
                                />
                            </div>

                            <div className="mt-8 space-y-7">
                                <PaymentStep
                                    number={1}
                                    title="Visit a Fawry Location"
                                >
                                    Go to any Fawry outlet, supermarket, or
                                    participating store. You can find locations
                                    using the Fawry app or website.
                                </PaymentStep>

                                <PaymentStep
                                    number={2}
                                    title="Provide the Reference Number"
                                >
                                    <p>
                                        Tell the cashier you want to make a Fawry
                                        payment and provide the reference number:
                                    </p>

                                    <div
                                        className="
                                            mt-4
                                            inline-flex
                                            rounded-[12px]
                                            border
                                            border-[var(--color-grey-dark)]
                                            px-5
                                            py-3
                                            text-[17px]
                                            font-medium
                                            tracking-[1px]
                                        "
                                    >
                                        {referenceNumber}
                                    </div>
                                </PaymentStep>

                                <PaymentStep
                                    number={3}
                                    title="Pay the Amount"
                                >
                                    <p>Pay the total amount in cash:</p>

                                    <div
                                        className="
                                            mt-4
                                            inline-flex
                                            rounded-[12px]
                                            border
                                            border-[var(--color-grey-dark)]
                                            px-7
                                            py-3
                                            text-[18px]
                                            font-semibold
                                        "
                                    >
                                        EGP 4,737.00
                                    </div>
                                </PaymentStep>

                                <PaymentStep
                                    number={4}
                                    title="Get Your Receipt"
                                >
                                    The cashier will provide you with a payment
                                    receipt. Keep this receipt for your records.
                                </PaymentStep>

                                <PaymentStep
                                    number={5}
                                    title="Automatic Confirmation"
                                >
                                    Your enrollment will be activated automatically
                                    within 15 minutes after payment. You&apos;ll
                                    receive a confirmation email.
                                </PaymentStep>
                            </div>

                            {/* Important Information */}
                            <div
                                className="
                                    mt-9
                                    rounded-[16px]
                                    bg-[var(--color-grey-light)]
                                    p-6
                                "
                            >
                                <div className="flex items-center gap-3">
                                    <Info size={21} />

                                    <h3 className="text-[19px] font-semibold text-[var(--color-grey-strong)]">
                                        Important Information
                                    </h3>
                                </div>

                                <div className="mt-6 space-y-5">
                                    <InfoRow>
                                        <strong>
                                            Reference Number Validity:
                                        </strong>{" "}
                                        This reference number is valid for 7 days
                                    </InfoRow>

                                    <InfoRow>
                                        <strong>
                                            Payment Processing:
                                        </strong>{" "}
                                        Your enrollment will be activated within
                                        15 minutes after payment
                                    </InfoRow>

                                    <InfoRow>
                                        <strong>
                                            Service Fee:
                                        </strong>{" "}
                                        Fawry may charge a small service fee
                                        (typically EGP 3–5)
                                    </InfoRow>

                                    <InfoRow>
                                        <strong>
                                            Keep Your Receipt:
                                        </strong>{" "}
                                        Always keep the payment receipt as proof
                                        of payment
                                    </InfoRow>
                                </div>
                            </div>
                        </div>

                        {/* Find Nearest Fawry */}
                        <div className="rounded-[18px] bg-white p-6">
                            <div className="flex items-center gap-3">
                                <MapPin size={23} />

                                <h2 className="text-[21px] font-semibold text-[var(--color-grey-strong)]">
                                    Find Nearest Fawry Location
                                </h2>
                            </div>

                            <p className="ml-9 mt-2 text-[15px] text-[var(--color-grey-strong)]">
                                Use one of these methods to find the nearest Fawry
                                payment location:
                            </p>

                            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                                <FawryLocationCard title="Fawry App">
                                    Download
                                    <br />
                                    <span className="underline">
                                        the official app
                                    </span>
                                </FawryLocationCard>

                                <FawryLocationCard title="Fawry Website">
                                    Visit
                                    <br />
                                    <span className="underline">
                                        fawry.com/locations
                                    </span>
                                </FawryLocationCard>

                                <FawryLocationCard title="Call Hotline">
                                    <strong>16394</strong>
                                    <br />
                                    (24/7 support)
                                </FawryLocationCard>
                            </div>

                            <div className="my-8 border-t border-dashed border-[var(--color-grey-medium)]" />

                            <div className="flex justify-center">
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
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-6">
                        <OrderDetails
                            paymentMethod="Fawry Cash Payment"
                            status="Awaiting Payment"
                        />

                        <HelpCard />
                    </div>
                </div>
            </div>
        </section>
    );
}

function PaymentStep({
    number,
    title,
    children,
}: {
    number: number;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex gap-4">
            <div
                className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[var(--color-blue-dark)]
                    text-[17px]
                    font-semibold
                    text-white
                "
            >
                {number}
            </div>

            <div className="min-w-0 pt-1">
                <h3 className="text-[17px] font-semibold text-[var(--color-grey-strong)]">
                    {title}
                </h3>

                <div className="mt-1 text-[15px] leading-[1.55] text-[var(--color-grey-strong)]">
                    {children}
                </div>
            </div>
        </div>
    );
}

function InfoRow({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex items-start gap-4">
            <span
                className="
                    mt-[2px]
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

            <p className="text-[15px] leading-[1.5] text-[var(--color-grey-strong)]">
                {children}
            </p>
        </div>
    );
}

function FawryLocationCard({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="text-center">
            <div
                className="
                    mx-auto
                    flex
                    h-[64px]
                    w-[64px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[var(--color-orange-dark)]
                    text-white
                "
            >
                <Smartphone size={27} />
            </div>

            <div
                className="
                    mt-4
                    min-h-[135px]
                    rounded-[16px]
                    bg-[var(--color-orange-light)]
                    px-4
                    py-6
                "
            >
                <h3 className="text-[17px] font-semibold text-[var(--color-grey-strong)]">
                    {title}
                </h3>

                <div className="mt-3 text-[15px] leading-[1.45] text-[var(--color-grey-strong)]">
                    {children}
                </div>
            </div>
        </div>
    );
}