"use client";

import { Button } from "@/src/components/Button";
import { ListServicesSection } from "@/src/components/Home/ListServicesSection";
import { ArrowRight } from "@/src/components/Icons/ArrowRight";
import { TitleSection } from "@/src/components/TitleSection";
import { useState } from "react";
import { ServiceCategory } from "@/src/types/service";
import { useGetServicesByCategory } from "@/src/hooks/queries/useGetServicesByCategory";
import { useAddDefaultCategory } from "@/src/hooks/useAddDefaultCategory";

const STYLES = {
  button:
    "bg-salon-secondary flex w-fit cursor-pointer items-center justify-center gap-2 self-center",
};

type Props = {
  serviceCategories: ServiceCategory[];
  isCategoriesLoading: boolean;
};

export const OurServicesSection = ({
  serviceCategories,
  isCategoriesLoading,
}: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const { data: servicesByCategory, isLoading: servicesByCategoryLoading } =
    useGetServicesByCategory(selectedCategory);

  const handleCategoryClick = (slug: string) => {
    setSelectedCategory(slug);
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const categories = useAddDefaultCategory(serviceCategories);

  return (
    <section id="services" className="my-11 flex flex-col px-4">
      <TitleSection
        title="SERVICES"
        subtitle="Our Service"
        description="Explore the wide range of beauty services we provide to help you look and feel your best."
      />

      <ListServicesSection
        services={servicesByCategory}
        isExpanded={isExpanded}
        serviceCategories={categories}
        isCategoriesLoading={isCategoriesLoading}
        isActiveCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
        isLoading={servicesByCategoryLoading}
      />

      {!servicesByCategoryLoading && (
        <Button className={STYLES.button} onClick={handleToggleExpand}>
          {isExpanded ? "Less" : "More"}{" "}
          <ArrowRight className="text-salon-border" />
        </Button>
      )}
    </section>
  );
};
