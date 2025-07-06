// // src/components/Hero.tsx
// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';

// export function Hero() {
//     return (
//         <section className="relative h-screen overflow-hidden">
//             {/* Entré-animation för rubrik */}
//             <motion.h1
//                 className="relative z-10 text-6xl font-bold text-white text-center"
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5, duration: 0.8 }}
//             >
//                 Welcome To My Portfolio
//             </motion.h1>

//             {/* Entré-animation för knapp */}
//             <motion.button
//                 className="relative z-10 mt-8 px-8 py-3 bg-white text-black rounded-full block mx-auto"
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1, duration: 0.8 }}
//                 onClick={() =>
//                     document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })
//                 }
//             >
//                 Se Showcase ↓
//             </motion.button>
//         </section>
//     );
// }


// src/components/Hero.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import AnimatedHeadline from './AnimatedHeadline';


export function Hero() {
    const tags = ['React', 'JavaScript', 'Node.js', 'Tailwind'];
    // Parent som styr stagger och delay
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: 0.8,
                staggerChildren: 0.2,
            },
        },
    };

    // Varje tag: fade + slide-up
    const tagVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: 'easeOut' },
        },
    };



    return (
        <section id='hero' className="relative min-h-screen overflow-hidden flex items-center">
            <div className="container mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center lg:items-start gap-12">
                {/* Vänsterkolumn */}
                <div className="flex-1 space-y-6 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        <p className="inline-block bg-white/10 text-sm text-white rounded-full px-3 py-1">
                            Ready to Innovate
                        </p>
                        <AnimatedHeadline text="My Portfolio" />
                    </motion.div>

                    <motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                    >
                        Fullstack
                    </motion.h1>

                    <motion.p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold  text-indigo-400"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
                    >
                        Developer
                    </motion.p>

                    <motion.p
                        className="text-gray-200 max-w-xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
                    >
                        Webb &amp; App-utvecklare med fokus på användarupplevelse och prestanda.
                        <br />
                        Skapar innovativa, funktionella och användarvänliga digitala lösningar.
                    </motion.p>

                    {/* Taggar med staggerad animation */}
                    <motion.div
                        className="flex flex-wrap gap-3 mt-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {tags.map((tag) => (
                            <motion.span
                                key={tag}
                                className="text-xs font-medium bg-white/20 text-white rounded-full px-3 py-1"
                                variants={tagVariants}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Knappar */}
                    <motion.div
                        className="flex flex-wrap gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.0, duration: 0.6 }}
                    >
                        <a
                            href="#showcase"
                            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-semibold px-6 py-2 rounded-lg shadow-lg transition"
                        >
                            Contact
                        </a>
                    </motion.div>
                </div>

                {/* Högerkolumn med bild */}
                <motion.div
                    className="flex-1 flex justify-center lg:justify-end"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
                >
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl ">
                        <Image
                            src="/images/DevCube.png"
                            alt="DevCube Logo"
                            fill
                            className="object-cover z-10 relative animate-neon-glow-pulse"
                            priority // (valfritt, om bilden ska laddas direkt)
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

