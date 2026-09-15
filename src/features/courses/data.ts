import type { Course, CourseDetails, FilterOption, } from "./types";

export const courses: Course[] = [
    {
        id: 1,
        title: "How to teach IELTS",
        description:
        "This course is designed for ELT professionals who want to master IELTS teaching.",
        image: "/images/courses/ielts-coach.jpg",
        currency: "EGP",
        amount: "1200",
        category: "General English",
        deliveryMode: "Online",
    },
    {
        id: 2,
        title: "TKT (Teaching Knowledge Test)",
        description:
        "TKT is a series of modular teaching qualifications which test your teaching knowledge.",
        image: "/images/courses/tkt.jpg",
        currency: "EGP",
        amount: "1200",
        category: "ESP",
        deliveryMode: "In-person",
    },
    {
        id: 3,
        title: "ESL Demo Mastery Course",
        description:
        "The ESL Demo Mastery Course at American Council Egypt is designed for teachers.",
        image: "/images/courses/esl.jpg",
        amount: "FREE",
        category: "Corporate Training",
        deliveryMode: "Hybrid",
    },
    {
        id: 4,
        title: "How to teach IELTS",
        description:
        "This course is designed for ELT professionals who want to master IELTS teaching.",
        image: "/images/courses/classroom.jpg",
        currency: "EGP",
        amount: "1200",
        category: "General English",
        deliveryMode: "Online",
    },
    {
        id: 5,
        title: "Kids Summer Program: Ages 4 – 15",
        description:
        "This winter, ignite your child’s potential with our engaging English program.",
        image: "/images/courses/kids.jpg",
        currency: "EGP",
        amount: "1200",
        category: "ESP",
        deliveryMode: "In-person",
    },
    {
        id: 6,
        title: "Youth Program: Ages 12 – 15",
        description:
        "Give your son or daughter the opportunity to improve their English.",
        image: "/images/courses/youth.jpg",
        amount: "FREE",
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

export const courseDetailsBySlug: Record<
    string,
    CourseDetails
> = {
    "tefl-certification": {
        id: 7,
        slug: "tefl-certification",

        title: "TEFL Certification Course",

        description:
            "An internationally accredited TEFL program designed to prepare learners for professional English teaching.",

        image: "/images/courses/tefl-course.jpg",

        category: "General English",
        level: "Advanced",
        deliveryMode: "Offline",

        location:
            "Villa 25 Kambiz street, Dokki, Cairo, Egypt (Center Location)",

        nextIntake: "August 15, 2026",
        seatsRemaining: 6,
        enrollmentCloses: "August 10",

        currency: "EGP",
        currentPrice: 3500,
        originalPrice: 4500,
        discount: 25,
        offerEndsInDays: 3,

        duration: "12 Weeks",

        overview: {
            eyebrow: "Your Path to Global Teaching",
            title:
                "Internationally Accredited TEFL Certification",
            description:
                "Build the skills, confidence, and practical teaching knowledge you need to teach English professionally.",
        },

        learningOutcomes: [
            {
                title: "Teaching Methodologies",
                description:
                    "Learn effective English teaching techniques.",
            },
            {
                title: "Classroom Management",
                description:
                    "Manage classes with confidence and engagement.",
            },
            {
                title: "Lesson Planning",
                description:
                    "Create clear and interactive lesson plans.",
            },
            {
                title: "Speaking & Communication Skills",
                description:
                    "Help students improve fluency and confidence.",
            },
            {
                title: "International Teaching Standards",
                description:
                    "Understand global TEFL teaching practices.",
            },
        ],

        audience: [
            {
                title: "Aspiring Educators",
                description:
                    "Aspiring English teachers who want to start a professional teaching career.",
            },
            {
                title: "Students & Graduates",
                description:
                    "University students and graduates seeking international job opportunities.",
            },
        ],

        prerequisites: [
            "Minimum intermediate level of English proficiency.",
            "Basic communication and presentation skills.",
            "Passion for teaching and working with learners.",
            "Commitment to attend sessions and complete course activities.",
            "No prior teaching experience required.",
        ],

        schedule: {
            days: "Monday & Wednesday",
            time: "6:00 PM - 8:00 PM",
        },

        modules: [
            {
                id: 1,
                title:
                    "Module 1: Introduction to TEFL & Teaching Fundamentals",
                summary:
                    "3 Lessons • 2h 30m • Completed",

                lessons: [
                    {
                        id: 1,
                        title:
                            "What is TEFL Certificate?",
                        type: "Video",
                        meta: "15 Min",
                        locked: true,
                    },
                    {
                        id: 2,
                        title:
                            "What you need to know",
                        type: "Video",
                        meta: "20 Min",
                        locked: true,
                    },
                    {
                        id: 3,
                        title:
                            "Reading: TEFL & Teaching Course Overview",
                        type: "Reading",
                        meta: "10 Min",
                        locked: true,
                    },
                    {
                        id: 4,
                        title:
                            "Quiz 1: Module 1 Assessment",
                        type: "Quiz",
                        meta: "15 Questions",
                        locked: true,
                    },
                ],
            },

            {
                id: 2,
                title:
                    "Module 2: Teaching Methodologies",
                summary:
                    "8 Lessons • 3h 15m • In Progress",
            },

            {
                id: 3,
                title:
                    "Module 3: Lesson Planning & Classroom Management",
                summary:
                    "7 Lessons • 2h 45m",
            },

            {
                id: 4,
                title:
                    "Module 4: Teaching Practice & Assessment",
                summary:
                    "6 Lessons • 2h 20m",
            },
            {
                id: 5,
                title: "Module 5: Professional Development & Career Opportunities",
                summary: "4 Lessons • 1h 50m",
            },
        ],
    },
};