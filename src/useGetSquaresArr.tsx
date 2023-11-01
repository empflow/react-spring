import makeArr from "./makeArr";
import { SQUARES_AMOUNT } from "./App";
import { useState } from "react";
import { SetState } from "./types";

interface TProps {
  isSquaresVisible: boolean;
}

type TReturn = [number[], SetState<number[]>] | [number[], null];

export default function useGetSquaresArr({
  isSquaresVisible,
}: TProps): TReturn {
  const state = useState(makeArr(SQUARES_AMOUNT));

  if (!isSquaresVisible) return [[], null];
  return state;
}
