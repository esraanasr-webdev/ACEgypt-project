import {
    Mail,
    MapPin,
    Phone,
    Smartphone,
} from "lucide-react";
import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";

import Logo from "../logo/Logo";

export default function Footer() {
    return (
        <footer className="bg-white px-8 pt-16 pb-6">
        <div className="mx-auto max-w-[1200px]">
            {/* Main Footer */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.1fr_2fr_1fr_1fr]">
            {/* Logo + Social Media */}
            <div>
                <Logo type="dark" />

                <div className="mt-5 flex items-center gap-2">
                    <Link
                    href="#"
                    aria-label="Facebook"
                    className="
                        flex h-[28px] w-[28px]
                        items-center justify-center
                        rounded-full
                        bg-[var(--color-blue-vibrant)]
                        text-white
                    "
                    >
                    <FaFacebookF size={16} />
                    </Link>

                    <Link
                        href="#"
                        aria-label="X"
                        className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[var(--color-blue-vibrant)] text-white"
                    >
                        <FaXTwitter size={16} />
                    </Link>

                    <Link
                        href="#"
                        aria-label="LinkedIn"
                        className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[var(--color-blue-vibrant)] text-white"
                    >
                        <FaLinkedinIn size={16} />
                    </Link>
                    <Link
                        href="#"
                        aria-label="Instagram"
                        className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[var(--color-blue-vibrant)] text-white"
                    >
                        <FaInstagram size={16} />
                    </Link>
                </div>
            </div>

            {/* Contact */}
            <div>
                <h3 className="mb-6 text-[14px] font-semibold text-[var(--color-grey-strong)]">
                Contact
                </h3>

                <div className="flex flex-col gap-4 text-[12px] text-[var(--color-grey-strong)]">
                <div className="flex items-center gap-3">
                    <Smartphone
                    size={16}
                    strokeWidth={1.5}
                    className="shrink-0"
                    />

                    <span>(+20) 1120866635</span>
                </div>

                <div className="flex items-center gap-3">
                    <Phone
                    size={16}
                    strokeWidth={1.5}
                    className="shrink-0"
                    />

                    <span>03 5411979</span>
                </div>

                <div className="flex items-center gap-3">
                    <MapPin
                    size={16}
                    strokeWidth={1.5}
                    className="shrink-0"
                    />

                    <span>
                    Villa 25 Kambiz street, Dokki, Cairo, Egypt
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <Mail
                    size={16}
                    strokeWidth={1.5}
                    className="shrink-0"
                    />

                    <a
                    href="mailto:info@americancouncileg.com"
                    className="hover:underline"
                    >
                    info@americancouncileg.com
                    </a>
                </div>
                </div>
            </div>

            {/* About Center */}
            <div>
                <h3 className="mb-6 text-[14px] font-semibold text-[var(--color-grey-strong)]">
                About Center
                </h3>

                <nav className="flex flex-col gap-4 text-[12px] text-[var(--color-grey-strong)]">
                <Link href="/about" className="hover:underline">
                    About
                </Link>

                <Link href="/blog" className="hover:underline">
                    Blog
                </Link>

                <Link href="/contact" className="hover:underline">
                    Contact
                </Link>
                </nav>
            </div>

            {/* Other Links */}
            <div>
                <h3 className="mb-6 text-[14px] font-semibold text-[var(--color-grey-strong)]">
                Other Links
                </h3>

                <nav className="flex flex-col gap-4 text-[12px] text-[var(--color-grey-strong)]">
                <Link href="/courses" className="hover:underline">
                    Explore Courses
                </Link>

                <Link href="/events" className="hover:underline">
                    Upcoming Events
                </Link>

                <Link href="/gallery" className="hover:underline">
                    Our Gallery
                </Link>
                </nav>
            </div>
            </div>

            {/* Bottom Footer */}
            <div className="mt-16 border-t border-dashed border-[var(--color-grey-medium)] pt-5">
            <div className="flex flex-col gap-3 text-[10px] text-[var(--color-grey-strong)] sm:flex-row sm:items-center sm:justify-between">
                <p>
                © 2026 American Council Egypt. All rights reserved.
                </p>

                <div className="flex items-center gap-1">
                <Link href="/policy" className="hover:underline">
                    Privacy Policy
                </Link>

                <span>|</span>

                <Link href="/terms" className="hover:underline">
                    Terms & Conditions
                </Link>
                </div>
            </div>
            </div>
        </div>
        </footer>
    );
}