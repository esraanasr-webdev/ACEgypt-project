import BecomeTeacherBanner from "../components/become-teacher-banner/BecomeTeacherBanner";
import Footer from "../components/footer/Footer";
import AboutPartners from "../features/about/AboutPartners";
import GallerySection from "../features/home/GallerySection";
import HeroSection from "../features/home/HeroSection";
import InteractiveLearningSection from "../features/home/InteractiveLearningSection";
import LearningJourneySection from "../features/home/LearningJourneySection";
import PopularCoursesSlider from "../features/home/PopularCoursesSlider";
import SuccessStoriesSection from "../features/home/SuccessStoriesSection";
import TeachingCoursesSection from "../features/home/TeachingCoursesSection";
import UpcomingEventsSection from "../features/home/UpcomingEventsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection/>
      <AboutPartners />
      <PopularCoursesSlider />
      <LearningJourneySection />
      <SuccessStoriesSection />
      <TeachingCoursesSection />
      <InteractiveLearningSection />
      <UpcomingEventsSection />
      <GallerySection />

      <section className="mx-auto max-w-[1200px]">
        <BecomeTeacherBanner
          title="Become a Teacher"
          description="Join hundreds of learners who enjoy practicing English in a fun and stress free environment. Be part of a community where studying is fun and colleagues are family."
          buttonText="Explore Teaching Courses"
          buttonHref="/courses"
        />
      </section>

      <Footer />
    </>
  );
}