import './globals.css'
import { Sora } from 'next/font/google'

const customFont = Sora({
  subsets: ['latin'],
  weight: '700',
})

export const metadata = {
  title: 'OBS Overlays',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${customFont.className} overflow-hidden`}>{children}</body>
    </html>
  )
}
