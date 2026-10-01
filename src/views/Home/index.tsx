"use client";
import { HeroSection } from "@/src/components/Home/HeroSection";
import { OurServicesSection } from "@/src/components/Home/OurServicesSection";
import { ImageDivide } from "@/src/components/ImageDivide";
import { FeedBackSection } from "@/src/components/Home/FeedBackSection";
import { Marquee } from "@/src/components/Marquee";
import { ContactSection } from "@/src/components/Home/ContactSection";
import { useEffect } from "react";
import { test } from "@/src/hooks/queries/test";

export const HomePageView = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await test();
      console.log(res);
    };
    fetchData();
  }, []);

  return (
    <div className="relative h-full w-full">
      <HeroSection />
      <OurServicesSection />
      <ImageDivide src="/devider.png" />
      <FeedBackSection />
      <Marquee />
      <ContactSection />
    </div>
  );
};
