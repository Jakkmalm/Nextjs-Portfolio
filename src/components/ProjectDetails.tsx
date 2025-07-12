
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
import AnimatedSection from './AnimatedSection';
import { Project } from '../app/data/projects';

interface Props {
    project: Project;
}

export default function ProjectDetail({ project }: Props) {
    // const carouselRef = useRef<HTMLDivElement>(null);
    // const [scrollPercent, setScrollPercent] = useState(0);

    // const keyFeatures = [
    //     'Customize the message content as needed',
    //     'Send messages to multiple Discord channels simultaneously',
    //     'Set custom delay intervals between messages',
    //     'Runs non-stop with efficient resource usage',
    // ];

    // const images = project.images ?? [project.thumbnail];
    // const hasMultiple = images.length > 1;

    // Update scroll indicator
    // const handleScroll = () => {
    //     const el = carouselRef.current;
    //     if (el) {
    //         const percent = (el.scrollLeft / (el.scrollWidth - el.clientWidth)) * 100;
    //         setScrollPercent(percent);
    //     }
    // };

    // useEffect(() => {
    //     const el = carouselRef.current;
    //     if (el) {
    //         el.addEventListener('scroll', handleScroll, { passive: true });
    //         // initialize
    //         handleScroll();
    //         return () => { el.removeEventListener('scroll', handleScroll); };
    //     }
    // }, []);

    return (
        <AnimatedSection id="project-detail" className="relative z-10 py-16">
            <div className="grid lg:grid-cols-2 gap-8 md:grid-cols-2 md:gap-16">
                {/* Left Column: Info */}
                <div className="space-y-6 md:space-y-10">
                    <h1 className="text-4xl font-bold text-white">{project.title}</h1>
                    <p className="text-lg text-gray-300 leading-relaxed">{project.description}</p>

                    {/* Stats Blocks */}
                    <div className="mt-6 flex gap-6">
                        <div className="hover-star-border bg-gradient-to-r from-[#230a27]/70 to-[#053c54]/30 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center flex-1">
                            <p className="text-2xl font-bold text-white">{project.tags.length}</p>
                            <p className="mt-1 text-sm text-gray-300 uppercase">Technologies</p>
                        </div>
                        <div className="hover-star-border bg-gradient-to-r from-[#230a27]/70 to-[#053c54]/30 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center flex-1">
                            <p className="text-2xl font-bold text-white">{project.insights?.length}</p>
                            <p className="mt-1 text-sm text-gray-300 uppercase">Insights</p>
                        </div>
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
                                className="px-6 py-2 border border-accent text-white font-medium rounded-md hover:bg-accent/20 transition"
                            >
                                GitHub Repo
                            </a>
                        )}
                    </div>

                    {/* Technologies Used */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">Teknologier</h2>
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

                    <div className="hover-star-border relative w-full h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Image
                            fill
                            src={project.thumbnail}
                            alt={project.title}
                            className="h-full w-full object-cover transform transition-transform duration-700 will-change-transform group-hover:scale-105"
                        />

                        <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 transition-colors duration-300 rounded-2xl"></div>
                    </div>

                    {/* Carousel */}
                    {/* <div className="relative">
                        {hasMultiple && (
                            <button
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-40 transition"
                                onClick={() => {
                                    const el = carouselRef.current;
                                    if (el) el.scrollTo({ left: el.scrollLeft - 300, behavior: 'smooth' });
                                }}
                            >
                                ‹
                            </button>
                        )}
                        <div
                            ref={carouselRef}
                            className="rounded-lg flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
                        >
                            {images.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="flex-shrink-0 snap-center w-full h-100 rounded-lg overflow-hidden shadow-lg bg-black-20 relative"
                                >
                                    <Image src={img} alt={`${project.title} screenshot ${idx + 1}`} fill className="object-cover transition:transform duration-600 hover:scale-105" />
                                </div>
                            ))}
                        </div>
                        {hasMultiple && (
                            <button
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-40 transition"
                                onClick={() => {
                                    const el = carouselRef.current;
                                    if (el) el.scrollTo({ left: el.scrollLeft + 300, behavior: 'smooth' });
                                }}
                            >
                                ›
                            </button>
                        )}

                        {/* Scroll Indicator */}
                    {/* {hasMultiple && (
                            <div className="mt-2 h-1 bg-white bg-opacity-20 rounded overflow-hidden">
                                <div
                                    className="h-1 bg-accent rounded"
                                    style={{ width: `${scrollPercent}%` }}
                                />
                            </div>
                        )}
                    </div>  */}

                    {/* Key Features List */}
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-200">
                            {project.insights?.map((feat, idx) => (
                                <li key={idx}>{feat}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}