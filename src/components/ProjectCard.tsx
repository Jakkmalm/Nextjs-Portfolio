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

// src/components/ProjectCard.tsx
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { m } from 'framer-motion';
import { slideIn } from '../lib/motions';
import { Project } from '../app/data/projects'

interface Props {
    project: Project
}

export default function ProjectCard({ project }: Props) {
    return (
        <m.div
            variants={slideIn('down')}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="block"
        >
            <Link
                href={`/projects/${project.slug}`}
                onClick={() => {
                    sessionStorage.setItem('scroll:/', String(window.scrollY))
                }}
                className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
                <div className="relative w-full h-48">
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="p-4">
                    <h4 className="text-lg font-semibold">{project.title}</h4>
                    <div className="mt-2 flex flex-wrap gap-1">
                        {project.tags.map(tag => (
                            <span
                                key={tag}
                                className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>
        </m.div>

    )
}

