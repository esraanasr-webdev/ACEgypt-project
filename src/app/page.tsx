import AboutPartners from "../features/about/AboutPartners";
import HeroSection from "../features/home/HeroSection";
import LearningJourneySection from "../features/home/LearningJourneySection";
import PopularCoursesSlider from "../features/home/PopularCoursesSlider";

export default function HomePage() {
  return (
    <>
      <HeroSection/>
      <AboutPartners />
      <PopularCoursesSlider />
      <LearningJourneySection />
    </>
  );
}