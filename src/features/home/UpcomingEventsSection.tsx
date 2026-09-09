import { ChevronRight } from "lucide-react";
import Link from "next/link";

import EventCard from "../../components/event-card/EventCard";

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
        <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div
            className="
            mx-auto
            max-w-[1880px]
            rounded-[32px]
            bg-[var(--color-blue-light)]
            px-6
            py-14
            sm:px-10
            lg:px-16
            "
        >
            <div className="mx-auto max-w-[1200px]">
            {/* Heading */}
            <div className="flex items-end justify-between gap-6">
                <div>
                <h2 className="text-[38px] font-bold text-[var(--color-grey-strong)]">
                    Upcoming{" "}
                    <span className="text-[var(--color-blue-vibrant)]">
                    Events
                    </span>
                    <span className="text-[var(--color-red-dark)]">.</span>
                </h2>

                <p className="mt-2 text-[16px] text-[var(--color-grey-strong)] font-medium">
                    Education Events - Reserve your spot and start learning in an
                    interactive and engaging way
                </p>
                </div>

                <Link
                href="/events"
                className="
                    hidden
                    items-center
                    gap-2
                    text-[13px]
                    font-medium
                    text-[var(--color-blue-dark)]
                    md:flex
                "
                >
                All Events
                <ChevronRight size={17} strokeWidth={2} />
                </Link>
            </div>

            {/* Events */}
            <div className="mt-8 space-y-5">
                {events.map((event) => (
                <EventCard
                    key={`${event.month}-${event.day}-${event.title}`}
                    {...event}
                />
                ))}
            </div>
            </div>
        </div>
        </section>
    );
}