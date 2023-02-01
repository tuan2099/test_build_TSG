import { useEffect, useState } from "react";

export const useCurrentViewport = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    }

    return () =>
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
  }, []);

  return { width, isMobile: width < 768 };
};
