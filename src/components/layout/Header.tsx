import { Button } from "@/src/components/Button";
import { ArrowRight } from "@/src/components/Icons/ArrowRight";

export const Header = () => {
  return (
    <header className="absolute top-10 left-1/2 z-100 flex w-[95%] -translate-x-1/2 justify-between rounded-[10px] bg-white px-2.5 py-1.25">
      <div className="m-2.5 flex flex-col items-start gap-2">
        <span className="font-playfair text-2xl font-semibold text-[#35393C]">
          Natural Touch
        </span>
        <span className="text-[#35393C]">Beauty Salon</span>
      </div>
      <nav className="flex items-center gap-8 text-sm text-[#35393C]">
        <ul className="flex gap-4">
          <li>Services</li>
          <li>Offers</li>
          <li>Gallery</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <Button className="flex items-center gap-2">
          Book Now <ArrowRight className="text-white" />
        </Button>
      </nav>
    </header>
  );
};
