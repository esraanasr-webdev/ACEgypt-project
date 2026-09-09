import InteractiveLearningCard from "./InteractiveLearningCard";

const learningExperiences = [
    {
        icon: "/images/home/interactive/online-courses.svg",
        iconAlt: "Live online courses",
        title: "Online Courses",
        description:
        "Learn anytime, from anywhere, interact live with instructors, and get instant feedback — all online.",
    },
    {
        icon: "/images/home/interactive/quizzes.svg",
        iconAlt: "Interactive quizzes",
        title: "Quizzes",
        description:
        "Interactive quizzes to reinforce learning and track your progress after each lesson.",
        active: true,
    },
    {
        icon: "/images/home/interactive/games.svg",
        iconAlt: "Learning games",
        title: "Games",
        description:
        "Interactive games that make learning fun while improving vocabulary and communication skills.",
    },
    {
        icon: "/images/home/interactive/speaking.svg",
        iconAlt: "Speaking practice",
        title: "Practice speaking",
        description:
        "Live speaking practice to improve fluency, confidence, and real-life communication skills.",
    },
];

export default function InteractiveLearningSection() {
    return (
        <section className="py-20">
        <div className="mx-auto max-w-[1200px]">
            {/* Heading */}
            <div>
            <h2
                className="
                text-[38px]
                font-bold
                leading-[1.2]
                text-[var(--color-grey-strong)]
                "
            >
                Interactive{" "}
                <span className="text-[var(--color-blue-vibrant)]">
                Learning Experience
                </span>
                <span className="text-[var(--color-red-dark)]">.</span>
            </h2>

            <p
                className="
                mt-4
                text-[16px]
                font-medium
                text-[var(--color-grey-strong)]
                "
            >
                Learn by doing, not just watching
            </p>
            </div>

            {/* Cards */}
            <div
                className="
                    mt-12
                    grid
                    grid-cols-1
                    gap-4
                    sm:grid-cols-2
                    lg:grid-cols-4
                "
            >
            {learningExperiences.map((item) => (
                <InteractiveLearningCard
                key={item.title}
                {...item}
                />
            ))}
            </div>
        </div>
        </section>
    );
}