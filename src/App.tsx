import { useDrag } from "@use-gesture/react";
import { useEffect, useState } from "react";
import formatCoords from "./formatCoords";
import useMeasure from "react-use-measure";
import {
  useTransition,
  useSpringRef,
  animated,
  easings,
} from "@react-spring/web";
import Square from "./Square";
import Btn from "./Btn";

interface TPos {
  x: null | number;
  y: null | number;
}

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [containerRef, { height, width }] = useMeasure();
  const api = useSpringRef();
  const transition = useTransition(isVisible, {
    from: { y: "-100%", opacity: 0, height: 0, width: 0 },
    enter: { y: "0%", opacity: 1, height, width },
    leave: { y: "-100%", opacity: 0, height: 0, width: 0 },
    config: { duration: 500, easing: easings.easeInOutQuad },
  });

  const handleClick = () => setIsVisible((prev) => !prev);

  return (
    <main className="min-h-screen touch-none flex items-center flex-col gap-2">
      <Btn onClick={handleClick}>Toggle</Btn>
      <div
        className="min-h-[100px] w-full relative max-w-[200px]"
        ref={containerRef}
      >
        {transition((style, isVisible) => {
          if (isVisible) return <Square style={{ ...style }} />;
          return null;
        })}
        hello
      </div>
    </main>
  );
}

export default App;
