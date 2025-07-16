// // src/components/AnimatedCounter.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
    to: number
    duration?: number // override animation duration (ms)
    delay?: number
    prefix?: string
    suffix?: string
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

export default function AnimatedCounter({
    to,
    duration,
    delay = 0,
    prefix = '',
    suffix = '',
}: AnimatedCounterProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!isInView) return

        const finalDuration = duration ?? Math.min(3000, 400 + to * 50)

        const timeout = setTimeout(() => {
            const start = performance.now()

            const animate = (now: number) => {
                const elapsed = now - start
                const progress = Math.min(elapsed / finalDuration, 1)
                const eased = easeOutCubic(progress)
                const currentValue = Math.round(eased * to)
                setCount(currentValue)

                if (progress < 1) {
                    requestAnimationFrame(animate)
                }
            }

            requestAnimationFrame(animate)
        }, delay)

        return () => clearTimeout(timeout)
    }, [isInView, to, duration, delay])

    return <span ref={ref}>{prefix}{count}{suffix}</span>
}


