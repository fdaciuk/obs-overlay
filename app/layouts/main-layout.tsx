import { Outlet } from "react-router"

export default function MainLayout() {
  return (
    <main
      className={`
        bg-[url("/bg-overlay.png")]
        flex
        w-(--page-width)
        h-(--page-height)
      `}
    >
      <Outlet />
    </main>
  )
}
