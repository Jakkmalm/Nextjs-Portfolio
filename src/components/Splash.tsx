// src/components/Splash.tsx
'use client'

import React from 'react'
import { ArrowRight } from '../lib/icons'

interface SplashProps {
    onContinue: () => void
}

export default function Splash({ onContinue }: SplashProps) {
    return (
        <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-blue-600">
            {/* Text-container */}
            <div className="flex flex-col items-center mb-8 space-y-2">
                {/* Rad 1: “Välkommen till” */}
                <div className="flex">
                    <span
                        data-aos="fade-up"
                        data-aos-delay="0"
                        className="inline-block text-5xl font-bold text-white mr-2"
                    >
                        Välkommen
                    </span>
                    <span
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="inline-block text-5xl font-bold text-white"
                    >
                        till
                    </span>
                </div>

                {/* Rad 2: “Min Portfolio” */}
                <div className="flex">
                    <span
                        data-aos="fade-right"
                        data-aos-delay="300"
                        className="inline-block text-5xl font-bold text-white mr-2"
                    >
                        Min
                    </span>
                    <span
                        data-aos="fade-left"
                        data-aos-delay="450"
                        className="inline-block text-5xl font-bold text-white"
                    >
                        Portfolio
                    </span>
                </div>
            </div>

            {/* Knapp */}
            <button
                onClick={onContinue}
                data-aos="fade-up"
                data-aos-delay="650"
                className="relative overflow-hidden px-6 py-3 text-sm text-white bg-white/10 rounded-full backdrop-blur-sm transition duration-500 group inline-flex items-center gap-4 cursor-pointer"
            >
                <span className="relative z-10">Gå vidare</span>
                <ArrowRight
                    size={16}
                    className="relative z-10 transition-transform duration-500 group-hover:translate-x-1"
                />
                {/* Hover-effekt bakom */}
                <span className="absolute left-0 top-0 h-full w-0 bg-white/20 transition-all duration-300 ease-in-out group-hover:w-full z-0 rounded-full" />
            </button>
        </section>
    )
}
