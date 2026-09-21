import { cn } from "@/src/lib/utils";

type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
};
export const TitleSection = ({
  title,
  subtitle,
  description,
  className,
}: Props) => {
  return (
    <section className={cn("flex flex-col items-center gap-1.25", className)}>
      <p className="text-salon-secondary text-[12px] font-semibold">{title}</p>
      <h2 className="font-playfair text-[32px] leading-[120%] font-semibold text-black">
        {subtitle}
      </h2>
      <p className="text-salon-copy text-[16px] font-light">{description}</p>
    </section>
  );
};
