// src/components/TagChips.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from '../lib/icons';

interface TagChipsProps {
    tags: string[];
    activeTag: string | null;
    onClick: (tag: string) => void;

}

export const TagChips: React.FC<TagChipsProps> = ({ tags, activeTag, onClick }) => {
    const listRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
    const [expanded, setExpanded] = useState(false);
    const [visibleCount, setVisibleCount] = useState<number>(tags.length);

    useEffect(() => {
        const measure = () => {
            if (expanded) return;
            const nodes = itemRefs.current.filter(Boolean) as HTMLButtonElement[];
            if (nodes.length === 0) return;
            const rowTops = Array.from(new Set(nodes.map(n => n.offsetTop))).sort((a, b) => a - b);
            const secondRowTop = rowTops[1] ?? rowTops[0];
            const count = nodes.filter(n => n.offsetTop <= secondRowTop).length;
            setVisibleCount(count);
        };

        measure();
        const id = setTimeout(measure, 0);

        if (typeof ResizeObserver === 'undefined') return () => clearTimeout(id);
        const ro = new ResizeObserver(measure);
        if (listRef.current) ro.observe(listRef.current);
        return () => {
            clearTimeout(id);
            ro.disconnect();
        };
    }, [tags, expanded]);

    return (
        <div className="mb-5">
            <div
                ref={listRef}
                className="flex flex-wrap gap-2 transition-all duration-500"
            >
                {(expanded ? tags : tags.slice(0, visibleCount)).map((tag, i) => {
                    const animations = ['fade-up', 'fade-right', 'fade-left', 'fade-up-right', 'fade-up-left'];
                    const aos = animations[i % animations.length];
                    return (
                    <button
                        key={tag}
                        ref={(el) => { itemRefs.current[i] = el; }}
                        onClick={() => onClick(tag === activeTag ? '' : tag)}
                        className={`cursor-pointer px-3 py-1 rounded-full text-sm border transition
                        ${tag === activeTag
                                ? 'bg-[#5C6BC0] text-white border-none'
                                : 'hover-star-border bg-gradient-to-r from-[#230a27]/70 to-[#053c54]/30 backdrop-blur-lg text-white border border-white/20 rounded-2xl p-6 text-center text-white rounded-full text-sm'}`}
                        data-aos={aos}
                        data-aos-delay={i * 40}
                        data-aos-duration="800"
                    >
                        {tag}
                    </button>
                    );
                })}
            </div>

            {tags.length > visibleCount && (
                <div className="mt-4 flex justify-center">
                    <button
                        type="button"
                        onClick={() => setExpanded((v) => !v)}
                        className="group hover-star-border inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs text-white/80 transition hover:text-white"
                    >
                        {expanded ? 'Visa mindre' : 'Visa mer'}
                        <ChevronDown
                            size={14}
                            className={`text-white/70 transition-transform duration-300 ${
                                expanded
                                    ? 'rotate-180 group-hover:-translate-y-0.5'
                                    : 'group-hover:translate-y-0.5'
                            }`}
                        />
                    </button>
                </div>
            )}
        </div>
    );
};
