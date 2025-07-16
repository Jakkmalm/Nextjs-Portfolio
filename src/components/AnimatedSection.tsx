// src/components/AnimatedSection.tsx
'use client';

import { m, LazyMotion, domAnimation, Easing } from 'framer-motion';
import React from 'react';

interface AnimatedSectionProps {
    id?: string;
    children: React.ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right';
    duration?: number;
    delay?: number;
    distance?: number;
    opacity?: [number, number];
    ease?: Easing;
    className?: string;
}

export default function AnimatedSection({
    id,
    children,
    direction = 'up',
    duration = 0.8,
    delay = 0,
    distance = 50,
    opacity = [0, 1],
    ease = 'easeOut',
    className = ''
}: AnimatedSectionProps) {
    const getInitialTransform = () => {
        switch (direction) {
            case 'up':
                return { y: distance };
            case 'down':
                return { y: -distance };
            case 'left':
                return { x: distance };
            case 'right':
                return { x: -distance };
            default:
                return {};
        }
    };

    return (
        <LazyMotion features={domAnimation}>
            <m.div
                id={id}
                className={className}
                initial={{ ...getInitialTransform(), opacity: opacity[0] }}
                whileInView={{ x: 0, y: 0, opacity: opacity[1] }}
                transition={{ duration, delay, ease }}
                viewport={{ once: true, amount: 0.2 }}
            >
                {children}
            </m.div>
        </LazyMotion>
    );
}



