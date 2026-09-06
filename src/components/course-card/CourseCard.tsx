import Image, { StaticImageData } from "next/image";

type CourseCardProps = {
    image: string | StaticImageData;
    imageAlt: string;
    badge: string;
    title: string;
    description: string;
    price: string;
    actionText: string;
};

export default function CourseCard({
    image,
    imageAlt,
    badge,
    title,
    description,
    price,
    actionText,
    }: CourseCardProps) {
    return (
        <article className="w-full max-w-[455px] rounded-[28px] bg-white p-[26px] shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
        <div className="relative overflow-hidden rounded-[18px]">
            <div className="relative h-[288px] w-full">
            <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="455px"
                className="object-cover"
            />
            </div>

            <div className="absolute left-[16px] top-[18px] rounded-full bg-[#FF8A00] px-5 py-3">
            <span className="text-[16px] font-medium leading-none text-white">
                {badge}
            </span>
            </div>
        </div>

        <div className="pt-[26px]">
            <h3 className="m-0 text-[32px] font-semibold leading-[1.2] text-[#2B2B2B]">
            {title}
            </h3>

            <p className="mt-[72px] mb-0 text-[22px] font-normal leading-[1.45] text-[#2B2B2B]">
            {description}
            </p>

            <div className="mt-[28px] border-t border-dashed border-[#D7D7D7] pt-[28px]">
            <div className="flex items-center justify-between gap-4">
                <span className="text-[32px] font-medium leading-none text-[#003AA6]">
                {price}
                </span>

                <div className="rounded-full bg-[#EEF6FF] px-5 py-3">
                <span className="whitespace-nowrap text-[18px] font-medium text-[#003AA6]">
                    {actionText}
                </span>
                </div>
            </div>
            </div>
        </div>
        </article>
    );
}