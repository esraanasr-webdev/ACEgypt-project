import Breadcrumbs from "@/components/ui/Breadcrumbs";

type BreadcrumbItem = {
    label: string;
    href?: string;
};

type PageHeaderProps = {
    title: string;
    breadcrumbs: BreadcrumbItem[];
    description?: string;
};

export default function PageHeader({
    title,
    breadcrumbs,
    description,
}: PageHeaderProps) {
    return (
        <section
            className="
                rounded-b-[28px]
                bg-[var(--color-blue-dark)]
                pt-20
                text-white
            "
        >
            <div className="mx-auto max-w-[1200px]">
                <Breadcrumbs
                    items={breadcrumbs}
                />

                <div className="py-8 text-center">
                    <h1
                        className="
                            text-[38px]
                            font-semibold
                            leading-[1.25]
                            md:text-[48px]
                        "
                    >
                        {title}
                    </h1>

                    {description && (
                        <p
                            className="
                                mt-4
                                text-[16px]
                                font-normal
                                leading-[1.5]
                                md:text-[18px]
                            "
                        >
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}