// src/components/ProjectCard
'use client';

import React from 'react';
import { SquareArrowOutUpRight, ArrowRight } from '../lib/icons';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '../app/data/projects';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
            {project.underConstruction && (
                <div className="pointer-events-none absolute -right-24 top-6 z-10 rotate-45">
                    <div className="flex w-[340px] items-center justify-center px-6 py-2.5 text-black shadow-lg ring-1 ring-black/30 [background:repeating-linear-gradient(45deg,#facc15_0_12px,#111827_12px_24px)]">
                    </div>
                </div>
            )}
            {/* Project Image */}
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                    priority
                    onLoad={() => AOS.refresh()}
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
                            className="text-sm text-white hover:text-[#5C6BC0] transition duration-300 flex items-center gap-1"
                        >
                            Live Demo <SquareArrowOutUpRight size={16} />
                        </a>
                    ) : (
                        <span className="text-sm text-white italic">Ingen live demo</span>
                    )}

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
