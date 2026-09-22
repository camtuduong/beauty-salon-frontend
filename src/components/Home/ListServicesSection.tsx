import { Button } from "@/src/components/Button";
import { Card } from "@/src/components/Card";
import { ArrowRight } from "@/src/components/Icons/ArrowRight";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";

const STYLES = {
  section: "mx-4 mt-4 flex flex-col md:mx-18.75",
  serviceButton: "text-salon-secondary cursor-pointer text-xl",
  navigationButton:
    "border-salon-border text-white bg-salon-primary hover:bg-salon-primary-dark hover:text-salon-secondary flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full border",
  servicesContainer: "mt-5 flex justify-center space-x-4",
  carousel: "w-full self-center py-4 md:max-w-[608px] lg:max-w-[888px]",
  button:
    "bg-salon-secondary flex w-fit cursor-pointer items-center justify-center gap-2 self-center",
};
export const ListServicesSection = () => {
  const services = [
    { value: "hair", name: "Hair" },
    { value: "nails", name: "Nails" },
    { value: "facial", name: "Facial" },
    { value: "makeup", name: "Makeup" },
    { value: "lashes", name: "Lashes" },
  ];

  const cards = [
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

  return (
    <section className={STYLES.section}>
      <div className={STYLES.servicesContainer}>
        {services.map((service) => (
          <button className={STYLES.serviceButton} key={service.value}>
            {service.name}
          </button>
        ))}
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className={STYLES.carousel}
      >
        <CarouselContent className="md:-ml-6">
          {cards.map((card, index) => (
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
      <Button className={STYLES.button}>
        More <ArrowRight className="text-salon-border" />
      </Button>
    </section>
  );
};
