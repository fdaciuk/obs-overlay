import { Cam, Chat } from '@/ui'

type PageProps = {
  searchParams: {
    cam1: string
    cam2: string
  }
}

export default function DoubleCam({ searchParams }: PageProps) {
  return (
    <main className='bg-[url("/bg-overlay.png")] flex justify-evenly items-center w-[1920px] h-[1080px]'>
      <Cam name={searchParams.cam1} size='medium' />
      <Cam name={searchParams.cam2} size='medium' />
      <Chat />
    </main>
  )
}
