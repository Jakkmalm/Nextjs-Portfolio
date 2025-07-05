// src/components/ProjectsTab.tsx
'use client';

import { useState } from 'react';
import { m, LazyMotion, domAnimation } from 'framer-motion';
// import { staggerContainer } from '../lib/motions';
import { projects } from '../app/data/projects';
import { TagChips } from './TagChips';
import ProjectCard from './ProjectCard';

export default function ProjectsTab() {
    const [filter, setFilter] = useState<string | null>(null);
    const tags = Array.from(new Set(projects.flatMap(p => p.tags)));
    const filtered = filter
        ? projects.filter(p => p.tags.includes(filter))
        : projects;

    return (
        <LazyMotion features={domAnimation}>
            <m.div>
                <>
                    <TagChips tags={tags} activeTag={filter} onClick={setFilter} />
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filtered.map(p => (
                            <ProjectCard key={p.slug} project={p} />
                        ))}
                    </div>
                </>
            </m.div>
        </LazyMotion>
    );
}
