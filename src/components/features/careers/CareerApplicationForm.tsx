"use client";

import { Send, UploadCloud } from "lucide-react";
import { useState } from "react";

import Button from "../../../components/ui/Button";
import Dropdown from "../../../components/ui/Dropdown";
import TextInput from "../../../components/ui/TextInput";

export default function CareerApplicationForm() {
    const [position, setPosition] = useState("");

    return (
        <div
            className="
                w-full
                max-w-[996px]
                rounded-[18px]
                bg-[var(--color-blue-light)]
                p-6
            "
        >
        <h3 className="mb-5 text-[20px] font-semibold text-[var(--color-grey-strong)]">
            Application Form
        </h3>

        <form className="space-y-5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <TextInput
                label="Full Name"
                name="fullName"
                placeholder="Enter your Full Name"
                
            />

            <TextInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your Email"
            />

            <TextInput
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="Enter your Phone Number"
            />

            <Dropdown
                label="Position Applied For"
                placeholder="Select a position..."
                value={position}
                onChange={setPosition}
                options={[
                {
                    label: "English Teacher",
                    value: "english-teacher",
                },
                {
                    label: "Course Coordinator",
                    value: "course-coordinator",
                },
                {
                    label: "Customer Support",
                    value: "customer-support",
                },
                ]}
            />
            </div>

            <div>
            <label
                htmlFor="resume"
                className="
                mb-2
                block
                text-[16px]
                font-semibold
                text-[var(--color-grey-strong)]
                "
            >
                Upload Resume / CV
            </label>

            <label
                htmlFor="resume"
                className="
                flex
                min-h-[150px]
                cursor-pointer
                flex-col
                items-center
                justify-center
                rounded-[8px]
                border
                border-dashed
                border-[var(--color-blue-medium)]
                bg-white
                px-6
                text-center
                "
            >
                <UploadCloud
                    size={24}
                    strokeWidth={1.5}
                    className="text-[var(--color-grey-dark)]"
                />

                <p className="mt-3 text-[14px] text-[var(--color-grey-dark)]">
                Drag and drop your file here or
                </p>

                <span className="mt-1 text-[14px] font-medium text-[var(--color-blue-vibrant)]">
                click here to browse
                </span>

                <p className="mt-2 text-[12px] text-[var(--color-grey-dark)]">
                Accepted formats: PDF, DOC, DOCX — Max 5MB
                </p>

                <input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                />
            </label>
            </div>

            <label className="flex items-start gap-2 m-[24px]">
            <input
                type="checkbox"
                name="privacyConsent"
                className="
                mt-[2px]
                h-4
                w-4
                accent-[var(--color-blue-vibrant)]
                "
            />

            <span className="text-[16px] leading-[1.5] text-[var(--color-grey-strong)] font-semibold">
                I agree to the{" "}
                <a
                href="/policy"
                className="text-[var(--color-blue-vibrant)] underline"
                >
                Privacy Policy
                </a>{" "}
                and consent to ACE processing my personal data for recruitment purposes.
            </span>
            </label>

            <div className="flex justify-center">
                <Button
                    type="submit"
                    variant="primary"
                    className="
                        min-w-[170px]
                        text-[16px]
                        font-medium
                        flex
                        item-center
                        gap-3
                        shadow-[0_10px_18px_rgba(2,101,212,0.30)]"
                >
                    <Send
                        size={24}
                        strokeWidth={1.5}
                        className="text-white"
                    />
                    Submit Application
                </Button>
            </div>

            <p className="text-center text-[14px] text-[var(--color-grey-dark)] my-[24px]">
            Having trouble? Email us at{" "}
            <a
                href="mailto:career@americancouncileg.com"
                className="text-[var(--color-blue-vibrant)]"
            >
                career@americancouncileg.com
            </a>
            </p>
        </form>
        </div>
    );
}