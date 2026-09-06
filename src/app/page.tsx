import MainNavigation from "../components/main-navigation/MainNavigation";

export default function HomePage() {
  return (
    <>
      {/* Homepage can have its own special hero/header */}
      <section className="bg-[var(--color-blue-dark)]">
        <div className="mx-auto max-w-[1200px]">
          <MainNavigation />
        </div>

        {/* homepage hero */}
      </section>

      {/* homepage content */}
    </>
  );
}