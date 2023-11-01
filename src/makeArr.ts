export default function makeArr(items: number) {
  const arr = [];
  for (let i = 0; i < items; i++) arr.push(i);
  return arr;
}

export function makeArrWithCustomVal<T>(items: number, getValFn: () => T) {
  const arr = [];
  for (let i = 0; i < items; i++) arr.push(getValFn());
  return arr;
}
