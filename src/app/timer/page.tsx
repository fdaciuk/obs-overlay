import { Chat, Layout } from '@/ui'
import { Timer } from './timer'

type TimerPageProps = {
  searchParams: {
    title: string
    description: string
    startHour: string
  }
}

export default function TimerPage({ searchParams }: TimerPageProps) {
  const startTime = getStartTime(searchParams.startHour)

  return (
    <Layout className='items-center justify-evenly'>
      <div className='flex-col justify-center text-center w-[1200px]'>
        <h1 className='text-6xl mb-10 text-yellow-500'>{searchParams.title}</h1>
        <p className='text-4xl mb-24'>{searchParams.description}</p>
        <Timer className='text-[10rem] text-yellow-500' startTime={startTime} />
      </div>
      <Chat />
    </Layout>
  )
}

function getStartTime(startHour: string): string {
  const [receivedHour, receivedMinutes] = startHour.split(':')
  process.env.TZ = 'America/Sao_Paulo'
  const now = new Date()
  const newDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), +receivedHour, +receivedMinutes)

  if (newDate < now) {
    newDate.setDate(newDate.getDate() + 1)
  }

  const dateInSeconds = (newDate.getTime() - now.getTime()) / 1000

  const minutes = Math.floor(dateInSeconds / 60)
  const seconds = Math.floor(dateInSeconds % 60)

  return `${minutes}:${seconds}`
}
