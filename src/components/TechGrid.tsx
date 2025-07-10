// src/components/TechGrid.tsx
import React from 'react';
import Image from 'next/image';
import { techStack } from '../app/data/projects';

export function TechGrid() {
  return (
    <div className="grid gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
      {techStack.map((t) => (
        <div key={t.id} className="w-full">
          {/* Responsivt kort */}
          <div className="hover-star-border aspect-square w-full bg-white/10 rounded-xl flex flex-col items-center justify-around shadow-md backdrop-blur-sm p-4">
            <div className="h-20 w-20 relative mb-2">
              <Image src={t.icon} alt={t.name} fill className="object-contain" />
            </div>
            <span className="text-md font-bold text-white text-center">{t.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}