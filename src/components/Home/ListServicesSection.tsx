import { Button } from "@/src/components/Button";
import { Card } from "@/src/components/Card";
import { ArrowLeft } from "@/src/components/Icons/ArrowLeft";
import { ArrowRight } from "@/src/components/Icons/ArrowRight";

const STYLES = {
  section: "mx-18.75 mt-4 flex flex-col",
  serviceButton: "text-salon-secondary cursor-pointer text-xl",
  navigationButton:
    "border-salon-border bg-salon-secondary flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full border",
  arrowIcon: "text-salon-border size-4",
  servicesContainer: "mt-5 flex justify-center space-x-4",
  cardsContainer: "flex items-center justify-center gap-8.75 p-4",
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
      <div className={STYLES.cardsContainer}>
        <button className={STYLES.navigationButton}>
          <ArrowLeft className={STYLES.arrowIcon} />
        </button>

        {cards.map((card, index) => (
          <Card
            key={index}
            url={card.url}
            title={card.title}
            description={card.description}
            code={card.code}
          />
        ))}
        <button className={STYLES.navigationButton}>
          <ArrowRight className={STYLES.arrowIcon} />
        </button>
      </div>
      <Button className={STYLES.button}>
        More <ArrowRight className="text-salon-border" />
      </Button>
    </section>
  );
};
