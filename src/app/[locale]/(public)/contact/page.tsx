import BecomeTeacherBanner from "@/components/become-teacher-banner/BecomeTeacherBanner";

import BranchMapCard from "@/features/contact/BranchMapCard";
import ContactForm from "@/features/contact/ContactForm";
import ContactInfoGrid from "@/features/contact/ContactInfoGrid";

export default function ContactPage() {
    return (
        <>
            {/* Contact information */}
            <section className="mx-auto max-w-[1200px] px-6 py-16">
                <div className="mx-auto max-w-[760px] text-center">
                <h2 className="text-[38px] font-bold leading-[1.4] text-[var(--color-grey-strong)]">
                    We're here to help. Reach out through any of our offices or fill out
                    the form below.
                </h2>
                </div>

                <div className="mt-16">
                <ContactInfoGrid />
                </div>
            </section>

            {/* Contact form + maps */}
            <section className="bg-[var(--color-blue-light)]">
                <div className="mx-auto max-w-[1200px] px-6 py-16">
                <h2 className="mb-8 text-[38px] font-bold text-[var(--color-grey-strong)]">
                    Send Us a Message
                </h2>

                <div
                    className="
                    grid
                    grid-cols-1
                    gap-8
                    lg:grid-cols-2
                    lg:items-start
                    "
                >
                    {/* Left side */}
                    <div>
                    <ContactForm />
                    </div>

                    {/* Right side */}
                    <div className="space-y-5">
                    <BranchMapCard
                        title="Cairo Branch"
                        mapSrc="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3453.8710195854787!2d31.20199527622279!3d30.040557974925594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847831c95f2c7%3A0x41cdb77d19759b37!2sAmerican%20Council%20Egypt!5e0!3m2!1sen!2seg!4v1788724072110!5m2!1sen!2seg"
                    />

                    <BranchMapCard
                        title="Alexandria Branch"
                        mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.870238711958!2d31.202061176222735!3d30.040580374925565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847831c95f2c7%3A0x41cdb77d19759b37!2sAmerican%20Council%20Egypt!5e0!3m2!1sen!2seg!4v1788723946801!5m2!1sen!2seg"
                    />
                    </div>
                </div>
                </div>
            </section>

            {/* Become a Teacher */}
            <section className="mx-auto max-w-[1200px]">
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