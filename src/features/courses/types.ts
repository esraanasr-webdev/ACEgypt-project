export type DeliveryMode =
    | "Online"
    | "In-person"
    | "Hybrid";

export type Course = {
    id: number;
    title: string;
    description: string;
    image: string;
    currency?: string;
    amount: string;
    category: string;
    deliveryMode: "Online" | "In-person" | "Hybrid";
};

export type FilterOption = {
    label: string;
    value: string;
    count: number;
};