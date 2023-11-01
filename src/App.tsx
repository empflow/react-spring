import { useState } from "react";
import useMeasure from "react-use-measure";
import { useTransition, easings } from "@react-spring/web";
import Square from "./Square";
import Btn from "./Btn";
import useGetSquaresArr from "./useGetSquaresArr";

export const SQUARES_AMOUNT = 1;
export const SQUARE_HEIGHT = 100;

function App() {
  const [isSquaresVisible, setIsSquaresVisible] = useState(false);
  const squaresArray = useGetSquaresArr({ isSquaresVisible });
  const [squaresContainerRef, { width }] = useMeasure();

  const transition = useTransition(squaresArray, {
    from: { y: "-100%", opacity: 0, height: 0, width: 0, marginTop: 0 },
    enter: { y: "0%", opacity: 1, height: SQUARE_HEIGHT, width, marginTop: 4 },
    leave: { y: "-100%", opacity: 0, height: 0, width: 0, marginTop: 0 },
    config: { duration: 500, easing: easings.easeInOutQuad },
    trail: 50,
    keys(item) {
      return item;
    },
  });

  function toggleSquares() {
    return setIsSquaresVisible((prev) => !prev);
  }

  return (
    <main className="min-h-screen touch-none flex items-center flex-col gap-2">
      <Btn onClick={toggleSquares}>Toggle</Btn>
      <div
        className="min-h-[100px] w-full relative max-w-[100px]"
        ref={squaresContainerRef}
      >
        {transition((style, i) => {
          return (
            <Square
              style={{ ...style }}
              {...{ toggleSquares: toggleSquares }}
            />
          );
        })}
        hello
      </div>
    </main>
  );
}

export default App;
