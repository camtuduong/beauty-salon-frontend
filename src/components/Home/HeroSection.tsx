import { LayoutHeroSection } from "@/src/components/layout/LayoutHeroSection";
import Img from "next/image";
import { Button } from "@/src/components/Button";
import { ArrowRight } from "@/src/components/Icons/ArrowRight";

const STYLES = {
  container: "absolute top-0 right-0 z-10 h-full w-full",
  containerText:
    "relative z-20 ml-20 flex h-full w-[40%] flex-col justify-center gap-5",
  buttonTransparent:
    "flex items-center gap-2 border border-transparent bg-transparent font-semibold text-[#35393C] hover:border hover:border-[#17313E] hover:bg-transparent",
};

export const HeroSection = () => {
  return (
    <LayoutHeroSection>
      <div className={STYLES.container}>
        <Img
          src="/img-hero-section.png"
          alt="Beauty Salon Hero Section Image"
          fill={true}
          className="object-contain object-right"
        />
      </div>
      <div className={STYLES.containerText}>
        <p className="text-[12px] font-semibold text-[#BCA0C7]">
          BEAUTY SALON • DUBAI
        </p>
        <h2 className="font-playfair text-[44px] leading-14 tracking-[5%] text-[#6B4F4F]">
          SOFT, ELEGANT BEAUTY CARE IN DUBAI.
        </h2>
        <p className="text-[16px] font-extralight text-[#6B4F4F]">
          Natural Touch is a full-service beauty salon offering hair, nails,
          facials and spa treatments in a calm, welcoming space.
        </p>
        <div className="flex gap-3">
          <Button>Book an appointment</Button>
          <Button className={STYLES.buttonTransparent}>
            View services <ArrowRight className="text-[#35393C]" />
          </Button>
        </div>
      </div>
    </LayoutHeroSection>
  );
};
