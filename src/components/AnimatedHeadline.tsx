// src/components/AnimatedHeadline.tsx
'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedHeadlineProps {
    text: string
}

export default function AnimatedHeadline({ text }: AnimatedHeadlineProps) {
    const containerRef = useRef<HTMLParagraphElement>(null)
    const isInView = useInView(containerRef, { once: true })

    return (
        <p
            ref={containerRef}
            className="text-sm text-white uppercase tracking-widest relative flex gap-1"
        >
            {text.split("").map((char, i) => (
                <span
                    key={i}
                    className={`inline-block opacity-0 ${isInView ? 'animate-fade-in' : ''}`}
                    style={{
                        animationDelay: `${i * 0.12}s`,
                        animationFillMode: "forwards",
                    }}
                >
                    {char}
                </span>
            ))}

            {/* Neon-linje visas efter texten skrivits ut */}
            <span
                className={`absolute left-0 -bottom-2 h-1 w-10 bg-indigo-400 rounded-full shadow-[0_0_8px_#818cf8] opacity-0 ${isInView ? 'animate-line-expand' : ''
                    }`}
                style={{ animationDelay: `${text.length * 0.1 + 0.1}s`, animationFillMode: "forwards" }}
            />
        </p>
    )
}
