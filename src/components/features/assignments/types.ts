export type AssignmentStatus =
    | "graded"
    | "not-started";

export type Assignment = {
    assignment: string;
    subtitle: string;
    dueDate: string;
    submitted: string;
    score: string;
    grade: string;
    status: AssignmentStatus;
};