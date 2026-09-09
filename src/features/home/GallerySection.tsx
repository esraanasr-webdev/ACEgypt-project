import Image from "next/image";

const galleryImages = [
    {
        src: "/images/home/gallery/gallery-1.jpg",
        alt: "ACE learning activity",
        className: "h-[190px]",
    },
    {
        src: "/images/home/gallery/gallery-2.jpg",
        alt: "ACE student activity",
        className: "h-[200px]",
    },
    {
        src: "/images/home/gallery/gallery-3.jpg",
        alt: "ACE classroom activity",
        className: "h-[330px]",
    },
    {
        src: "/images/home/gallery/gallery-4.jpg",
        alt: "ACE students celebrating",
        className: "h-[365px]",
    },
    {
        src: "/images/home/gallery/gallery-5.jpg",
        alt: "ACE kids speaking activity",
        className: "h-[365px]",
    },
    {
        src: "/images/home/gallery/gallery-6.jpg",
        alt: "ACE teacher",
        className: "h-[290px]",
    },
    {
        src: "/images/home/gallery/gallery-7.jpg",
        alt: "Kids speaking corner",
        className: "h-[200px]",
    },
    {
        src: "/images/home/gallery/gallery-8.jpg",
        alt: "Educational activity",
        className: "h-[200px]",
    },
    {
        src: "/images/home/gallery/gallery-9.jpg",
        alt: "ACE celebration",
        className: "h-[190px]",
    },
];

export default function GallerySection() {
    return (
        <section className="py-20">
        <div className="mx-auto max-w-[1500px] px-6">
            {/* Gallery */}
            <div
            className="
                grid
                grid-cols-2
                items-center
                gap-5
                sm:grid-cols-3
                lg:grid-cols-6
            "
            >
            {galleryImages.map((image, index) => (
                <div
                key={image.src}
                className={`
                    relative
                    overflow-hidden
                    rounded-[48px]
                    ${image.className}
                    ${
                    index === 2 || index === 4
                        ? "lg:translate-y-[20px]"
                        : ""
                    }
                `}
                >
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-105
                    "
                />
                </div>
            ))}
            </div>

            {/* Content */}
            <div className="mx-auto mt-16 max-w-[1000px] text-center">
            <h2
                className="
                text-[48px]
                font-bold
                leading-[1.2]
                text-[var(--color-grey-strong)]
                "
            >
                Everything is{" "}
                <span className="text-[var(--color-blue-vibrant)]">
                Teachable
                </span>
                <span className="text-[var(--color-red-dark)]">.</span>
            </h2>

            <p
                className="
                mx-auto
                mt-6
                max-w-[980px]
                text-[20px]
                leading-[1.7]
                text-[var(--color-grey-strong)]
                "
            >
                Join hundreds of learners who enjoy practicing English in a fun and
                stress free environment. Be part of a community where studying is
                fun and colleagues are family.
            </p>
            </div>
        </div>
        </section>
    );
}