import {
    Download,
    FileArchive,
    FileText,
} from "lucide-react";

import Table from "../../ui/Table";

import type { ModuleFile } from "./types";

type ModuleFilesTableProps = {
    files: ModuleFile[];
};

export default function ModuleFilesTable({
    files,
    }: ModuleFilesTableProps) {
    return (
        <Table
        title="Module 1: Introduction to TEFL & Teaching Fundamentals"
        action={
            <button
            type="button"
            className="
                flex items-center gap-2
                text-[10px]
                font-medium
                text-[var(--color-blue-dark)]
                underline
            "
            >
            <Download size={13} strokeWidth={1.75} />

            Download Module
            </button>
        }
        data={files}
        columns={[
            {
            key: "name",
            label: "File Name",
            render: (row) => (
                <div className="flex items-center gap-3">
                <div
                    className="
                    flex h-[34px] w-[34px]
                    shrink-0 items-center justify-center
                    rounded-[6px]
                    bg-[var(--color-blue-light)]
                    text-[var(--color-blue-dark)]
                    "
                >
                    {row.type === "ZIP" ? (
                    <FileArchive
                        size={18}
                        strokeWidth={1.75}
                    />
                    ) : (
                    <FileText
                        size={18}
                        strokeWidth={1.75}
                    />
                    )}
                </div>

                <span className="text-[var(--color-grey-strong)]">
                    {row.name}
                </span>
                </div>
            ),
            },
            {
            key: "type",
            label: "Type",
            },
            {
            key: "size",
            label: "Size",
            },
            {
            key: "updated",
            label: "Updated",
            },
            {
            key: "downloads",
            label: "Downloads",
            },
            {
            key: "actions",
            label: "Actions",
            render: () => (
                <button
                type="button"
                aria-label="Download file"
                className="
                    flex h-[30px] w-[30px]
                    items-center justify-center
                    rounded-[6px]
                    bg-[var(--color-grey-light)]
                    text-[var(--color-grey-strong)]
                "
                >
                <Download
                    size={16}
                    strokeWidth={1.75}
                />
                </button>
            ),
            },
        ]}
        />
    );
}