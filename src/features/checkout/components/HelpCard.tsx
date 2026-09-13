import {
    CircleHelp,
    Mail,
    MessageCircle,
} from "lucide-react";

export default function HelpCard() {
    return (
        <aside className="rounded-[18px] bg-white p-6">
            <div className="flex items-start gap-3">
                <CircleHelp
                    size={22}
                    className="mt-0.5 shrink-0 text-[var(--color-grey-strong)]"
                />

                <div>
                    <h2 className="text-[16px] font-semibold text-[var(--color-grey-strong)]">
                        Need Help?
                    </h2>

                    <p className="mt-2 text-[14px] leading-[1.5] text-[var(--color-grey-dark)]">
                        Our support team is available 24/7 to assist you.
                    </p>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                    type="button"
                    className="
                        flex
                        min-h-[44px]
                        items-center
                        justify-center
                        gap-2
                        rounded-[12px]
                        bg-[#00D26A]
                        px-4
                        text-[13px]
                        font-medium
                        text-white
                    "
                >
                    <MessageCircle size={16} />
                    Chat With Us
                </button>

                <button
                    type="button"
                    className="
                        flex
                        min-h-[44px]
                        items-center
                        justify-center
                        gap-2
                        rounded-[12px]
                        border
                        border-[var(--color-grey-strong)]
                        bg-white
                        px-4
                        text-[13px]
                        font-medium
                        text-[var(--color-grey-strong)]
                    "
                >
                    <Mail size={16} />
                    Contact Us
                </button>
            </div>
        </aside>
    );
}