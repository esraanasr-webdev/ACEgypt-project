import Image from "next/image";
import Logo from "../logo/Logo";
import Button from "../ui/Button";
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
const languageIcon = "/images/navigation/language.png";

export default function MainNavigation({
    loggedIn = false,
    dashboard = false,
    className = "",
    userName = "Ahmed",
    userImage = "/images/navigation/profile.png",
    }: MainNavigationProps) {
    const isDashboard = loggedIn && dashboard;
    const isLoggedIn = loggedIn && !dashboard;
    const isGuest = !loggedIn && !dashboard;

    return (
        <nav
        className={`relative flex w-full items-center ${
            isDashboard ? "justify-end" : "justify-between"
        } ${className}`}
        >
        {/* Logo */}
        {!isDashboard && (
            <Logo
            type="dark"
            className="h-[88px] w-[180px]"
            />
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
                label="Home"
                active
                />

                <MainNavigationItem
                label="Courses"
                />

                <MainNavigationItem
                    label="About"
                    hasDropdown
                />

                <MainNavigationItem label="Events" />
                <MainNavigationItem label="Blog" />
                <MainNavigationItem label="Contact" />
            </div>
            )}

            {/* Actions */}
            <div className="flex items-center gap-4">
                <Image
                    src={languageIcon}
                    alt="Switch Language"
                    width={30}
                    height={30}
                />
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
                <>
                <div className="flex items-center">
                    <button
                    type="button"
                    className="rounded-xl px-4 py-3 text-sm font-medium leading-[1.25] text-white"
                    >
                    Login
                    </button>

                    <Button variant="secondary" size="small" >
                        Sign Up
                    </Button>
                </div>
                </>
            )}

            {/* Logged in */}
            {isLoggedIn && (
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
                        Hi, Ahmed
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