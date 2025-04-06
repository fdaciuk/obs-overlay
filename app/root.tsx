import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "react-router"

import type { Route } from "./+types/root"
import "./app.css"

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Sora:wght@700&display=swap",
  },
]

export const loader = ({ request }: Route.LoaderArgs) => {
  const url = new URL(request.url)
  const resolution = url.searchParams.get("resolution")?.toString() ?? "1080p"

  return {
    pageWidth: resolution === "1080p" ? "1920" : "2560",
    pageHeight: resolution === "1080p" ? "1080" : "1440",
    resolution,
  }
}

export function Layout({ children }: React.PropsWithChildren) {
  const { pageWidth, pageHeight } = useLoaderData<typeof loader>()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <style>
          {`
          :root {
          --page-width: ${pageWidth}px;
          --page-height: ${pageHeight}px;
          } 
          `}
        </style>
      </head>
      <body className={`overflow-hidden h-dvh`}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!"
  let details = "An unexpected error occurred."
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error"
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
