import {
    CalendarDays,
    CircleUserRound,
    Gauge,
    ScrollText,
    Settings,
    ShoppingCart,
} from "lucide-react";

import SideMenuItem from "./SideMenuItem";

export default function SideMenu() {
    return (
        <aside className="w-[193px]">
        <nav className="flex flex-col gap-1">
            <SideMenuItem
                label="My Dashboard"
                icon={Gauge}
                active
            />

            <SideMenuItem
                label="Schedule"
                icon={CalendarDays}
            />

            <SideMenuItem
                label="My Certificates"
                icon={ScrollText}
            />

            <SideMenuItem
                label="Orders"
                icon={ShoppingCart}
            />

            <SideMenuItem
                label="Profile"
                icon={CircleUserRound}
            />

            <SideMenuItem
                label="Settings"
                icon={Settings}
            />
        </nav>
        </aside>
    );
}