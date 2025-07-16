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
import AnimatedHeadline from './AnimatedHeadline';

export function Hero() {
    const tags = ['React', 'JavaScript', 'Node.js', 'Tailwind'];

    return (
        <section id='hero' className="relative min-h-screen overflow-hidden flex items-center px-[5%] sm:px-[5%] lg:px-[10%]">
            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
                {/* Vänsterkolumn */}
                <div className="flex-1 lg:text-left">
                    <div
                        data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-easing="ease-out"
                    >
                        <AnimatedHeadline text="Jacob Malmberg" />
                    </div>

                    <h1
                        className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mt-4"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        data-aos-easing="ease-out"
                    >
                        Fullstack
                    </h1>

                    <p
                        className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#5C6BC0]"
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="1000"
                        data-aos-easing="ease-out"
                    >
                        Utvecklare
                    </p>

                    <p
                        className="text-gray-200 max-w-xl mt-6"
                        data-aos="fade-up"
                        data-aos-delay="600"
                        data-aos-duration="1000"
                        data-aos-easing="ease-out"
                    >
                        Webb &amp; App-utvecklare med fokus på användarupplevelse och prestanda.
                        <br />
                        Skapar innovativa, funktionella och användarvänliga digitala lösningar.
                    </p>

                    {/* Taggar */}
                    <div
                        className="flex flex-wrap gap-3 mt-6"
                        data-aos="fade-up"
                        data-aos-delay="800"
                        data-aos-duration="1200"
                        data-aos-easing="ease-out"
                    >
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-medium bg-white/20 text-white rounded-full px-3 py-1"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Knappar */}
                    <div
                        className="flex flex-wrap gap-4 mt-6"
                        data-aos="fade-up"
                        data-aos-delay="1000"
                        data-aos-duration="1200"
                    >
                        <a
                            onClick={() => {
                                document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition"
                        >
                            Projects
                        </a>
                        <a
                            onClick={() => {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-semibold px-6 py-2 rounded-lg shadow-lg transition"
                        >
                            Kontakt
                        </a>
                    </div>
                </div>

                {/* Högerkolumn med bild */}
                <div
                    className="flex-1 flex justify-center lg:justify-end"
                    data-aos="zoom-in"
                    // data-aos-delay="1200"
                    data-aos-duration="1200"
                    data-aos-easing="ease-out"
                >
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl ">
                        <Image
                            src="/images/DevCube.png"
                            alt="DevCube Logo"
                            fill
                            className="object-cover z-10 relative animate-neon-glow-pulse"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

