import {
    BriefcaseBusiness,
    Globe2,
    GraduationCap,
    Mic2,
    Star,
    UserRoundCheck,
} from "lucide-react";

const cards = [
    {
        title: "Build up your English skills from the ground up.",
        description:
        "Improving your language skills is essential for effective communication. Let’s break down the four core language skills",
        icon: GraduationCap,
    },
    {
        title: "Become an expert speaker",
        description:
        "Our variety of advanced language stages will help you with mastering your language skills and establish the road to fluency.",
        icon: Mic2,
    },
    {
        title: "Increase fluency and confidence",
        description:
        "Our interactive, participation-based teaching approach builds learners' confidence and fluency in speaking English.",
        icon: Star,
    },
    {
        title: "Applying for a job",
        description:
        "Landing a new or a better job or even changing your entire career path completely requires good language skills.",
        icon: BriefcaseBusiness,
    },
    {
        title: "STUDY/live abroad.",
        description:
        "With our language courses you’ll enhance your chances of travelling abroad whether for studying purposes or to live somewhere else in the world.",
        icon: Globe2,
    },
    {
        title: "HAVE an IELTS or TOEFL certificate.",
        description:
        "ACE provides interactive IELTS & TOEFL Preparation courses that are designed to help meet the needs of participants.",
        icon: UserRoundCheck,
    },
    ];

    export default function AboutSpecial() {
    return (
        <section className="my-16 rounded-[28px] bg-[var(--color-blue-light)] mx-5">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
            <h2 className="text-[38px] font-bold text-[var(--color-grey-strong)]">
            What Make Us{" "}
            <span className="text-[var(--color-blue-vibrant)]">
                Spcecial
            </span>
            <span className="text-[var(--color-red-dark)]">?</span>
            </h2>

            <p className="mt-3 text-[16px] text-[var(--color-grey-strong)]">
            So many academic goals that we expect you to achieve.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => {
                const Icon = card.icon;

                return (
                <article
                    key={card.title}
                    className="min-h-[280px] rounded-[24px] bg-white p-7"
                >
                    <div
                    className="
                        flex
                        h-[56px]
                        w-[56px]
                        items-center
                        justify-center
                        rounded-full
                        bg-[var(--color-orange-dark)]
                        text-white
                    "
                    >
                    <Icon size={27} strokeWidth={1.7} />
                    </div>

                    <h3 className="mt-6 text-[20px] font-semibold leading-[1.4] text-[var(--color-grey-strong)]">
                    {card.title}
                    </h3>

                    <p className="mt-5 text-[16px] leading-[1.55] text-[var(--color-grey-dark)]">
                    {card.description}
                    </p>
                </article>
                );
            })}
            </div>
        </div>
        </section>
    );
}