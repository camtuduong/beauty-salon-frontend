import type { ReactNode } from "react";
import { cn } from "@/src/lib/utils";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};
export const Button = ({
  children,
  className,
  onClick,
  type = "button",
}: Props) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(
        "border-salon-border bg-salon-primary hover:bg-salon-primary-hover cursor-pointer rounded-full border px-4 py-2 font-semibold text-white transition-colors duration-300",
        className,
      )}
    >
      {children}
    </button>
  );
};
