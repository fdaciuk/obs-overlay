export function Chat() {
  const finalWidth = `calc(var(--page-width) * 0.25)`
  const finalHeight = `calc(var(--page-height) * 0.75)`

  return (
    <div>
      <div
        className={`
          bg-zinc-900
          relative
          rounded-2xl
          text-2xl
        `}
        style={{ width: finalWidth, height: finalHeight }}
      >
        <h2 className='p-6'>Chat</h2>
        <div
          className={`
            rounded-2xl
            p-6
            font-extralight
          `}
          style={{ width: finalWidth, height: `calc(${finalHeight} - 100px)` }}
        >
        </div>
      </div>
    </div>
  )
}

