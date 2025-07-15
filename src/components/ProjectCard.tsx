// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { Project } from '../app/data/projects';

// interface Props {
//     project: Project;
// }

// export default function ProjectCard({ project }: Props) {
//     return (
//         <Link
//             href={`/projects/${project.slug}`}
//             onClick={() => {
//                 // spara scroll-position före navigering
//                 sessionStorage.setItem('scroll:/', String(window.scrollY));
//             }}
//             className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
//         >
//             <div className="relative w-full h-48">
//                 <Image
//                     src={project.thumbnail}
//                     alt={project.title}
//                     fill
//                     className="object-cover"
//                 />
//             </div>
//             <div className="p-4">
//                 <h4 className="text-lg font-semibold">{project.title}</h4>
//                 <div className="mt-2 flex flex-wrap gap-1">
//                     {project.tags.map(tag => (
//                         <span
//                             key={tag}
//                             className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs"
//                         >
//                             {tag}
//                         </span>
//                     ))}
//                 </div>
//             </div>
//         </Link>
//     );
// }

// // src/components/ProjectCard.tsx
// 'use client'
// import Link from 'next/link'
// import Image from 'next/image'
// import { m } from 'framer-motion';
// import { slideIn } from '../lib/motions';
// import { Project } from '../app/data/projects'

// interface Props {
//     project: Project
// }

// export default function ProjectCard({ project }: Props) {
//     return (
//         <m.div
//             variants={slideIn('down')}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true, amount: 0.3 }}
//             className="block"
//         >
//             <Link
//                 href={`/projects/${project.slug}`}
//                 onClick={() => {
//                     sessionStorage.setItem('scroll:/', String(window.scrollY))
//                 }}
//                 className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
//             >
//                 <div className="relative w-full h-48">
//                     <Image
//                         src={project.thumbnail}
//                         alt={project.title}
//                         fill
//                         className="object-cover"
//                     />
//                 </div>
//                 <div className="p-4">
//                     <h4 className="text-lg font-semibold">{project.title}</h4>
//                     <div className="mt-2 flex flex-wrap gap-1">
//                         {project.tags.map(tag => (
//                             <span
//                                 key={tag}
//                                 className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs"
//                             >
//                                 {tag}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             </Link>
//         </m.div>

//     )
// }

// // src/components/ProjectCard.tsx
// 'use client';

// import React from 'react';
// import { SquareArrowOutUpRight } from '../lib/icons'
// import Link from 'next/link';
// import Image from 'next/image';
// import { m } from 'framer-motion';
// import { slideIn } from '../lib/motions';
// import { Project } from '../app/data/projects';

// interface Props {
//     project: Project;
// }

// export default function ProjectCard({ project }: Props) {
//     return (
//         <m.div
//             variants={slideIn('down')}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true, amount: 0.2 }}
//             className="group hover-star-border relative p-4 h-full flex flex-col bg-white/10 bg-gradient-to-br from-purple-800/20 via-[#230a27]/20 to-[#053c54]/20 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg"
//         >
//             {/* Project Image */}
//             <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
//                 <Image
//                     src={project.thumbnail}
//                     alt={project.title}
//                     fill
//                     className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
//                 />
//             </div>

//             {/* Content */}
//             <div className="p-4 flex flex-col flex-1">
//                 {/* Title & Description */}
//                 <div className="flex-1">
//                     <h3 className="text-xl font-semibold text-white mb-2">
//                         {project.title}
//                     </h3>
//                     <p className="text-gray-300 text-sm line-clamp-2 mb-4">
//                         {project.description}
//                     </p>
//                 </div>

//                 {/* Footer: Stats & Links */}
//                 <div className="flex items-end justify-between mt-4">
//                     {/* Live Demo Link (conditional) */}
//                     {project.liveUrl ? (
//                         <a
//                             href={project.liveUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-sm text-white hover:text-white transition flex items-center gap-1"
//                         >
//                             Live Demo <SquareArrowOutUpRight size={16} />
//                         </a>
//                     ) : (
//                         <span className="text-sm text-white italic">No Live Demo</span>
//                     )}

//                     {/* Details Button */}
//                     <Link
//                         href={`/projects/${project.slug}`}
//                         onClick={() => sessionStorage.setItem('scroll:/', String(window.scrollY))}
//                         className="inline-block px-4 py-2 text-sm text-white bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/20 transition"
//                     >
//                         Details →
//                     </Link>
//                 </div>
//             </div>
//         </m.div>
//     );
// }

'use client';

import React from 'react';
import { SquareArrowOutUpRight, ArrowRight } from '../lib/icons';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '../app/data/projects';

interface Props {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    return (
        <div
            className="group hover-star-border relative p-4 h-full flex flex-col bg-white/10 bg-gradient-to-br from-purple-800/20 via-[#230a27]/20 to-[#053c54]/20 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
        >
            {/* Project Image */}
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
                {/* Title & Description */}
                <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                        {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2 mb-4">
                        {project.description}
                    </p>
                </div>

                {/* Footer: Stats & Links */}
                <div className="flex items-center justify-between mt-4">
                    {project.liveUrl ? (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-white hover:text-[#00C6FF] transition duration-300 flex items-center gap-1"
                        >
                            Live Demo <SquareArrowOutUpRight size={16} />
                        </a>
                    ) : (
                        <span className="text-sm text-white italic">Ingen live demo</span>
                    )}

                    {/* <Link
                        href={`/projects/${project.slug}`}
                        onClick={() => sessionStorage.setItem('scroll:/', String(window.scrollY))}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/20 transition"
                    >
                        Details <ArrowRight size={16} />
                    </Link> */}
                    <Link
                        href={`/projects/${project.slug}`}
                        onClick={() => sessionStorage.setItem('scroll:/', String(window.scrollY))}
                        className="relative overflow-hidden px-4 py-2 text-sm text-white bg-white/10 rounded-full backdrop-blur-sm transition duration-500 group/button inline-flex items-center gap-2"
                    >
                        <span className="relative z-10">Visa mer</span>
                        <ArrowRight
                            size={16}
                            className="relative z-10 transition-transform duration-500 group-hover/button:translate-x-1"
                        />
                        <span className="absolute left-0 top-0 h-full w-0 bg-white/20 transition-all duration-300 ease-in-out group-hover/button:w-full z-0 rounded-full" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
