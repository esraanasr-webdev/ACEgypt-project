"use client";

import { FormEvent, useState } from "react";

import Button from "@/components/ui/Button";
import CheckboxGroup from "@/components/ui/CheckboxGroup";
import TextInput from "@/components/ui/TextInput";

import type { CourseDetails } from "../types";

type CourseRegistrationProps = {
    course: CourseDetails;
};

const heardAboutOptions = [
    {
        label: "Google",
        value: "google",
    },
    {
        label: "Facebook",
        value: "facebook",
    },
    {
        label: "Linkedin",
        value: "linkedin",
    },
    {
        label: "Friends",
        value: "friends",
    },
    {
        label: "Other",
        value: "other",
    },
];

export default function CourseRegistration({
    course,
}: CourseRegistrationProps) {
    const [heardAbout, setHeardAbout] = useState<string[]>([]);

    function handleSubmit(
        event: FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const registrationData = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            position: formData.get("position"),
            course: formData.get("course"),
            educationalStatus:
                formData.get("educationalStatus"),
            heardAbout,
        };

        console.log(registrationData);

        // TODO:
        // Submit registrationData to Laravel API.
    }

    return (
        <section
            id="registration"
            className="
                bg-[var(--color-grey-light)]
                py-16
                rounded-[28px]
                md:px-12
                lg:px-[100px]
                lg:py-20
                mx-5
                my-32
                "
        >
            <div
                className="
                    mx-auto
                    max-w-[1200px]
                    px-6

                "
            >
                <div className="max-w-[792px]">
                    <h2
                        className="
                            text-[26px]
                            font-bold
                            leading-[1.5]
                            text-[var(--color-grey-strong)]
                        "
                    >
                        Registration
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-7"
                    >
                        <div
                            className="
                                grid
                                grid-cols-1
                                gap-x-6
                                md:grid-cols-2
                            "
                        >
                            <TextInput
                                label="Your Name"
                                name="name"
                                placeholder="Enter Your Name"
                                required
                            />

                            <TextInput
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Enter Your Email"
                                required
                            />

                            <TextInput
                                label="Phone Number"
                                name="phone"
                                type="tel"
                                placeholder="Enter Your Phone Number"
                                required
                            />

                            <TextInput
                                label="Position"
                                name="position"
                                placeholder="Title / Position"
                                required
                            />

                            <CourseSelect
                                course={course}
                            />

                            <TextInput
                                label="Educational Status"
                                name="educationalStatus"
                                placeholder="Graduated From or Study at"
                                required
                            />
                        </div>

                        <CheckboxGroup
                            title="Heard About Us From:"
                            options={heardAboutOptions}
                            values={heardAbout}
                            onChange={setHeardAbout}
                        />

                        <Button
                            type="submit"
                            variant="primary"
                            className="
                                mt-7
                                w-full
                                shadow-[0_10px_20px_rgba(2,101,212,0.20)]
                            "
                        >
                            Submit Now
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}

function CourseSelect({
    course,
}: {
    course: CourseDetails;
}) {
    return (
        <div className="mb-[24px] w-full">
            <label
                htmlFor="course"
                className="
                    mb-2
                    block
                    text-[16px]
                    font-semibold
                    leading-[1.25]
                    text-[var(--color-grey-strong)]
                "
            >
                Course / Courses
                <span className="ml-1 text-[var(--color-red-dark)]">
                    *
                </span>
            </label>

            <select
                id="course"
                name="course"
                defaultValue={course.slug}
                required
                className="
                    h-[42px]
                    w-full
                    rounded-[10px]
                    border
                    border-transparent
                    bg-white
                    px-3
                    text-[12px]
                    font-normal
                    text-[var(--color-grey-strong)]
                    outline-none
                    transition-colors
                    duration-150
                    focus:border-[var(--color-blue-vibrant)]
                "
            >
                <option value={course.slug}>
                    {course.title}
                </option>
            </select>
        </div>
    );
}