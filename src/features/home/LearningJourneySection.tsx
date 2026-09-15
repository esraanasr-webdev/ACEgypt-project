"use client";

import { Phone, Star, Target } from "lucide-react";
import Image from "next/image";

import Button from "../../components/ui/Button";
import Dropdown from "../../components/ui/Dropdown";
import TextInput from "../../components/ui/TextInput";

export default function LearningJourneySection() {
    return (
        <section className="overflow-hidden pb-20">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
                {/* Heading */}
                <div className="max-w-[760px]">
                    <h2
                        className="
                            text-[30px]
                            font-bold
                            leading-[1.3]
                            text-[var(--color-grey-strong)]
                            sm:text-[34px]
                            lg:text-[38px]
                        "
                    >
                        Ready to Start Your{" "}
                        <span className="text-[var(--color-blue-vibrant)]">
                            Learning Journey
                        </span>
                        <span className="text-[var(--color-red-dark)]">?</span>
                    </h2>

                    <p className="mt-3 text-[15px] leading-[1.6] text-[var(--color-grey-strong)] sm:text-[16px]">
                        Leave your details and one of our academic advisors will
                        contact you to help you choose the right program for your
                        goals.
                    </p>
                </div>

                {/* Main layout */}
                <div
                    className="
                        mt-10
                        grid
                        grid-cols-1
                        gap-10
                        lg:grid-cols-[minmax(0,1fr)_480px]
                        lg:items-end
                        lg:gap-12
                    "
                >
                    {/* LEFT SIDE */}
                    <div
                        className="
                            relative
                            flex
                            flex-col
                            gap-4
                            lg:block
                            lg:min-h-[600px]
                        "
                    >
                        {/* Decorative background */}
                        <div
                            className="
                                pointer-events-none
                                absolute
                                inset-0
                                hidden
                                lg:block
                            "
                        >
                            <Image
                                src="/images/home/journey-mask.png"
                                alt=""
                                fill
                                className="object-contain object-center opacity-30"
                            />
                        </div>

                        {/* Mobile / Tablet Person */}
                        <div
                            className="
                                relative
                                mx-auto
                                h-[360px]
                                w-full
                                max-w-[320px]
                                lg:hidden
                            "
                        >
                            <Image
                                src="/images/home/journey-person.png"
                                alt="ACE academic advisor"
                                fill
                                className="object-contain object-bottom"
                            />
                        </div>

                        {/* Desktop Person */}
                        <div
                            className="
                                absolute
                                bottom-[80px]
                                left-0
                                hidden
                                h-[540px]
                                w-[380px]
                                lg:block
                            "
                        >
                            <Image
                                src="/images/home/journey-person.png"
                                alt="ACE academic advisor"
                                fill
                                className="object-contain object-bottom"
                            />
                        </div>

                        {/* Arrow - desktop only */}
                        <div
                            className="
                                absolute
                                right-[0px]
                                top-[10px]
                                z-20
                                hidden
                                h-[70px]
                                w-[105px]
                                lg:block
                            "
                        >
                            <Image
                                src="/images/home/arrow.png"
                                alt=""
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Mobile / Tablet cards */}
                        <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-4
                                    rounded-[22px]
                                    border
                                    border-[var(--color-orange-dark)]
                                    bg-[var(--color-orange-light)]
                                    p-4
                                "
                            >
                                <Phone
                                    size={28}
                                    strokeWidth={1.8}
                                    className="shrink-0 text-[var(--color-orange-dark)]"
                                />

                                <div>
                                    <p className="text-[18px] font-semibold text-[var(--color-orange-dark)]">
                                        Free Consultation
                                    </p>

                                    <p className="mt-1 text-[14px] text-[var(--color-orange-dark)]">
                                        Talk to an Advisor
                                    </p>
                                </div>
                            </div>

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-4
                                    rounded-[22px]
                                    border
                                    border-[var(--color-green-dark)]
                                    bg-[var(--color-green-light)]
                                    p-4
                                "
                            >
                                <Target
                                    size={28}
                                    strokeWidth={1.8}
                                    className="shrink-0 text-[var(--color-green-dark)]"
                                />

                                <div>
                                    <p className="text-[18px] font-semibold text-[var(--color-green-dark)]">
                                        Best Fit Program
                                    </p>

                                    <p className="mt-1 text-[14px] text-[var(--color-green-dark)]">
                                        For Your Goals
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Free Consultation */}
                        <div
                            className="
                                absolute
                                right-[40px]
                                top-[80px]
                                z-10
                                hidden
                                min-w-[280px]
                                items-center
                                gap-4
                                rounded-[22px]
                                border
                                border-[var(--color-orange-dark)]
                                bg-[var(--color-orange-light)]
                                p-3
                                lg:flex
                            "
                        >
                            <Phone
                                size={30}
                                strokeWidth={1.8}
                                className="shrink-0 text-[var(--color-orange-dark)]"
                            />

                            <div>
                                <p className="text-[20px] font-semibold text-[var(--color-orange-dark)]">
                                    Free Consultation
                                </p>

                                <p className="mt-1 text-[16px] text-[var(--color-orange-dark)]">
                                    Talk to an Advisor
                                </p>
                            </div>
                        </div>

                        {/* Desktop Best Fit */}
                        <div
                            className="
                                absolute
                                right-[10px]
                                top-[180px]
                                z-10
                                hidden
                                min-w-[255px]
                                items-center
                                gap-4
                                rounded-[22px]
                                border
                                border-[var(--color-green-dark)]
                                bg-[var(--color-green-light)]
                                p-3
                                lg:flex
                            "
                        >
                            <Target
                                size={30}
                                strokeWidth={1.8}
                                className="shrink-0 text-[var(--color-green-dark)]"
                            />

                            <div>
                                <p className="text-[20px] font-semibold text-[var(--color-green-dark)]">
                                    Best Fit Program
                                </p>

                                <p className="mt-1 text-[16px] text-[var(--color-green-dark)]">
                                    For Your Goals
                                </p>
                            </div>
                        </div>

                        {/* Learners trust card */}
                        <div
                            className="
                                flex
                                w-full
                                flex-col
                                gap-4
                                rounded-[18px]
                                bg-white
                                px-5
                                py-5
                                shadow-[0_8px_26px_rgba(0,0,0,0.08)]
                                sm:flex-row
                                sm:items-center
                                lg:absolute
                                lg:bottom-0
                                lg:left-[40px]
                                lg:w-[500px]
                            "
                        >
                            {/* Avatars */}
                            <div className="flex shrink-0 -space-x-3">
                                {[
                                    "/images/home/learner-1.png",
                                    "/images/home/learner-2.png",
                                    "/images/home/learner-3.png",
                                ].map((src) => (
                                    <div
                                        key={src}
                                        className="
                                            relative
                                            h-[42px]
                                            w-[42px]
                                            overflow-hidden
                                            rounded-full
                                            border-2
                                            border-white
                                        "
                                    >
                                        <Image
                                            src={src}
                                            alt=""
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}

                                <div
                                    className="
                                        flex
                                        h-[42px]
                                        w-[42px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[var(--color-blue-dark)]
                                        text-[11px]
                                        font-semibold
                                        text-white
                                    "
                                >
                                    10K+
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="min-w-0">
                                <p className="text-[16px] font-semibold text-[var(--color-grey-strong)]">
                                    Learners Trust ACE
                                </p>

                                <div className="mt-1 flex flex-wrap items-center gap-2">
                                    <div className="flex text-[var(--color-orange-dark)]">
                                        {[0, 1, 2, 3].map((item) => (
                                            <Star
                                                key={item}
                                                size={17}
                                                fill="currentColor"
                                            />
                                        ))}

                                        <Star size={17} />
                                    </div>

                                    <span className="text-[14px] font-semibold text-[var(--color-grey-strong)]">
                                        4.7
                                    </span>

                                    <span className="text-[14px] text-[var(--color-grey-dark)]">
                                        (1200+ Reviews)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <form
                        className="
                            w-full
                            max-w-[480px]
                            justify-self-center
                            rounded-[24px]
                            border
                            border-[var(--color-blue-medium)]
                            bg-[var(--color-blue-light)]
                            p-5
                            sm:p-8
                            lg:justify-self-end
                        "
                    >
                        <div className="space-y-5">
                            <TextInput
                                label="Full Name"
                                name="fullName"
                                placeholder="Enter Your Full Name"
                            />

                            <TextInput
                                label="Phone Number"
                                name="phone"
                                type="tel"
                                placeholder="Enter Your Phone Number"
                            />

                            <Dropdown
                                label="Governorate"
                                placeholder="Select Governorate"
                                options={[
                                    {
                                        label: "Cairo",
                                        value: "cairo",
                                    },
                                    {
                                        label: "Alexandria",
                                        value: "alexandria",
                                    },
                                    {
                                        label: "Giza",
                                        value: "giza",
                                    },
                                ]}
                            />

                            <Dropdown
                                label="Interested Program"
                                placeholder="Select The Program You Are Interested in"
                                options={[
                                    {
                                        label: "General English",
                                        value: "general-english",
                                    },
                                    {
                                        label: "IELTS Preparation",
                                        value: "ielts",
                                    },
                                    {
                                        label: "TEFL Certification",
                                        value: "tefl",
                                    },
                                ]}
                            />

                            {/* Educational Status */}
                            <div>
                                <p className="mb-3 text-[18px] font-semibold text-[var(--color-grey-strong)]">
                                    Educational Status
                                </p>

                                <div className="space-y-3">
                                    <label className="flex cursor-pointer items-center gap-3">
                                        <input
                                            type="radio"
                                            name="educationStatus"
                                            value="graduated"
                                            defaultChecked
                                            className="h-5 w-5 accent-[var(--color-blue-dark)]"
                                        />

                                        <span className="text-[16px] font-semibold text-[var(--color-blue-dark)]">
                                            Graduated
                                        </span>
                                    </label>

                                    <label className="flex cursor-pointer items-center gap-3">
                                        <input
                                            type="radio"
                                            name="educationStatus"
                                            value="student"
                                            className="h-5 w-5 accent-[var(--color-blue-dark)]"
                                        />

                                        <span className="text-[16px] font-medium text-[var(--color-grey-strong)]">
                                            Student
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                className="
                                    mt-5
                                    w-full
                                    text-[16px]
                                    font-medium
                                    shadow-[0_10px_20px_rgba(2,101,212,0.30)]
                                "
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}