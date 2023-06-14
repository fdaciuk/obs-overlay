import { Cam, Screen } from '@/ui'

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
        bg-chroma
        flex
        flex-col
        h-[1080px]
        relative
        w-[1920px]
      `}
    >
      <div
        className={`
          absolute
          ${searchParams.cam_position === 'top_left' ? 'top-6 left-6' : ''}
          ${searchParams.cam_position === 'top_right' ? 'top-6 right-6' : ''}
          ${searchParams.cam_position === 'bottom_right' ? 'bottom-6 right-6' : ''}
          ${searchParams.cam_position === 'bottom_left' ? 'bottom-6 left-6' : ''}
        `}
      >
        <Cam name={searchParams.cam} size='mini' style='2' />
      </div>
    </main>
  )
}
