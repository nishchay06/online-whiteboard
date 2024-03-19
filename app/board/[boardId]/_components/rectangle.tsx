import { RectangleLayer } from "@/types/canvas"

interface RectangleProps {
  id: string
  layer: RectangleLayer
  onPonterDown: (e: React.PointerEvent, layerId: string) => void
  selectionColor?: string
}

export const Rectangle = ({
  id,
  layer,
  onPonterDown,
  selectionColor,
}: RectangleProps) => {
  const { x, y, width, height, fill } = layer
  return (
    <rect
      className='drop-shadow-md'
      onPointerDown={(e) => onPonterDown(e, id)}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
      x={0}
      y={0}
      width={width}
      height={height}
      strokeWidth={1}
      fill='#000'
      stroke='transparent'
    />
  )
}
