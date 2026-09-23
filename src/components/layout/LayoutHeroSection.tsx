import type { ReactNode } from "react";

export const LayoutHeroSection = ({ children }: { children: ReactNode }) => {
  return (
    <section id="hero" className="bg-salon-surface relative h-screen w-full">
      {children}
    </section>
  );
};
