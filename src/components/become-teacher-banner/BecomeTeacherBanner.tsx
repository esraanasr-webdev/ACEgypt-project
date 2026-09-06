import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

type BecomeTeacherBannerProps = {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
};

export default function BecomeTeacherBanner({
    title,
    description,
    buttonText,
    buttonHref,
    }: BecomeTeacherBannerProps) {
    return (
        <section className="relative overflow-hidden rounded-[28px] bg-[var(--color-blue-dark)] px-8 py-16 text-center text-white">
        
        {/* Decorative Figma shapes */}
        <div className="pointer-events-none absolute inset-0">
            <Image
            src="/images/shapes.png"
            alt="shape bg"
            fill
            className="
                object-cover
                opacity-45
                mix-blend-screen
                invert
                saturate-[2]
                hue-rotate-[175deg]
            "
            />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-[700px] flex-col items-center">
            <h2 className="m-0 text-[38px] font-semibold leading-[1.25]">
            {title}
            </h2>

            <p className="mt-5 max-w-[650px] text-[14px] font-normal leading-[1.6]">
            {description}
            </p>

            <Link
                href={buttonHref}
            >
                <Button variant="secondary" className="min-w-[246px] mt-10">
                    <span className="flex item-center gap-3">
                        {buttonText}
                        <ChevronRight size={18} strokeWidth={2} />
                    </span>
                </Button>
            </Link>
        </div>
        </section>
    );
}