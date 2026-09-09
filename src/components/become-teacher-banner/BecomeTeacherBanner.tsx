import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <section className="relative overflow-hidden rounded-[28px] bg-[var(--color-blue-dark)] px-8 py-16 text-center text-white mt-[120px]">
      {/* Decorative Figma shapes */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/shapes.png"
          alt=""
          fill
          className="
            object-cover
            opacity-20
            mix-blend-screen
            invert
            saturate-[2]
            hue-rotate-[180deg]
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-[700px] flex-col items-center">
        <h2 className="m-0 text-[48px] font-semibold leading-[1.25]">
          {title}
        </h2>

        <p className="mt-5 max-w-[650px] text-[16px] font-normal leading-[1.6]">
          {description}
        </p>

        <Link
          href={buttonHref}
          className="
            mt-10
            inline-flex
            min-h-[48px]
            min-w-[246px]
            items-center
            justify-center
            gap-3
            rounded-[14px]
            bg-white
            px-6
            text-[14px]
            font-medium
            text-[var(--color-blue-dark)]
            transition-colors
            duration-200
            hover:bg-[var(--color-blue-light)]
          "
        >
          {buttonText}
          <ChevronRight size={18} strokeWidth={2} />
        </Link>
      </div>
    </section>
  );
}