import { notFound } from "next/navigation";

import CourseDetailsPage from "@/features/courses/CourseDetailsPage";
import { courseDetailsBySlug } from "@/features/courses/data";

type CoursePageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function CoursePage({
    params,
}: CoursePageProps) {
    const { slug } = await params;

    const course = courseDetailsBySlug[slug];

    if (!course) {
        notFound();
    }

    return <CourseDetailsPage course={course} />;
}