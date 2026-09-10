import {
    BarChart3,
    CheckCircle2,
    Clock3,
} from "lucide-react";
import Image from "next/image";

type TeachingCourseCardProps = {
    image: string;
    imageAlt: string;
    badge: "Online" | "In Center";
    title: string;
    description: string;
    hours: string;
    level: string;
    feature: string;
    currency?: string;
    amount: string;
};

export default function TeachingCourseCard({
    image,
    imageAlt,
    badge,
    title,
    description,
    hours,
    level,
    feature,
    currency,
    amount
    }: TeachingCourseCardProps) {
    const online = badge === "Online";

    return (
        <article
            className="
                rounded-[18px]
                bg-white
                p-4
                shadow-[0_8px_28px_rgba(0,0,0,0.08)]
            "
        >
            {/* Image */}
            <div className="relative h-[235px] overflow-hidden rounded-[12px]">
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                />

                <span
                    className={`
                        absolute left-3 top-3
                        rounded-full px-2 py-1
                        text-[12px] font-medium text-white
                        ${
                        online
                            ? "bg-[var(--color-orange-dark)]"
                            : "bg-[var(--color-blue-dark)]"
                        }
                    `}
                >
                {badge}
                </span>
            </div>

            {/* Content */}
            <div className="pt-4">
                <h3 className="text-[20px] font-semibold text-[var(--color-grey-strong)]">
                    {title}
                </h3>

                <p className="mt-2 text-[14px] text-[var(--color-grey-strong)]">
                    {description}
                </p>

                {/* Details */}
                <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3">
                    <div className="flex items-center gap-2">
                        <Clock3
                        size={17}
                        className="text-[var(--color-blue-vibrant)]"
                        />
                        <span className="text-[14px] text-[var(--color-grey-strong)]">
                            {hours}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <BarChart3
                        size={17}
                        className="text-[var(--color-blue-vibrant)]"
                        />
                        <span className="text-[14px] text-[var(--color-grey-strong)]">
                            {level}
                        </span>
                    </div>

                    <div className="flex w-full items-center gap-2">
                        <CheckCircle2
                            size={17}
                            className="text-[var(--color-blue-vibrant)]"
                        />

                        <span className="text-[14px] text-[var(--color-grey-strong)]">
                            {feature}
                        </span>
                    </div>
                </div>

                    {/* Gradient dashed divider */}
                    <div
                        className="
                            m-6
                            h-[1px]
                            w-full
                            bg-[repeating-linear-gradient(to_right,#D9D9D9_0px,#D9D9D9_8px,transparent_5px,transparent_12px)]
                            [mask-image:linear-gradient(to_right,transparent,black_40%,black_40%,transparent)]
                        "
                    />
                    
                {/* Price */}
                <div className="flex items-baseline gap-1  text-[20px]">
                    {currency && (
                        <span
                            className={`
                                font-normal
                                text-[var(--color-blue-dark)]
                            `}
                        >
                            {currency}
                        </span>
                        )}

                        <span
                            className={`
                                font-semibold
                                leading-none
                                ${
                                    amount === "FREE"
                                        ? "text-[var(--color-green-dark)]"
                                        : "text-[var(--color-blue-dark)]"
                                }
                            `}
                        >
                            {amount}
                        </span>
                </div>
            </div>
        </article>
    );
}