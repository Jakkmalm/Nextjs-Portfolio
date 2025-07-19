// src/components/AnimatedBackground.tsx
'use client';

import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { ease } from '@/lib/motions';
import globals.css from '../app/globals.css
/**
 * Animated background with colored, blurred blobs using framer-motion direct animations.
 * Blobs smoothly transition position, scale, and background color.
 * Only visible on medium screens and up.
 */
export default function AnimatedBackground() {
    return (
        <LazyMotion features={domAnimation}>
            <div className="dot-background hidden md:block fixed inset-0 overflow-hidden z-0 pointer-events-none filter blur-3xl">
                {/* Blob 1: wide horizontal drift, vertical variation, color shift */}
                <m.div
                    className="absolute w-96 h-96 rounded-full opacity-70"
                    style={{ left: '5%', top: '5%' }}
                    initial={{ x: 0, y: 0, scale: 1, backgroundColor: '#172b60' }}
                    animate={{
                        x: [400, -200, 1400],
                        y: [0, 100, 0],
                        scale: [1, 1.1, 1],
                        backgroundColor: ['#172b60', '#451f78', '#172b60'],
                    }}
                    transition={{
                        duration: 40,
                        ease: ease,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        times: [0, 0.5, 1]
                    }}
                />
                {/* Blob 2: pronounced diagonal movement, color shift */}
                <m.div
                    className="absolute w-80 h-80 rounded-full opacity-70"
                    style={{ left: '60%', top: '40%' }}
                    initial={{ x: 0, y: 0, scale: 1, backgroundColor: '#4e2a6c' }}
                    animate={{
                        x: [-300, 300, -300],
                        y: [0, 150, 0],
                        scale: [1, 1.08, 1],
                        backgroundColor: ['#4e2a6c', '#7a3eb5', '#4e2a6c'],
                    }}
                    transition={{
                        duration: 50,
                        ease: ease,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        times: [0, 0.5, 1]
                    }}
                />
                {/* Blob 3: larger float for depth, color shift */}
                <m.div
                    className="absolute w-72 h-72 rounded-full opacity-70"
                    style={{ left: '40%', top: '75%' }}
                    initial={{ x: 0, y: 0, scale: 1, backgroundColor: '#053c54' }}
                    animate={{
                        x: [-200, 200, -200],
                        y: [0, -400, 0],
                        scale: [1, 1.05, 1],
                        backgroundColor: ['#053c54', '#230a27', '#053c54'],
                    }}
                    transition={{
                        duration: 45,
                        ease: ease,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        times: [0, 0.5, 1]
                    }}
                />
            </div>
        </LazyMotion>
    );
}
