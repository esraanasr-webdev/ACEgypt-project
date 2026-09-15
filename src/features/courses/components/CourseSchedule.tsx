import {
    AlertCircle,
    Clock3,
} from "lucide-react";

import type { CourseDetails } from "../types";

type CourseScheduleProps = {
    course: CourseDetails;
};

export default function CourseSchedule({
    course,
}: CourseScheduleProps) {
    return (
        <section id="schedule">
            <h2
                className="
                    text-[26px]
                    font-bold
                    leading-[1.5]
                    text-[var(--color-grey-strong)]
                "
            >
                Schedule
            </h2>

            <div className="mt-6 space-y-4">
                {/* Next Intake */}
                <div className="flex items-start gap-2">
                    <Clock3
                        size={19}
                        strokeWidth={2}
                        className="
                            mt-[2px]
                            shrink-0
                            text-[var(--color-blue-vibrant)]
                        "
                    />

                    <div>
                        <p
                            className="
                                text-[20px]
                                font-semibold
                                leading-[1.5]
                                text-[var(--color-blue-dark)]
                            "
                        >
                            Next Intake: {course.nextIntake}
                        </p>

                        <p
                            className="
                                mt-1
                                text-[14px]
                                leading-[1.5]
                                text-[var(--color-grey-strong)]
                            "
                        >
                            {course.schedule.days},{" "}
                            <span className="font-semibold">
                                {course.schedule.time}
                            </span>{" "}
                            (Cairo Time)
                        </p>
                    </div>
                </div>

                {/* Seats Remaining */}
                <div className="flex items-start gap-2">
                    <AlertCircle
                        size={19}
                        strokeWidth={2}
                        className="
                            mt-[2px]
                            shrink-0
                            text-[var(--color-red-dark)]
                        "
                    />

                    <div>
                        <p
                            className="
                                text-[16px]
                                font-semibold
                                leading-[1.5]
                                text-[var(--color-red-dark)]
                            "
                        >
                            {course.seatsRemaining} Seats Remaining
                        </p>

                        <p
                            className="
                                mt-1
                                text-[14px]
                                leading-[1.5]
                                text-[var(--color-grey-strong)]
                            "
                        >
                            Enrollment closes{" "}
                            {course.enrollmentCloses}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}