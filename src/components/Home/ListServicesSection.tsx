import { ListServices } from "@/src/components/Home/ListServices";
import { Skeleton } from "@/src/components/ui/skeleton";
import { cn } from "@/src/lib/utils";
import { ServiceCategory, Service } from "@/src/types/service";

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
  services: Service[];
  isLoading: boolean;
  isCategoriesLoading: boolean;
  isExpanded: boolean;
  serviceCategories: ServiceCategory[];
  isActiveCategory: string;
  onCategoryClick: (value: string) => void;
};

export const ListServicesSection = ({
  services,
  isLoading,
  isCategoriesLoading,
  isExpanded,
  serviceCategories,
  isActiveCategory,
  onCategoryClick,
}: Props) => {
  if (
    !isLoading &&
    !isCategoriesLoading &&
    (!services || services.length === 0)
  ) {
    return null;
  }

  return (
    <section className={STYLES.section}>
      <div className={STYLES.servicesContainer}>
        {isCategoriesLoading
          ? Array.from({ length: 4 }, (_, index) => (
              <Skeleton
                className="h-12 w-24 shrink-0 rounded-t-md"
                key={index}
              />
            ))
          : serviceCategories.map((service) => (
              <button
                className={cn(
                  STYLES.serviceButton,
                  isActiveCategory === service.slug &&
                    STYLES.activeServiceButton,
                )}
                key={service.id}
                onClick={() => onCategoryClick(service.slug)}
              >
                {service.name}
              </button>
            ))}
      </div>
      <ListServices
        services={services ?? []}
        isLoading={isLoading}
        isExpanded={isExpanded}
        STYLES={STYLES}
      />
    </section>
  );
};
