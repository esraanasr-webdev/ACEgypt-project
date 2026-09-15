import {
    LifeBuoy,
    Mail,
    MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function DashboardHelpCard() {
    return (
        <div
            className="
                rounded-[22px]
                bg-[var(--color-blue-vibrant)]
                px-5
                py-5
                text-white
            "
        >
            <div className="flex items-center gap-2">
                <LifeBuoy
                    size={19}
                    strokeWidth={2}
                />

                <h3 className="text-[15px] font-semibold">
                    Need Help?
                </h3>
            </div>

            <p
                className="
                    mt-2
                    pl-7
                    text-[13px]
                    leading-[1.5]
                "
            >
                Our support team is available 24/7 to assist you.
            </p>

            <div className="mt-5 flex flex-col gap-3">
                <button
                    type="button"
                    className="
                        flex
                        min-h-[42px]
                        items-center
                        justify-center
                        gap-2
                        rounded-[10px]
                        bg-[#00D67A]
                        px-4
                        text-[13px]
                        font-medium
                        text-white
                    "
                >
                    <MessageCircle size={15} />

                    Chat With Us
                </button>

                <Link
                    href="/contact"
                    className="
                        flex
                        min-h-[42px]
                        items-center
                        justify-center
                        gap-2
                        rounded-[10px]
                        bg-white
                        px-4
                        text-[13px]
                        font-medium
                        text-[var(--color-blue-dark)]
                    "
                >
                    <Mail size={15} />

                    Contact Us
                </Link>
            </div>
        </div>
    );
}