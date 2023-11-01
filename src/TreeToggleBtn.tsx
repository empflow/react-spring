import { SetState } from "./types";
import cn from "./utils/cn";

interface TProps {
  hasChildren: boolean;
  isOpen: boolean;
  setIsOpen: SetState<boolean>;
  label: string;
}

export default function TreeToggleBtn({
  hasChildren,
  setIsOpen,
  isOpen,
  label,
}: TProps) {
  const toggleBtnContent = getContent(hasChildren, isOpen);

  return (
    <button
      onClick={() => setIsOpen((prev) => !prev)}
      className={cn("flex items-center gap-2", {
        "cursor-default": !hasChildren,
      })}
    >
      <div
        className={cn(
          "w-[16px] h-[16px] border border-black flex justify-center items-center",
          { "text-gray-400": !hasChildren, "border-gray-400": !hasChildren }
        )}
      >
        {toggleBtnContent}
      </div>
      <div>{label}</div>
    </button>
  );
}

function getContent(hasChildren: boolean, isOpen: boolean) {
  if (!hasChildren) return "x";
  if (isOpen) return "-";
  return "+";
}
