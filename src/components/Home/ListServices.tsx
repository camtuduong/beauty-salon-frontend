import { Card, SkeletonCard } from "@/src/components/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import { Service } from "@/src/types/service";

type Props = {
  services: Service[];
  isLoading: boolean;
  isExpanded: boolean;
  STYLES: {
    carousel: string;
    navigationButton: string;
  };
};

export const ListServices = ({
  services,
  isLoading,
  isExpanded,
  STYLES,
}: Props) => {
  console.log({ services, isLoading, isExpanded });

  const renderServices = () => {
    if (isLoading) {
      const skeletonCards = Array.from({ length: 3 }, (_, index) => (
        <SkeletonCard key={index} />
      ));

      if (isExpanded) {
        return (
          <div className="grid grid-cols-[repeat(4,280px)] justify-center gap-4 py-4">
            {skeletonCards}
          </div>
        );
      }

      return (
        <Carousel
          opts={{
            align: "start",
          }}
          className={STYLES.carousel}
        >
          <CarouselContent className="md:-ml-6">
            {skeletonCards.map((card, index) => (
              <CarouselItem
                key={index}
                className="flex basis-full justify-center pl-0 md:basis-76 md:justify-start md:pl-6"
              >
                {card}
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
    }

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

  return <>{renderServices()}</>;
};
