import { HTMLAttributes, ReactNode, forwardRef } from "react";
import { animated } from "@react-spring/web";
import cn from "./utils/cn";

interface TProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Btn = forwardRef<HTMLButtonElement, TProps>(
  ({ className, children, ...attrs }, ref) => {
    return (
      <animated.button
        ref={ref}
        className={cn("p-1 rounded bg-orange-400", className)}
        {...attrs}
      >
        {children}
      </animated.button>
    );
  }
);

export default animated(Btn);
