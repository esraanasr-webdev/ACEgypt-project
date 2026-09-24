import Image, { StaticImageData } from "next/image";

type EventCardProps = {
    month: string;
    day: string;
    weekDay: string;
    title: string;
    description: string;
    time: string;
    image: string | StaticImageData;
    imageAlt: string;
    variant?: "light" | "blue";
};

export default function EventCard({
    month,
    day,
    weekDay,
    title,
    description,
    time,
    image,
    imageAlt,
    variant = "light",
}: EventCardProps) {
    const isBlue = variant === "blue";

    return (
        <div
            className="
                flex
                w-full
                min-w-0
                flex-col
                gap-3

                md:flex-row
                md:items-center
                md:gap-5

                lg:gap-6
            "
        >
            {/* Mobile Date*/}
            <div className="flex items-center gap-2 md:hidden">
                <div
                    className={`
                        inline-flex
                        items-center
                        overflow-hidden
                        rounded-[10px]
                        text-[13px]
                        font-medium
                        ${
                            isBlue
                                ? "bg-[#002B97] text-white"
                                : "bg-white text-[#002B97]"
                        }
                    `}
                >
                    <span className="px-3 py-2">
                        {month}
                    </span>

                    <span
                        className={`
                            px-3
                            py-2
                            ${
                                isBlue
                                    ? "bg-white/10"
                                    : "bg-[#002B97] text-white"
                            }
                        `}
                    >
                        {day}
                    </span>

                    <span
                        className={`
                            px-3
                            py-2
                            ${
                                isBlue
                                    ? "bg-white/10"
                                    : "bg-[#002B97] text-white"
                            }
                        `}
                    >
                        {weekDay}
                    </span>
                </div>
            </div>

            {/* Desktop Date*/}
            <div
                className="
                    hidden
                    w-[86px]
                    shrink-0
                    justify-center
                    md:flex
                "
            >
                <div
                    className="
                        w-[77px]
                        overflow-hidden
                        rounded-[16px]
                    "
                >
                    <div
                        className="
                            flex
                            h-[32px]
                            items-center
                            justify-center
                            bg-white
                        "
                    >
                        <span
                            className="
                                text-[16px]
                                font-medium
                                leading-[1.25]
                                text-[#002B97]
                            "
                        >
                            {month}
                        </span>
                    </div>

                    <div
                        className="
                            flex
                            h-[66px]
                            flex-col
                            items-center
                            justify-center
                            bg-[#002B97]
                            text-white
                        "
                    >
                        <span
                            className="
                                text-[26px]
                                font-semibold
                                leading-none
                            "
                        >
                            {day}
                        </span>

                        <span
                            className="
                                mt-1
                                text-[16px]
                                font-normal
                                leading-none
                            "
                        >
                            {weekDay}
                        </span>
                    </div>
                </div>
            </div>

            {/* Desktop Divider*/}
            <div
                className="
                    hidden
                    h-[132px]
                    w-px
                    shrink-0
                    border-l
                    border-dashed
                    border-[#BEBEBE]
                    md:block
                "
            />

            {/* Event Card*/}
            <div
                className={`
                    flex
                    min-w-0
                    w-full
                    flex-col
                    overflow-hidden
                    rounded-[18px]
                    p-3

                    sm:rounded-[20px]
                    sm:p-4

                    md:min-h-[178px]
                    md:flex-1
                    md:flex-row
                    md:items-center
                    md:gap-5
                    md:rounded-[24px]

                    lg:gap-8

                    ${
                        isBlue
                            ? "bg-[#002B97] text-white"
                            : "bg-white text-[#2B2B2B]"
                    }
                `}
            >
                {/* Image */}
                <div
                    className="
                        relative
                        aspect-[16/9]
                        w-full
                        shrink-0
                        overflow-hidden
                        rounded-[14px]

                        sm:rounded-[16px]

                        md:h-[145px]
                        md:w-[158px]
                        md:aspect-auto
                    "
                >
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        sizes="
                            (max-width: 767px) calc(100vw - 64px),
                            158px
                        "
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div
                    className="
                        flex
                        min-w-0
                        flex-1
                        flex-col
                        justify-center
                        pt-4

                        md:pt-0
                    "
                >
                    <h3
                        className="
                            m-0
                            text-[17px]
                            font-semibold
                            leading-[1.4]

                            sm:text-[18px]

                            lg:text-[20px]
                            lg:leading-[1.5]
                        "
                    >
                        {title}
                    </h3>

                    <p
                        className={`
                            mt-2
                            text-[13px]
                            font-normal
                            leading-[1.6]

                            sm:text-[14px]
                            sm:leading-[1.5]

                            ${
                                isBlue
                                    ? "text-white/90"
                                    : "text-[var(--color-grey-strong)]"
                            }
                        `}
                    >
                        {description}
                    </p>

                    {/* Time */}
                    <div
                        className={`
                            mt-3
                            flex
                            items-center
                            gap-2

                            ${
                                isBlue
                                    ? "text-white"
                                    : "text-[var(--color-orange-dark)]"
                            }
                        `}
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className="shrink-0"
                        >
                            <circle
                                cx="8"
                                cy="8"
                                r="5.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />

                            <path
                                d="M8 4.75V8L10.25 9.25"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <span
                            className={`
                                text-[13px]
                                font-normal
                                leading-[1.5]

                                sm:text-[14px]

                                ${
                                    isBlue
                                        ? "text-white"
                                        : "text-[var(--color-grey-strong)]"
                                }
                            `}
                        >
                            {time}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}