import { Link } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function TeachingCTA() {
    return (
        <section
            className="
                relative
                mt-16
                px-4
                sm:mt-20
                sm:px-6
                lg:mt-28
                lg:px-[14px]
                lg:pt-[10px]
            "
        >
            <div
                className="
                    relative
                    mx-auto
                    min-h-[520px]
                    max-w-[1200px]
                    overflow-hidden
                    rounded-[22px]
                    bg-[var(--color-blue-dark)]

                    sm:min-h-[540px]
                    sm:rounded-[28px]

                    lg:min-h-[250px]
                "
            >
                {/* Background*/}
                <Image
                    src="/images/home/teaching/teaching-cta-bg.png"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover"
                />

                {/* Optional dark overlay for text readability */}
                <div
                    className="
                        absolute
                        inset-0
                        z-[1]
                        bg-[var(--color-blue-dark)]/20
                    "
                />

                {/* Decorative Dots*/}
                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        z-[2]
                    "
                >
                    {/* Top Left */}
                    <Image
                        src="/images/home/teaching/dots-top-left.png"
                        alt=""
                        width={108}
                        height={86}
                        className="
                            absolute
                            left-2
                            top-2
                            h-auto
                            w-[70px]
                            opacity-70

                            sm:left-4
                            sm:top-4
                            sm:w-[90px]

                            lg:left-[18px]
                            lg:top-[16px]
                            lg:w-[108px]
                            lg:opacity-100
                        "
                    />

                    {/* Top Right */}
                    <Image
                        src="/images/home/teaching/dots-right-top.png"
                        alt=""
                        width={108}
                        height={86}
                        className="
                            absolute
                            right-2
                            top-2
                            h-auto
                            w-[70px]
                            opacity-70

                            sm:right-4
                            sm:top-4
                            sm:w-[90px]

                            lg:right-[18px]
                            lg:top-[16px]
                            lg:w-[108px]
                            lg:opacity-100
                        "
                    />

                    {/* Bottom Left */}
                    <Image
                        src="/images/home/teaching/dots-bottom-left.png"
                        alt=""
                        width={108}
                        height={86}
                        className="
                            absolute
                            bottom-2
                            left-2
                            h-auto
                            w-[70px]
                            opacity-70

                            sm:bottom-4
                            sm:left-4
                            sm:w-[90px]

                            lg:bottom-[16px]
                            lg:left-[18px]
                            lg:w-[108px]
                            lg:opacity-100
                        "
                    />

                    {/* Bottom Right */}
                    <Image
                        src="/images/home/teaching/dots-right-bottom.png"
                        alt=""
                        width={108}
                        height={86}
                        className="
                            absolute
                            bottom-2
                            right-2
                            h-auto
                            w-[70px]
                            opacity-70

                            sm:bottom-4
                            sm:right-4
                            sm:w-[90px]

                            lg:bottom-[16px]
                            lg:right-[18px]
                            lg:w-[108px]
                            lg:opacity-100
                        "
                    />
                </div>

                {/* Content */}
                <div
                    className="
                        relative
                        z-10
                        flex
                        min-h-[520px]
                        flex-col
                        items-center
                        px-5
                        pb-[235px]
                        pt-10
                        text-center

                        sm:min-h-[540px]
                        sm:px-8
                        sm:pb-[250px]
                        sm:pt-12

                        lg:min-h-[250px]
                        lg:flex-row
                        lg:justify-between
                        lg:gap-8
                        lg:py-8
                        lg:pl-[300px]
                        lg:pr-12
                        lg:text-start

                        xl:pr-16
                    "
                >
                    {/* Text */}
                    <div
                        className="
                            w-full
                            max-w-[470px]
                            text-white

                            lg:max-w-[433px]
                        "
                    >
                        <h3
                            className="
                                text-[26px]
                                font-bold
                                leading-[1.2]

                                sm:text-[30px]

                                lg:text-[27px]

                                xl:text-[30px]
                            "
                        >
                            READY TO TEACH WITH
                            <span className="block">
                                CONFIDENCE?
                            </span>
                        </h3>

                        <p
                            className="
                                mx-auto
                                mt-4
                                max-w-[390px]
                                text-[14px]
                                font-medium
                                leading-[1.7]
                                text-white/95

                                sm:mt-5
                                sm:text-[15px]

                                lg:mx-0
                                lg:max-w-[433px]
                                lg:text-[16px]
                                lg:leading-[1.6]
                            "
                        >
                            Join a professional teacher training program and
                            start building your future in education.
                        </p>
                    </div>

                    {/* CTA */}
                    <Link
                        href="/courses"
                        className="
                            mt-7
                            flex
                            min-h-[52px]
                            w-full
                            max-w-[330px]
                            items-center
                            justify-center
                            gap-3
                            rounded-[12px]
                            bg-white
                            px-5
                            text-center
                            text-[14px]
                            font-medium
                            text-[var(--color-blue-dark)]
                            transition-colors
                            duration-200

                            hover:bg-[var(--color-blue-light)]

                            sm:w-auto
                            sm:min-w-[290px]

                            lg:mt-0
                            lg:min-h-[58px]
                            lg:shrink-0
                            lg:rounded-[14px]
                            lg:px-7
                        "
                    >
                        <span>Explore Teaching Courses</span>

                        <ChevronRight
                            size={20}
                            className="shrink-0 rtl:rotate-180"
                        />
                    </Link>
                </div>
            </div>

            {/* Teacher

                Mobile: centered at bottom
                Desktop: original left position*/}
            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-1/2
                    z-20
                    h-[230px]
                    w-[170px]
                    -translate-x-1/2

                    sm:h-[250px]
                    sm:w-[185px]

                    lg:left-[59px]
                    lg:h-[330px]
                    lg:w-[240px]
                    lg:translate-x-0
                "
            >
                <Image
                    src="/images/home/teaching/teacher.png"
                    alt="Certified English teacher"
                    fill
                    sizes="
                        (max-width: 639px) 170px,
                        (max-width: 1023px) 185px,
                        240px
                    "
                    className="
                        object-contain
                        object-bottom
                    "
                />
            </div>
        </section>
    );
}