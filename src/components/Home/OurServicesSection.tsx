import { ListServicesSection } from "@/src/components/Home/ListServicesSection";
import { TitleSection } from "@/src/components/TitleSection";

export const OurServicesSection = () => {
  return (
    <section className="my-11 px-4">
      <TitleSection
        title="SERVICES"
        subtitle="Our Service"
        description="Explore the wide range of beauty services we provide to help you look and feel your best."
      />
      <ListServicesSection />
    </section>
  );
};
