import { AnimatedProps, animated } from "@react-spring/web";
import { CSSProperties } from "react";
import cn from "./utils/cn";

interface TProps {
  style: CSSProperties;
  toggleSquares: () => void;
}

function Square({ style, toggleSquares }: AnimatedProps<TProps>) {
  return (
    <animated.div
      onClick={toggleSquares}
      className={cn("rounded m-auto bg-green-700 cursor-zoom-out")}
      style={{ ...style }}
    ></animated.div>
  );
}

export default animated(Square);
