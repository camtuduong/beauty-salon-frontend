import type { ReactNode } from "react";
import { cn } from "@/src/lib/utils";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};
export const Button = ({ children, className, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "cursor-pointer rounded-full border border-[#EED6C4] bg-[#17313E] px-4 py-2 font-semibold text-white transition-colors duration-300 hover:bg-[#0e212b]",
        className,
      )}
    >
      {children}
    </button>
  );
};
