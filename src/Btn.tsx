import { HTMLAttributes, ReactNode } from "react";
import cn from "./utils/cn";

interface TProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function Btn({ className, children, ...attrs }: TProps) {
  return (
    <button className={cn("p-1 rounded bg-orange-400", className)} {...attrs}>
      {children}
    </button>
  );
}
