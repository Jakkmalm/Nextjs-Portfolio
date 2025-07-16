// src/components/AboutSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
// import { m } from 'framer-motion';
import AboutStatsCard from './AboutStatsCard';
import { Layers3, BookOpen, CodeXml } from '../lib/icons';
import AnimatedHeadline from './AnimatedHeadline';

import { projects } from '../app/data/projects';

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
                        className="text-md text-white leading-relaxed"
                    >
                        Jag är en passionerad frontend-utvecklare med fokus på att skapa
                        engagerande och användarvänliga digitala upplevelser...
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="/path/to/CV.pdf"
                            className="inline-block px-6 py-2 bg-accent text-white font-medium rounded-md hover:bg-accent/10 transition"
                        >
                            Ladda ned CV
                        </a>
                        <button
                            className="hover-star-border flex items-center gap-2 px-6 py-2 backdrop-blur-lg text-white font-medium rounded-md cursor-pointer hover:gap-4 transition-all duration-300"
                            onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Mina Projekt <CodeXml size={16} />
                        </button>
                    </div>
                </div>

                {/* Right: Avatar */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="flex justify-center lg:justify-end sm:py-0 sm:p-12 py-2"
                >
                    <div className="w-64 h-64 bg-gradient-to-br from-purple-600 to-blue-400 rounded-full overflow-hidden shadow-2xl">
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

            {/* Stats Cards: helbredd */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 cursor-pointer">
                <AboutStatsCard
                    icon={CodeXml}
                    value={projects.length}
                    label="Projekt"
                    description="Byggt från grunden"
                    // delay={200}
                    aos="fade-up-right"
                    onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
                />
                <AboutStatsCard
                    icon={Layers3}
                    value={8}
                    label="Tech Stacks"
                    description="React, Next, Tailwind, m.fl."
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


// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { m, LazyMotion, domAnimation } from 'framer-motion';
// import AnimatedCounter from './AnimatedCounter';
// import AnimatedHeadline from './AnimatedHeadline';
// import { projects } from '../app/data/projects';
// import { fadeInUp, slideIn, staggerContainer } from '@/lib/motions';

// export default function AboutSection() {
//     return (
//         <LazyMotion features={domAnimation}>
//             <m.section
//                 id="about"
//                 className="py-24 min-h-screen container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
//                 variants={staggerContainer}
//                 initial="initial"
//                 whileInView="animate"
//                 viewport={{ once: true, amount: 0.2 }}
//             >
//                 {/* Left column */}
//                 <div className="space-y-6">
//                     <AnimatedHeadline text="About Me" />

//                     <m.h2 variants={slideIn('right')} className="text-4xl font-bold text-white">
//                         Hej, jag heter Jacob Malmberg
//                     </m.h2>

//                     <m.p variants={slideIn('left')} className="text-md text-white leading-relaxed">
//                         Jag är en passionerad frontend-utvecklare med fokus på att skapa engagerande och användarvänliga digitala upplevelser. Med erfarenhet av React, Next.js och Tailwind CSS strävar jag alltid efter att leverera högkvalitativa och presterande webbapplikationer.
//                     </m.p>

//                     <div className="flex flex-wrap gap-4">
//                         <m.a
//                             variants={slideIn('left')}
//                             href="/path/to/CV.pdf"
//                             className="inline-block px-6 py-2 bg-accent text-white font-medium rounded-md hover:bg-accent/10 transition"
//                         >
//                             Download CV
//                         </m.a>
//                         <m.button
//                             variants={slideIn('right')}
//                             className="inline-block px-6 py-2 border border-white text-white font-medium rounded-md hover:bg-white/10 transition"
//                             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//                         >
//                             Contact Me
//                         </m.button>
//                     </div>

//                     {/* Stats Cards */}
//                     <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//                         {[200, 500, 1000].map((delay, i) => (
//                             <m.div
//                                 key={i}
//                                 variants={fadeInUp}
//                                 className="hover-star-border bg-gradient-to-r from-[#230a27]/70 to-[#053c54]/30 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center"
//                             >
//                                 <p className="text-3xl font-bold text-white">
//                                     <AnimatedCounter to={projects.length} delay={delay} duration={500} />
//                                 </p>
//                                 <p className="mt-1 text-sm text-gray-200 uppercase">Projects</p>
//                             </m.div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Right column: Avatar */}
//                 <m.div variants={slideIn('left')} className="flex justify-center lg:justify-end">
//                     <div className="w-64 h-64 bg-gradient-to-br from-purple-600 to-blue-400 rounded-full overflow-hidden shadow-2xl">
//                         <Image
//                             src="/images/avatar.png"
//                             alt="Jacob Malmberg"
//                             width={256}
//                             height={256}
//                             className="w-full h-full object-cover"
//                         />
//                     </div>
//                 </m.div>
//             </m.section>
//         </LazyMotion>
//     );
// }
