type CamProps = {
  name: string
  size?: 'mini' | 'medium' | 'big'
  style?: '1' | '2'
}

export function Cam({ name, style = '1', size = 'big' }: CamProps) {
  let finalWidth = 618
  let finalHeight = 347

  if (size === 'big') {
    finalWidth = 900
    finalHeight = 500
  }

  if (size === 'mini') {
    finalWidth = 305
    finalHeight = 166
  }

  const textSize = size === 'mini' ? 'text-xl' : 'text-xl'
  const CamComp = style === '1' ? Cam1 : Cam2

  return (
    <CamComp
      name={name}
      width={finalWidth}
      height={finalHeight}
      textSize={textSize}
    />
  )
}

type CamInternalProps = {
  name: string
  width: number
  height: number
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
  height = height + 30

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
      style={{ width, height }}
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
        style={{ width: width - 4, height: height - 38 }}
      >
        <p className={`absolute -bottom-8 w-full text-center text-gray-800 ${textSize}`}>
          {name}
        </p>
      </div>
    </div>
  )
}
