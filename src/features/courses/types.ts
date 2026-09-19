export type DeliveryMode =
    | "Online"
    | "In-person"
    | "Hybrid"
    | "Offline";

export type Course = {
    id: number;
    slug: string;
    title: string;
    description: string;
    image: string;
    currency?: string;
    amount: string;
    category: string;
    deliveryMode: DeliveryMode;
};

export type FilterOption = {
    label: string;
    value: string;
    count: number;
};

/* Course Details */

export type CourseLesson = {
    id: number;
    title: string;
    type: "Video" | "Reading" | "Quiz";
    meta: string;
    locked: boolean;
};

export type CourseModule = {
    id: number;
    title: string;
    summary: string;
    lessons?: CourseLesson[];
};

export type CourseLearningOutcome = {
    title: string;
    description: string;
};

export type CourseAudienceItem = {
    title: string;
    description: string;
};

export type CourseDetails = {
    id: number;
    slug: string;

    title: string;
    description: string;
    image: string;

    category: string;
    level: string;
    deliveryMode: DeliveryMode;

    location: string;
    nextIntake: string;
    seatsRemaining: number;
    enrollmentCloses: string;

    currency: string;
    currentPrice: number;
    originalPrice?: number;
    discount?: number;
    offerEndsInDays?: number;

    duration: string;

    overview: {
        eyebrow: string;
        title: string;
        description: string;
    };

    learningOutcomes: CourseLearningOutcome[];
    audience: CourseAudienceItem[];
    prerequisites: string[];

    schedule: {
        days: string;
        time: string;
    };

    modules: CourseModule[];
};