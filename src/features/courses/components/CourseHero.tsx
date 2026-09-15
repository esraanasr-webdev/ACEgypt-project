import {
    AlertCircle,
    Clock3,
    MapPin,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import type { CourseDetails } from "../types";

type CourseHeroProps = {
    course: CourseDetails;
};

export default function CourseHero({
    course,
}: CourseHeroProps) {
    return (
        <section
            className="
                rounded-b-[36px]
                bg-[var(--color-blue-dark)]
                text-white
                sm:px-5
            "
        >
            <div className="mx-auto max-w-[1200px]  pb-20 pt-8">
                <Breadcrumbs
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Courses", href: "/courses" },
                        { label: course.title },
                    ]}
                />

                <div className="mt-16 max-w-[760px]">
                    <div className="flex flex-wrap gap-3">
                        <Badge color="orange" variant="light">
                            {course.deliveryMode}
                        </Badge>

                        <Badge color="blue" variant="light">
                            {course.category}
                        </Badge>

                        <Badge color="violet" variant="light">
                            {course.level}
                        </Badge>
                    </div>

                    <h1
                        className="
                            my-6
                            text-[48px]
                            font-bold
                            leading-[1.2]
                            sm:text-[42px]
                            lg:text-[48px]
                        "
                    >
                        {course.title}
                    </h1>

                    <div className="text-[16px] sm:text-[18px]">
                        <CourseMeta icon={<MapPin size={19} className="mb-4" />}>
                            {course.location}
                        </CourseMeta>

                        <CourseMeta icon={<Clock3 size={19} className="mb-4"/>}>
                            Next Intake: {course.nextIntake}
                        </CourseMeta>

                        <CourseMeta icon={<AlertCircle size={19} />}>
                            {course.seatsRemaining} Seats Remaining:
                            {" "}Enrollment closes{" "}
                            {course.enrollmentCloses}
                        </CourseMeta>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CourseMeta({
    icon,
    children,
}: {
    icon: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <div className="flex items-start gap-3">
            <span className="mt-[2px] shrink-0">
                {icon}
            </span>

            <span>{children}</span>
        </div>
    );
}

