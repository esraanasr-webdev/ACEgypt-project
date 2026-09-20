"use client"

import {
    Link,
    usePathname,
    useRouter,
} from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
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

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname === href || pathname.startsWith(`${href}/`);
    };

    return (
        <nav
            className={`relative flex w-full items-center ${
                isDashboard ? "justify-end" : "justify-between"
            } ${className}`}
        >
        {/* Logo */}
        {!isDashboard && (
            <Link href="/">
                <Logo
                    type="light"
                    className="h-[88px] w-[180px]"
                />
            </Link>

        )}

        {/* Navigation */}
        <div
            className={`flex items-center ${
            isDashboard ? "gap-4" : "gap-10"
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
        </nav>
    );
}