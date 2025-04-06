import { useRouteLoaderData } from "react-router"
import type { loader as rootLoader } from "~/root"
import { not } from "~/utils/not"

export default function TimerSetup() {
  const rootLoaderData = useRouteLoaderData<typeof rootLoader>("root")

  if (not(rootLoaderData)) {
    throw new Error("TimerSetup: This error should be unreachable.")
  }

  return (
    <div className="flex w-full h-full flex-col justify-center text-center">
      <h1 className="text-7xl mb-10 text-yellow-500">Setup Timer</h1>
      <form action="/timer" method="get" className="flex flex-col text-left items-start w-2/5 mx-auto">
        <Label>
          Title<br />
          <Input name="title" defaultValue="Here goes the title" />
        </Label>

        <Label>
          Description<br />
          <Input name="description" defaultValue="the stream is about to start..." />
        </Label>

        <Label>
          Time to start (hh:mm)<br />
          <Input name="startHour" defaultValue="18:30" />
        </Label>

        <input type="hidden" name="resolution" value={rootLoaderData.resolution} />

        <button type="submit" className="text-4xl bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-4 rounded">Enviar</button>
      </form>
    </div>
  )
}

type InputProps = {
  name: string
  defaultValue?: string
}

function Input({ name, defaultValue }: InputProps) {
  return (
    <input type="text" name={name} defaultValue={defaultValue} className="text-black mt-2 mb-10 p-4 w-full bg-white" />
  )
}

function Label({ children }: React.PropsWithChildren) {
  return (
    <label className="text-4xl w-full">{children}</label>
  )
}
