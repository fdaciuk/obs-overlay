type Width = {
  width: number
  height?: never
}

type Height = {
  width?: never
  height: number
}

type ScreenProps = Width | Height

export function Screen({ width, height }: ScreenProps) {
  const ratio = 1920 / 1080
  let newWidth = Math.floor(typeof width === 'undefined' ? ratio * height : width)
  let newHeight = Math.floor(typeof height === 'undefined' ? ratio * width : height)
  return (
    <div
      className={`
        bg-chroma
        rounded-2xl
      `}
      style={{ width: newWidth, height: newHeight }}
    />
  )
}
