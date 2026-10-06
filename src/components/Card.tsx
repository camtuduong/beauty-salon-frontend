import { ArrowRight } from "@/src/components/Icons/ArrowRight";
import { Skeleton } from "@/src/components/ui/skeleton";
import Image from "next/image";

const STYLES = {
  container:
    "border-salon-border flex h-99 w-70 flex-col gap-2.5 rounded-[20px] border bg-white p-5 select-none",
  button:
    "border-salon-secondary text-salon-secondary hover:bg-salon-secondary hover:text-white mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-full border bg-transparent px-4 py-2 transition-colors duration-300",
  title: "text-salon-heading text-xl font-semibold",
  description: "text-salon-copy text-[14px] font-light",
  code: "text-salon-secondary text-[16px] font-semibold",
};

type Props = {
  url: string;
  title: string;
  description: string;
  code: string;
};

export function SkeletonCard() {
  return (
    <div className={STYLES.container}>
      <Skeleton className="h-48 w-full rounded-none" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-5 w-full" />
      <div className="flex justify-between">
        <Skeleton className="h-5 w-12" />
        <Skeleton className="h-5 w-16" />
      </div>
      <Skeleton className="mt-2 h-10 w-full rounded-full" />
    </div>
  );
}

export const Card = ({ url, title, description, code }: Props) => {
  return (
    <div className={STYLES.container}>
      <Image
        src={url || "/placeholder.jpg"}
        alt="Card image"
        width={300}
        height={200}
        className="h-48 w-full object-cover"
      />
      <h3 className={STYLES.title}>{title}</h3>
      <p className={STYLES.description}>{description}</p>
      <div className="flex justify-between">
        <span className={STYLES.description}>From</span>
        <span className={STYLES.code}>{code}</span>
      </div>
      <button className={STYLES.button}>
        Book Now
        <ArrowRight />
      </button>
    </div>
  );
};
