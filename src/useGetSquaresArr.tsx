import makeArr from "./makeArr";
import { SQUARES_AMOUNT } from "./App";

interface TProps {
  isSquaresVisible: boolean;
}

export default function useGetSquaresArr({ isSquaresVisible }: TProps) {
  if (!isSquaresVisible) return [];
  return makeArr(SQUARES_AMOUNT);
}
