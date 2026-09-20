import BecomeTeacherBanner from "@/components/become-teacher-banner/BecomeTeacherBanner";
import PageHeader from "@/components/page-header/PageHeader";
import PrivacyContent from "@/components/privacy/PrivacyContent";

export default function PrivacyPage() {
    return (
        <>
            <PageHeader
                title="Privacy Policy"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Privacy Policy" },
                ]}
            />

            {/* Terms */}
            <main className="bg-white">
                <PrivacyContent />

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