import { Chat } from "~/components//ui/chat"
import { Timer } from "./timer"
import type { Route } from "./+types/route"

export const loader = ({ request }: Route.LoaderArgs) => {
  const url = new URL(request.url)
  const startHour = url.searchParams.get("startHour")?.toString() ?? ""
  return {
    title: url.searchParams.get("title")?.toString() ?? "",
    description: url.searchParams.get("description")?.toString() ?? "",
    startTime: getStartTime(startHour),
  }
}

export default function TimerPage({ loaderData }: Route.ComponentProps) {
  const { title, description,startTime } = loaderData

  return (
    <div className="flex w-full h-full items-center justify-evenly">
      <div className="flex-col justify-center text-center w-[1200px]">
        <h1 className="text-6xl mb-10 text-yellow-500">{title}</h1>
        <p className="text-4xl mb-24">{description}</p>
        <Timer className="text-[10rem] text-yellow-500" startTime={startTime} />
      </div>
      <Chat />
    </div>
  )
}

function getStartTime(startHour: string): string {
  const [receivedHour, receivedMinutes] = startHour.split(":")
  process.env.TZ = "America/Sao_Paulo"
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
