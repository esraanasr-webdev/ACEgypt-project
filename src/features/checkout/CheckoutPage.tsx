import PageHeader from "@/components/page-header/PageHeader";

import OrderSummary from "./OrderSummary";
import PaymentMethods from "./PaymentMethods";
import PromoCode from "./PromoCode";
import TermsAgreement from "./TermsAgreement";

export default function CheckoutPage() {
    return (
        <>
            <PageHeader
                title="Enrollment & Checkout"
                description="Complete your enrollment to start learning"
                breadcrumbs={[
                    {
                        label: "Home",
                        href: "/",
                    },
                    {
                        label: "Courses",
                        href: "/courses",
                    },
                    {
                        label: "TEFL Certification Course",
                        href: "/courses/tefl-certification",
                    },
                    {
                        label: "Enrollment & Checkout",
                    },
                ]}
            />

            <section className="bg-[var(--color-blue-light)] py-16">
                <div
                    className="
                        mx-auto
                        grid
                        max-w-[1200px]
                        grid-cols-1
                        gap-7
                        px-6
                        lg:grid-cols-[minmax(0,1fr)_360px]
                    "
                >
                    <div className="space-y-6">
                        <PaymentMethods />
                        <PromoCode />
                        <TermsAgreement />
                    </div>

                    <OrderSummary />
                </div>
            </section>
        </>
    );
}