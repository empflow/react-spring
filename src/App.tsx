import { useDrag } from "@use-gesture/react";
import { useState } from "react";
import formatCoords from "./formatCoords";

interface TPos {
  x: null | number;
  y: null | number;
}

function App() {
  const [dragPos, setDragPos] = useState<TPos>({ x: null, y: null });
  const [isDragging, setIsDragging] = useState(false);

  const bindDrag = useDrag(({ xy: [x, y], dragging }) => {
    setDragPos(formatCoords({ x, y }));
    if (dragging !== undefined) setIsDragging(dragging);
  });

  return (
    <main {...bindDrag()} className="min-h-screen touch-none">
      <div className="flex flex-col gap-1 select-none">
        {isDragging ? (
          <>
            <p>x: {dragPos.x}</p>
            <p>y: {dragPos.y}</p>
          </>
        ) : (
          "Not dragging"
        )}
      </div>
    </main>
  );
}

export default App;
