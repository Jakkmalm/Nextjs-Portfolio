// src/components/AboutSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
// import { m } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { projects } from '../app/data/projects';

export default function AboutSection() {
    return (
        <AnimatedSection id="about" className="py-24">
            <div className="container mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Text & Buttons */}
                <div className="space-y-6">
                    <p className="text-sm text-white uppercase tracking-widest">About Me</p>
                    <h2 className="text-4xl font-bold text-white">
                        Hello, I&apos;m Jacob Malmberg
                    </h2>
                    <p className="text-md text-white leading-relaxed">
                        Jag är en passionerad frontend-utvecklare med fokus på att skapa
                        engagerande och användarvänliga digitala upplevelser. Med erfarenhet
                        av React, Next.js och Tailwind CSS strävar jag alltid efter att
                        leverera högkvalitativa och presterande webbapplikationer.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="/path/to/CV.pdf"
                            className="inline-block px-6 py-2 bg-accent text-white font-medium rounded-md hover:bg-accent/10 transition"
                        >
                            Download CV
                        </a>
                        <button
                            className="inline-block px-6 py-2 border border-white text-white font-medium rounded-md hover:bg-white/10 transition"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Contact Me
                        </button>
                    </div>
                    {/* Stats Cards */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-r from-[#230a27]/70 to-[#053c54]/30 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center">
                            <p className="text-3xl font-bold text-white">{projects.length}</p>
                            <p className="mt-1 text-sm text-gray-200 uppercase">Projects</p>
                        </div>
                        <div className="bg-gradient-to-r from-[#230a27]/70 to-[#053c54]/30 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center">
                            <p className="text-3xl font-bold text-white">{projects.length}</p>
                            <p className="mt-1 text-sm text-gray-200 uppercase">Projects</p>
                        </div>
                        <div className="bg-gradient-to-r from-[#230a27]/70 to-[#053c54]/30 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center">
                            <p className="text-3xl font-bold text-white">{projects.length}</p>
                            <p className="mt-1 text-sm text-gray-200 uppercase">Projects</p>
                        </div>
                    </div>
                </div>

                {/* Right Avatar */}
                <div className="flex justify-center lg:justify-end">
                    <div className="w-64 h-64 bg-gradient-to-br from-purple-600 to-blue-400 rounded-full overflow-hidden shadow-2xl">
                        {/* Avatar image placeholder */}
                        <Image
                            src="/images/avatar.png"
                            alt="Jacob Malmberg"
                            width={256}
                            height={256}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}
