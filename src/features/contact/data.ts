import {
    Clock3,
    MapPin,
    Phone,
    Smartphone,
} from "lucide-react";

export const contactCards = [
    {
        title: "Cairo Branch",
        description: "Villa 25 Kambiz street, Dokki, Cairo, Egypt",
        icon: MapPin,
    },
    {
        title: "Roushdy Branch",
        description:
        "Villa 8 Ibrahim Helmy Street, Roushdy, Alexandria, Egypt.",
        icon: MapPin,
    },
    {
        title: "Stanly Branch",
        description:
        "29 Abdelhamid Abady st, Bolkly, Alexandria, Egypt.",
        icon: MapPin,
    },
    {
        title: "Contact info Cairo Branch",
        icon: Phone,
        rows: [
        {
            icon: Smartphone,
            text: "01559608239",
        },
        {
            icon: Phone,
            text: "02 37485596",
        },
        ],
    },
    {
        title: "Contact info",
        icon: Phone,
        rows: [
        {
            icon: Smartphone,
            text: "01120866635 - 01080568299",
        },
        {
            icon: Phone,
            text: "03 5411979 - 02 37485596",
        },
        ],
    },
    {
        title: "Working Hours",
        icon: Clock3,
        workingHours: {
        days: "Saturday : Thursday",
        time: "10:00 - 20:00",
        },
    },
];