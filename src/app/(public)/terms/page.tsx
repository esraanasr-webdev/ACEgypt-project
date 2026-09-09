import BecomeTeacherBanner from "../../../components/become-teacher-banner/BecomeTeacherBanner";
import PageHeader from "../../../components/page-header/PageHeader";
import TermsContent from "../../../components/terms/TermsContent";

export default function TermsPage() {
    return (
        <>
            <PageHeader
                title="Terms & Conditions"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Terms & Conditions" },
                ]}
            />

            {/* Terms */}
            <main className="bg-white">
                <TermsContent />

                <div className="mx-auto max-w-[1200px] px-6 pb-16">
                    <BecomeTeacherBanner
                        title="Become a Teacher"
                        description="Join hundreds of learners who enjoy practicing English in a fun and stress free environment. Be part of a community where studying is fun and colleagues are family."
                        buttonText="Explore Teaching Courses"
                        buttonHref="/courses"
                    />
                </div>
            </main>
        </>
    );
}