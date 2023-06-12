import { Cam, Chat, Screen } from '@/ui'

type PageProps = {
  searchParams: {
    cam: string
    cam_position: 'top_left' | 'top_right' | 'bottom_right' | 'bottom_left'
  }
}

export default function SingleCamWithScreen({ searchParams }: PageProps) {
  return (
    <main
      className={`
        bg-[url("/bg-overlay.png")]
        flex
        flex-col
        h-[1080px]
        w-[1920px]
      `}
    >
      <div
        className={`
          flex
          justify-evenly
          py-6
        `}
      >
        <Screen height={800} />
        <Chat width={440} />
      </div>
      <div
        className={`
          relative
          top-10
          left-5
          flex
          justify-end
          pr-10
        `}
      >
        <Cam name={searchParams.cam} size='mini' />
      </div>
    </main>
  )
}
