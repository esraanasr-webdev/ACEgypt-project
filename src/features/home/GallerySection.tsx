import Image from "next/image";

const galleryImages = [
    {
        src: "/images/home/gallery/gallery-1.jpg",
        alt: "ACE learning activity",
    },
    {
        src: "/images/home/gallery/gallery-2.jpg",
        alt: "ACE student activity",
    },
    {
        src: "/images/home/gallery/gallery-3.jpg",
        alt: "ACE classroom activity",
    },
    {
        src: "/images/home/gallery/gallery-4.jpg",
        alt: "ACE students celebrating",
    },
    {
        src: "/images/home/gallery/gallery-5.jpg",
        alt: "ACE kids speaking activity",
    },
    {
        src: "/images/home/gallery/gallery-6.jpg",
        alt: "ACE teacher",
    },
    {
        src: "/images/home/gallery/gallery-7.jpg",
        alt: "Kids speaking corner",
    },
    {
        src: "/images/home/gallery/gallery-8.jpg",
        alt: "Educational activity",
    },
    {
        src: "/images/home/gallery/gallery-9.jpg",
        alt: "ACE celebration",
    },
    {
        src: "/images/home/gallery/gallery-10.jpg",
        alt: "ACE celebration",
    },
];

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
        <section
            className="
                overflow-hidden
                px-4
                pt-14

                sm:px-6
                sm:pt-16

                lg:px-[14px]
                lg:pt-20
            "
        >
            {/* ========================================
                Mobile / Tablet Gallery
            ======================================== */}
            <div
                className="
                    mx-auto
                    grid
                    max-w-[700px]
                    grid-cols-2
                    gap-3

                    sm:gap-4

                    lg:hidden
                "
            >
                {galleryImages.map((image, index) => (
                    <div
                        key={image.src}
                        className={`
                            relative
                            overflow-hidden
                            rounded-[18px]

                            sm:rounded-[24px]

                            ${
                                index === 0 ||
                                index === 3 ||
                                index === 6 ||
                                index === 9
                                    ? "aspect-[4/5]"
                                    : "aspect-square"
                            }
                        `}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="
                                (max-width: 639px) 45vw,
                                (max-width: 1023px) 330px,
                                0px
                            "
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

            {/* ========================================
                Desktop Gallery
            ======================================== */}
            <div
                className="
                    mx-auto
                    hidden
                    max-w-[1500px]
                    px-6

                    lg:block
                "
            >
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

            {/* ========================================
                Content
            ======================================== */}
            <div
                className="
                    mx-auto
                    mt-10
                    max-w-[1000px]
                    px-1
                    text-center

                    sm:mt-12
                    sm:px-4

                    lg:mt-14
                    lg:px-6
                "
            >
                <h2
                    className="
                        text-[28px]
                        font-bold
                        leading-[1.2]
                        text-[var(--color-grey-strong)]

                        sm:text-[32px]

                        md:text-[35px]

                        lg:text-[38px]
                    "
                >
                    Everything is{" "}
                    <span
                        className="
                            text-[var(--color-blue-vibrant)]
                        "
                    >
                        Teachable
                    </span>

                    <span
                        className="
                            text-[var(--color-red-dark)]
                        "
                    >
                        .
                    </span>
                </h2>

                <p
                    className="
                        mx-auto
                        mt-4
                        max-w-[680px]
                        text-[14px]
                        font-medium
                        leading-[1.7]
                        text-[var(--color-grey-strong)]

                        sm:mt-5
                        sm:text-[15px]

                        lg:max-w-[760px]
                        lg:text-[16px]
                    "
                >
                    Join hundreds of learners who enjoy practicing English in a
                    fun and stress free environment. Be part of a community
                    where studying is fun and colleagues are family.
                </p>
            </div>
        </section>
    );
}