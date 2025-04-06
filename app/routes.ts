import { type RouteConfig, index, layout, route } from "@react-router/dev/routes"

export default [
  index("routes/index.tsx"),

  layout("layouts/main-layout.tsx", [
    route("double-cam", "routes/double-cam/route.tsx"),
    route("single-cam", "routes/single-cam/route.tsx"),
    route("single-cam-chat-screen", "routes/single-cam-chat-screen/route.tsx"),
    route("single-cam-screen", "routes/single-cam-screen/route.tsx"),
    route("timer", "routes/timer/route.tsx"),
    route("timer/setup", "routes/timer.setup/route.tsx"),
  ])
] satisfies RouteConfig
