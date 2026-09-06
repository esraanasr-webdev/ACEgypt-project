import BecomeTeacherBanner from "../../../components/become-teacher-banner/BecomeTeacherBanner";
import CareerApplicationForm from "../../../components/features/careers/CareerApplicationForm";
import PageHeader from "../../../components/page-header/PageHeader";

export default function CareersPage() {
    return (
        <>
            <PageHeader
                title="Careers"
                breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Careers" },
                ]}
            />

            <section className="mx-auto max-w-[1200px] px-6 py-12">
                <div className="text-center">
                <h2 className="text-[48px] font-semibold text-[var(--color-grey-strong)]">
                    Join Our Team at ACE
                </h2>

                <p
                    className="
                    mx-auto
                    mt-2
                    max-w-[867px]
                    text-[18px]
                    leading-[1.5]
                    text-[var(--color-grey-dark)]
                    "
                >
                    We're looking for talented people to help us build something great.
                    Fill out the form below and we'll be in touch.
                </p>
                </div>
                
                <div className="mt-[80px] flex justify-center mb-[120px]">
                    <CareerApplicationForm />
                </div>
                
                <BecomeTeacherBanner
                title="Become a Teacher"
                description="Join hundreds of learners who enjoy practicing English in a fun and stress-free environment."
                buttonText="Explore Teaching Courses"
                buttonHref="/courses"
                />
            </section>
        </>
    );
}