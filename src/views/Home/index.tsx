import { HeroSection } from "@/src/components/Home/HeroSection";
import { OurServicesSection } from "@/src/components/Home/OurServicesSection";
import { ImageDivide } from "@/src/components/ImageDivide";
import { FeedBackSection } from "@/src/components/Home/FeedBackSection";

export const HomePageView = () => {
  return (
    <div className="h-full w-full">
      <HeroSection />
      <OurServicesSection />
      <ImageDivide src="/devider.png" />
      <FeedBackSection />
    </div>
  );
};
