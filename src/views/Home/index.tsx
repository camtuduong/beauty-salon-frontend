"use client";

import { HeroSection } from "@/src/components/Home/HeroSection";
import { OurServicesSection } from "@/src/components/Home/OurServicesSection";
import { ImageDivide } from "@/src/components/ImageDivide";
import { FeedBackSection } from "@/src/components/Home/FeedBackSection";
import { Marquee } from "@/src/components/Marquee";
import { ContactSection } from "@/src/components/Home/ContactSection";
import { useGetAllServiceCategories } from "@/src/hooks/queries/useGetAllServiceCategories";

export const HomePageView = () => {
  const {
    data: serviceCategories,
    isLoading: serviceCategoriesLoading,
  } = useGetAllServiceCategories();

  return (
    <div className="relative h-full w-full">
      <HeroSection />

      <OurServicesSection
        serviceCategories={serviceCategories}
        isCategoriesLoading={serviceCategoriesLoading}
      />
      <ImageDivide src="/divider.png" />
      <FeedBackSection />
      <Marquee />
      <ContactSection />
    </div>
  );
};
