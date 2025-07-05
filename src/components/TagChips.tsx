// src/components/TagChips.tsx
import React from 'react';

interface TagChipsProps {
    tags: string[];
    activeTag: string | null;
    onClick: (tag: string) => void;

}

export const TagChips: React.FC<TagChipsProps> = ({ tags, activeTag, onClick }) => {
    return (
        <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
                <button
                    key={tag}
                    onClick={() => onClick(tag === activeTag ? '' : tag)}
                    className={`
            px-3 py-1 rounded-full text-sm border
            transition
            ${tag === activeTag
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100'}
          `}
                >
                    {tag}
                </button>
            ))}
        </div>
    );
};
