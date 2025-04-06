import { Cam } from "~/components/ui/cam"
import { Chat } from "~/components/ui/chat"
import type { Route } from "./+types/route"

export const loader = ({ request }: Route.LoaderArgs) => {
  const url = new URL(request.url)
  return {
    camName: url.searchParams.get("cam")?.toString()
  }
}

export default function SingleCam({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex w-full h-full items-center justify-evenly">
      <Cam name={loaderData.camName} size="big" />
      <Chat />
    </div>
  )
}
