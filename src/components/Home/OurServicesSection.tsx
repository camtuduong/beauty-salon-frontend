"use client";

import { Button } from "@/src/components/Button";
import { ListServicesSection } from "@/src/components/Home/ListServicesSection";
import { ArrowRight } from "@/src/components/Icons/ArrowRight";
import { TitleSection } from "@/src/components/TitleSection";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const STYLES = {
  button:
    "bg-salon-secondary flex w-fit cursor-pointer items-center justify-center gap-2 self-center",
};

const serviceCategories = [
  { value: "hair", name: "Hair" },
  { value: "nails", name: "Nails" },
  { value: "facial", name: "Facial" },
  { value: "makeup", name: "Makeup" },
  { value: "lashes", name: "Lashes" },
];

const services = [
  {
    url: "/Image.png",
    title: "Sample Service",
    description: "This is a description of the sample service.",
    code: "AED 299",
  },

  {
    url: "/Image.png",
    title: "Sample Service",
    description: "This is a description of the sample service.",
    code: "AED 299",
  },
  {
    url: "/Image.png",
    title: "Sample Service",
    description: "This is a description of the sample service.",
    code: "AED 299",
  },

  {
    url: "/Image.png",
    title: "Sample Service",
    description: "This is a description of the sample service.",
    code: "AED 298",
  },

  {
    url: "/Image.png",
    title: "Sample Service",
    description: "This is a description of the sample service.",
    code: "AED 297",
  },
  {
    url: "/Image.png",
    title: "Sample Service",
    description: "This is a description of the sample service.",
    code: "AED 296",
  },
];

export const OurServicesSection = () => {
  const [isActiveCategory, setIsActiveCategory] = useState(
    serviceCategories[0].value,
  );

  const handleCategoryClick = (value: string) => {
    setIsActiveCategory(value);
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="services" className="my-11 flex flex-col px-4">
      <TitleSection
        title="SERVICES"
        subtitle="Our Service"
        description="Explore the wide range of beauty services we provide to help you look and feel your best."
      />
      <AnimatePresence>
        <ListServicesSection
          services={services}
          isExpanded={isExpanded}
          serviceCategories={serviceCategories}
          isActiveCategory={isActiveCategory}
          onCategoryClick={handleCategoryClick}
        />
      </AnimatePresence>

      <Button className={STYLES.button} onClick={handleToggleExpand}>
        {isExpanded ? "Less" : "More"}{" "}
        <ArrowRight className="text-salon-border" />
      </Button>
    </section>
  );
};
