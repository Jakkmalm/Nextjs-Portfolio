// src/components/ProjectsTab.tsx
'use client';

import { useState } from 'react';
import { projects } from '../app/data/projects';
import { TagChips } from './TagChips';
import ProjectCard from './ProjectCard';

export default function ProjectsTab() {
    const [filter, setFilter] = useState<string | null>(null);
    const tags = Array.from(new Set(projects.flatMap(p => p.tags)));
    const filtered = filter
        ? projects.filter(p => p.tags.includes(filter))
        : projects;

    const getAosType = (index: number) => {
        const mod = index % 3;
        if (mod === 0) return 'fade-up-right';
        if (mod === 1) return 'fade-up';
        return 'fade-up-left';
    };

    return (
        <div>
            <TagChips tags={tags} activeTag={filter} onClick={setFilter} />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {filtered.map((p, i) => (
                    <div
                        key={p.slug}
                        data-aos={getAosType(i)}
                        // data-aos-delay={i * 100}
                        data-aos-duration="800"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <ProjectCard project={p} />
                    </div>
                ))}
            </div>
        </div>
    );
}
