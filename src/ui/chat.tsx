import { Glow, NoGlow } from '@/ui'

type ChatProps = {
  glow?: boolean
  width?: number
}

export function Chat({ glow, width = 395 }: ChatProps) {
  const Container = !!glow ? Glow : NoGlow
  return (
    <Container>
      <div
        className={`
          bg-zinc-900
          h-[800px]
          relative
          rounded-2xl
          text-2xl
        `}
        style={{ width }}
      >
        <h2 className='p-6'>Chat</h2>
        <div
          className={`
            h-[700px]
            rounded-2xl
            p-6
            font-extralight
          `}
          style={{ width }}
        >
        </div>
      </div>
    </Container>
  )
}
