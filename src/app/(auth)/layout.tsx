import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen bg-white p-3">
            <div className="grid min-h-[calc(100vh-24px)] grid-cols-1 lg:grid-cols-[50%_50%]">

                {/* Left Side */}
                <section className="relative flex items-center justify-center px-6 py-12 sm:px-10 lg:px-16">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="absolute left-0 top-0"
                    >
                        <Image
                            src="/images/americancouncilLogo-dark.png"
                            alt="American Council Egypt"
                            width={110}
                            height={65}
                            priority
                            className="h-auto w-[90px] lg:w-[110px]"
                        />
                    </Link>

                    {/* Page Content */}
                    <div className="w-full max-w-[486px]">
                        {children}
                    </div>
                </section>

                {/* Right Side */}
                <section className="relative hidden overflow-hidden rounded-[28px] lg:block">
                    <Image
                        src="/images/auth/auth-student.png"
                        alt="ACE student"
                        fill
                        priority
                        className="object-cover"
                    />

                    {/* Copyright */}
                    <p className="absolute bottom-5 left-5 z-10 text-[10px] text-white">
                        © 2026 American Council Egypt. All rights reserved.
                    </p>
                </section>

            </div>
        </main>
    );
}