
// // src/components/ProjectDetail.tsx
// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { m } from 'framer-motion';
// import AnimatedSection from './AnimatedSection';
// import { fadeInUp } from '../lib/motions';
// import { Project } from '../app/data/projects';

// interface Props {
//     project: Project;
// }

// export default function ProjectDetail({ project }: Props) {
//     // Example key features; you can fetch this from project data if available
//     const keyFeatures = [
//         'Customize the message content as needed',
//         'Send messages to multiple Discord channels simultaneously',
//         'Set custom delay intervals between messages',
//         'Runs non-stop with efficient resource usage',
//     ];

//     return (
//         <AnimatedSection id="project-detail" className="py-16">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                 {/* Left Column: Info */}
//                 <div className="space-y-6">
//                     {/* Title & Description */}
//                     <h1 className="text-4xl font-bold text-white">{project.title}</h1>
//                     <p className="text-lg text-gray-300 leading-relaxed">{project.description}</p>

//                     {/* Stats Blocks */}
//                     <div className="mt-6 flex gap-6">
//                         <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center flex-1">
//                             <p className="text-2xl font-bold text-white">{project.tags.length}</p>
//                             <p className="mt-1 text-sm text-gray-300 uppercase">Technologies</p>
//                         </div>
//                         <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center flex-1">
//                             <p className="text-2xl font-bold text-white">{keyFeatures.length}</p>
//                             <p className="mt-1 text-sm text-gray-300 uppercase">Features</p>
//                         </div>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="mt-6 flex flex-wrap gap-4">
//                         {project.liveUrl && (
//                             <a
//                                 href={project.liveUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="px-6 py-2 bg-accent text-white font-medium rounded-md hover:bg-accent/80 transition"
//                             >
//                                 Live Demo
//                             </a>
//                         )}
//                         {project.repoUrl && (
//                             <a
//                                 href={project.repoUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="px-6 py-2 border border-accent text-white font-medium rounded-md hover:bg-accent/20 transition"
//                             >
//                                 GitHub Repo
//                             </a>
//                         )}
//                     </div>

//                     {/* Technologies Used */}
//                     <div className="mt-8">
//                         <h2 className="text-2xl font-semibold text-white mb-4">Technologies Used</h2>
//                         <div className="flex flex-wrap gap-2">
//                             {project.tags.map((tag) => (
//                                 <span
//                                     key={tag}
//                                     className="px-3 py-1 bg-white bg-opacity-10 text-black rounded-full text-sm"
//                                 >
//                                     {tag}
//                                 </span>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Column: Preview & Features */}
//                 <div className="space-y-8">
//                     {/* Preview Image */}
//                     {/* Preview Images Carousel */}
//                     <div className="flex overflow-x-auto gap-4">
//                         {(project.images ?? [project.thumbnail]).map((img, idx) => (
//                             <div
//                                 key={idx}
//                                 className="relative w-full h-100 flex-shrink-0 rounded-lg overflow-hidden shadow-lg bg-black"
//                             >
//                                 <Image
//                                     src={img}
//                                     alt={`${project.title} screenshot ${idx + 1}`}
//                                     fill
//                                     className="object-cover"
//                                 />
//                             </div>
//                         ))}
//                     </div>

//                     {/* Key Features List */}
//                     <div>
//                         <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
//                         <ul className="list-disc list-inside space-y-2 text-gray-200">
//                             {/* lägg till i project data sen */}
//                             {keyFeatures.map((feat, idx) => (
//                                 <li key={idx}>{feat}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </AnimatedSection>
//     );
// }

// // src/components/ProjectDetail.tsx
// 'use client';

// import React, { useRef } from 'react';
// import Image from 'next/image';
// import AnimatedSection from './AnimatedSection';
// import { Project } from '../app/data/projects';

// interface Props {
//     project: Project;
// }

// export default function ProjectDetail({ project }: Props) {
//     // Ref för carousel scroll
//     const carouselRef = useRef<HTMLDivElement>(null);

//     // Exempel-feature-lista; kan hämtas från projektdata om tillgänglig
//     const keyFeatures = [
//         'Customize the message content as needed',
//         'Send messages to multiple Discord channels simultaneously',
//         'Set custom delay intervals between messages',
//         'Runs non-stop with efficient resource usage',
//     ];

//     const images = project.images ?? [project.thumbnail];

//     return (
//         <AnimatedSection id="project-detail" className="py-16">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                 {/* Left Column: Info */}
//                 <div className="space-y-6">
//                     <h1 className="text-4xl font-bold text-white">{project.title}</h1>
//                     <p className="text-lg text-gray-300 leading-relaxed">{project.description}</p>

//                     <div className="mt-6 flex gap-6">
//                         <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center flex-1">
//                             <p className="text-2xl font-bold text-white">{project.tags.length}</p>
//                             <p className="mt-1 text-sm text-gray-300 uppercase">Technologies</p>
//                         </div>
//                         <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center flex-1">
//                             <p className="text-2xl font-bold text-white">{keyFeatures.length}</p>
//                             <p className="mt-1 text-sm text-gray-300 uppercase">Features</p>
//                         </div>
//                     </div>

