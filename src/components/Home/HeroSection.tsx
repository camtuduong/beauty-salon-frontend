import { LayoutHeroSection } from "@/src/components/layout/LayoutHeroSection";
import Image from "next/image";
import { Button } from "@/src/components/Button";
import { ArrowRight } from "@/src/components/Icons/ArrowRight";

const STYLES = {
  container: "absolute top-0 right-0 z-10 h-full w-full",
  containerText:
    "relative z-20 ml-20 flex h-full w-[40%] flex-col justify-center gap-5",
  buttonTransparent:
    "text-salon-heading hover:border-salon-primary flex items-center gap-2 border border-transparent bg-transparent font-semibold hover:border hover:bg-transparent",
};

export const HeroSection = () => {
  return (
    <LayoutHeroSection>
      <div className={STYLES.container}>
        <Image
          src="/img-hero-section.png"
          alt="Beauty Salon Hero Section Image"
          fill={true}
          className="object-contain object-right"
        />
      </div>
      <div className={STYLES.containerText}>
        <p className="text-salon-highlight text-[12px] font-semibold">
          BEAUTY SALON • DUBAI
        </p>
        <h2 className="font-playfair text-salon-copy text-[44px] leading-14 tracking-[5%]">
          SOFT, ELEGANT BEAUTY CARE IN DUBAI.
        </h2>
        <p className="text-salon-copy text-[16px] font-extralight">
          Natural Touch is a full-service beauty salon offering hair, nails,
          facials and spa treatments in a calm, welcoming space.
        </p>
        <div className="flex gap-3">
          <Button>Book an appointment</Button>
          <Button className={STYLES.buttonTransparent}>
            View services <ArrowRight className="text-salon-heading" />
          </Button>
        </div>
      </div>
    </LayoutHeroSection>
  );
};
