import { UseSpringProps, animated, useSpring } from "@react-spring/web";
import { HTMLAttributes, ReactNode } from "react";
import useMeasure from "react-use-measure";

interface TProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  children: ReactNode;
  springProps?: UseSpringProps;
}

const defaultSpringProps: UseSpringProps = {
  config: {
    duration: 200,
  },
};

export default function DynamicHeight({
  isOpen,
  children,
  springProps = defaultSpringProps,
  ...attrs
}: TProps) {
  const [childrenContainerRef, { height }] = useMeasure();
  const spring = useSpring({
    height: isOpen ? height : 0,
    opacity: isOpen ? 1 : 0,
    ...springProps,
  });

  return (
    <animated.div className="overflow-hidden" style={spring}>
      <div {...attrs} ref={childrenContainerRef}>
        {children}
      </div>
    </animated.div>
  );
}
