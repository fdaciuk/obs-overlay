import { Cam } from "~/components/ui/cam"
import type { Route } from "./+types/route"

export const loader = ({ request }: Route.LoaderArgs) => {
  const url = new URL(request.url)
  return {
    searchParams: {
      cam: url.searchParams.get("cam")?.toString(),
      cam_position: url.searchParams.get("cam_position")?.toString() ?? "top_left"
    }
  }
}

export default function SingleCamWithScreen({ loaderData }: Route.ComponentProps) {
  const { searchParams } = loaderData

  return (
    <div className="flex w-full h-full bg-none bg-chroma relative">
      <div
        className={`
          absolute
          ${searchParams.cam_position === "top_left" ? "top-6 left-6" : ""}
          ${searchParams.cam_position === "top_right" ? "top-6 right-6" : ""}
          ${searchParams.cam_position === "middle_left" ? "top-[50%] -mt-[calc(196px/2)] left-6" : ""}
          ${searchParams.cam_position === "middle_right" ? "top-[50%] -mt-[calc(196px/2)] right-6" : ""}
          ${searchParams.cam_position === "bottom_right" ? "bottom-6 right-6" : ""}
          ${searchParams.cam_position === "bottom_left" ? "bottom-6 left-6" : ""}
        `}
      >
        <Cam name={searchParams.cam} size="mini" style="2" />
      </div>
    </div>
  )
}
