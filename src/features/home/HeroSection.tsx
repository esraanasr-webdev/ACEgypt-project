import Image from "next/image";
import Link from "next/link";

import MainNavigation from "../../components/main-navigation/MainNavigation";

export default function HeroSection() {
    return (
        <section className="px-[14px] pt-[10px]">
            <div
                className="
                    relative
                    w-full
                    min-h-[720px]
                    overflow-hidden
                    rounded-[36px]
                    bg-[var(--color-blue-dark)]
                    text-white
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

                    <div className="absolute inset-0 bg-[var(--color-blue-dark)]/90" />
                </div>

                <div className="relative z-10 mx-auto max-w-[1200px]">
                    {/* Navigation */}
                    <div className="pt-5 sm:px-4">
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
                        sm:pl-4
                    "
                    >
                    {/* Left */}
                    <div className="w-[700px]">
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

                                transition-colors
                                duration-200

                                hover:bg-[var(--color-blue-light)]
                                active:bg-[var(--color-blue-light)]
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

                                transition-colors
                                duration-200

                                hover:bg-white/10
                                active:bg-white/20
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
                        <div className="
                                    absolute
                                    right-[-40px]
                                    relative
                                    hidden
                                    h-full
                                    lg:block"
                        >

                            {/* Circle decoration */}
                            <div
                                className="
                                    absolute
                                    bottom-[45px]
                                    right-[20px]
                                    z-0
                                    h-[470px]
                                    w-[470px]
                                "
                            >
                                {/* Transparent curved outer ring */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        rounded-full
                                        bg-[linear-gradient(135deg,rgba(40,112,191,0.55)_0%,rgba(19,116,209,0.25)_55%,rgba(40,112,191,0.08)_100%)]
                                    "
                                />

                                {/* Cut-out to create the curved ring */}
                                <div
                                    className="
                                        absolute
                                        inset-[22px]
                                        rounded-full
                                        bg-[var(--color-blue-dark)]
                                    "
                                />

                                {/* Main gradient circle */}
                                <div
                                    className="
                                        absolute
                                        inset-[22px]
                                        rounded-full
                                        bg-[linear-gradient(135deg,#011933_0%,#2870BF_100%)]
                                    "
                                />
                            </div>

                            {/* Student */}
                            <div
                                className="
                                    absolute
                                    bottom-0
                                    right-[50px]
                                    z-10
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
                                    right-[-65px]
                                    top-[200px]
                                    z-20
                                "
                            >
                                <Image
                                    src="/images/home/learner-hours.png"
                                    alt="50K+ Learning Hours"
                                    width={266}
                                    height={138}
                                    className="h-auto"
                                />
                            </div>

                            {/* Satisfaction */}
                            <div
                                className="
                                    absolute
                                    bottom-[-10px]
                                    left-[-130px]
                                    z-20
                                "
                            >
                                <Image
                                    src="/images/home/student-satifiction.png"
                                    alt="4.7 Student Satisfaction"
                                    width={287}
                                    height={138}
                                    className="h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    
        </section>
    );
}