import type { Course, FilterOption } from "./types";

export const courses: Course[] = [
    {
        id: 1,
        title: "How to teach IELTS",
        description:
        "This course is designed for ELT professionals who want to master IELTS teaching.",
        image: "/images/courses/ielts-coach.jpg",
        price: "EGP 1200",
        category: "General English",
        deliveryMode: "Online",
    },
    {
        id: 2,
        title: "TKT (Teaching Knowledge Test)",
        description:
        "TKT is a series of modular teaching qualifications which test your teaching knowledge.",
        image: "/images/courses/tkt.jpg",
        price: "EGP 1350",
        category: "ESP",
        deliveryMode: "In-person",
    },
    {
        id: 3,
        title: "ESL Demo Mastery Course",
        description:
        "The ESL Demo Mastery Course at American Council Egypt is designed for teachers.",
        image: "/images/courses/esl.jpg",
        price: "FREE",
        category: "Corporate Training",
        deliveryMode: "Hybrid",
    },
    {
        id: 4,
        title: "How to teach IELTS",
        description:
        "This course is designed for ELT professionals who want to master IELTS teaching.",
        image: "/images/courses/classroom.jpg",
        price: "EGP 1200",
        category: "General English",
        deliveryMode: "Online",
    },
    {
        id: 5,
        title: "Kids Summer Program: Ages 4 – 15",
        description:
        "This winter, ignite your child’s potential with our engaging English program.",
        image: "/images/courses/kids.jpg",
        price: "EGP 1350",
        category: "ESP",
        deliveryMode: "In-person",
    },
    {
        id: 6,
        title: "Youth Program: Ages 12 – 15",
        description:
        "Give your son or daughter the opportunity to improve their English.",
        image: "/images/courses/youth.jpg",
        price: "FREE",
        category: "Corporate Training",
        deliveryMode: "Hybrid",
    },
];

export const categoryFilters: FilterOption[] = [
    { label: "General English", value: "general", count: 55 },
    { label: "ESP", value: "esp", count: 2 },
    { label: "Corporate Training", value: "corporate", count: 1 },
    { label: "German", value: "german", count: 4 },
    { label: "Kids & Young Learners", value: "kids", count: 6 },
    { label: "Certificate Prep", value: "certificate", count: 4 },
    { label: "Teaching Programs", value: "teaching", count: 2 },
];

export const levelFilters: FilterOption[] = [
    { label: "Beginner", value: "beginner", count: 2 },
    { label: "Intermediate", value: "intermediate", count: 4 },
    { label: "Advanced", value: "advanced", count: 5 },
];

export const deliveryFilters: FilterOption[] = [
    { label: "Online", value: "online", count: 8 },
    { label: "In-person", value: "in-person", count: 14 },
    { label: "Hybrid", value: "hybrid", count: 9 },
];