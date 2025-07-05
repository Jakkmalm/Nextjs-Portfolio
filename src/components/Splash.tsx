// src/components/Splash.tsx
'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface SplashProps {
    onContinue: () => void;
}

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.25,
        },
    },
};

// “Welcome” & “to”: fade + slide-up with simple easeOut
const wordUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: 'easeOut' },
    },
};

// “My”: slide in from left
const leftSlideVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 0.9, duration: 0.4, ease: 'easeOut' },
    },
};

// “Portfolio”: slide in from right
const rightSlideVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 0.9, duration: 0.4, ease: 'easeOut' },
    },
};

const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 1.4, duration: 0.4, ease: 'easeOut' },
    },
};

export default function Splash({ onContinue }: SplashProps) {
    return (
        <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-blue-600">
            <motion.div
                className="flex flex-col items-center mb-8 space-y-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Rad 1: “Welcome to” */}
                <div className="flex">
                    <motion.span
                        variants={wordUpVariants}
                        className="inline-block text-5xl font-bold text-white mr-2"
                    >
                        Welcome
                    </motion.span>
                    <motion.span
                        variants={wordUpVariants}
                        className="inline-block text-5xl font-bold text-white"
                    >
                        to
                    </motion.span>
                </div>

                {/* Rad 2: “My Portfolio” */}
                <div className="flex">
                    <motion.span
                        variants={leftSlideVariants}
                        className="inline-block text-5xl font-bold text-white mr-2"
                    >
                        My
                    </motion.span>
                    <motion.span
                        variants={rightSlideVariants}
                        className="inline-block text-5xl font-bold text-white"
                    >
                        Portfolio
                    </motion.span>
                </div>
            </motion.div>

            <motion.button
                className="px-6 py-3 bg-white text-black rounded-full"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                onClick={onContinue}
            >
                Gå vidare
            </motion.button>
        </section>
    );
}
