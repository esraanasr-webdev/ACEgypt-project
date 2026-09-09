import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TeachingCTA() {
    return (
        <div
        className="
            relative
            mt-28
            min-h-[250px]
            overflow-visible
            rounded-[28px]
        "
        >
        <div
            className="
            relative
            min-h-[250px]
            overflow-hidden
            rounded-[28px]
            bg-[var(--color-blue-dark)]
            "
        >
            {/* Background */}
            <Image
                src="/images/home/teaching/teaching-cta-bg.png"
                alt=""
                fill
                className="object-cover"
            />

            {/* Decorative dots */}
            <div className="pointer-events-none absolute inset-0 z-[1]">

                {/* Top Left - original */}
                <Image
                src="/images/home/teaching/dots-top-left.png"
                alt=""
                width={108}
                height={86}
                className="absolute left-[18px] top-[16px] z-[1]"
                />

                {/* Top Right */}
                <Image
                src="/images/home/teaching/dots-right-top.png"
                alt=""
                width={108}
                height={86}
                className="absolute right-[18px] top-[16px]"
                />

                {/* Bottom Left  */}
                <Image
                    src="/images/home/teaching/dots-bottom-left.png"
                    alt=""
                    width={108}
                    height={86}
                    className="absolute bottom-[16px] left-[18px]"
                />

                {/* Bottom Right  */}
                <Image
                    src="/images/home/teaching/dots-right-bottom.png"
                    alt=""
                    width={108}
                    height={86}
                    className="absolute bottom-[16px] right-[18px]"
                />
            </div>

            {/* Content */}
            <div
                className="
                    relative
                    z-10
                    flex
                    min-h-[250px]
                    items-center
                    justify-between
                    gap-10
                    pl-[300px]
                    pr-16
                "
            >
            <div className="max-w-[433px] text-white">
                <h3 className="text-[38px] font-bold leading-[1.2]">
                READY TO TEACH WITH
                <br />
                CONFIDENCE?
                </h3>

                <p className="mt-5 text-[16px] leading-[1.6] font-medium">
                Join a professional teacher training program and
                <br />
                start building your future in education.
                </p>
            </div>

            <Link
                href="/courses"
                className="
                flex
                min-h-[58px]
                min-w-[290px]
                items-center
                justify-center
                gap-5
                rounded-[14px]
                bg-white
                px-7
                text-[14px]
                font-medium
                text-[var(--color-blue-dark)]
                "
            >
                Explore Teaching Courses
                <ChevronRight size={20} />
            </Link>
            </div>
        </div>

        {/* Person outside the banner clipping */}
        <div
            className="
            pointer-events-none
            absolute
            bottom-0
            left-[45px]
            z-20
            h-[330px]
            w-[240px]
            "
        >
            <Image
            src="/images/home/teaching/teacher.png"
            alt="Certified English teacher"
            fill
            className="object-contain object-bottom"
            />
        </div>
        </div>
    );
}