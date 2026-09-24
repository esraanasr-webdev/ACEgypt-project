import { Suspense } from "react";

import BecomeTeacherBanner from "@/components/become-teacher-banner/BecomeTeacherBanner";
import CoursesContent from "@/features/courses/CoursesContent";

export default function CoursesPage() {
    return (
        <>
            <Suspense fallback={<CoursesLoading />}>
                <CoursesContent />
            </Suspense>

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

function CoursesLoading() {
    return (
        <section className="mx-auto max-w-[1200px] px-6 py-12">
            <div className="animate-pulse">
                {/* Toolbar */}
                <div className="mb-8 h-[48px] w-full rounded-[12px] bg-gray-200" />

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
                    {/* Filters */}
                    <div className="h-[420px] rounded-[16px] bg-gray-200" />

                    {/* Courses */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div
                                key={index}
                                className="h-[380px] rounded-[16px] bg-gray-200"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}