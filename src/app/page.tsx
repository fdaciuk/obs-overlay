import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <li><Link href='/single-cam?cam=@fdaciuk'>Single Cam</Link></li>
      <li><Link href='/single-cam-chat-screen?cam=@fdaciuk&cam_position=bottom_right'>Single Cam + Chat + Screen</Link></li>
      <li><Link href='/single-cam-screen?cam=@fdaciuk&cam_position=bottom_right'>Single Cam + Screen</Link></li>
      <li><Link href='/double-cam?cam1=@fdaciuk&cam2=@vmarcosp'>Double Cam</Link></li>
      <li><Link href='/timer/setup'>Timer</Link></li>
    </ul>
  )
}
