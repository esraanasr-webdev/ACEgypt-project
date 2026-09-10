import { GraduationCap } from "lucide-react";
import TeachingCourseCard from "./TeachingCourseCard";
import TeachingCTA from "./TeachingCTA";

const teachingCourses = [
    {
        image: "/images/home/teaching/tefl.jpg",
        imageAlt: "TEFL Certification",
        badge: "In Center" as const,
        title: "TEFL Certification",
        description: "Teaching English as a Foreign Language",
        hours: "120 Hours",
        level: "All Levels",
        feature: "Internationally Accredited Certification",
        currency: "EGP",
        amount: "1200",
    },
    {
        image: "/images/home/teaching/ielts.jpg",
        imageAlt: "IELTS Teacher Training",
        badge: "Online" as const,
        title: "IELTS Teacher Training",
        description: "Teach IELTS with confidence",
        hours: "80 Hours",
        level: "Intermediate Level",
        feature: "Practical Teaching Strategies",
        currency: "EGP",
        amount: "1200",
    },
    {
        image: "/images/home/teaching/young-learners.jpg",
        imageAlt: "Teaching Young Learners",
        badge: "In Center" as const,
        title: "Teaching Young Learners",
        description: "Engage and inspire young minds",
        hours: "60 Hours",
        level: "Advanced Level",
        feature: "Child-Centered Methodologies",
        currency: "EGP",
        amount: "1200",
    },
];

export default function TeachingCoursesSection() {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-[1200px]">
                {/* Label */}
                <div
                    className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-[var(--color-blue-vibrant)]
                        px-4
                        py-2
                        text-white
                    "
                >
                    <GraduationCap size={24} />

                    <span className="text-[14px] font-semibold">
                        TEACHING COURSES
                    </span>
                </div>

                {/* Heading */}
                <h2 className="mt-4 text-[38px] font-bold leading-[1.2] text-[var(--color-grey-strong)]">
                    Become a Certified Language{" "}
                    <span className="text-[var(--color-blue-vibrant)]">
                        Teacher
                    </span>
                <span className="text-[var(--color-red-dark)]">.</span>
                </h2>

                <p className="mt-4 max-w-[745px] text-[16px] leading-[1.7] text-[var(--color-grey-strong)] font-medium">
                    Build the skills, confidence, and credentials to inspire learners
                    worldwide. Our teacher training programs combine proven methodologies
                    with real classroom practice.
                </p>

                {/* Courses */}
                <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {teachingCourses.map((course) => (
                    <TeachingCourseCard
                        key={course.title}
                        {...course}
                    />
                ))}
                </div>

                <TeachingCTA />
            </div>
        </section>
    );
}