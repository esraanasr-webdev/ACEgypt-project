import Image from "next/image";

type InteractiveLearningCardProps = {
    icon: string;
    iconAlt: string;
    title: string;
    description: string;
};

export default function InteractiveLearningCard({
    icon,
    iconAlt,
    title,
    description,
    }: InteractiveLearningCardProps) {
    return (
        <div className="group flex flex-col items-center">
            {/* Icon */}
            <div className="relative mb-8 h-[92px] w-[92px]">
                <Image
                src={icon}
                alt={iconAlt}
                fill
                className="object-contain"
                />
            </div>

            {/* Card */}
            <article
                className="
                flex
                min-h-[262px]
                w-full
                flex-col
                rounded-[44px]
                bg-[var(--color-blue-light)]
                p-[14px]
                transition-all
                duration-300
                group-hover:bg-[var(--color-blue-dark)]
                group-hover:shadow-[0_18px_30px_rgba(0,71,151,0.18)]
                "
            >
                <h3
                    className="
                        py-6
                        text-center
                        text-[20px]
                        font-semibold
                        leading-[1.25]
                        text-[var(--color-grey-strong)]
                        transition-colors
                        duration-300
                        group-hover:text-white
                    "
                >
                    {title}
                </h3>

                <div
                    className="
                        flex
                        flex-1
                        items-center
                        justify-center
                        rounded-[36px]
                        bg-white
                        px-5
                        py-4
                "
                >
                    <p
                        className="
                        text-center
                        text-[16px]
                        font-normal
                        leading-[1.5]
                        text-[var(--color-grey-strong)]
                        "
                    >
                        {description}
                    </p>
                </div>
            </article>
        </div>
    );
}