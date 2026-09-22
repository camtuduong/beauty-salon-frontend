"use client";

import { Button } from "@/src/components/Button";
import { ArrowRight } from "@/src/components/Icons/ArrowRight";

const STYLES = {
  container:
    "absolute top-10 left-1/2 z-100 flex w-[95%] -translate-x-1/2 justify-between rounded-[10px] bg-white px-2.5 py-1.25",
  nameContainer: "m-2.5 flex flex-col items-start gap-2",
  textName: "font-playfair text-salon-heading text-2xl font-semibold",
  nav: "text-salon-heading flex items-center gap-8 text-sm",
  navItem:
    "text-foreground font-bold after:bg-salon-primary-hover relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100",
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
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth", // Smooth animation
      block: "start", // Vertically align to the top of the screen
    });
  };

  return (
    <header className={STYLES.container}>
      <div className={STYLES.nameContainer}>
        <span className={STYLES.textName}>Natural Touch</span>
        <span className="text-salon-heading">Beauty Salon</span>
      </div>
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
