import { Cam, Layout } from '@/ui'

type PageProps = {
  searchParams: {
    cam: string
    cam_position: 'top_left' | 'top_right' | 'bottom_right' | 'bottom_left'
  }
}

export default function SingleCamWithScreen({ searchParams }: PageProps) {
  return (
    <Layout className='bg-none bg-chroma relative'>
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
    </Layout>
  )
}
