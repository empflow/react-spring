import { AnimatedProps, animated } from "@react-spring/web";
import { CSSProperties } from "react";
import cn from "./utils/cn";

interface TProps {
  style: CSSProperties;
}

function Square({ style }: AnimatedProps<TProps>) {
  return (
    <animated.div
      className={cn("rounded m-auto bg-green-700")}
      style={style}
    ></animated.div>
  );
}

export default animated(Square);
