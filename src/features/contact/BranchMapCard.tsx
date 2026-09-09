import { MapPin } from "lucide-react";

type BranchMapCardProps = {
    title: string;
    mapSrc: string;
};

export default function BranchMapCard({
    title,
    mapSrc,
    }: BranchMapCardProps) {
    return (
        <article className="rounded-[24px] bg-white p-5">
        <div className="mb-4 flex items-center gap-3">
            <MapPin
            size={22}
            strokeWidth={1.8}
            className="text-[var(--color-grey-strong)]"
            />

            <h3 className="text-[18px] font-medium text-[var(--color-grey-strong)]">
            {title}
            </h3>
        </div>

        <iframe
            src={mapSrc}
            title={title}
            loading="lazy"
            className="h-[270px] w-full rounded-[16px] border-0"
        />
        </article>
    );
}