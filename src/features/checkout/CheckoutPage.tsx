import { ChevronRight } from "lucide-react";
import Link from "next/link";

import MainNavigation from "@/components/main-navigation/MainNavigation";

import OrderSummary from "./OrderSummary";
import PaymentMethods from "./PaymentMethods";
import PromoCode from "./PromoCode";
import TermsAgreement from "./TermsAgreement";

export default function CheckoutPage() {
    return (
        <>
            {/* Header */}
            <section className="bg-[var(--color-blue-light)] px-[14px] pt-[10px]">
                <div
                    className="
                        overflow-hidden
                        rounded-t-[32px]
                        bg-[var(--color-blue-dark)]
                        text-white
                    "
                >
                    <div className="mx-auto max-w-[1200px] px-6">
                        {/* Logged-in Navigation */}
                        <MainNavigation loggedIn />

                        {/* Breadcrumbs */}
                        <div className="mt-12 flex flex-wrap items-center gap-2 text-[14px]">
                            <Link href="/" className="hover:opacity-80">
                                Home
                            </Link>

                            <ChevronRight size={16} />

                            <Link href="/courses" className="hover:opacity-80">
                                Courses
                            </Link>

                            <ChevronRight size={16} />

                            <Link
                                href="/courses/tefl-certification"
                                className="hover:opacity-80"
                            >
                                TEFL Certification Course
                            </Link>

                            <ChevronRight size={16} />

                            <span className="font-semibold">
                                Enrollment &amp; Checkout
                            </span>
                        </div>

                        {/* Heading */}
                        <div className="py-20 text-center">
                            <h1 className="text-[38px] font-semibold leading-[1.25] lg:text-[48px]">
                                Enrollment &amp; Checkout
                            </h1>

                            <p className="mt-4 text-[16px] lg:text-[18px]">
                                Complete your enrollment to start learning
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Checkout Content */}
            <section className="bg-[var(--color-blue-light)] py-16">
                <div
                    className="
                        mx-auto
                        grid
                        max-w-[1200px]
                        grid-cols-1
                        gap-7
                        px-6
                        lg:grid-cols-[minmax(0,1fr)_360px]
                    "
                >
                    {/* Left */}
                    <div className="space-y-6">
                        <PaymentMethods />

                        <PromoCode />

                        <TermsAgreement />
                    </div>

                    {/* Right */}
                    <div>
                        <OrderSummary />
                    </div>
                </div>
            </section>
        </>
    );
}