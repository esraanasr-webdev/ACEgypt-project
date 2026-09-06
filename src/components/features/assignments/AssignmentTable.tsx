import Badge from "../../../components/ui/Badge";
import Table from "../../../components/ui/Table";

import type { Assignment } from "./types";

type AssignmentTableProps = {
    assignments: Assignment[];
    average?: number;
};

export default function AssignmentTable({
    assignments,
    average,
    }: AssignmentTableProps) {
    return (
        <Table
        title="Assignments (40% of final grade)"
        action={
            average !== undefined ? (
            <span className="text-[10px] text-[var(--color-blue-dark)]">
                Average: {average}%
            </span>
            ) : null
        }
        data={assignments}
        columns={[
            {
            key: "assignment",
            label: "Assignment",
            render: (row) => (
                <div>
                <p className="font-medium text-[var(--color-grey-strong)]">
                    {row.assignment}
                </p>

                <p className="mt-1 text-[9px] text-[var(--color-grey-dark)]">
                    {row.subtitle}
                </p>
                </div>
            ),
            },
            {
            key: "dueDate",
            label: "Due Date",
            },
            {
            key: "submitted",
            label: "Submitted",
            },
            {
            key: "score",
            label: "Score",
            },
            {
            key: "grade",
            label: "Grade",
            },
            {
            key: "status",
            label: "Status",
            render: (row) =>
                row.status === "graded" ? (
                <Badge color="green">
                    Graded
                </Badge>
                ) : (
                <Badge
                    color="blue"
                    variant="light"
                >
                    Not Started
                </Badge>
                ),
            },
        ]}
        />
    );
}