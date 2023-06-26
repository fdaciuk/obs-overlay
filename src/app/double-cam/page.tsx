import { Cam, Chat, Layout } from '@/ui'

type PageProps = {
  searchParams: {
    cam1: string
    cam2: string
  }
}

export default function DoubleCam({ searchParams }: PageProps) {
  return (
    <Layout className='items-center justify-evenly'>
      <Cam name={searchParams.cam1} size='medium' />
      <Cam name={searchParams.cam2} size='medium' />
      <Chat />
    </Layout>
  )
}