//                     <div className="mt-6 flex flex-wrap gap-4">
//                         {project.liveUrl && (
//                             <a
//                                 href={project.liveUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="px-6 py-2 bg-accent text-white font-medium rounded-md hover:bg-accent/80 transition"
//                             >
//                                 Live Demo
//                             </a>
//                         )}
//                         {project.repoUrl && (
//                             <a
//                                 href={project.repoUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="px-6 py-2 border border-accent text-accent font-medium rounded-md hover:bg-accent/20 transition"
//                             >
//                                 GitHub Repo
//                             </a>
//                         )}
//                     </div>

//                     <div className="mt-8">
//                         <h2 className="text-2xl font-semibold text-white mb-4">Technologies Used</h2>
//                         <div className="flex flex-wrap gap-2">
//                             {project.tags.map((tag) => (
//                                 <span
//                                     key={tag}
//                                     className="px-3 py-1 bg-white bg-opacity-10 text-white rounded-full text-sm"
//                                 >
//                                     {tag}
//                                 </span>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Column: Carousel & Key Features */}
//                 {/* Högerkolumn */}
//                 <div className="space-y-8">
//                     {/* Carousel-wrapper */}
//                     <div className="relative">
//                         {/* Pil vänster */}
//                         <button
//                             onClick={() => carouselRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
//                             className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-40 transition"
//                         >
//                             ‹
//                         </button>

//                         {/* Själva scroll-div:en */}
//                         <div
//                             ref={carouselRef}
//                             className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent"
//                         >
//                             {images.map((img, idx) => (
//                                 <div
//                                     key={idx}
//                                     className="flex-shrink-0 snap-center w-full h-100 rounded-lg overflow-hidden shadow-lg bg-black relative"
//                                 >
//                                     <Image
//                                         src={img}
//                                         alt={`${project.title} screenshot ${idx + 1}`}
//                                         fill
//                                         className="object-cover"
//                                     />
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Pil höger */}
//                         <button
//                             onClick={() => carouselRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
//                             className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-40 transition"
//                         >
//                             ›
//                         </button>
//                     </div>

//                     {/* Key Features-listan */}
//                     <div>
//                         <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
//                         <ul className="list-disc list-inside space-y-2 text-gray-200">
//                             {keyFeatures.map((feat, idx) => (
//                                 <li key={idx}>{feat}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </AnimatedSection>
//     );
// }


// // src/components/ProjectDetail.tsx
// 'use client';

// import React, { useRef } from 'react';
// import Image from 'next/image';
// import AnimatedSection from './AnimatedSection';
// import { Project } from '../app/data/projects';

// interface Props {
//     project: Project;
// }

// export default function ProjectDetail({ project }: Props) {
//     const carouselRef = useRef<HTMLDivElement>(null);

//     const keyFeatures = [
//         'Customize the message content as needed',
//         'Send messages to multiple Discord channels simultaneously',
//         'Set custom delay intervals between messages',
//         'Runs non-stop with efficient resource usage',
//     ];

//     const images = project.images ?? [project.thumbnail];
//     const hasMultiple = images.length > 1;

//     return (
//         <AnimatedSection id="project-detail" className="py-16">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                 {/* Left Column: Info */}
//                 <div className="space-y-6">
//                     <h1 className="text-4xl font-bold text-white">{project.title}</h1>
//                     <p className="text-lg text-gray-300 leading-relaxed">{project.description}</p>

//                     {/* Stats Blocks */}
//                     <div className="mt-6 flex gap-6">
//                         <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center flex-1">
//                             <p className="text-2xl font-bold text-white">{project.tags.length}</p>
//                             <p className="mt-1 text-sm text-gray-300 uppercase">Technologies</p>
//                         </div>
//                         <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center flex-1">
//                             <p className="text-2xl font-bold text-white">{keyFeatures.length}</p>
//                             <p className="mt-1 text-sm text-gray-300 uppercase">Features</p>
//                         </div>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="mt-6 flex flex-wrap gap-4">
//                         {project.liveUrl && (
//                             <a
//                                 href={project.liveUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="px-6 py-2 bg-accent text-white font-medium rounded-md hover:bg-accent/80 transition"
//                             >
//                                 Live Demo
//                             </a>
//                         )}
//                         {project.repoUrl && (
//                             <a
//                                 href={project.repoUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="px-6 py-2 border border-accent text-accent font-medium rounded-md hover:bg-accent/20 transition"
//                             >
//                                 GitHub Repo
//                             </a>
//                         )}
//                     </div>

