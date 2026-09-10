import Image from "next/image";

const partners = [
    {
        name: "Cambridge English Qualifications",
        image: "/images/about/partners/cambridge-qualifications.png",
    },
    {
        name: "Cambridge English Authorised Exam Centre",
        image: "/images/about/partners/cambridge-exam-centre.png",
    },
    {
        name: "Cambridge English Teaching",
        image: "/images/about/partners/cambridge-teaching.png",
    },
    {
        name: "TEFL International",
        image: "/images/about/partners/tefl-international.png",
    },
    {
        name: "ALTE",
        image: "/images/about/partners/alte.png",
    },
    {
        name: "Pearson PTE",
        image: "/images/about/partners/pearson-pte.png",
    },
];

export default function AboutPartners() {
    return (
        <section className="mx-auto max-w-[1200px] pt-10">
        <div
            className="
            grid
            grid-cols-2
            items-center
            gap-x-10
            gap-y-8
            sm:grid-cols-3
            lg:grid-cols-6
            "
        >
            {partners.map((partner) => (
            <div
                key={partner.name}
                className="
                group
                flex
                min-h-[80px]
                items-center
                justify-center
                "
            >
                <Image
                src={partner.image}
                alt={partner.name}
                width={170}
                height={80}
                className="
                    h-auto
                    max-h-[70px]
                    w-auto
                    max-w-full
                    object-contain

                    grayscale
                    opacity-40
                    transition-all
                    duration-300

                    group-hover:grayscale-0
                    group-hover:opacity-100
                "
                />
            </div>
            ))}
        </div>
        </section>
    );
}