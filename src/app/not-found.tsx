import Image from "next/image";

import Footer from "../components/footer/Footer";
import MainNavigation from "../components/main-navigation/MainNavigation";
import PageHeader from "../components/page-header/PageHeader";
export default function NotFound() {
    return (
        <>
            <section className="bg-[var(--color-blue-dark)] py-8">
                <div className="mx-auto max-w-[1200px]">
                        <MainNavigation />
                </div>
            </section>

            <PageHeader
                title="404 Page Not Found"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Error Page" },
                ]}
            />

            <main className="bg-white">
                <section className="mx-auto flex min-h-[520px] max-w-[1200px] items-center justify-center px-7 py-50">
                    <Image
                        src="/images/404-error.png"
                        alt="404 page not found"
                        width={620}
                        height={400}
                        priority
                        className="h-auto w-full max-w-[620px] object-contain"
                    />
                </section>
            </main>
            <Footer  />
        </>
    );
}