//                     {/* Technologies Used */}
//                     <div className="mt-8">
//                         <h2 className="text-2xl font-semibold text-white mb-4">Technologies Used</h2>
//                         <div className="flex flex-wrap gap-2">
//                             {project.tags.map((tag) => (
//                                 <span
//                                     key={tag}
//                                     className="px-3 py-1 bg-white bg-opacity-10 text-white rounded-full text-sm"
//                                 >
//                                     {tag}
//                                 </span>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Column: Carousel & Key Features */}
//                 <div className="space-y-8">
//                     {/* Carousel */}
//                     <div className="relative">
//                         {hasMultiple && (
//                             <button
//                                 className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-40 transition"
//                                 onClick={() => carouselRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
//                             >
//                                 ‹
//                             </button>
//                         )}
//                         <div
//                             ref={carouselRef}
//                             className="rounded-lg flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent hide-scrollbar"
//                         >
//                             {images.map((img, idx) => (
//                                 <div
//                                     key={idx}
//                                     className="flex-shrink-0 snap-center w-full h-100 rounded-lg overflow-hidden shadow-lg bg-black relative"
//                                 >
//                                     <Image src={img} alt={`${project.title} screenshot ${idx + 1}`} fill className="object-cover" />
//                                 </div>
//                             ))}
//                         </div>
//                         {hasMultiple && (
//                             <button
//                                 className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-40 transition"
//                                 onClick={() => carouselRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
//                             >
//                                 ›
//                             </button>
//                         )}
//                     </div>

//                     {/* Key Features List */}
//                     <div>
//                         <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
//                         <ul className="list-disc list-inside space-y-2 text-gray-200">
//                             {keyFeatures.map((feat, idx) => (
//                                 <li key={idx}>{feat}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </AnimatedSection>
//     );
// }


// src/components/ProjectDetail.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { Github, Layers3, HandHelping } from '../lib/icons';
import { Project } from '../app/data/projects';
import MiniStatsCard from './MiniStatsCard';


interface Props {
    project: Project;
}

export default function ProjectDetail({ project }: Props) {
    return (
        <div id="project-detail" className="relative z-10 py-16 grid lg:grid-cols-2 gap-8 md:gap-16">
            {/* Left Column: Info */}
            <div className="space-y-6 md:space-y-10">
                <h1 className="text-3xl md:text-6xl font-bold text-white">{project.title}</h1>
                <p className="text-lg text-gray-300 leading-relaxed">{project.description}</p>

                {/* Stats Blocks */}
                <div className="grid grid-cols-2 gap-3 md:gap-4 p-3 rounded-xl overflow-hidden">
                    <MiniStatsCard
                        icon={Layers3}
                        value={project.tags.length}
                        label="Tekniker"
                    >

                    </MiniStatsCard>
                    <MiniStatsCard
                        icon={Layers3}
                        value={project.features?.length ?? 0}
                        label="Funktioner"
                    >

                    </MiniStatsCard>
                    {/* <AboutStatsCard
                        icon={Layers3}
                        value={project.tags.length}
                        label="Tekniker"
                        description="Antal tekniker"
                        aos='fade-up-right'
                    />
                    <AboutStatsCard
                        value={project.features?.length ?? 0}
                        label="Funktioner"
                        description="Antal funktioner"
                        aos='fade-up-left'
                    /> */}
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-wrap gap-4 ">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-accent text-white font-medium rounded-md hover:bg-accent/80 transition"
                        >
                            Live Demo
                        </a>
                    )}
                    {project.repoUrl && (
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover-star-border flex items-center gap-1 px-6 py-2 backdrop-blur-lg text-white font-medium rounded-md transition"
                        >
                            GitHub Repo <Github size={16} />
                        </a>
                    )}
                </div>

                {/* Technologies Used */}
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">Tekniker</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="hover-star-border px-3 py-1 bg-gradient-to-r from-[#230a27]/70 to-[#053c54]/30 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center text-white rounded-full text-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Column: Carousel & Key Features */}
            <div className="space-y-8">

                <div className="hover-star-border relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Image
                        fill
                        src={project.thumbnail}
                        alt={project.title}
                        className="h-full w-full object-cover transform transition-transform duration-700 will-change-transform group-hover:scale-105"
                    />

                    <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 transition-colors duration-300 rounded-2xl"></div>
                </div>


                {/* Key Features List */}
                {/* <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Funktioner</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-200">
                        {project.features?.map((feat, idx) => (
                            <li key={idx}>{feat}</li>
                        ))}
                    </ul>
                </div> */}

                {/* Key Features List */}
                <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6 hover-star-border transition-colors duration-300 group">
                    <h2 className="text-xl font-semibold text-white/90 flex items-center gap-3">

                        <HandHelping color='gold' size={26} />Funktioner
                    </h2>

                    <ul className="list-none space-y-2">
                        {project.features?.map((feat, idx) => (
                            <li
                                key={idx}
                                className="group flex items-start space-x-3 p-2.5 md:p-3.5 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover-star-border"
                            >
                                <div className="relative mt-2">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                                    <div className="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-[#00C6FF] to-[#0072FF] group-hover:scale-125 transition-transform duration-300"></div>
                                </div>
                                <span className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors">
                                    {feat}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>

    );
}