"use client"

import {
    Link,
    usePathname,
    useRouter,
} from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import Logo from "../logo/Logo";
import MainNavigationItem from "./MainNavigationItem";

type MainNavigationProps = {
    loggedIn?: boolean;
    dashboard?: boolean;
    className?: string;
    userName?: string;
    userImage?: string;
};

const bellIcon = "/images/navigation/bell.svg";
const downIcon = "/images/navigation/down.svg";
const profileImage = "/images/navigation/profile.png";
const arabicLanguageIcon = "/images/navigation/language-ar.png";
const englishLanguageIcon = "/images/navigation/language-en.png";

export default function MainNavigation({
    loggedIn = false,
    dashboard = false,
    className = "",
    userName = "Ahmed",
    userImage = "/images/navigation/profile.png",
    }: MainNavigationProps) {
    const pathname = usePathname();

    /* For Translation */
    const locale = useLocale();
    const t = useTranslations("Navigation");

    const languageIcon =
    locale === "en"
        ? arabicLanguageIcon
        : englishLanguageIcon;
    const router = useRouter();

    const switchLanguage = () => {
        const nextLocale = locale === "en" ? "ar" : "en";

        router.replace(pathname, {
            locale: nextLocale,
        });
    };

    const isDashboard = loggedIn && dashboard;
    const isLoggedIn = loggedIn && !dashboard;
    const isGuest = !loggedIn && !dashboard;

    /* For mobile menu */
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname === href || pathname.startsWith(`${href}/`);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav
            className={`relative flex w-full items-center
                ${isDashboard ? "justify-end" : "justify-between"}
                ${className}`}
        >
        {/* Desktop Navigation version */}
        {!isDashboard && (
            <Link
                href="/"
                onClick={closeMobileMenu}
                className="shrink-0"
            >
                <Logo
                    type="light"
                    className="
                        h-auto
                        w-[130px]
                        sm:w-[150px]
                        lg:w-[180px]
                    "
                />
            </Link>
        )}

            {/* Navigation */}
            <div
                className={`items-center ${
                isDashboard ? "flex gap-4" : "hidden gap-10 lg:flex"
                }`}
            >
                {/* Main menu */}
                {!isDashboard && (
                    <div className="flex items-center">
                        <MainNavigationItem
                            label={t("home")}
                            active={isActive("/")}
                            href="/"
                        />

                        <MainNavigationItem
                            label={t("about")}
                            active={isActive("/about")}
                            href="/about"
                        />

                        <MainNavigationItem
                            label={t("courses")}
                            active={isActive("/courses")}
                            hasDropdown
                            href="/courses"
                        />

                        <MainNavigationItem
                            label={t("careers")}
                            active={isActive("/careers")}
                            href="/careers"
                        />
                        <MainNavigationItem
                            label={t("contact")}
                            active={isActive("/contact")}
                            href="/contact"
                        />
                    </div>
                )}

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={switchLanguage}
                        aria-label={
                            locale === "en"
                                ? "Switch to Arabic"
                                : "Switch to English"
                        }
                        title={locale === "en" ? "العربية" : "English"}
                        className="flex items-center justify-center"
                    >
                        <Image
                            src={languageIcon}
                            alt=""
                            width={28}
                            height={28}
                        />
                    </button>
                    {/* Gradient Divider*/}
                    <div className="relative h-[29px] w-[2px] shrink-0">
                        <Image
                            src="/images/navigation/divider-gradient.svg"
                            alt=""
                            fill
                            className="object-fill"
                        />
                    </div>
                {/* Guest */}
                {isGuest && (
                    <div className="flex items-center">
                        <Link
                            href="/login"
                            className="rounded-xl px-4 py-3 text-sm font-medium leading-[1.25] text-white"
                        >
                            Sign In
                        </Link>

                        <Link
                            href="/signup"
                            className="
                                inline-flex
                                min-h-[36px]
                                items-center
                                justify-center
                                rounded-[10px]
                                bg-white
                                px-4
                                text-[12px]
                                font-medium
                                text-[var(--color-blue-dark)]
                            "
                        >
                            Sign Up
                        </Link>
                    </div>
                )}

                {/* Logged in */}
                {isLoggedIn && (
                    <div className="flex w-[158px] items-center gap-2 rounded-xl bg-white px-3 py-2">
                        <Image
                            src={userImage}
                            alt=""
                            width={34}
                            height={34}
                            className="rounded-full"
                        />

                        <span className="whitespace-nowrap text-sm font-medium leading-[1.25] text-[#2b2b2b]">
                            Hi, {userName}
                        </span>

                        <Image
                            src={downIcon}
                            alt=""
                            width={16}
                            height={16}
                        />
                    </div>
                )}

                {/* Dashboard */}
                {isDashboard && (
                    <>
                    <button
                        type="button"
                        className="rounded-xl border border-[#2b2b2b] px-4 py-3 text-sm font-medium leading-[1.25] text-[#2b2b2b]"
                    >
                        Button
                    </button>

                    <div className="flex items-center gap-4">
                        <Image
                        src={bellIcon}
                        alt="Notifications"
                        width={24}
                        height={24}
                        />

                        <div className="flex items-center gap-4">
                        <Image
                            src={languageIcon}
                            alt=""
                            width={28}
                            height={26}
                        />

                        <div className="h-[29px] w-px bg-[#2b2b2b]/20" />

                        <div className="flex w-[158px] items-center gap-2 rounded-xl bg-white px-3 py-2">
                            <Image
                            src={profileImage}
                            alt=""
                            width={34}
                            height={34}
                            className="rounded-full"
                            />

                            <span className="whitespace-nowrap text-sm font-medium leading-[1.25] text-[#2b2b2b]">
                            Hi, {userName}
                            </span>

                            <Image
                            src={downIcon}
                            alt=""
                            width={16}
                            height={16}
                            />
                        </div>
                        </div>
                    </div>
                    </>
                )}
                </div>
            </div>
             {!isDashboard && (
                <div className="flex items-center gap-2 lg:hidden">
                    {/* Language */}
                    <button
                        type="button"
                        onClick={switchLanguage}
                        aria-label={
                            locale === "en"
                                ? t("switchToArabic")
                                : t("switchToEnglish")
                        }
                        title={
                            locale === "en"
                                ? "العربية"
                                : "English"
                        }
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                        "
                    >
                        <Image
                            src={languageIcon}
                            alt=""
                            width={26}
                            height={26}
                        />
                    </button>

                    {/* Hamburger */}
                    <button
                        type="button"
                        onClick={() =>
                            setMobileMenuOpen((prev) => !prev)
                        }
                        aria-label="Toggle navigation menu"
                        aria-expanded={mobileMenuOpen}
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            text-white
                        "
                    >
                        {mobileMenuOpen ? (
                            <X size={26} />
                        ) : (
                            <Menu size={26} />
                        )}
                    </button>
                </div>
            )}

            {/* ========================================
                Mobile Menu
            ======================================== */}
            {!isDashboard && mobileMenuOpen && (
                <div
                    className="
                        absolute
                        left-0
                        top-full
                        z-50
                        mt-3
                        w-full
                        rounded-[16px]
                        bg-white
                        p-4
                        shadow-lg
                        lg:hidden
                    "
                >
                    {/* Links */}
                    <div className="flex flex-col">
                        <Link
                            href="/"
                            onClick={closeMobileMenu}
                            className={`
                                border-b
                                border-[var(--color-grey-medium)]
                                px-3
                                py-3
                                text-sm
                                font-medium
                                ${
                                    isActive("/")
                                        ? "text-[var(--color-blue-vibrant)]"
                                        : "text-[var(--color-grey-strong)]"
                                }
                            `}
                        >
                            {t("home")}
                        </Link>

                        <Link
                            href="/about"
                            onClick={closeMobileMenu}
                            className={`
                                border-b
                                border-[var(--color-grey-medium)]
                                px-3
                                py-3
                                text-sm
                                font-medium
                                ${
                                    isActive("/about")
                                        ? "text-[var(--color-blue-vibrant)]"
                                        : "text-[var(--color-grey-strong)]"
                                }
                            `}
                        >
                            {t("about")}
                        </Link>

                        <Link
                            href="/courses"
                            onClick={closeMobileMenu}
                            className={`
                                border-b
                                border-[var(--color-grey-medium)]
                                px-3
                                py-3
                                text-sm
                                font-medium
                                ${
                                    isActive("/courses")
                                        ? "text-[var(--color-blue-vibrant)]"
                                        : "text-[var(--color-grey-strong)]"
                                }
                            `}
                        >
                            {t("courses")}
                        </Link>

                        <Link
                            href="/careers"
                            onClick={closeMobileMenu}
                            className={`
                                border-b
                                border-[var(--color-grey-medium)]
                                px-3
                                py-3
                                text-sm
                                font-medium
                                ${
                                    isActive("/careers")
                                        ? "text-[var(--color-blue-vibrant)]"
                                        : "text-[var(--color-grey-strong)]"
                                }
                            `}
                        >
                            {t("careers")}
                        </Link>

                        <Link
                            href="/contact"
                            onClick={closeMobileMenu}
                            className={`
                                px-3
                                py-3
                                text-sm
                                font-medium
                                ${
                                    isActive("/contact")
                                        ? "text-[var(--color-blue-vibrant)]"
                                        : "text-[var(--color-grey-strong)]"
                                }
                            `}
                        >
                            {t("contact")}
                        </Link>
                    </div>

                    {/* Guest Mobile Actions */}
                    {isGuest && (
                        <div
                            className="
                                mt-4
                                flex
                                gap-3
                                border-t
                                border-[var(--color-grey-medium)]
                                pt-4
                            "
                        >
                            <Link
                                href="/login"
                                onClick={closeMobileMenu}
                                className="
                                    flex
                                    min-h-[44px]
                                    flex-1
                                    items-center
                                    justify-center
                                    rounded-[10px]
                                    border
                                    border-[var(--color-blue-vibrant)]
                                    px-3
                                    text-center
                                    text-sm
                                    font-medium
                                    text-[var(--color-blue-vibrant)]
                                "
                            >
                                {t("signIn")}
                            </Link>

                            <Link
                                href="/signup"
                                onClick={closeMobileMenu}
                                className="
                                    flex
                                    min-h-[44px]
                                    flex-1
                                    items-center
                                    justify-center
                                    rounded-[10px]
                                    bg-[var(--color-blue-vibrant)]
                                    px-3
                                    text-center
                                    text-sm
                                    font-medium
                                    text-white
                                "
                            >
                                {t("signUp")}
                            </Link>
                        </div>
                    )}

                    {/* Logged-in Mobile User */}
                    {isLoggedIn && (
                        <div
                            className="
                                mt-4
                                flex
                                items-center
                                gap-3
                                border-t
                                border-[var(--color-grey-medium)]
                                pt-4
                            "
                        >
                            <Image
                                src={userImage}
                                alt=""
                                width={36}
                                height={36}
                                className="rounded-full"
                            />

                            <span
                                className="
                                    text-sm
                                    font-medium
                                    text-[var(--color-grey-strong)]
                                "
                            >
                                {t("hi")}, {userName}
                            </span>

                            <Image
                                src={downIcon}
                                alt=""
                                width={16}
                                height={16}
                                className="ms-auto"
                            />
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
}