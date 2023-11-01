import {
  AnimatedProps,
  animated,
  config,
  easings,
  useSpring,
  useSpringRef,
} from "@react-spring/web";
import { CSSProperties, useEffect, useState } from "react";
import cn from "./utils/cn";

interface TProps {
  style: CSSProperties;
  toggleSquares: () => void;
}

function Square({ style, toggleSquares }: AnimatedProps<TProps>) {
  const api = useSpringRef();
  const spring = useSpring({
    ref: api,
    from: { rotate: -2 },
    to: { rotate: 2 },
    loop: {
      reverse: true,
    },
    config: { easing: easings.easeInOutQuad, duration: 105 },
  });

  useEffect(() => {
    api.start();
    return () => {
      api.stop();
    };
  }, [api, spring]);

  return (
    <animated.div className="m-auto" style={style}>
      <animated.div
        onClick={toggleSquares}
        className={cn(
          "rounded m-auto w-full h-full bg-green-700 cursor-zoom-out"
        )}
        style={spring}
      ></animated.div>
    </animated.div>
  );
}

export default animated(Square);
