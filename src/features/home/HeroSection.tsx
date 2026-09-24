import Image from "next/image";
import Link from "next/link";

import MainNavigation from "../../components/main-navigation/MainNavigation";

export default function HeroSection() {
    return (
        <section
            className="
                px-2
                pt-2

                sm:px-[14px]
                sm:pt-[10px]
            "
        >
            <div
                className="
                    relative
                    w-full
                    min-h-[650px]
                    overflow-hidden
                    rounded-[28px]
                    bg-[var(--color-blue-dark)]
                    text-white

                    sm:min-h-[680px]
                    sm:rounded-[32px]

                    lg:min-h-[720px]
                    lg:rounded-[36px]
                "
            >
                {/* Background image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/home/hero-bg.jpg"
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-[var(--color-blue-dark)]/90" />
                </div>

                <div
                    className="
                        relative
                        z-10
                        mx-auto
                        w-full
                        max-w-[1200px]
                    "
                >
                    {/* Navigation */}
                    <div
                        className="
                            px-2
                            pt-4

                            sm:px-4
                            sm:pt-5

                            lg:pt-5
                        "
                    >
                        <MainNavigation />
                    </div>

                    <div
                        className="
                            grid
                            min-h-[540px]
                            grid-cols-1
                            items-center
                            gap-8
                            px-4
                            py-10

                            sm:min-h-[570px]
                            sm:gap-10
                            sm:pl-4
                            sm:pr-4
                            sm:py-12

                            lg:min-h-[620px]
                            lg:grid-cols-[1fr_1fr]
                            lg:px-0
                            lg:py-0
                            lg:pl-4
                        "
                    >
                        {/* Left */}
                        <div
                            className="
                                w-full

                                lg:w-[700px]
                            "
                        >
                            <p
                                className="
                                    text-[18px]
                                    font-medium
                                    leading-[1.4]

                                    sm:text-[21px]

                                    md:text-[23px]

                                    lg:text-[26px]
                                "
                            >
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

                            <h1
                                className="
                                    mt-4
                                    max-w-[650px]
                                    text-[32px]
                                    font-bold
                                    leading-[1.2]

                                    sm:text-[38px]

                                    md:text-[42px]

                                    lg:text-[48px]
                                "
                            >
                                American Council Egypt
                                <span className="text-[var(--color-red-dark)]">
                                    .
                                </span>
                            </h1>

                            <p
                                className="
                                    mt-5
                                    max-w-[620px]
                                    text-[14px]
                                    leading-[1.7]

                                    sm:text-[16px]
                                    sm:leading-[1.8]

                                    lg:mt-6
                                    lg:text-[18px]
                                "
                            >
                                Experience high-quality language training that
                                empowers you to communicate with confidence,
                                develops real-world skills, and opens new
                                opportunities for your future.
                            </p>

                            {/* Buttons */}
                            <div
                                className="
                                    mt-7
                                    flex
                                    w-full
                                    flex-col
                                    gap-3

                                    sm:mt-8
                                    sm:flex-row
                                    sm:flex-wrap
                                    sm:gap-5
                                "
                            >
                                <Link
                                    href="/courses"
                                    className="
                                        inline-flex
                                        min-h-[52px]
                                        w-full
                                        items-center
                                        justify-center
                                        rounded-[12px]
                                        bg-white
                                        px-6
                                        text-[14px]
                                        font-medium
                                        text-[var(--color-blue-dark)]

                                        transition-colors
                                        duration-200

                                        hover:bg-[var(--color-blue-light)]
                                        active:bg-[var(--color-blue-light)]

                                        sm:w-auto
                                        sm:min-w-[190px]
                                        sm:text-[16px]

                                        lg:min-h-[58px]
                                        lg:min-w-[190px]
                                        lg:rounded-[14px]
                                        lg:text-[16px]
                                    "
                                >
                                    Browse Courses
                                </Link>

                                <Link
                                    href="/signup"
                                    className="
                                        inline-flex
                                        min-h-[52px]
                                        w-full
                                        items-center
                                        justify-center
                                        rounded-[12px]
                                        border
                                        border-white
                                        px-6
                                        text-[14px]
                                        font-medium
                                        text-white

                                        transition-colors
                                        duration-200

                                        hover:bg-white/10
                                        active:bg-white/20

                                        sm:w-auto
                                        sm:min-w-[190px]
                                        sm:text-[16px]

                                        lg:min-h-[58px]
                                        lg:min-w-[190px]
                                        lg:rounded-[14px]
                                        lg:text-[16px]
                                    "
                                >
                                    Sign Up
                                </Link>
                            </div>

                            {/* Learners */}
                            <div
                                className="
                                    mt-6
                                    flex
                                    items-center
                                    gap-3

                                    lg:mt-7
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
                                                sizes="36px"
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <span
                                    className="
                                        text-[13px]
                                        font-medium

                                        sm:text-[14px]
                                    "
                                >
                                    10K+ Learners
                                </span>
                            </div>
                        </div>

                        {/* Right - Desktop only */}
                        <div
                            className="
                                relative
                                hidden
                                h-full

                                lg:right-[-40px]
                                lg:block
                            "
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

                                {/* Cut-out */}
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
                                    sizes="430px"
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
                                    className="h-auto w-auto"
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
                                    className="h-auto w-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}