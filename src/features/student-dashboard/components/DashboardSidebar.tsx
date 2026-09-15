"use client";

import {
    CalendarClock,
    CircleUserRound,
    LayoutDashboard,
    Medal,
    Settings,
    ShoppingCart,
} from "lucide-react";
import { usePathname } from "next/navigation";

import Logo from "@/components/logo/Logo";

import DashboardHelpCard from "./DashboardHelpCard";
import DashboardSidebarItem from "./DashboardSidebarItem";

const navigation = [
    {
        label: "My Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        label: "Schedule",
        href: "/dashboard/schedule",
        icon: CalendarClock,
    },
    {
        label: "My Certificates",
        href: "/dashboard/certificates",
        icon: Medal,
    },
    {
        label: "Orders",
        href: "/dashboard/orders",
        icon: ShoppingCart,
    },
    {
        label: "Profile",
        href: "/dashboard/profile",
        icon: CircleUserRound,
    },
    {
        label: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    },
];

export default function DashboardSidebar() {
    const pathname = usePathname();

    return (
        <aside
            className="
                hidden
                w-[306px]
                shrink-0
                bg-white
                lg:flex
                lg:min-h-screen
                lg:flex-col
                px-[30px]
                py-[38px]
            "
        >
            {/* Logo */}
            <div className="px-3">
                <Logo type="dark" />
            </div>

            {/* Navigation */}
            <nav className="mt-20 flex flex-col gap-2">
                {navigation.map((item) => {
                    const active =
                        item.href === "/dashboard"
                            ? pathname === "/dashboard"
                            : pathname.startsWith(item.href);

                    return (
                        <DashboardSidebarItem
                            key={item.href}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                            active={active}
                        />
                    );
                })}
            </nav>

            {/* Help Card */}
            <div className="mt-auto pt-12">
                <DashboardHelpCard />
            </div>
        </aside>
    );
}