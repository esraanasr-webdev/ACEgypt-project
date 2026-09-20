import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <main className="bg-white">
                <section className="mx-auto flex min-h-screen max-w-[1200px] flex-col items-center justify-center px-7 py-20">
                    <Image
                        src="/images/404-error.png"
                        alt="404 page not found"
                        width={620}
                        height={400}
                        priority
                        className="h-auto w-full max-w-[620px] object-contain"
                    />

                    <Link
                        href="/en"
                        className="
                            mt-8
                            inline-flex
                            min-h-[48px]
                            items-center
                            justify-center
                            rounded-[14px]
                            bg-[var(--color-blue-vibrant)]
                            px-6
                            text-[14px]
                            font-medium
                            text-white
                        "
                    >
                        Back to Home
                    </Link>
                </section>
            </main>
        </>
    );
}