import { Cam, Chat, Layout } from '@/ui'

type PageProps = {
  searchParams: {
    cam: string
  }
}

export default function SingleCam({ searchParams }: PageProps) {
  return (
    <Layout className='items-center justify-evenly'>
      <Cam name={searchParams.cam} size='big' />
      <Chat />
    </Layout>
  )
}
