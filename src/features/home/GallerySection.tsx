import Image from "next/image";

const galleryColumns = [
    {
        position: "mt-[70px]",
        images: [
            {
                src: "/images/home/gallery/gallery-1.jpg",
                alt: "ACE learning activity",
                height: 165,
            },
        ],
    },
    {
        position: "mt-0",
        gap: "gap-5",
        images: [
            {
                src: "/images/home/gallery/gallery-2.jpg",
                alt: "ACE student activity",
                height: 156,
            },
            {
                src: "/images/home/gallery/gallery-3.jpg",
                alt: "ACE classroom activity",
                height: 156,
            },
        ],
    },
    {
        position: "mt-[45px]",
        images: [
            {
                src: "/images/home/gallery/gallery-4.jpg",
                alt: "ACE students celebrating",
                height: 230,
            },
        ],
    },
    {
        position: "mt-[20px]",
        images: [
            {
                src: "/images/home/gallery/gallery-5.jpg",
                alt: "ACE kids speaking activity",
                height: 290,
            },
        ],
    },
    {
        position: "mt-[45px]",
        images: [
            {
                src: "/images/home/gallery/gallery-6.jpg",
                alt: "ACE teacher",
                height: 290,
            },
        ],
    },
    {
        position: "mt-[70px]",
        images: [
            {
                src: "/images/home/gallery/gallery-7.jpg",
                alt: "Kids speaking corner",
                height: 230,
            },
        ],
    },
    {
        position: "mt-0",
        gap: "gap-5",
        images: [
            {
                src: "/images/home/gallery/gallery-8.jpg",
                alt: "Educational activity",
                height: 156,
            },
            {
                src: "/images/home/gallery/gallery-9.jpg",
                alt: "ACE celebration",
                height: 156,
            },
        ],
    },
    {
        position: "mt-[70px]",
        images: [
            {
                src: "/images/home/gallery/gallery-10.jpg",
                alt: "ACE celebration",
                height: 156,
            },
        ],
    },
];

export default function GallerySection() {
    return (
        <section className="overflow-hidden pt-20 px-[14px] pt-[10px]">
            {/* Gallery */}
            <div className="mx-auto max-w-[1500px] px-6">
                <div
                    className="
                        flex
                        items-start
                        justify-center
                        gap-6
                    "
                >
                    {galleryColumns.map((column, columnIndex) => (
                        <div
                            key={columnIndex}
                            className={`
                                flex
                                shrink-0
                                flex-col
                                items-center
                                ${column.position}
                                ${column.gap ?? ""}
                            `}
                        >
                            {column.images.map((image) => (
                                <div
                                    key={image.src}
                                    className="
                                        shrink-0
                                        overflow-hidden
                                        rounded-[32px]
                                    "
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={500}
                                        height={500}
                                        style={{
                                            width: "auto",
                                            height: `${image.height}px`,
                                        }}
                                        className="
                                            block
                                            max-w-none
                                            object-contain
                                            transition-transform
                                            duration-500
                                            hover:scale-105
                                        "
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto mt-14 max-w-[1000px] px-6 text-center">
                <h2
                    className="
                        text-[38px]
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
                        mt-5
                        max-w-[760px]
                        text-[16px]
                        font-medium
                        leading-[1.7]
                        text-[var(--color-grey-strong)]
                    "
                >
                    Join hundreds of learners who enjoy practicing English in a fun
                    and stress free environment. Be part of a community where studying
                    is fun and colleagues are family.
                </p>
            </div>
        </section>
    );
}