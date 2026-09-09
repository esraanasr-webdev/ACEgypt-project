import Footer from "../components/footer/Footer";
import AboutPartners from "../features/about/AboutPartners";
import HeroSection from "../features/home/HeroSection";
import LearningJourneySection from "../features/home/LearningJourneySection";
import PopularCoursesSlider from "../features/home/PopularCoursesSlider";
import SuccessStoriesSection from "../features/home/SuccessStoriesSection";
import TeachingCoursesSection from "../features/home/TeachingCoursesSection";

export default function HomePage() {
  return (
    <>
      <HeroSection/>
      <AboutPartners />
      <PopularCoursesSlider />
      <LearningJourneySection />
      <SuccessStoriesSection />
      <TeachingCoursesSection />

    {/*
      <BecomeTeacherBanner
        title="Become a Teacher"
        description="Join hundreds of learners who enjoy practicing English in a fun and stress-free environment."
        buttonText="Explore Teaching Courses"
        buttonHref="/courses"
      />
      */}
      <Footer />
    </>
  );
}