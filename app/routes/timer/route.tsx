import { Chat } from "~/components//ui/chat"
import { Timer } from "./timer"
import type { Route } from "./+types/route"
import type { loader as rootLoader } from "~/root"
import { useRouteLoaderData } from "react-router"
import { not } from "~/utils/not"
import { cn } from "~/utils/cn"

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
  const rootLoaderData = useRouteLoaderData<typeof rootLoader>("root")

  if (not(rootLoaderData)) {
    throw new Error("TimerPage: This error should be unreachable.")
  }

  const is1440p = rootLoaderData.resolution === "1440p"

  return (
    <div className="flex w-full h-full items-center justify-evenly">
      <div className="flex-col justify-center text-center w-[1200px]">
        <h1 className={cn("text-6xl mb-10 text-yellow-500", is1440p && "text-7xl")}>{title}</h1>
        <p className={cn("text-4xl mb-24")}>{description}</p>
        <Timer className={cn("text-[10rem] text-yellow-500", is1440p && "text-[12rem]")} startTime={startTime} />
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
