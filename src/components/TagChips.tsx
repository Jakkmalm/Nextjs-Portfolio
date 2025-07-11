// src/components/TagChips.tsx
import React from 'react';

interface TagChipsProps {
    tags: string[];
    activeTag: string | null;
    onClick: (tag: string) => void;

}

export const TagChips: React.FC<TagChipsProps> = ({ tags, activeTag, onClick }) => {
    return (
        <div className="flex flex-wrap gap-2 mb-5">
            {tags.map(tag => (
                <button
                    key={tag}
                    onClick={() => onClick(tag === activeTag ? '' : tag)}
                    className={`
            px-3 py-1 rounded-full text-sm border
            transition
            ${tag === activeTag
                            ? 'hover-star-border bg-indigo-400 text-white border-none'
                            : 'hover-star-border bg-gradient-to-r from-[#230a27]/70 to-[#053c54]/30 backdrop-blur-lg text-white border border-white/20 rounded-2xl p-6 text-center text-white rounded-full text-sm'}
          `}
                >
                    {tag}
                </button>
            ))}
        </div>
    );
};
