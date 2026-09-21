import { ArrowRight } from "@/src/components/Icons/ArrowRight";
import Image from "next/image";

const STYLES = {
  container:
    "border-salon-border flex h-99 w-70 flex-col gap-2.5 rounded-[20px] border bg-white p-5",
  button:
    "border-salon-secondary text-salon-secondary hover:bg-salon-secondary mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-full border bg-transparent px-4 py-2 transition-colors duration-300 hover:text-white",
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

export const Card = ({ url, title, description, code }: Props) => {
  return (
    <div className={STYLES.container}>
      <Image src={url} alt="Card image" width={300} height={200} />
      <h3 className={STYLES.title}>{title}</h3>
      <p className={STYLES.description}>{description}</p>
      <div className="flex justify-between">
        <span className={STYLES.description}>From</span>
        <span className={STYLES.code}>{code}</span>
      </div>
      <button className={STYLES.button}>
        Book Now <ArrowRight className="text-salon-secondary" />
      </button>
    </div>
  );
};
