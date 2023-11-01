import { ReactNode, useState } from "react";
import DynamicHeight from "./DynamicHeight";
import TreeToggleBtn from "./TreeToggleBtn";
import { config } from "@react-spring/web";

interface TProps {
  children?: ReactNode;
  defaultOpen?: boolean;
  label: string;
}

export default function Tree({ children, defaultOpen = false, label }: TProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      <TreeToggleBtn
        {...{ isOpen, setIsOpen, label, hasChildren: !!children }}
      />
      <DynamicHeight
        springProps={{ config: config.stiff }}
        className="flex flex-col pl-2 gap-2"
        isOpen={isOpen}
      >
        {children}
      </DynamicHeight>
    </div>
  );
}
