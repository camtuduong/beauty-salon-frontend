import { ArrowRight } from "@/src/components/Icons/ArrowRight";
import Image from "next/image";

const STYLES = {
  container:
    "flex h-99 w-70 flex-col gap-2.5 rounded-[20px] border border-[#EED6C4] bg-white p-5",
  button:
    "mt-2 flex items-center justify-center gap-2 rounded-full border border-[#415E72] bg-transparent px-4 py-2 text-[#415E72] cursor-pointer hover:bg-[#415E72] hover:text-white transition-colors duration-300",
  title: "text-xl font-semibold text-[#35393C]",
  description: "text-[14px] font-light text-[#6B4F4F]",
  code: "text-[16px] font-semibold text-[#415E72]",
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
        Book Now <ArrowRight className="text-[#415E72]" />
      </button>
    </div>
  );
};
