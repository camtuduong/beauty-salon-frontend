"use client";

import { Button } from "@/src/components/Button";
import { ArrowRight } from "@/src/components/Icons/ArrowRight";
import {
  useScrollDirection,
  ScrollDirection,
} from "@/src/hooks/useScrollDirection";
import { cn } from "@/src/lib/utils";
import { useLenis } from "lenis/react";

const STYLES = {
  container(direction: ScrollDirection) {
    return `fixed top-8 left-1/2 z-100 flex w-[95%] -translate-x-1/2 justify-between rounded-[10px] bg-white/40 px-2.5 py-1.25 backdrop-blur-md transition-transform duration-500 ${direction === "down" ? "-translate-y-40" : ""}`;
  },
  nameContainer: "m-2.5 flex flex-col items-start gap-2 cursor-pointer",
  textName: "font-playfair text-salon-heading text-2xl font-semibold ",
  nav: "text-salon-heading flex items-center gap-8 text-sm",
  navItem:
    "cursor-pointer text-foreground font-bold after:bg-salon-primary-hover relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100",
};

export const Header = () => {
  const nav = [
    {
      id: "services",
      label: "Services",
    },
    {
      id: "feedback",
      label: "Feedback",
    },
    {
      id: "contact",
      label: "Contact",
    },
  ];

  const direction = useScrollDirection();
  const lenis = useLenis();

  const handleClick = (id: string) => {
    const target = document.getElementById(id);

    if (!target) return;

    if (lenis) {
      lenis.scrollTo(target, {
        duration: 1.2,
        offset: id === "hero" ? 0 : -24,
      });
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={cn(STYLES.container(direction))}>
      <button
        className={STYLES.nameContainer}
        onClick={() => handleClick("hero")}
      >
        <span className={STYLES.textName}>Natural Touch</span>
        <span className="text-salon-heading">Beauty Salon</span>
      </button>
      <nav className={STYLES.nav}>
        <ul className="flex gap-8">
          {nav.map((item) => (
            <li key={item.id}>
              <button
                className={STYLES.navItem}
                onClick={() => handleClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <Button className="flex items-center gap-2">
          Book Now <ArrowRight className="text-white" />
        </Button>
      </nav>
    </header>
  );
};
