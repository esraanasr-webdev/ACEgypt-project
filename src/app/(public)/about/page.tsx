import BecomeTeacherBanner from "../../../components/become-teacher-banner/BecomeTeacherBanner";
import PageHeader from "../../../components/page-header/PageHeader";

import AboutIntro from "../../../features/about/AboutIntro";
import AboutJourney from "../../../features/about/AboutJourney";
import AboutPartners from "../../../features/about/AboutPartners";
import AboutSpecial from "../../../features/about/AboutSpecial";
import AboutStats from "../../../features/about/AboutStats";

export default function AboutPage() {
    return (
        <>
        <PageHeader
            title="About Us"
            breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About Us" },
            ]}
        />

        <AboutIntro />

        <AboutStats />

        <AboutSpecial />

        <AboutJourney />

        <AboutPartners />

        <section className="mx-auto max-w-[1200px]">
            <BecomeTeacherBanner
            title="Become a Teacher"
            description="Join hundreds of learners who enjoy practicing English in a fun and stress free environment. Be part of a community where studying is fun and colleagues are family."
            buttonText="Explore Teaching Courses"
            buttonHref="/courses"
            />
        </section>
        </>
    );
}