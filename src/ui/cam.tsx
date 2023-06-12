import { Glow, NoGlow } from '@/ui'

type CamProps = {
  name: string
  glow?: boolean
  size?: 'mini' | 'medium' | 'big'
}
// , width = 618, height = 347
export function Cam({ name, glow, size = 'big' }: CamProps) {
  const Container = !!glow ? Glow : NoGlow
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

  return (
    <Container>
      <div
        className={`
          bg-chroma
          border-2
          border-yellow-500
          rounded-2xl
          relative
          bottom-[50px]
        `}
        style={{ width: finalWidth, height: finalHeight }}
      >
        <p className={`absolute bottom-[-50px] w-full text-center ${textSize}`}>
          {name}
        </p>
      </div>
    </Container>
  )
}
