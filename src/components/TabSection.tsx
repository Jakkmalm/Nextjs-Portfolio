
// src/components/TabSection.tsx
'use client';

import { useEffect, useState } from 'react';
import ProjectsTab from './ProjectsTab';
import TechTab from './TechTab';
import OtherTab from './OtherTab';
import AnimatedHeadline from './AnimatedHeadline';
import { BriefcaseBusiness, Cpu, Sparkles } from '../lib/icons';

type TabKey = 'projects' | 'tech' | 'other';

export default function TabSection() {
  const [active, setActive] = useState<TabKey>('projects');

  useEffect(() => {
    const handler = (e: Event) => {
      const tab = (e as CustomEvent<string>).detail;
      if (tab === 'projects' || tab === 'tech' || tab === 'other') {
        setActive(tab);
      }
    };
    window.addEventListener('showcase-tab', handler);
    return () => window.removeEventListener('showcase-tab', handler);
  }, []);

  const tabs: { key: TabKey; label: string; icon: React.ElementType }[] = [
    { key: 'projects', label: 'Projekt', icon: BriefcaseBusiness },
    { key: 'tech', label: 'Tekniker', icon: Cpu },
    { key: 'other', label: 'Övrigt', icon: Sparkles },
  ];

  const activeIndex = tabs.findIndex(t => t.key === active);

  return (
    <section id="showcase" className="py-16 min-h-screen px-[5%] sm:px-[5%] lg:px-[10%]">

      <div className="container mx-auto">
        {/* Rubrik */}
        <AnimatedHeadline text="Showcase" />

        {/* Introtext */}
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          className="mt-4 mb-10 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <div data-aos="fade-right" data-aos-duration="1000">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#5C6BC0]">
                Projekt &
              </span>
            </div>
            <div data-aos="fade-right" data-aos-duration="1200">
              <span className="block mt-2 text-white">Teknisk portfolio</span>
            </div>
          </h2>
          <p className="text-white text-md sm:text-lg leading-relaxed mt-6">
            Här hittar du mina projekt – med fokus på design, funktionalitet och teknik. Använd taggarna nedan för att sortera efter tekniker.
          </p>
        </div>
        {/* Tab buttons */}
        <div className="relative grid grid-cols-3 mb-6 p-3  border border-white/20 rounded-2xl overflow-hidden shadow-lg">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`group hover:cursor-pointer hover-star-border rounded-xl py-5 text-center font-bold mx-2 transition-colors duration-300 ${active === tab.key ? 'rounded-xl  text-white' : 'text-gray-500 hover:text-white hover:bg-gradient-to-br from-purple-800/20 via-[#230a27]/20 to-[#053c54]/20 backdrop-blur-lg'
                }`}
            >
              <tab.icon
                size={20}
                className={`
                mx-auto mb-1 transition-colors duration-300
                ${active === tab.key
                    ? 'text-[#00C6FF]'
                    : 'text-gray-400 group-hover:text-[#00c8ffbb]'}
  `}
              />
              {tab.label}
            </button>
          ))}
          {/* Sliding underline indicator */}
          <span
            className="absolute bottom-0 h-1 bg-white rounded-full transition-all duration-300 ease-out"
            style={{
              width: `calc(100% / ${tabs.length} * 0.8)`,
              left: `calc(100% / ${tabs.length} * ${activeIndex} + (100% / ${tabs.length} * 0.1))`,
            }}
          />
        </div>

        {/* Active tab content */}
        <div className='px-2 sm:px-4'>
          {active === 'projects' && <ProjectsTab />}
          {active === 'tech' && <TechTab />}
          {active === 'other' && <OtherTab />}
        </div>
      </div>
    </section>
  );
}
