import Image from "next/image";

export default function AboutIntro() {
    return (
        <section className="mx-auto max-w-[1200px] px-6 py-20">
            <div className="mx-auto max-w-[900px] text-center">
                <h2 className="text-[48px] font-bold leading-[1.35] text-[var(--color-grey-strong)]">
                Learn with passion to live
                <br />
                with purpose.
                </h2>

                <p className="mx-auto mt-6 max-w-[876px] text-[18px] leading-[1.8] text-[var(--color-grey-strong)]">
                Learning with passion infuses purpose into our lives. When we approach
                learning with enthusiasm and curiosity, it becomes a journey of growth
                and fulfillment. ✨
                </p>
            </div>

        <div className="mt-20 grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            {/* Text */}
            <div>
                <div>
                    <h3 className="text-[38px] font-bold text-[var(--color-grey-strong)]">
                    Our Values
                    </h3>

                    <p className="mt-5 text-[18px] leading-[1.9] text-[var(--color-grey-dark)]">
                    We Add Value to Your Life ACE’s mission is to “add value to your
                    life” through education. Our educational programs have helped
                    people of all ages to have a better life. Thanks to ACE, thousands
                    of people can widen their horizons and perspectives by learning
                    English in an easy and extremely effective way.
                    </p>
                </div>

                <div className="mt-10">
                    <h3 className="text-[38px] font-bold text-[var(--color-grey-strong)]">
                    Our Education
                    </h3>

                    <p className="mt-5 text-[18px] leading-[1.9] text-[var(--color-grey-dark)]">
                    It is a long established fact that a reader. American Council Egypt
                    (ACE) is a leading provider of English language instruction
                    Services. It is a professional accredited organization for
                    educational opportunities which offers professional training in
                    language and business development fields. It’s a “Private”
                    organization; it doesn’t have any relation(s) to any other
                    governmental organizations.
                    </p>
                </div>
            </div>

            {/* Images */}
            <div className="relative mx-auto h-[427px] w-full max-w-[466px]">
                <div className="h-[427px] w-[466px]">
                    <Image
                    src="/images/about/aboutus.png"
                    alt="ACE student"
                    fill
                    className="object-cover"
                    />
                </div>
            </div>
        </div>
        </section>
    );
}