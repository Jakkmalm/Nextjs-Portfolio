// src/components/AnimatedCounter.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
    to: number
    duration?: number // total tid för animationen (ms)
    delay?: number // försening innan räknandet börjar (ms)
}

export default function AnimatedCounter({ to, duration = 1000, delay = 0 }: AnimatedCounterProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!isInView) return

        const timeout = setTimeout(() => {
            const startTime = performance.now()

            const step = (timestamp: number) => {
                const progress = Math.min((timestamp - startTime) / duration, 1)
                const value = Math.floor(progress * to)
                setCount(value)
                if (progress < 1) {
                    requestAnimationFrame(step)
                }
            }

            requestAnimationFrame(step)
        }, delay)

        return () => clearTimeout(timeout)
    }, [isInView, to, duration, delay])

    return (
        <span ref={ref}>{count}</span>
    )
}

