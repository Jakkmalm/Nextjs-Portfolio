// src/components/AboutSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
// import { m } from 'framer-motion';
import AboutStatsCard from './AboutStatsCard';
import { Layers3, BookOpen, SquareArrowOutUpRight, CodeXml } from '../lib/icons';
import AnimatedHeadline from './AnimatedHeadline';

import { projects, techStack } from '../app/data/projects';

export default function AboutSection() {
    return (
        <section id="about" className="py-24 min-h-screen px-[5%] lg:px-[10%]">
            {/* Grid för text och bild */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left: Text & Buttons */}
                <div className="space-y-6">
                    <AnimatedHeadline text="Om mig" />

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#5C6BC0]">
                                Hej, jag heter
                            </span>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1200">
                            <span className="block mt-2 text-white">Jacob Malmberg</span>
                        </div>
                    </h2>

                    <p
                        data-aos="fade-right"
                        data-aos-duration="1500"
                        className="text-lg text-white leading-relaxed"
                    >
                        Jag är en nyfiken fullstack-utvecklare som gillar att bygga saker som både ser bra ut och fungerar smidigt.
                        Med modern teknik i verktygslådan förvandlar jag idéer till webbplatser och appar som känns enkla att använda och kul att interagera med.

                        Jag gillar att dyka ner i både kod och design – från pixelperfekta UI:n till databasschema. Oavsett om det handlar om ett snabbt sidprojekt eller en större applikation, försöker jag alltid hitta en balans mellan form, funktion och prestanda.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="/path/to/CV.pdf"
                            data-aos="fade-up"
                            data-aos-duration="600"
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-[#af40ff]/20 via-[#5b42f3]/20 to-[#00ddeb]/20 px-6 py-3 text-white font-medium backdrop-blur-md transition-all duration-300 hover:from-[#af40ff] hover:via-[#5b42f3] hover:to-[#00ddeb] hover:brightness-90"
                        >
                            <span className="relative z-10 flex items-center gap-2 transition-all duration-300">
                                Ladda ned CV
                                <SquareArrowOutUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>

                            {/* Gradient-fyllning på hover */}
                            <span className="absolute inset-0 z-0 bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </a>
                        <button
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="800"
                            className="group hover-star-border flex items-center gap-2 px-6 py-2 backdrop-blur-lg text-white font-medium rounded-md cursor-pointer  transition-all duration-500"
                            onClick={() =>
                                document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })
                            }
                        >
                            Mina Projekt
                            <CodeXml
                                size={16}
                                className="h-5 w-5 transition-transform duration-500 group-hover:rotate-360"
                            />
                        </button>
                    </div>
                </div>

                {/* Right: Avatar */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="flex justify-center sm:py-0 sm:p-12 py-2"
                >
                    <div className="w-64 h-64 bg-gradient-to-br from-purple-600 to-blue-400 rounded-full overflow-hidden shadow-2xl">
                        <Image
                            priority
                            src="/images/avatar.jpg"
                            alt="Jacob Malmberg"
                            width={256}
                            height={256}
                            className="w-full h-full object-cover object-[center_1%]"
                        />
                    </div>
                </div>
            </div>

            {/* Stats Cards: helbredd */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 cursor-pointer">
                <AboutStatsCard
                    icon={CodeXml}
                    value={projects.length}
                    label="Projekt"
                    description="Smått & Stort"
                    // delay={200}
                    aos="fade-up-right"
                    onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
                />
                <AboutStatsCard
                    icon={Layers3}
                    value={techStack.length}
                    label="Tech Stack"
                    description="Moderna tekniker"
                    // delay={200}
                    aos="fade-up"
                    onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
                />
                <AboutStatsCard
                    icon={BookOpen}
                    value={4}
                    label="Års erfarenhet"
                    description="Min resa hittills"
                    // delay={200}
                    aos="fade-up-left"
                    onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
                />
            </div>
        </section>

    );
}



