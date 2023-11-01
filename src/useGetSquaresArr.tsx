import { makeArrWithCustomVal } from "./makeArr";
import { SQUARES_AMOUNT } from "./App";
import { useState } from "react";
import { SetState } from "./types";

interface TProps {
  isSquaresVisible: boolean;
}

type TReturn = [number[], SetState<number[]>] | [null, null];

export default function useGetSquaresArr({
  isSquaresVisible,
}: TProps): TReturn {
  const state = useState(
    makeArrWithCustomVal<number>(SQUARES_AMOUNT, Math.random)
  );

  if (!isSquaresVisible) return [null, null];
  return state;
}
