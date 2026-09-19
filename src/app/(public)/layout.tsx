import DynamicPageHeader from "@/components/page-header/DynamicPageHeader";
import Footer from "../../components/footer/Footer";
import MainNavigation from "../../components/main-navigation/MainNavigation";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="
                bg-[var(--color-blue-dark)]
                py-8
                m-2
                rounded-[36px]
                sm:px-[14px]"
            >
                <div className="mx-auto max-w-[1200px]">
                        <MainNavigation />
                        <DynamicPageHeader />
                </div>
            </div>


            {children}

            <Footer />
        </>
    );
}