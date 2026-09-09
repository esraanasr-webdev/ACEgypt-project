import { Play, Quote, UserRound } from "lucide-react";
import Image from "next/image";

export default function SuccessStoriesSection() {
    return (
        <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div
            className="
            mx-auto
            max-w-[1880px]
            rounded-[32px]
            bg-[var(--color-blue-light)]
            px-6
            py-14
            sm:px-10
            lg:px-16
            "
        >
            <div className="mx-auto max-w-[1200px]">
            {/* Heading */}
            <div>
                <h2 className="text-[38px] font-bold text-[var(--color-grey-strong)]">
                Students{" "}
                <span className="text-[var(--color-blue-vibrant)]">
                    Success Stories
                </span>
                <span className="text-[var(--color-red-dark)]">.</span>
                </h2>

                <p className="mt-2 text-[16px] text-[var(--color-grey-strong)]">
                Real experiences from students who achieved their goals
                </p>
            </div>

            {/* Main layout */}
            <div
                className="
                mt-8
                grid
                grid-cols-1
                gap-6
                lg:grid-cols-[2fr_1fr]
                "
            >
                {/* Left column */}
                <div>
                {/* Main video */}
                <div
                    className="
                    relative
                    h-[310px]
                    overflow-hidden
                    rounded-[24px]
                    "
                >
                    <Image
                    src="/images/home/success/main-video.jpg"
                    alt="Student success story"
                    fill
                    className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/25" />
                        <button
                        type="button"
                        aria-label="Play student success story"
                        className="
                            absolute
                            left-1/2
                            top-1/2
                            flex
                            h-[56px]
                            w-[56px]
                            -translate-x-1/2
                            -translate-y-1/2
                            items-center
                            justify-center
                            rounded-full
                            bg-white/70
                            text-white
                            backdrop-blur-sm
                        "
                        >
                        <Play size={24} fill="currentColor" />
                    </button>

                    <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-[26px] font-semibold">
                        Real Student. Real Success.
                    </h3>

                    <p className="mt-1 text-[16px]">
                        Hear how our courses made a difference
                    </p>
                    </div>
                </div>

                {/* Lower testimonial cards */}
                <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                    <article
                    className="
                        min-h-[250px]
                        rounded-[24px]
                        bg-white
                        p-6
                    "
                    >
                    <Quote
                        size={34}
                        fill="currentColor"
                        className="rotate-180 text-[var(--color-grey-medium)]"
                    />

                    <p className="mt-6 text-[20px] leading-[1.65] text-[var(--color-grey-strong)]">
                        “The instructors are very supportive and the sessions are
                        really interactive. I improved my speaking skills in a short
                        time.”
                    </p>

                    <div className="mt-8 flex items-center gap-3">
                    <div
                        className="
                            flex
                            h-[34px]
                            w-[34px]
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-[var(--color-grey-medium)]
                            text-[var(--color-grey-dark)]
                    "
                    >
                        <UserRound size={18} strokeWidth={1.8} />
                    </div>

                        <div>
                        <p className="text-[16px] font-semibold text-[var(--color-grey-strong)]">
                            Nour Ali
                        </p>

                        <p className="text-[12px] text-[var(--color-grey-dark)]">
                            University Student
                        </p>
                        </div>
                    </div>
                    </article>

                    <article
                    className="
                        min-h-[250px]
                        rounded-[24px]
                        bg-white
                        p-6
                    "
                    >
                    <Quote
                        size={34}
                        fill="currentColor"
                        className="rotate-180 text-[var(--color-grey-medium)]"
                    />

                    <p className="mt-6 text-[20px] leading-[1.65] text-[var(--color-grey-strong)]">
                        “I joined to improve my career, and it really worked. The
                        practical approach made a big difference for me.”
                    </p>

                    <div className="mt-8 flex items-center gap-3">
                        <div className="relative h-[34px] w-[34px] overflow-hidden rounded-full">
                        <Image
                            src="/images/home/success/mohamed.png"
                            alt="Mohamed Samy"
                            fill
                            className="object-cover"
                        />
                        </div>

                        <div>
                        <p className="text-[16px] font-semibold text-[var(--color-grey-strong)]">
                            Mohamed Samy
                        </p>

                        <p className="text-[12px] text-[var(--color-grey-dark)]">
                            Sales Executive
                        </p>
                        </div>
                    </div>
                    </article>
                </div>
                </div>

                {/* Right column */}
                <div className="space-y-6">
                {/* Blue testimonial */}
                <article
                    className="
                    min-h-[310px]
                    rounded-[24px]
                    bg-[var(--color-blue-dark)]
                    p-7
                    text-white
                    "
                >
                    <Quote
                    size={42}
                    fill="currentColor"
                    className="rotate-180 text-[var(--color-orange-dark)]"
                    />

                    <p className="mt-6 text-[20px] leading-[1.65]">
                    “The course helped me gain confidence in speaking English at
                    work. I can now communicate with international clients much
                    more easily.”
                    </p>

                    <div className="mt-8 flex items-center gap-3 border-t border-dashed border-white/15 pt-5">
                    <div className="relative h-[34px] w-[34px] overflow-hidden rounded-full">
                        <Image
                        src="/images/home/success/ahmed.png"
                        alt="Ahmed Hassan"
                        fill
                        className="object-cover"
                        />
                    </div>

                    <div>
                        <p className="text-[16px] font-semibold">
                        Ahmed Hassan
                        </p>

                        <p className="text-[12px] text-white/70">
                        Marketing Specialist
                        </p>
                    </div>
                    </div>
                </article>

                {/* Small video */}
                <div
                    className="
                    relative
                    h-[250px]
                    overflow-hidden
                    rounded-[24px]
                    "
                >
                    <Image
                    src="/images/home/success/story-video.jpg"
                    alt="Student success video"
                    fill
                    className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/25" />

                    <button
                    type="button"
                    aria-label="Play success story"
                    className="
                        absolute
                        left-1/2
                        top-1/2
                        flex
                        h-[54px]
                        w-[54px]
                        -translate-x-1/2
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-full
                        bg-white/70
                        text-white
                        backdrop-blur-sm
                    "
                    >
                    <Play size={23} fill="currentColor" />
                    </button>

                    <h3
                    className="
                        absolute
                        bottom-6
                        left-6
                        max-w-[320px]
                        text-[26px]
                        font-semibold
                        leading-[1.3]
                        text-white
                    "
                    >
                    My Success Story From Beginner to Confid...
                    </h3>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}