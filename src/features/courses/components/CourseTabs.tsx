const tabs = [
    {
        label: "Overview",
        href: "#overview",
    },
    {
        label: "Curriculum",
        href: "#curriculum",
    },
    {
        label: "Prerequisites",
        href: "#prerequisites",
    },
    {
        label: "Schedule",
        href: "#schedule",
    },
    {
        label: "Registration",
        href: "#registration",
    },
];

export default function CourseTabs() {
    return (
        <nav
            className="
                bg-[var(--color-blue-light)]
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    max-w-[1200px]
                    items-center
                    gap-8
                    overflow-x-auto
                    px-4
                    sm:px-6
                    lg:pr-[400px]
                "
            >
                {tabs.map((tab, index) => (
                    <a
                        key={tab.label}
                        href={tab.href}
                        className={`
                            relative
                            shrink-0
                            py-7
                            text-[16px]
                            transition
                            hover:text-[var(--color-grey-strong)]

                            ${
                                index === 0
                                    ? "font-semibold text-[var(--color-grey-strong)]"
                                    : "font-normal text-[var(--color-grey-dark)]"
                            }
                        `}
                    >
                        {tab.label}

                        {index === 0 && (
                            <span
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    h-[3px]
                                    w-full
                                    rounded-full
                                    bg-[var(--color-blue-dark)]
                                "
                            />
                        )}
                    </a>
                ))}
            </div>
        </nav>
    );
}