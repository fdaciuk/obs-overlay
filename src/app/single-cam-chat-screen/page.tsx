import { Cam, Chat, Layout, Screen } from '@/ui'

type PageProps = {
  searchParams: {
    cam: string
    cam_position: 'top_left' | 'top_right' | 'bottom_right' | 'bottom_left'
  }
}

export default function SingleCamWithScreen({ searchParams }: PageProps) {
  return (
    <Layout className='flex-col'>
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
          top-0
          left-5
          flex
          justify-end
          pr-10
        `}
      >
        <Cam name={searchParams.cam} size='mini' />
      </div>
    </Layout>
  )
}
