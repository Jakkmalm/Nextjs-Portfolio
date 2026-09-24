// src/components/TechGrid.tsx
import React from 'react';
import Image from 'next/image';
import { techStack } from '../app/data/projects';

export function TechGrid() {
  return (
    <div
      id="techstack"
      className="grid gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
    >
      {techStack.map((t, i) => {
        // Välj animationstyp baserat på index
        const animationType =
          i % 3 === 0
            ? 'fade-up-right'
            : i % 3 === 1
              ? 'fade-up'
              : 'fade-up-left';

        return (
          <div key={t.id} className="w-full">
            <div
              className="group hover-star-border aspect-square w-full bg-white/10 bg-gradient-to-br from-purple-800/20 via-[#230a27]/20 to-[#053c54]/20 backdrop-blur-lg rounded-xl flex flex-col items-center justify-around shadow-md p-4 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:scale-[1.025] hover:shadow-[0_12px_28px_rgba(0,198,255,0.14)]"
              data-aos={animationType}
              // data-aos-delay={i * 100} // Ökar delay med 100ms per kort
              data-aos-duration="1000"
            >
              <div className="h-20 w-20 relative mb-2">
                <Image
                  src={t.icon}
                  alt={t.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-2"
                />
              </div>
              <span className="text-md font-bold text-white text-center">
                {t.name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
