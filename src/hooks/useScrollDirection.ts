import { useState, useEffect } from "react";

export type ScrollDirection = "up" | "down" | null;

export const useScrollDirection = (threshold = 5) => {
  const [direction, setDirection] = useState<ScrollDirection>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY; // lưu vị trí cuộn cuối cùng
    let ticking = false; // cờ để kiểm tra xem requestAnimationFrame có đang chờ xử lý không

    const updateDirection = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const delta = currentScrollY - lastScrollY;

      if (Math.abs(delta) >= threshold) {
        setDirection(delta > 0 ? "down" : "up");
        lastScrollY = currentScrollY;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateDirection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return direction;
};
