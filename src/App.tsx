import {
  animated,
  useChain,
  useSpring,
  useSpringRef,
  useTransition,
} from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useEffect, useState } from "react";
import cn from "./utils/cn";
import useMeasure, { RectReadOnly } from "react-use-measure";
import data from "./data";
import useIsScreenWidthOverBreakpoint from "./useIsScreenWidthOverBreakpoint";

export const CONTAINER_PADDING_PX = 24;

function getResolvedDimensions({ width, height }: RectReadOnly) {
  let smallerVal = width > height ? height : width;
  return smallerVal - CONTAINER_PADDING_PX * 2;
}

function getResolvedFontSize(isMobile: boolean) {
  if (isMobile) return 10;
  return 16;
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [containerRef, containerDimensions] = useMeasure();
  const resolvedDimensions = getResolvedDimensions(containerDimensions);
  const isMobile = !useIsScreenWidthOverBreakpoint("sm");
  const fontSize = getResolvedFontSize(isMobile);

  const containerSpringApi = useSpringRef();
  const containerSpring = useSpring({
    ref: containerSpringApi,
    x: 0,
    y: 0,
    width: isOpen ? resolvedDimensions : 100,
    height: isOpen ? resolvedDimensions : 100,
    background: isOpen ? "blue" : "orange",
  });

  const bindDrag = useDrag(({ movement: [x, y], dragging }) => {
    if (dragging) containerSpringApi.start({ x, y, immediate: true });
    else {
      containerSpringApi.start({ x: 0, y: 0 });
      toggleContainer();
    }
  });

  function toggleContainer() {
    setIsOpen((prev) => !prev);
  }

  const itemsTransApi = useSpringRef();
  const itemsTrans = useTransition(isOpen ? data : [], {
    ref: itemsTransApi,
    from: { opacity: 0, scale: 0, fontSize: 0 },
    enter: { opacity: 1, scale: 1, fontSize },
    leave: { opacity: 0, scale: 0, fontSize: 0 },
    trail: 100 / data.length,
  });

  useEffect(() => {
    itemsTransApi.update({ fontSize });
  }, [isMobile]);

  useChain(
    isOpen
      ? [containerSpringApi, itemsTransApi]
      : [itemsTransApi, containerSpringApi],
    isOpen ? [0, 0] : [0, 0]
  );

  return (
    <main
      ref={containerRef}
      className={cn(
        `min-h-screen overflow-hidden w-full flex justify-center items-center`
      )}
      style={{ padding: CONTAINER_PADDING_PX }}
    >
      <animated.div
        {...bindDrag()}
        style={containerSpring}
        className="grid cursor-grab active:cursor-grabbing grid-flow-dense grid-cols-5 gap-2 p-2 rounded place-content-start touch-none select-none will-change-[width,height,background,transform]"
      >
        {itemsTrans((style, item) => (
          <animated.div
            className="flex p-1 text-center justify-center w-full items-center rounded aspect-square will-change-[scale,opacity,font-size]"
            style={{ ...style, background: item.css }}
          >
            {item.name}
          </animated.div>
        ))}
      </animated.div>
    </main>
  );
}

export default App;
