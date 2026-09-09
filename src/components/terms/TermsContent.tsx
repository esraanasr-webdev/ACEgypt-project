const terms = [
    {
        title: "Registration & Account",
        items: [
            "Users must provide accurate and up-to-date personal information during registration.",
            "You are responsible for maintaining the confidentiality of your account credentials.",
            "Any activity performed through your account is your responsibility.",
        ],
    },
    {
        title: "Course Enrollment",
        items: [
            "Enrollment is confirmed only after successful payment and registration.",
            "Some courses may have prerequisites or eligibility requirements.",
            "The center reserves the right to accept or reject registrations when necessary.",
        ],
    },
    {
        title: "Payments & Refunds",
        items: [
            "All course fees are displayed before payment.",
            "Payments must be completed using the available payment methods.",
            "Refund requests are subject to the center's Refund Policy.",
            "Refunds may not be available after a course has started or been completed, unless otherwise stated.",
        ],
    },
    {
        title: "Course Access",
        items: [
            "Enrolled students receive access to course materials for personal educational use only.",
            "Access duration may vary depending on the course.",
            "The center may suspend or revoke access in case of policy violations.",
        ],
    },
    {
        title: "Learning Materials",
        items: [
            "All videos, documents, quizzes, assignments, presentations, and downloadable resources are protected by copyright.",
            "Copying, recording, distributing, sharing, or reselling any course content without written permission is strictly prohibited.",
        ],
    },
    {
        title: "Attendance, Assignments & Assessments",
        items: [
            "Students are responsible for attending scheduled sessions and completing required assignments and quizzes",
            "Some courses require successful completion of assessments before progressing.",
            "TMissed sessions or assessments may follow the course-specific attendance policy.",
        ],
    },
    {
        title: "Oral Exams",
        items: [
            "Oral exam booking becomes available according to the course schedule.",
            "Students are responsible for selecting and attending their booked exam.",
            "Failure to attend may require rescheduling according to the center's policy.",
        ],
    },
    {
        title: "Certificates",
        items: [
            "Certificates are issued only after meeting all course completion requirements.",
            "Requirements may include attendance, assignments, quizzes, projects, oral exams, or final assessments.",
            "Certificates cannot be modified once issued unless an administrative error has occurred.",
        ],
    },
    {
        title: "Student Conduct",
        items: [
            "Students are expected to:",
            "Treat instructors and fellow learners respectfully.",
            "Participate professionally in discussions and live sessions.",
            "Avoid offensive, abusive, or inappropriate behavior.",
            "Avoid posting spam, advertisements, or unrelated content.",
            "Violation of these rules may result in suspension or termination of access.",
        ],
    },
    {
        title: "Intellectual Property",
        items: [
            "All content on this platform—including course materials, videos, graphics, documents, branding, and website content—is the property of American Council Egypt and may not be copied, reproduced, distributed, or used without prior written permission.",
        ],
    },
    {
        title: "Privacy",
        items: [
            "Your personal information is collected and processed in accordance with our Privacy Policy. We are committed to protecting your data and using it only for educational and administrative purposes.",
        ],
    },
    {
        title: "Platform Availability",
        items: [
            "While we strive to keep the platform available at all times, temporary interruptions may occur due to maintenance, updates, or technical issues.",
        ],
    },
    {
        title: "Changes to Courses & Services",
        items: [
            "American Council Egypt reserves the right to modify course schedules, instructors, learning materials, pricing, or platform features whenever necessary.",
        ],
    },
    {
        title: "Changes to These Terms",
        items: [
            "These Terms & Conditions may be updated periodically. Continued use of the platform after changes are published constitutes acceptance of the updated terms.",
        ],
    },
    {
        title: "Contact Us",
        items: [
            "If you have any questions regarding these Terms & Conditions, please contact our support team through the Contact Us page or the official communication channels provided on the website.",
        ],
    },
];

export default function TermsContent() {
    return (
        <section className="mx-auto max-w-[1000px] px-6 py-12">
            <div className="mb-14 text-center">
                <h2 className="text-[48px] font-bold text-[var(--color-grey-strong)]">
                    Terms & Conditions
                </h2>

                <p className="mx-auto mt-4 max-w-[876px] text-[18px] leading-7 text-[var(--color-grey-strong)]">
                    Welcome to American Council Egypt. By accessing our website,
                    enrolling in our courses, or using any of our services, you
                    agree to the following Terms & Conditions. Please read them
                    carefully before using the platform.
                </p>
            </div>

            <div className="space-y-7">
                {terms.map((term, index) => (
                    <section key={term.title}>
                        <h3 className="mb-3 text-[26px] font-bold text-[var(--color-grey-strong)]">
                            {index + 1}. {term.title}
                        </h3>

                        <ul className="list-disc space-y-1 pl-7 text-[18px] leading-8 text-[var(--color-grey-strong)]">
                            {term.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </section>
    );
}