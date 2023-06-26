import { Layout } from '@/ui'
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
    <Layout className='flex-col justify-center text-center'>
      <h1 className='text-7xl mb-10 text-yellow-500'>{searchParams.title}</h1>
      <p className='text-4xl mb-24'>{searchParams.description}</p>
      <Timer className='text-[11rem] text-yellow-500' startTime={startTime} />
    </Layout>
  )
}

function getStartTime(startHour: string): string {
  const [receivedHour, receivedMinutes] = startHour.split(':')
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
