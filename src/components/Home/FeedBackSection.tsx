import { Comma } from "@/src/components/Icons/Comma";

export const FeedBackSection = () => {
  return (
    <section className="my-20 ml-45 w-full">
      <div className="flex w-1/2 flex-col items-start">
        <Comma className="text-[#415E72]" />
        <h1 className="font-playfair text-5xl font-semibold text-[#35393C]">
          WHY CLIENTS TRUST US
        </h1>
        <h3 className="text-xl font-semibold text-[#6B4F4F]">
          We are committed to gentle, safe beauty care with exceptional
          results.Here’s what our clients say about us.
        </h3>
      </div>
    </section>
  );
};
