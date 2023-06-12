import { Cam, Chat } from '@/ui'

type PageProps = {
  searchParams: {
    cam: string
  }
}

export default function SingleCam({ searchParams }: PageProps) {
  return (
    <main
      className={`
        bg-[url("/bg-overlay.png")]
        flex
        h-[1080px]
        items-center
        justify-evenly
        w-[1920px]
      `}
    >
      <Cam name={searchParams.cam} size='big' />
      <Chat />
    </main>
  )
}
