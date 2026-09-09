export type DeliveryMode =
    | "Online"
    | "In-person"
    | "Hybrid";

export type Course = {
    id: number;
    title: string;
    description: string;
    image: string;
    price: string;
    category: string;
    deliveryMode: DeliveryMode;
};

export type FilterOption = {
    label: string;
    value: string;
    count: number;
};