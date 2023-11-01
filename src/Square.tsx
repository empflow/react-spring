import { animated, easings, useSpring, useSpringRef } from "@react-spring/web";
import { CSSProperties, useEffect } from "react";
import cn from "./utils/cn";
import { SetState } from "./types";

interface TProps {
  setSquares: SetState<number[]> | null;
  style: CSSProperties;
  index: number;
}

function Square({ style, setSquares, index }: TProps) {
  const api = useSpringRef();
  const spring = useSpring({
    ref: api,
    from: { rotate: -2 },
    to: { rotate: 2 },
    loop: {
      reverse: true,
    },
    config: { easing: easings.easeInOutQuad, duration: 100 },
  });

  useEffect(() => {
    api.start();
    return () => {
      api.stop();
    };
  }, [api, spring]);

  function removeThisSquare() {
    if (!setSquares) return;
    setSquares((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <animated.div onClick={removeThisSquare} className="m-auto" style={style}>
      <animated.div
        className={cn(
          "rounded m-auto w-full h-full bg-green-700 cursor-zoom-out"
        )}
        style={spring}
      ></animated.div>
    </animated.div>
  );
}

export default animated(Square);
