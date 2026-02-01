

// src/components/ProjectDetail.tsx
'use client';

import React from 'react';
import { Github, Layers3, HandHelping, SquareArrowOutUpRight, Construction } from '../lib/icons';
import { Project } from '../app/data/projects';
import MiniStatsCard from './MiniStatsCard';
import ProjectCarousel from './ProjectCarousel';


interface Props {
    project: Project;
}

export default function ProjectDetail({ project }: Props) {
    return (
        <div id="project-detail" className="relative z-10 py-16 grid lg:grid-cols-2 gap-8 md:gap-16">
            {/* Left Column: Info */}
            <div className="space-y-6 md:space-y-10">
                <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-3xl md:text-6xl font-bold text-white">{project.title}</h1>
                    {project.underConstruction && (
                        <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 text-xs md:text-sm font-medium text-amber-200">
                            <Construction size={14} />
                            Under utveckling
                        </span>
                    )}
                </div>
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
                            className="hover-star-border flex items-center gap-1 px-6 py-2 bg-accent text-white font-medium rounded-md hover:bg-accent/80 transition"
                        >
                            Live Demo
                            <SquareArrowOutUpRight size={16} />
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

                <ProjectCarousel
                    title={project.title}
                    thumbnail={project.thumbnail}
                    images={project.images}
                    intervalMs={5000}
                />


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
