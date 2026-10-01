import { Card } from "@/src/components/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";

const STYLES = {
  section: "mx-4 mt-4 flex flex-col md:mx-18.75",
  serviceButton: "text-salon-secondary cursor-pointer text-xl p-[10px]",
  navigationButton:
    "border-salon-border text-white bg-salon-primary hover:bg-salon-primary-dark hover:text-salon-secondary flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full border",
  servicesContainer: "self-center flex justify-center gap-[20px]",
  carousel: "w-full self-center py-4 md:max-w-[608px] lg:max-w-[888px]",
  activeServiceButton:
    "bg-white border-b-2 border-salon-secondary rounded-t-md",
};

type Props = {
  services: {
    url: string;
    title: string;
    description: string;
    code: string;
  }[];
  isExpanded: boolean;
  serviceCategories: {
    value: string;
    name: string;
  }[];
  isActiveCategory: string;
  onCategoryClick: (value: string) => void;
};

export const ListServicesSection = ({
  services,
  isExpanded,
  serviceCategories,
  isActiveCategory,
  onCategoryClick,
}: Props) => {
  const renderServices = () => {
    switch (isExpanded) {
      case false:
        return (
          <Carousel
            opts={{
              align: "start",
            }}
            className={STYLES.carousel}
          >
            <CarouselContent className="md:-ml-6">
              {services.slice(0, 5).map((card, index) => (
                <CarouselItem
                  key={index}
                  className="flex basis-full justify-center pl-0 md:basis-76 md:justify-start md:pl-6"
                >
                  <Card
                    url={card.url}
                    title={card.title}
                    description={card.description}
                    code={card.code}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className={`${STYLES.navigationButton} left-2 md:-left-12`}
            />
            <CarouselNext
              className={`${STYLES.navigationButton} right-2 md:-right-12`}
            />
          </Carousel>
        );
      case true:
        return (
          <div className="grid grid-cols-[repeat(4,280px)] justify-center gap-4 py-4">
            {services.map((card, index) => (
              <Card
                key={index}
                url={card.url}
                title={card.title}
                description={card.description}
                code={card.code}
              />
            ))}
          </div>
        );
    }
  };

  return (
    <motion.section
      className={STYLES.section}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <div className={STYLES.servicesContainer}>
        {serviceCategories.map((service) => (
          <button
            className={cn(
              STYLES.serviceButton,
              isActiveCategory === service.value && STYLES.activeServiceButton,
            )}
            key={service.value}
            onClick={() => onCategoryClick(service.value)}
          >
            {service.name}
          </button>
        ))}
      </div>
      {renderServices()}
    </motion.section>
  );
};
