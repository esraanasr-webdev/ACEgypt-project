import type { LucideIcon } from "lucide-react";

import { contactCards } from "./data";

export default function ContactInfoGrid() {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {contactCards.map((card) => {
            const Icon = card.icon as LucideIcon;

            return (
            <article
                key={card.title}
                className="
                min-h-[240px]
                rounded-[24px]
                bg-[var(--color-grey-light)]
                p-8
                "
            >
                <div
                className="
                    flex
                    h-[64px]
                    w-[64px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[var(--color-orange-dark)]
                    text-white
                "
                >
                <Icon size={30} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-[20px] font-semibold text-[var(--color-grey-strong)]">
                    {card.title}
                </h3>

                {card.description && (
                <p className="mt-4 text-[16px] leading-[1.5] text-[var(--color-grey-dark)]">
                    {card.description}
                </p>
                )}

                {card.rows && (
                <div className="mt-4 space-y-3">
                    {card.rows.map((row) => {
                    const RowIcon = row.icon as LucideIcon;

                    return (
                        <div
                        key={row.text}
                        className="flex items-center gap-3 text-[16px] text-[var(--color-grey-dark)]"
                        >
                        <RowIcon size={20} strokeWidth={1.7} />
                        <span>{row.text}</span>
                        </div>
                    );
                    })}
                </div>
                )}

                {card.workingHours && (
                <div className="mt-4 flex items-center justify-between gap-6 text-[16px] text-[var(--color-grey-dark)]">
                    <span>{card.workingHours.days}</span>

                    <span className="shrink-0 text-[var(--color-grey-strong)]">
                    {card.workingHours.time}
                    </span>
                </div>
                )}
            </article>
            );
        })}
        </div>
    );
}