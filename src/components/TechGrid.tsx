// src/components/TechGrid.tsx
import React from 'react';
import Image from 'next/image';
import { techStack } from '../app/data/projects';

export function TechGrid() {
  return (
    <div className="max-h-screen grid gap-4 grid-cols-3 sm:grid-cols-6 lg:grid-cols-8">
      {techStack.map((t) => (
        <div key={t.id} className="flex flex-col items-center">
          <div className="h-12 w-12 relative">
            <Image src={t.icon} alt={t.name} fill className="object-contain" />
          </div>
          <span className="mt-2 text-sm text-white text-center">{t.name}</span>
        </div>
      ))}
    </div>
  );
}
