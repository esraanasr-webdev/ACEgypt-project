import type { ReactNode } from "react";

type StudentLayoutProps = {
    children: ReactNode;
};

export default function StudentLayout({
    children,
}: StudentLayoutProps) {
    return (
        <div className="min-h-screen bg-white">
            {children}
        </div>
    );
}