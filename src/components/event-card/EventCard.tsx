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
        <div className="flex w-full items-center gap-6">
        {/* Date */}
        <div className="flex w-[86px] shrink-0 justify-center">
            <div className="w-[77px] overflow-hidden rounded-[16px]">
            <div className="flex h-[32px] items-center justify-center bg-white">
                <span className="text-[16px] font-medium leading-[1.25] text-[#002B97]">
                {month}
                </span>
            </div>

            <div className="flex h-[66px] flex-col items-center justify-center bg-[#002B97] text-white">
                <span className="text-[26px] font-semibold leading-none">
                {day}
                </span>

                <span className="mt-1 text-[16px] font-normal leading-none">
                {weekDay}
                </span>
            </div>
            </div>
        </div>

        {/* Divider */}
        <div className="h-[132px] w-px shrink-0 border-l border-dashed border-[#BEBEBE]" />

        {/* Card */}
        <div
            className={`flex min-h-[178px] flex-1 items-center gap-8 rounded-[24px] p-4 ${
            isBlue
                ? "bg-[#002B97] text-white"
                : "bg-white text-[#2B2B2B]"
            }`}
        >
            <div className="relative h-[145px] w-[158px] shrink-0 overflow-hidden rounded-[16px]">
            <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="158px"
                className="object-cover"
            />
            </div>

            <div className="flex flex-col justify-center">
            <h3 className="m-0 text-[20px] font-semibold leading-[1.5]">
                {title}
            </h3>

            <p className="mt-1 text-[14px] font-normal leading-[1.5]">
                {description}
            </p>

            <div className="mt-2 flex items-center gap-2">
                <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
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

                <span className="text-[14px] font-normal leading-[1.5]">
                {time}
                </span>
            </div>
            </div>
        </div>
        </div>
    );
}