import type { CourseDetails } from "./types";

import CourseAudience from "./components/CourseAudience";
import CourseCurriculum from "./components/CourseCurriculum";
import CourseEnrollmentCard from "./components/CourseEnrollmentCard";
import CourseHero from "./components/CourseHero";
import CourseLearningOutcomes from "./components/CourseLearningOutcomes";
import CourseOverview from "./components/CourseOverview";
import CoursePrerequisites from "./components/CoursePrerequisites";
import CourseRegistration from "./components/CourseRegistration";
import CourseSchedule from "./components/CourseSchedule";
import CourseTabs from "./components/CourseTabs";

type CourseDetailsPageProps = {
    course: CourseDetails;
};

export default function CourseDetailsPage({
    course,
}: CourseDetailsPageProps) {
    return (
        <main className="relative">
            {/* Hero */}
            <CourseHero course={course} />

            {/* Mobile Enrollment Card */}
            <div className="mx-auto max-w-[1200px] px-6 lg:hidden">
                <CourseEnrollmentCard course={course} />
            </div>

            {/* Floating Enrollment Sidebar */}
            <div
                className="
                    relative
                    z-30
                    mx-auto
                    hidden
                    max-w-[1200px]
                    px-6
                    lg:block
                "
            >
                <aside
                    className="
                        absolute
                        right-6
                        top-[-305px]
                        w-[360px]
                    "
                >
                    <CourseEnrollmentCard course={course} />
                </aside>
            </div>

            {/* Tabs */}
            <CourseTabs />

            {/* Overview */}
            <div
                className="
                    mx-auto
                    max-w-[1200px]
                    sm:px-6
                    py-12
                    lg:grid
                    lg:grid-cols-[minmax(0,1fr)_360px]
                    lg:gap-16
                "
            >
                <div className="max-w-[700px]">
                    <CourseOverview course={course} />
                </div>

                {/* Reserved space for floating enrollment card */}
                <div aria-hidden="true" />
            </div>

            {/* What You'll Learn */}
            <CourseLearningOutcomes course={course} />

            {/* Who The Course is For */}
            <CourseAudience course={course} />

            {/* Course Curriculum */}
            <CourseCurriculum course={course} />

            {/* Prerequisites + Schedule */}
            <div className="mx-auto max-w-[1200px] px-6">
                <div className="max-w-[792px]">
                    <CoursePrerequisites course={course} />

                    {/* Gradient dashed divider */}
                    <div
                        className="
                            m-10
                            h-[1px]
                            w-full
                            bg-[repeating-linear-gradient(to_right,#D9D9D9_0px,#D9D9D9_8px,transparent_5px,transparent_12px)]
                            [mask-image:linear-gradient(to_right,transparent,black_40%,black_40%,transparent)]
                        "
                    />

                    <CourseSchedule course={course} />
                </div>
            </div>

            {/* Course Registration */}
            <CourseRegistration course={course} />
        </main>
    );
}