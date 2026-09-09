import Image from "next/image";

const stats = [
    {
        value: "94532",
        label: "Foreign Followers",
    },
    {
        value: "11223",
        label: "Classes Complete",
    },
    {
        value: "25678",
        label: "Students Enrolled",
    },
    {
        value: "2678",
        label: "Certified Teachers",
    },
];

export default function AboutStats() {
    return (
        <section className="mx-auto max-w-[1200px] px-6 py-12">
        <div
            className="
            grid
            overflow-hidden
            rounded-[28px]
            bg-[var(--color-blue-dark)]
            px-8
            py-10
            text-white
            sm:grid-cols-2
            lg:grid-cols-4
            "
        >
            {stats.map((stat, index) => (
            <div
                key={stat.label}
                className="relative flex items-center justify-center"
            >
                {/* Stat */}
                <div className="text-center">
                <p className="text-[38px] font-bold">
                    {stat.value}
                </p>

                <p className="mt-2 text-[14px] font-medium">
                    {stat.label}
                </p>
                </div>

                {/* Figma divider */}
                {index !== stats.length - 1 && (
                <div
                    className="
                    absolute
                    right-0
                    top-1/2
                    hidden
                    h-[60px]
                    w-[2px]
                    -translate-y-1/2
                    lg:block
                    "
                >
                    <Image
                    src="/images/about/stats-divider.svg"
                    alt=""
                    fill
                    className="object-fill"
                    />
                </div>
                )}
            </div>
            ))}
        </div>
        </section>
    );
}