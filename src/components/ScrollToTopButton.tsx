import { useState, useRef, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={ref} className="absolute right-4 bottom-4">
      {isVisible && (
        <button
          onClick={handleClick}
          className={`border-salon-border bg-salon-primary hover:bg-salon-primary-hover flex size-12 transform animate-bounce items-center justify-center rounded-[20px] border transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <ArrowUp className="text-white" />
        </button>
      )}
    </div>
  );
};
