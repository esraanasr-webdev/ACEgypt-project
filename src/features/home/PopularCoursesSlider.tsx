"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import CourseCard from "../courses/CourseCard";
import { courses } from "../courses/data";

export default function PopularCoursesSlider() {
    const popularCourses = courses.slice(0, 8);

    return (
        <section className="mx-auto max-w-[1200px] py-20 px-[14px] pt-[80px]">
            {/* Heading */}
            <div className="flex items-end justify-between gap-6">
                <div>
                <h2 className="text-[38px] font-bold text-[var(--color-grey-strong)]">
                    Popular{" "}
                    <span className="text-[var(--color-blue-vibrant)]">
                    Courses
                    </span>
                    <span className="text-[var(--color-red-dark)]">.</span>
                </h2>

                <p className="mt-3 text-[16px] text-[var(--color-grey-strong)]">
                    Limitless learning, more possibilities
                </p>
                </div>

                <Link
                    href="/courses"
                    className="
                        hidden
                        items-center
                        gap-2
                        text-[16px]
                        font-medium
                        text-[var(--color-blue-dark)]
                        md:flex
                    "
                >
                All Courses
                <ChevronRight size={20} />
                </Link>
            </div>

            {/* Slider */}
            <div className="mt-10">
                <Swiper
                modules={[Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                    slidesPerView: 2,
                    },
                    1024: {
                    slidesPerView: 3,
                    },
                    1280: {
                    slidesPerView: 4,
                    },
                }}
                className="popular-courses-swiper !pb-14"
                >
                {popularCourses.map((course) => (
                    <SwiperSlide key={course.id} className="h-auto">
                        <Link
                            href={`/courses/${course.slug}`}
                            className="
                                block
                                h-full
                                transition-transform
                                duration-200
                                hover:-translate-y-1
                            "
                        >
                            <CourseCard
                                image={course.image}
                                imageAlt={course.title}
                                badge={course.deliveryMode}
                                title={course.title}
                                description={course.description}
                                currency={course.currency}
                                amount={course.amount}
                                actionText={course.category}
                                variant="compact"
                            />
                        </Link>

                    </SwiperSlide>
                ))}
                </Swiper>
            </div>

            <Link
                href="/courses"
                className="
                mt-2
                flex
                items-center
                justify-center
                gap-2
                text-[14px]
                font-medium
                text-[var(--color-blue-dark)]
                md:hidden
                "
            >
                All Courses
                <ChevronRight size={18} />
            </Link>
        </section>
    );
}