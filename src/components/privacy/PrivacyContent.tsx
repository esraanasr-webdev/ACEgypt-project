const terms = [
    {
        title: "Information We Collect",
        description: "We may collect the following types of information:",
        items: [
            "Full name",
            "Email address",
            "Phone number",
            "Date of birth (if required)",
            "Billing and payment information",
            "Course enrollment details",
            "Learning progress and assessment results",
            "Communication preferences",
            "Technical information such as IP address, browser type, and device information",
        ],
    },
    {
        title: "How We Use Your Information",
        description: "We use your information to:",
        items: [
            "Create and manage your account.",
            "Process course registrations and payments.",
            "Provide access to learning materials.",
            "Schedule classes, oral exams, and assessments.",
            "Track your learning progress.",
            "Issue certificates upon successful course completion.",
            "Respond to your inquiries and provide customer support.",
            "Send important updates, reminders, and service notifications.",
            "Improve our platform, courses, and user experience.",
        ],
    },
    {
        title: "Cookies & Tracking Technologies",
        description: "Our website may use cookies and similar technologies to:",
        items: [
            "Remember your preferences.",
            "Improve website performance.",
            "Analyze platform usage.",
            "Enhance your browsing experience.",
            "You can manage or disable cookies through your browser settings.",
        ],
    },
    {
        title: "Sharing Your Information",
        description: "We do not sell or rent your personal information.",
        items: [
            "Your information may only be shared with trusted service providers when necessary to:",
            "Process payments.",
            "Deliver educational services.",
            "Provide technical support.",
            "Comply with legal obligations.",
            "All third parties are required to protect your information.",
        ],
    },
    {
        title: "Data Security",
        items: [
            "We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, misuse, or disclosure.",
            "While we strive to protect your data, no online system can guarantee absolute security.",
        ],
    },
    {
        title: "Data Retention",
        description: "We retain your information only for as long as necessary to:",
        items: [
            "Provide our educational services.",
            "Maintain your learning records.",
            "Issue certificates.",
            "Comply with legal and regulatory requirements.",
        ],
    },
    {
        title: "Your Rights",
        description: "Depending on applicable laws, you may have the right to:",
        items: [
            "Access your personal information.",
            "Update or correct inaccurate information",
            "Request deletion of your account and personal data.",
            "Withdraw consent for certain communications.",
            "Request a copy of your stored personal data.",
        ],
    },
    {
        title: "Third-Party Services",
        items: [
            "Our platform may include links to third-party websites or integrate with external services such as payment providers. We are not responsible for the privacy practices of these third parties.",
            "We encourage you to review their privacy policies before using their services.",
        ],
    },
    {
        title: "Children's Privacy",
        items: [
            "Our services are intended for learners who meet the minimum enrollment requirements. We do not knowingly collect personal information from children without appropriate parental or legal guardian consent where required.",
        ],
    },
    {
        title: "Changes to This Privacy Policy",
        items: [
            "We may update this Privacy Policy from time to time. Any changes will be published on this page with the updated revision date.",
            "Continued use of the platform after updates indicates your acceptance of the revised policy.",
        ],
    },
    {
        title: "Contact Us",
        items: [
            "If you have any questions or concerns about this Privacy Policy or how your information is handled, please contact our support team through the Contact Us page or our official communication channels.",
        ],
    },
];

export default function PrivacyContent() {
    return (
        <section className="mx-auto max-w-[1000px] px-6 py-12">
            <div className="mb-14 text-center">
                <h2 className="text-[48px] font-bold text-[var(--color-grey-strong)]">
                    Privacy Policy
                </h2>

                <p className="mx-auto mt-4 max-w-[876px] text-[18px] leading-7 text-[var(--color-grey-strong)]">
                    At American Council Egypt, we value your privacy and are committed to
                    protecting your personal information. This Privacy Policy explains how
                    we collect, use, store, and safeguard your data when you use our website 
                    and services.
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