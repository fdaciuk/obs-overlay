import { Cam } from "~/components/ui/cam"
import { Chat } from "~/components/ui/chat"
import { Screen } from "~/components/ui/screen"
import type { Route } from "./+types/route"

export const loader = ({ request }: Route.LoaderArgs) => {
  const url = new URL(request.url)
  return {
    searchParams: {
      cam: url.searchParams.get("cam")?.toString(),
    }
  }
}

export default function SingleCamWithChatAndScreen({ loaderData }: Route.ComponentProps) {
  const { searchParams } = loaderData

  return (
    <div className="flex w-full h-full flex-col">
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
        <Cam name={searchParams.cam} size="mini" />
      </div>
    </div>
  )
}
