import Img from "next/image";

type Props = {
  url: string;
  title: string;
  description: string;
  code: string;
};

export const Card = ({ url, title, description, code }: Props) => {
  return (
    <div className="flex h-99 w-70 flex-col gap-2.5 rounded-[20px] border border-[#EED6C4] bg-white p-5">
      <Img src={url} alt="Card image" width={300} height={200} />
      <h3 className="text-xl font-semibold text-[#35393C]">{title}</h3>
      <p className="text-[14px] font-light text-[#6B4F4F]">{description}</p>
      <div className="flex justify-between">
        <span className="text-[14px] font-light text-[#6B4F4F]">From</span>
        <span className="text-[16px] font-semibold text-[#415E72]">{code}</span>
      </div>
      <button className="mt-2 rounded-[10px] bg-[#415E72] px-4 py-2 text-white">
        Book Now
      </button>
    </div>
  );
};
