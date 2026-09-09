"use client";

import { Phone, Star, Target } from "lucide-react";
import Image from "next/image";

import Button from "../../components/ui/Button";
import Dropdown from "../../components/ui/Dropdown";
import TextInput from "../../components/ui/TextInput";

export default function LearningJourneySection() {
    return (
        <section className="mx-auto max-w-[1200px] px-6 py-20">
        {/* Heading */}
        <div className="max-w-[760px]">
            <h2 className="text-[38px] font-bold leading-[1.3] text-[var(--color-grey-strong)]">
            Ready to Start Your{" "}
            <span className="text-[var(--color-blue-vibrant)]">
                Learning Journey
            </span>
            <span className="text-[var(--color-red-dark)]">?</span>
            </h2>

            <p className="mt-3 text-[16px] leading-[1.6] text-[var(--color-grey-strong)]">
            Leave your details and one of our academic advisors will contact you to
            help you choose the right program for your goals.
            </p>
        </div>

        <div
            className="
            mt-10
            grid
            grid-cols-1
            items-end
            gap-12
            lg:grid-cols-[1.25fr_0.95fr]
            "
        >
            {/* Left visual */}
            <div className="relative min-h-[715px]">
            {/* Background grid image */}
            <div className="absolute inset-0">
                <Image
                src="/images/home/journey-mask.png"
                alt=""
                fill
                className="object-contain object-center opacity-40"
                />
            </div>

            {/* Person */}
            <div
                className="
                absolute
                bottom-[80px]
                left-[-20px]
                h-[540px]
                w-[380px]
                "
            >
                <Image
                    src="/images/home/journey-person.png"
                    alt="ACE academic advisor"
                    fill
                    className="object-contain object-bottom"
                />
            </div>

            {/* Free Consultation */}
            <div
                className="
                absolute
                right-[60px]
                top-[150px]
                flex
                min-w-[270px]
                items-center
                gap-4
                rounded-[22px]
                border
                border-[var(--color-orange-dark)]
                bg-[var(--color-orange-light)]
                px-6
                py-4
                "
            >
                <Phone
                size={30}
                strokeWidth={1.8}
                className="text-[var(--color-orange-dark)]"
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

            {/* Best fit */}
            <div
                className="
                absolute
                right-[20px]
                top-[260px]
                flex
                min-w-[255px]
                items-center
                gap-4
                rounded-[22px]
                border
                border-[var(--color-green-dark)]
                bg-[var(--color-green-light)]
                px-6
                py-4
                "
            >
                <Target
                    size={30}
                    strokeWidth={1.8}
                    className="text-[var(--color-green-dark)]"
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
                absolute
                bottom-0
                left-[40px]
                flex
                min-w-[500px]
                items-center
                gap-5
                rounded-[18px]
                bg-white
                px-6
                py-5
                shadow-[0_8px_26px_rgba(0,0,0,0.08)]
                "
            >
                <div className="flex -space-x-3">
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

                <div>
                <p className="text-[16px] font-semibold text-[var(--color-grey-strong)]">
                    Learners Trust ACE
                </p>

                <div className="mt-1 flex items-center gap-2">
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

            {/* Right form */}
            <form
            className="
                rounded-[28px]
                border
                border-[var(--color-blue-medium)]
                bg-[var(--color-blue-light)]
                p-8
            "
            >
            <div className="space-y-6">
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
                    { label: "Cairo", value: "cairo" },
                    { label: "Alexandria", value: "alexandria" },
                    { label: "Giza", value: "giza" },
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

                <div>
                <p className="mb-4 text-[18px] font-semibold text-[var(--color-grey-strong)]">
                    Educational Status
                </p>

                <div className="space-y-3">
                    <label className="flex items-center gap-3">
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

                    <label className="flex items-center gap-3">
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
                    mt-4
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
        </section>
    );
}