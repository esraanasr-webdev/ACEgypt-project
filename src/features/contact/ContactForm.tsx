"use client";

import { Send } from "lucide-react";

import Button from "../../components/ui/Button";
import TextInput from "../../components/ui/TextInput";

export default function ContactForm() {
    return (
        <form className="w-full">

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <TextInput
                label="First Name"
                name="firstName"
                placeholder="Enter your First Name"
                />

                <TextInput
                label="Last Name"
                name="lastName"
                placeholder="Enter your Last Name"
                />
            </div>

            <div className="mt-5 space-y-5">
                <TextInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your Email Address"
                />

                <TextInput
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="Enter your Phone Number"
                />

                <TextInput
                label="Subject"
                name="subject"
                placeholder="How can we help you?"
                />
            </div>

            <div className="mt-5">
                <label
                htmlFor="message"
                className="mb-2 block text-[16px] font-semibold text-[var(--color-grey-strong)]"
                >
                Message
                </label>

                <textarea
                id="message"
                name="message"
                placeholder="Tell us more about your inquiry..."
                rows={6}
                className="
                    w-full
                    resize-none
                    rounded-[14px]
                    border
                    border-[var(--color-blue-medium)]
                    bg-white
                    px-4
                    py-4
                    text-[14px]
                    text-[var(--color-grey-strong)]
                    outline-none
                    placeholder:text-[var(--color-grey-dark)]
                    focus:border-[var(--color-blue-vibrant)]
                "
                />
            </div>

            <label className="mt-5 flex items-start gap-2">
                <input
                type="checkbox"
                name="privacyConsent"
                className="
                    mt-[2px]
                    h-5
                    w-5
                    accent-[var(--color-blue-dark)]
                "
                />

                <span className="text-[14px] font-medium text-[var(--color-grey-strong)]">
                I agree to the{" "}
                <a
                    href="/policy"
                    className="text-[var(--color-blue-dark)] underline"
                >
                    Privacy Policy
                </a>{" "}
                and consent to being contacted by ACE.
                </span>
            </label>

            <Button
                type="submit"
                variant="primary"
                className="
                mt-6
                w-full
                gap-3
                text-[16px]
                font-medium
                shadow-[0_10px_20px_rgba(2,101,212,0.30)]
                "
            >
                <Send size={20} strokeWidth={1.7} />
                Send Message
            </Button>
        </form>
    );
}