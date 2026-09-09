import Footer from "../../components/footer/Footer";
import MainNavigation from "../../components/main-navigation/MainNavigation";

export default function PublicLayout({
    children,
    }: {
    children: React.ReactNode;
    }) {
    return (
        <>
        <div className="bg-[var(--color-blue-dark)] py-8">
            <div className="mx-auto max-w-[1200px]">
                <MainNavigation />
            </div>
        </div>

        {children}

        <Footer />
        </>
    );
}