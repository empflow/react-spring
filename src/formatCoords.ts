export default function formatCoords({ x, y }: { x: number; y: number }) {
  return {
    x: parseFloat(x.toFixed(0)),
    y: parseFloat(y.toFixed(0)),
  };
}
