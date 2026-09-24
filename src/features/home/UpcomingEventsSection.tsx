import { Link } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";

import EventCard from "@/components/event-card/EventCard";

const events = [
    {
        month: "AUG",
        day: "04",
        weekDay: "THU",
        title: "Happiness Day",
        description:
            "We asked our students about what makes them happy and the results were astounding Here ...",
        time: "04:00 pm - 07:00 pm",
        image: "/images/events/happiness-day.jpg",
        imageAlt: "Students celebrating Happiness Day",
        variant: "light" as const,
    },
    {
        month: "JUN",
        day: "15",
        weekDay: "Wed",
        title: "The first Alexandria Education & Careers Expo",
        description:
            "Live shots from our presence now at Alexandria Language School as a golden sponsor for . Our team is ...",
        time: "12:00 pm - 02:00 pm",
        image: "/images/events/alexandria-expo.jpg",
        imageAlt: "Alexandria Education and Careers Expo",
        variant: "blue" as const,
    },
    {
        month: "SEP",
        day: "24",
        weekDay: "SUN",
        title: "Level 4 Students’ Competition",
        description:
            "4 teams were competing to win the final round. The competition was designed to be level-appropriate ...",
        time: "01:00 pm - 03:00 pm",
        image: "/images/events/students-competition.jpg",
        imageAlt: "Level 4 Students Competition",
        variant: "light" as const,
    },
];

export default function UpcomingEventsSection() {
    return (
        <section
            className="
                px-0
                py-10

                sm:px-4
                sm:py-12

                md:px-6
                md:py-14

                lg:px-8
                lg:py-16
            "
        >
            <div
                className="
                    mx-auto
                    w-full
                    max-w-[1880px]
                    bg-[var(--color-blue-light)]
                    px-4
                    py-10

                    sm:rounded-[24px]
                    sm:px-6
                    sm:py-12

                    md:px-8

                    lg:rounded-[32px]
                    lg:px-16
                    lg:py-14
                "
            >
                <div className="mx-auto max-w-[1200px]">
                    {/* Heading*/}
                    <div
                        className="
                            flex
                            flex-col
                            gap-4

                            md:flex-row
                            md:items-end
                            md:justify-between
                            md:gap-6
                        "
                    >
                        <div className="max-w-[850px]">
                            <h2
                                className="
                                    text-[28px]
                                    font-bold
                                    leading-[1.2]
                                    text-[var(--color-grey-strong)]

                                    sm:text-[32px]

                                    md:text-[35px]

                                    lg:text-[38px]
                                "
                            >
                                Upcoming{" "}
                                <span
                                    className="
                                        text-[var(--color-blue-vibrant)]
                                    "
                                >
                                    Events
                                </span>

                                <span
                                    className="
                                        text-[var(--color-red-dark)]
                                    "
                                >
                                    .
                                </span>
                            </h2>

                            <p
                                className="
                                    mt-3
                                    max-w-[760px]
                                    text-[14px]
                                    font-medium
                                    leading-[1.7]
                                    text-[var(--color-grey-strong)]

                                    sm:text-[15px]

                                    lg:mt-2
                                    lg:text-[16px]
                                "
                            >
                                Education Events - Reserve your spot and start
                                learning in an interactive and engaging way
                            </p>
                        </div>

                        {/* Desktop / Tablet All Events */}
                        <Link
                            href="/events"
                            className="
                                hidden
                                shrink-0
                                items-center
                                gap-2
                                text-[13px]
                                font-medium
                                text-[var(--color-blue-dark)]
                                transition-opacity
                                duration-200

                                hover:opacity-70

                                md:flex
                            "
                        >
                            <span>All Events</span>

                            <ChevronRight
                                size={17}
                                strokeWidth={2}
                                className="rtl:rotate-180"
                            />
                        </Link>
                    </div>

                    {/* Events*/}
                    <div
                        className="
                            mt-7
                            space-y-4

                            sm:mt-8
                            sm:space-y-5
                        "
                    >
                        {events.map((event) => (
                            <EventCard
                                key={`${event.month}-${event.day}-${event.title}`}
                                {...event}
                            />
                        ))}
                    </div>

                    {/* Mobile All Events*/}
                    <div className="mt-7 flex justify-center md:hidden">
                        <Link
                            href="/events"
                            className="
                                inline-flex
                                min-h-[46px]
                                w-full
                                max-w-[320px]
                                items-center
                                justify-center
                                gap-2
                                rounded-[12px]
                                border
                                border-[var(--color-blue-dark)]
                                px-5
                                text-[14px]
                                font-medium
                                text-[var(--color-blue-dark)]
                                transition-colors
                                duration-200

                                hover:bg-white
                            "
                        >
                            <span>All Events</span>

                            <ChevronRight
                                size={18}
                                strokeWidth={2}
                                className="rtl:rotate-180"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}