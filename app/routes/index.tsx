import { Link } from "react-router";

export default function Index() {
  return (
    <div className="w-full h-full p-10">
      <h1 className="text-3xl mb-4">1080p</h1>
      <ul className="list-disc grid gap-3">
        <li><Link prefetch="render" to={makeLink("/single-cam", { cam: "@fdaciuk" })}>Single Cam</Link></li>

        <li>
          Single Cam + Screen
          <ul className="list-inside list-disc">
            {miniCamPositions.map(c => (
              <li key={c.cam_position}>
                <Link prefetch="render" to={makeLink("/single-cam-screen", { cam: "@fdaciuk", cam_position: c.cam_position })}>
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        <li><Link prefetch="render" to="/timer/setup">Timer</Link></li>
      </ul>

      <hr className="my-10" />

      <h1 className="text-3xl mb-4">1440p</h1>
      <ul className="list-disc grid gap-3">
        <li>
          <Link
            prefetch="render"
            to={makeLink("/single-cam", { 
              resolution: "1440p",
              cam: "@fdaciuk", 
            })}
          >
            Single Cam
          </Link>

        </li>

        <li>
          Single Cam + Screen
          <ul className="list-inside list-disc">
            {miniCamPositions.map(c => (
              <li key={c.cam_position}>
                <Link
                  prefetch="render"
                  to={makeLink("/single-cam-screen", {
                    resolution: "1440p",
                    cam: "@fdaciuk",
                    cam_position: c.cam_position,
                  })}
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        <li>
          <Link prefetch="render" to={makeLink("/timer/setup", { resolution: "1440p" })}>
            Timer
          </Link>

        </li>
      </ul>
    </div>
  )
}

type Vertical = "top" | "middle" | "bottom"
type Horizontal = "left" | "right"
type CamPosition = `${Vertical}_${Horizontal}`

type MakeLinkSearchParams =
  | { cam?: string, cam_position?: CamPosition, resolution?: "1080p" | "1440p" }
  | { cam1: string, cam2: string }

function makeLink(route: string, params?: MakeLinkSearchParams): string {
  return route + (params ? "?" + new URLSearchParams(params) : "")
}

const miniCamPositions: Array<{ cam_position: CamPosition, title: string }> = [
  {
    cam_position: "top_left",
    title: "Top Left",
  },
  {
    cam_position: "top_right",
    title: "Top Right",
  },
  {
    cam_position: "middle_left",
    title: "Middle Left",
  },
  {
    cam_position: "middle_right",
    title: "Middle Right",
  },
  {
    cam_position: "bottom_left",
    title: "Bottom Left",
  },
  {
    cam_position: "bottom_right",
    title: "Bottom Right",
  },
]

