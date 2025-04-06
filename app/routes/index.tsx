import { Link } from "react-router";

export default function Index() {
  return (
    <div className="w-full h-full p-5">
      <ul className="list-disc grid gap-3">
        <li><Link prefetch="render" to={makeLink("/single-cam", { cam: "@fdaciuk" })}>Single Cam</Link></li>

        {/* <li> */}
        {/*   Single Cam + Chat + Screen */}
        {/*   <ul className="list-inside list-disc"> */}
        {/*     {miniCamPositions.map(c => ( */}
        {/*       <li key={c.cam_position}> */}
        {/*         <Link prefetch="render" to={makeLink("/single-cam-chat-screen", { cam: "@fdaciuk", cam_position: c.cam_position })}> */}
        {/*           {c.title} */}
        {/*         </Link> */}
        {/*       </li> */}
        {/*     ))} */}
        {/*   </ul> */}
        {/* </li> */}

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

        {/* <li> */}
        {/*   <Link prefetch="render" to={makeLink("/double-cam", { */}
        {/*     cam1: "@fdaciuk", */}
        {/*     cam2: "@vmarcosp", */}
        {/*   })}> */}
        {/*     Double Cam */}
        {/*   </Link> */}
        {/* </li> */}

        <li><Link prefetch="render" to="/timer/setup">Timer</Link></li>
      </ul>
    </div>
  )
}

type CamPosition = "top_left" | "top_right" | "bottom_left" | "bottom_right"
type MakeLinkSearchParams =
  | { cam: string, cam_position?: CamPosition }
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
    cam_position: "bottom_left",
    title: "Bottom Left",
  },
  {
    cam_position: "bottom_right",
    title: "Bottom Right",
  },
]

