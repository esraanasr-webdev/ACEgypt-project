import BecomeTeacherBanner from "@/components/become-teacher-banner/BecomeTeacherBanner";

import CoursesContent from "@/features/courses/CoursesContent";

export default function CoursesPage() {
    return (
        <>
        <CoursesContent />

        <section className="mx-auto max-w-[1200px] px-6 pb-16 pt-8">
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