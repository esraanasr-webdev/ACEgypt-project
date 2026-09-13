import Image from "next/image";

type OrderDetailsProps = {
    paymentMethod: string;
    status: string;
    amount?: string;
    orderNumber?: string;
    courseTitle?: string;
    courseImage?: string;
};

export default function OrderDetails({
    paymentMethod,
    status,
    amount = "EGP 4,737.00",
    orderNumber = "LH-2025-00847",
    courseTitle = "TEFL Certification Course",
    courseImage = "/images/courses/tefl-course.jpg",
}: OrderDetailsProps) {
    return (
        <aside className="rounded-[18px] bg-white p-6">
            <div className="relative h-[230px] overflow-hidden rounded-[14px]">
                <Image
                    src={courseImage}
                    alt={courseTitle}
                    fill
                    className="object-cover"
                />
            </div>

            <h2 className="mt-5 text-[20px] font-semibold text-[var(--color-grey-strong)]">
                {courseTitle}
            </h2>

            <div className="my-6 border-t border-dashed border-[var(--color-grey-medium)]" />

            <div className="space-y-5 text-[14px]">
                <DetailRow
                    label="Amount to Pay"
                    value={amount}
                />

                <DetailRow
                    label="Order #"
                    value={orderNumber}
                />

                <DetailRow
                    label="Payment Method"
                    value={paymentMethod}
                />

                <DetailRow
                    label="Status"
                    value={status}
                />
            </div>
        </aside>
    );
}

function DetailRow({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="flex justify-between gap-4">
            <span className="text-[var(--color-grey-strong)]">
                {label}
            </span>

            <strong className="text-right text-[var(--color-grey-strong)]">
                {value}
            </strong>
        </div>
    );
}