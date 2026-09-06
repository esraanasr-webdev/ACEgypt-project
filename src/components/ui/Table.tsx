import type { ReactNode } from "react";

type TableColumn<T> = {
    key: keyof T | string;
    label: string;
    render?: (row: T) => ReactNode;
};

type TableProps<T> = {
    title: string;
    columns: TableColumn<T>[];
    data: T[];
    action?: ReactNode;
};

export default function Table<T>({
    title,
    columns,
    data,
    action,
    }: TableProps<T>) {
    return (
        <div className="w-full rounded-[16px] bg-white p-4">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
            <h3 className="text-[14px] font-semibold text-[var(--color-grey-strong)]">
            {title}
            </h3>

            {action}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
            <thead>
                <tr className="bg-[var(--color-grey-light)]">
                {columns.map((column) => (
                    <th
                    key={String(column.key)}
                    className="
                        px-3 py-2
                        text-[10px]
                        font-semibold
                        uppercase
                        text-[var(--color-grey-strong)]
                    "
                    >
                    {column.label}
                    </th>
                ))}
                </tr>
            </thead>

            <tbody>
                {data.map((row, rowIndex) => (
                <tr
                    key={rowIndex}
                    className="
                    border-b
                    border-dashed
                    border-[var(--color-grey-medium)]
                    last:border-b-0
                    "
                >
                    {columns.map((column) => (
                    <td
                        key={String(column.key)}
                        className="
                        px-3 py-3
                        text-[11px]
                        text-[var(--color-grey-dark)]
                        "
                    >
                        {column.render
                        ? column.render(row)
                        : String(
                            row[column.key as keyof T] ?? ""
                            )}
                    </td>
                    ))}
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    );
}