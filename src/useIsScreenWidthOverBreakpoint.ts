import { useEffect, useState } from "react";

export const twBreakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export default function useIsScreenWidthOverBreakpoint(
  breakpoint: keyof typeof twBreakpoints
) {
  const [isWidthOverBreakpoint, setIsWidthOverBreakpoint] = useState(false);

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);

    function onResize() {
      setIsWidthOverBreakpoint(window.innerWidth > twBreakpoints[breakpoint]);
    }
  }, []);

  return isWidthOverBreakpoint;
}
