import { PropsWithChildren } from 'react'

type LayoutProps = PropsWithChildren<{
  className?: string
}>

export function Layout({ children, className = '' }: LayoutProps) {
  return (
    <main
      className={`
        bg-[url("/bg-overlay.png")]
        flex
        h-[1080px]
        w-[1920px]
        ${className}
      `}
    >
      {children}
    </main>
  )
}
