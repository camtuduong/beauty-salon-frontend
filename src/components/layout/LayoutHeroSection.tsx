import type { ReactNode } from "react";

export const LayoutHeroSection = ({ children }: { children: ReactNode }) => {
  return (
    <section className="relative h-screen w-full bg-[#D8DDE1]">
      {children}
    </section>
  );
};
