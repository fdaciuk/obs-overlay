type CamProps = {
  name?: string
  size?: "mini" | "medium" | "big"
  style?: "1" | "2"
}

const proportion = {
  mini: {
    h: 0.159,
    v: 0.154,
  },
  medium: {
    h: 0.322,
    v: 0.321,
  },
  big: {
    h: 0.469,
    v: 0.463,
  },
} as const

export function Cam({ name = "@unknown", style = "1", size = "big" }: CamProps) {
  const finalWidth = `calc(var(--page-width) * ${proportion[size].h})`
  const finalHeight = `calc(var(--page-height) * ${proportion[size].v})`

  const CamComp = style === "1" ? Cam1 : Cam2

  return (
    <CamComp
      name={name}
      width={finalWidth}
      height={finalHeight}
      textSize="text-xl"
    />
  )
}

type CamInternalProps = {
  name: string
  width: string
  height: string
  textSize: string
}

function Cam1({ name, width, height, textSize }: CamInternalProps) {
  return (
    <div
      className={`
          bg-chroma
          border-2
          border-yellow-500
          rounded-2xl
          relative
        `}
      style={{ width, height }}
    >
      <p className={`absolute bottom-[-50px] w-full text-center ${textSize}`}>
        {name}
      </p>
    </div>
  )
}

function Cam2({ name, width, height, textSize }: CamInternalProps) {
  return (
    <div
      className={`
        border-2
        _border-zinc-800
        _bg-zinc-800
        border-yellow-500
        bg-yellow-500
        rounded-md
        rounded-b-2xl
        relative
        pb-6
      `}
      style={{ width, height: `calc(${height} + 30px)` }}
    >
      <div
        className={`
          bg-chroma
          rounded-md
          rounded-b-2xl
          absolute
          top-0
          left-0
        `}
        style={{ width: `calc(${width} - 4px)`, height: `calc(${height} - 10px)` }}
      >
        <p className={`absolute -bottom-8 w-full text-center text-gray-800 ${textSize}`}>
          {name}
        </p>
      </div>
    </div>
  )
}

