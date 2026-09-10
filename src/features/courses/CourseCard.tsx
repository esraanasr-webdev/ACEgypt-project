import Image, { StaticImageData } from "next/image";

type CourseCardProps = {
    image: string | StaticImageData;
    imageAlt: string;
    badge: string;
    title: string;
    description: string;
    currency?: string;
    amount: string;
    actionText: string;
    variant?: "default" | "compact";
};

export default function CourseCard({
    image,
    imageAlt,
    badge,
    title,
    description,
    currency,
    amount,
    actionText,
    variant = "default",
}: CourseCardProps) {
    const isCompact = variant === "compact";

    return (
        <article
            className={`
                flex
                h-full
                w-full
                flex-col
                bg-white
                ${
                    isCompact
                        ? "rounded-[16px] p-3 shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                        : "max-w-[455px] rounded-[28px] p-[26px] shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                }
            `}
        >
            {/* Image */}
            <div
                className={`
                    relative
                    overflow-hidden
                    ${isCompact ? "rounded-[12px]" : "rounded-[18px]"}
                `}
            >
                <div
                    className={`
                        relative
                        w-full
                        ${isCompact ? "h-[180px]" : "h-[288px]"}
                    `}
                >
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        sizes={isCompact ? "300px" : "455px"}
                        className="object-cover"
                    />
                </div>

                {/* Badge */}
                <div
                    className={`
                        absolute
                        flex
                        items-center
                        bg-[var(--color-orange-dark)]
                        ${
                            isCompact
                                ? "left-2 top-2 min-h-[23px] rounded-full px-2"
                                : "left-[16px] top-[18px] rounded-full px-5 py-3"
                        }
                    `}
                >
                    <span
                        className={`
                            font-medium
                            leading-none
                            text-white
                            ${isCompact ? "text-[12px]" : "text-[16px]"}
                        `}
                    >
                        {badge}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div
                className={`
                    flex
                    flex-1
                    flex-col
                    ${isCompact ? "pt-3" : "pt-[26px]"}
                `}
            >
                {/* Title */}
                <h3
                    className={`
                        m-0
                        font-semibold
                        text-[var(--color-grey-strong)]
                        ${
                            isCompact
                                ? "min-h-[56px] text-[20px] leading-[1.4]"
                                : "text-[32px] leading-[1.2]"
                        }
                    `}
                >
                    {title}
                </h3>

                {/* Description */}
                <p
                    className={`
                        mb-0
                        font-normal
                        text-[var(--color-grey-dark)]
                        ${
                            isCompact
                                ? "mt-3 min-h-[48px] line-clamp-2 text-[16px] leading-[1.5]"
                                : "mt-[72px] text-[22px] leading-[1.45]"
                        }
                    `}
                >
                    {description}
                </p>

                {/* Bottom area */}
                <div
                    className={`
                        mt-auto
                        ${isCompact ? "pt-4" : "pt-[28px]"}
                    `}
                >
                    {/* Gradient dashed divider */}
                    <div
                        className="
                            h-[1px]
                            w-full
                            bg-[repeating-linear-gradient(to_right,#D9D9D9_0px,#D9D9D9_8px,transparent_5px,transparent_12px)]
                            [mask-image:linear-gradient(to_right,transparent,black_40%,black_40%,transparent)]
                        "
                    />

                    {/* Price + Action */}
                    <div
                        className={`
                            flex
                            items-center
                            justify-between
                            gap-4
                            ${
                                isCompact
                                    ? "pt-3"
                                    : "pt-[28px]"
                            }
                        `}
                    >
                        {/* Price */}
                        <div className="flex items-baseline gap-1">
                            {currency && (
                                <span
                                    className={`
                                        font-normal
                                        text-[var(--color-blue-dark)]
                                        ${
                                            isCompact
                                                ? "text-[20px]"
                                                : "text-[18px]"
                                        }
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
                                    ${
                                        isCompact
                                            ? "text-[20px]"
                                            : "text-[32px]"
                                    }
                                `}
                            >
                                {amount}
                            </span>
                        </div>

                        {/* Action */}
                        <div
                            className={`
                                shrink-0
                                rounded-full
                                bg-[var(--color-blue-light)]
                                ${
                                    isCompact
                                        ? "px-3 py-2"
                                        : "px-5 py-3"
                                }
                            `}
                        >
                            <span
                                className={`
                                    whitespace-nowrap
                                    font-medium
                                    text-[var(--color-blue-dark)]
                                    ${
                                        isCompact
                                            ? "text-[12px]"
                                            : "text-[18px]"
                                    }
                                `}
                            >
                                {actionText}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}