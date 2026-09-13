import {
    ChevronLeft,
    ChevronRight,
    RotateCcw,
    ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OrderSummary() {
    return (
        <aside
            className="
                rounded-[20px]
                bg-white
                p-6
                shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                lg:sticky
                lg:top-6
            "
        >
            <h2 className="text-[20px] font-semibold text-[var(--color-grey-strong)]">
                Order Summary
            </h2>

            <div className="relative mt-5 h-[180px] overflow-hidden rounded-[14px]">
                <Image
                    src="/images/courses/tefl-course.jpg"
                    alt="TEFL Certification Course"
                    fill
                    className="object-cover"
                />
            </div>

            <h3 className="mt-5 text-[20px] font-semibold text-[var(--color-grey-strong)]">
                TEFL Certification Course
            </h3>

            <p className="mt-2 text-[14px] leading-[1.5] text-[var(--color-grey-strong)]">
                Become a certified English teacher with
                internationally recognized training and
                practical teaching skills.
            </p>

            <div className="my-6 border-t border-dashed border-[var(--color-grey-medium)]" />

            <div className="space-y-4 text-[14px]">
                <div className="flex justify-between">
                    <span>Course Price</span>
                    <span className="font-semibold">
                        EGP 4,500.00
                    </span>
                </div>

                <div className="flex justify-between">
                    <span>Tax (14%)</span>
                    <span className="font-semibold">
                        EGP 637.00
                    </span>
                </div>

                <div className="flex justify-between text-[var(--color-green-dark)]">
                    <span>
                        Early Bird Discount (-10%)
                    </span>

                    <span className="font-semibold">
                        - EGP 450.00
                    </span>
                </div>
            </div>

            <div className="my-6 border-t border-dashed border-[var(--color-grey-medium)]" />

            <div className="flex items-center justify-between">
                <span className="text-[18px]">
                    Total
                </span>

                <span className="text-[21px] font-bold text-[var(--color-blue-dark)]">
                    EGP 4,737.00
                </span>
            </div>

            {/* Secure payment */}
            <div className="mt-7 rounded-[14px] bg-[var(--color-blue-light)] p-4">
                <div className="flex gap-3">
                    <ShieldCheck
                        size={21}
                        className="shrink-0 text-[var(--color-blue-dark)]"
                    />

                    <div>
                        <p className="font-semibold text-[var(--color-blue-dark)]">
                            Secure Payment
                        </p>

                        <p className="mt-2 text-[13px] leading-[1.5] text-[var(--color-grey-strong)]">
                            Your payment information is
                            encrypted and secure. We never
                            store your card details.
                        </p>
                    </div>
                </div>
            </div>

            {/* Proceed */}
            <button
                type="button"
                className="
                    mt-6
                    flex
                    min-h-[58px]
                    w-full
                    items-center
                    justify-center
                    gap-4
                    rounded-[14px]
                    bg-[var(--color-blue-vibrant)]
                    px-6
                    text-[15px]
                    font-medium
                    text-white
                    shadow-[0_10px_24px_rgba(2,101,212,0.20)]
                "
            >
                Proceed to Payment

                <ChevronRight size={19} />
            </button>

            <Link
                href="/courses/tefl-certification"
                className="
                    mt-4
                    flex
                    min-h-[56px]
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-[14px]
                    border
                    border-[var(--color-grey-strong)]
                    text-[15px]
                    font-medium
                    text-[var(--color-grey-strong)]
                "
            >
                <ChevronLeft size={19} />

                Back to Course
            </Link>

            <div className="my-6 border-t border-dashed border-[var(--color-grey-medium)]" />

            <div className="flex items-start gap-3">
                <RotateCcw
                    size={18}
                    className="mt-1 shrink-0"
                />

                <div>
                    <p className="text-[14px] font-semibold">
                        30-Day Money-Back Guarantee
                    </p>

                    <p className="mt-2 text-[13px] leading-[1.5]">
                        Not satisfied? Get a full refund
                        within 30 days.
                    </p>
                </div>
            </div>
        </aside>
    );
}