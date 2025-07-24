// src/components/Hero.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import AnimatedHeadline from './AnimatedHeadline';
import { Mail } from '../lib/icons';

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

                    >
                        <AnimatedHeadline text="Jacob Malmberg" />
                    </div>

                    <h1
                        className="text-3xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mt-4"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1000"

                    >
                        Fullstack
                    </h1>

                    <h1
                        className="text-3xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#5C6BC0]"
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="1000"

                    >
                        Utvecklare
                    </h1>

                    <p
                        className="text-white text-lg max-w-xl mt-6"
                        data-aos="fade-up"
                        data-aos-delay="600"
                        data-aos-duration="1000"

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
                            className="cursor-pointer group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-[#af40ff]/20 via-[#5b42f3]/20 to-[#00ddeb]/20 px-6 py-3 text-white font-medium backdrop-blur-md transition-all duration-300 hover:from-[#af40ff] hover:via-[#5b42f3] hover:to-[#00ddeb] hover:brightness-90"
                        >
                            <span className="relative z-10 flex items-center gap-2 transition-all duration-300">
                                Projekt
                            </span>
                        </a>
                        <a
                            onClick={() => {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="cursor-pointer inline-block relative inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 font-semibold px-6 py-2 rounded-lg shadow-lg transition"
                        >
                            <span className="relative z-10 flex items-center gap-2 transition-all duration-300">
                                Kontakt
                                <Mail size={16} />
                            </span>
                        </a>
                    </div>
                </div>

                {/* Högerkolumn med bild */}
                <div
                    className="flex-1 flex justify-center lg:justify-center"
                    data-aos="zoom-in"
                    // data-aos-delay="1200"
                    data-aos-duration="1200"

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

