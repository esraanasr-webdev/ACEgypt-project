import Image, { StaticImageData } from "next/image";

type CourseCardProps = {
    image: string | StaticImageData;
    imageAlt: string;
    badge: string;
    title: string;
    description: string;
    price: string;
    actionText: string;
    variant?: "default" | "compact";
};

export default function CourseCard({
    image,
    imageAlt,
    badge,
    title,
    description,
    price,
    actionText,
    variant = "default",
    }: CourseCardProps) {
    const isCompact = variant === "compact";

    return (
        <article
            className={`
                w-full
                bg-white
                ${
                isCompact
                    ? "rounded-[16px] p-3 shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                    : "max-w-[455px] rounded-[28px] p-[26px] shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                }
            `}
        >
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

            <div
                className={`
                    absolute
                    bg-[var(--color-orange-dark)]
                    ${
                    isCompact
                        ? "left-2 top-2 rounded-full px-4 py-1"
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

        <div className={isCompact ? "pt-3" : "pt-[26px]"}>
            <h3
                className={`
                    m-0
                    font-semibold
                    text-[var(--color-grey-strong)]
                    ${
                    isCompact
                        ? "min-h-[44px] text-[16px] leading-[1.4]"
                        : "text-[32px] leading-[1.2]"
                    }
                `}
            >
            {title}
            </h3>

            <p
                className={`
                    mb-0
                    font-normal
                    text-[var(--color-grey-dark)]
                    ${
                    isCompact
                        ? "mt-3 line-clamp-2 text-[11px] leading-[1.5]"
                        : "mt-[72px] text-[22px] leading-[1.45]"
                    }
                `}
            >
            {description}
            </p>

            <div
                className={`
                    border-t
                    border-dashed
                    border-[var(--color-grey-medium)]
                    ${
                    isCompact
                        ? "mt-4 pt-3"
                        : "mt-[28px] pt-[28px]"
                    }
                `}
            >
            <div className="flex items-center justify-between gap-4">
                <span
                    className={`
                        font-medium
                        leading-none
                        ${
                        price === "FREE"
                            ? "text-[var(--color-green-dark)]"
                            : "text-[var(--color-blue-dark)]"
                        }
                        ${isCompact ? "text-[16px]" : "text-[32px]"}
                    `}
                >
                {price}
                </span>

                <div
                    className={`
                        rounded-full
                        bg-[var(--color-blue-light)]
                        ${
                        isCompact
                            ? "px-3 py-1"
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
                        ? "text-[9px]"
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