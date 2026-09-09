import { Clock3, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import MainNavigation from "../../components/main-navigation/MainNavigation";

export default function HeroSection() {
    return (
        <section
        className="
            relative
            w-full
            min-h-[720px]
            overflow-hidden
            rounded-tl-[36px]
            rounded-tr-[36px]
            rounded-b-[36px]
            bg-[var(--color-blue-dark)]
            text-white
            my-10
        "
        >
        {/* Background image */}
        <div className="absolute inset-0">
            <Image
            src="/images/home/hero-bg.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            />

            <div className="absolute inset-0 bg-[var(--color-blue-dark)]/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
            {/* Navigation */}
            <div className="pt-5">
            <MainNavigation />
            </div>

            <div
            className="
                grid
                min-h-[620px]
                grid-cols-1
                items-center
                gap-10
                lg:grid-cols-[1fr_1fr]
            "
            >
            {/* Left */}
            <div className="max-w-[650px]">
                <p className="text-[26px] font-medium leading-[1.4]">
                Add{" "}
                <span className="relative inline-block">
                    Value
                    <span
                    className="
                        absolute
                        -inset-x-2
                        -inset-y-1
                        rounded-[50%]
                        border-2
                        border-[var(--color-orange-dark)]
                    "
                    />
                </span>{" "}
                to Your Life with
                </p>

                <h1 className="mt-4 text-[48px] font-bold leading-[1.2]">
                American Council Egypt
                <span className="text-[var(--color-red-dark)]">.</span>
                </h1>

                <p className="mt-6 max-w-[620px] text-[18px] leading-[1.8]">
                Experience high-quality language training that empowers you to
                communicate with confidence, develops real-world skills, and opens
                new opportunities for your future.
                </p>

                <div className="mt-8 flex flex-wrap gap-5">
                <Link
                    href="/courses"
                    className="
                    inline-flex
                    min-h-[58px]
                    min-w-[190px]
                    items-center
                    justify-center
                    rounded-[14px]
                    bg-white
                    px-6
                    text-[16px]
                    font-medium
                    text-[var(--color-blue-dark)]
                    "
                >
                    Browse Courses
                </Link>

                <Link
                    href="/signup"
                    className="
                    inline-flex
                    min-h-[58px]
                    min-w-[190px]
                    items-center
                    justify-center
                    rounded-[14px]
                    border
                    border-white
                    px-6
                    text-[16px]
                    font-medium
                    text-white
                    "
                >
                    Sign Up
                </Link>
                </div>

                <div className="mt-7 flex items-center gap-3">
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
                        h-[36px]
                        w-[36px]
                        overflow-hidden
                        rounded-full
                        border-2
                        border-[var(--color-blue-dark)]
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
                </div>

                <span className="text-[14px] font-medium">
                    10K+ Learners
                </span>
                </div>
            </div>

            {/* Right */}
            <div className="relative hidden h-full lg:block">
                {/* Blue circle */}
                <div
                className="
                    absolute
                    bottom-[55px]
                    right-[35px]
                    h-[460px]
                    w-[460px]
                    rounded-full
                    border-[30px]
                    border-[#1374d1]
                    opacity-70
                "
                />

                {/* Student */}
                <div
                className="
                    absolute
                    bottom-0
                    right-[50px]
                    h-[600px]
                    w-[430px]
                "
                >
                <Image
                    src="/images/home/hero-student.png"
                    alt="ACE student"
                    fill
                    priority
                    className="object-contain object-bottom"
                />
                </div>

                {/* Learning Hours */}
                <div
                className="
                    absolute
                    right-[-10px]
                    top-[185px]
                    rounded-[16px]
                    border-[5px]
                    border-[#2B6FB5]
                    bg-white
                    px-5
                    py-4
                    text-[var(--color-grey-strong)]
                    shadow-[0_8px_18px_rgba(0,0,0,0.18)]
                "
                >
                {/* orange tab */}
                <div
                    className="
                    absolute
                    -left-[18px]
                    -top-[18px]
                    flex
                    h-[42px]
                    w-[42px]
                    items-center
                    justify-center
                    rounded-[12px]
                    border-[5px]
                    border-[#2B6FB5]
                    bg-white
                    "
                >
                    <div
                    className="
                        flex
                        h-[28px]
                        w-[28px]
                        items-center
                        justify-center
                        rounded-full
                        bg-[var(--color-orange-dark)]
                        text-white
                    "
                    >
                    <Clock3 size={16} strokeWidth={2} />
                    </div>
                </div>

                <p className="text-[14px]">
                    <span className="font-bold">50K+</span>{" "}
                    <span className="font-medium">Learning Hours</span>
                </p>
                </div>

                {/* Satisfaction */}
                <div
                className="
                    absolute
                    bottom-[35px]
                    left-[0px]
                    rounded-[16px]
                    border-[5px]
                    border-[#2B6FB5]
                    bg-white
                    px-5
                    py-4
                    text-[var(--color-grey-strong)]
                    shadow-[0_8px_18px_rgba(0,0,0,0.18)]
                "
                >
                <div className="flex items-center gap-1 text-[var(--color-orange-dark)]">
                    {[0, 1, 2, 3].map((item) => (
                    <Star
                        key={item}
                        size={18}
                        fill="currentColor"
                        strokeWidth={1.5}
                    />
                    ))}

                    <Star
                    size={18}
                    strokeWidth={1.5}
                    />
                </div>

                <p className="mt-2 text-[13px]">
                    <span className="font-bold">4.7</span>{" "}
                    <span className="font-medium">
                    Student Satisfaction
                    </span>
                </p>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}