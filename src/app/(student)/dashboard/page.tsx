import AssignmentsAndQuizzes from "@/features/student-dashboard/components/AssignmentsAndQuizzes";
import DashboardHeader from "@/features/student-dashboard/components/DashboardHeader";
import DashboardShell from "@/features/student-dashboard/components/DashboardShell";
import DashboardStats from "@/features/student-dashboard/components/DashboardStats";
import EnrolledCourses from "@/features/student-dashboard/components/EnrolledCourses";
import LearningOverview from "@/features/student-dashboard/components/LearningOverview";
import QuickActions from "@/features/student-dashboard/components/QuickActions";
import UpcomingSessions from "@/features/student-dashboard/components/UpcomingSessions";
import WhatsNext from "@/features/student-dashboard/components/WhatsNext";

export default function StudentDashboardPage() {
    return (
        <DashboardShell>
            <div className="min-h-[900px]">
                <DashboardHeader />

                <div className="mt-[44px]">
                    <DashboardStats />
                </div>

                <div
                    className="
                        mt-[28px]
                        grid
                        grid-cols-1
                        gap-[24px]
                        xl:grid-cols-[minmax(0,1fr)_340px]
                    "
                >
                    <EnrolledCourses />

                    <WhatsNext />
                </div>

                <div
                    className="
                        mt-[24px]
                        grid
                        w-full
                        min-w-0
                        grid-cols-1
                        gap-[24px]
                        2xl:grid-cols-[minmax(0,1fr)_minmax(0,2.0625fr)]
                    "
                >
                    <LearningOverview />
                    <AssignmentsAndQuizzes />
                </div>

                <div
                    className="
                        mt-[24px]
                        grid
                        grid-cols-1
                        gap-[24px]
                        xl:grid-cols-[minmax(0,2.0625fr)_minmax(0,1fr)]
                    "
                >
                    <UpcomingSessions />
                    <QuickActions />
                </div>

            </div>
        </DashboardShell>
    );
}