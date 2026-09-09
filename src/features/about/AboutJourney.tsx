import Image from "next/image";

const journeyItems = [
    {
        tag: "Foundation",
        title: "The Beginning",
        description:
        "American Council Egypt (ACE) was founded with a clear mission: to empower individuals and enrich lives through high-quality English language education and professional development.",
    },
    {
        tag: "Purpose",
        title: "Commitment to Excellence",
        description:
        "ACE established a reputation for delivering exceptional learning experiences, helping students, professionals, and educators achieve their academic and career goals.",
    },
    {
        tag: "Recognition",
        title: "International Recognition",
        description:
        "ACE became an associate member of ALTE (Association of Language Testers in Europe), reinforcing its commitment to internationally recognized language assessment standards.",
    },
    {
        tag: "Accreditation",
        title: "Cambridge Partnership",
        description:
        "In partnership with Nahdit Misr for Publishing, ACE became an authorized Cambridge Assessment examination venue, offering official Cambridge English exams and preparation courses for learners of all ages.",
    },
    {
        tag: "Expansion",
        title: "Expanding Global Opportunities",
        description:
        "ACE became a certified preparation and registration center for the Pearson Test of English (PTE), preparing learners for one of the world's leading English proficiency exams.",
    },
    {
        tag: "Teacher Development",
        title: "Supporting English Teachers",
        description:
        "ACE was appointed the official office of TEFL International in Egypt, providing internationally recognized TEFL and TESOL certifications for aspiring and experienced English teachers.",
    },
    {
        tag: "Collaboration",
        title: "Building Educational Partnerships",
        description:
        "ACE formed strategic partnerships with Alexandria University and Pharos University to promote educational excellence and create more learning opportunities across Egypt.",
    },
    {
        tag: "Future Vision",
        title: "Today",
        description:
        "Today, ACE continues to help thousands of learners improve their English, earn internationally recognized qualifications, and achieve their personal and professional ambitions through a supportive and innovative learning environment.",
    },
];

export default function AboutJourney() {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-[1200px] px-6">
                {/* Heading */}
                <div className="text-center">
                    <p className="text-[14px] font-medium uppercase text-[var(--color-grey-strong)]">
                        Our Journey
                    </p>

                    <h2 className="mt-2 text-[38px] font-bold text-[var(--color-grey-strong)]">
                        How we{" "}
                        <span className="text-[var(--color-blue-vibrant)]">
                        got here
                        </span>
                        <span className="text-[var(--color-red-dark)]">.</span>
                    </h2>
                </div>

                {/* Timeline content + background */}
                <div className="relative mx-auto mt-14 max-w-[1200px] overflow-hidden">
                {/* Background only behind timeline */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <Image
                        src="/images/about/journey-bg.png"
                        alt=""
                        fill
                        className="object-contain max-w-full h-auto opacity-80"
                        />
                    </div>

                    {/* Timeline */}
                    <div className="relative z-10 mx-auto">
                        {/* Center line */}
                        <div
                        className="
                            absolute
                            bottom-0
                            left-1/2
                            top-0
                            hidden
                            -translate-x-1/2
                            border-l
                            border-dashed
                            border-[var(--color-grey-medium)]
                            md:block
                        "
                        />

                        <div>
                        {journeyItems.map((item, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                            <div
                                key={item.title}
                                className="relative grid grid-cols-1 md:grid-cols-2"
                            >
                                {/* Timeline dot */}
                                <div
                                className="
                                    absolute
                                    left-1/2
                                    top-5
                                    z-10
                                    hidden
                                    h-[10px]
                                    w-[10px]
                                    -translate-x-1/2
                                    rounded-full
                                    bg-[var(--color-blue-dark)]
                                    md:block
                                "
                                />

                                <div
                                className={
                                    isLeft
                                    ? "md:col-start-1 md:pr-12 md:text-right"
                                    : "md:col-start-2 md:pl-12"
                                }
                                >
                                <span
                                    className={`
                                    inline-flex
                                    rounded-full
                                    border
                                    px-2
                                    py-1
                                    text-[11px]
                                    font-medium
                                    ${
                                        isLeft
                                        ? "border-[var(--color-blue-medium)] bg-[var(--color-blue-light)] text-[var(--color-blue-dark)]"
                                        : "border-[var(--color-orange-dark)] bg-[var(--color-orange-light)] text-[var(--color-orange-dark)]"
                                    }
                                    `}
                                >
                                    {item.tag}
                                </span>

                                <h3 className="mt-2 text-[20px] font-semibold text-[var(--color-grey-strong)]">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-[16px] leading-[1.5] text-[var(--color-grey-dark)]">
                                    {item.description}
                                </p>
                                </div>
                            </div>
                            );
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}