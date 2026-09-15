import type { ReactNode } from "react";

import DashboardSidebar from "./DashboardSidebar";

type DashboardShellProps = {
    children: ReactNode;
};

export default function DashboardShell({
    children,
}: DashboardShellProps) {
    return (
        <div className="flex min-h-screen bg-white">
            <DashboardSidebar />

            <main className="min-w-0 flex-1 p-3 pl-0">
                <div
                    className="
                        min-h-[calc(100vh-24px)]
                        rounded-[36px]
                        bg-[var(--color-blue-light)]
                        px-[36px]
                        py-[32px]
                    "
                >
                    {children}
                </div>
            </main>
        </div>
    );
}