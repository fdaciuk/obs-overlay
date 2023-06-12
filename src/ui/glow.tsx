type PropsWithChildren = {
  children: React.ReactNode
}

export function Glow({ children }: PropsWithChildren) {
  return (
    <div className='relative'>
      <div
        className={`
          absolute
          bg-gradient-to-b
          from-pink-600
          to-purple-600
          blur
          -inset-1
          opacity-75
          rounded-2xl
        `}
      />
      {children}
    </div>
  )
}

export function NoGlow({ children }: PropsWithChildren) {
  return (
    <div className='relative'>{children}</div>
  )
}
