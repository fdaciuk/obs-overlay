'use client'

import { useEffect } from 'react'
import useTimer from '@fdaciuk/use-timer'

type TimerProps = {
  startTime: string
  className?: string
}

export function Timer({ startTime, className = '' }: TimerProps) {
  const { start, minutes, seconds } = useTimer(startTime)

  useEffect(() => {
    start()
  }, [start])

  return (
    <div className={className}>{minutes}:{seconds}</div>
  )
}
