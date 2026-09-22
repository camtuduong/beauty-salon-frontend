import { Star } from "@/src/components/Icons/Star";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/src/components/ui/avatar";

type Props = {
  testimonial: string;
  avatarSrc: string;
  avatarFallback: string;
  userName: string;
  starRating: number;
};
export const Tab = ({
  testimonial,
  avatarSrc,
  avatarFallback,
  userName,
  starRating,
}: Props) => {
  return (
    <div className="flex h-70.25 w-full max-w-100 flex-col items-start justify-center gap-4.75 rounded-[24px] bg-white px-8 py-6 select-none">
      <p className="font-playfair text-salon-tab-title text-[24px] font-semibold">
        {testimonial}
      </p>
      <div className="flex items-start gap-4.75">
        <Avatar className="h-17.5 w-17.5">
          <AvatarImage src={avatarSrc} alt="Client Avatar" />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2 self-center">
          <p className="text-[16px] text-black">{userName}</p>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} rate={index < starRating} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
