// src/components/TabSection.tsx
'use client';

import { useState } from 'react';
import ProjectsTab from './ProjectsTab';
import TechTab from './TechTab';
import OtherTab from './OtherTab';

type TabKey = 'projects' | 'tech' | 'other';

export default function TabSection() {
  const [active, setActive] = useState<TabKey>('projects');

  return (
    <section id="showcase" className="py-16">
      {/* Container for consistent padding */}
      <div className="container mx-auto px-8 lg:px-16">
        {/* Tab buttons */}
        <div className="flex gap-4 justify-center mb-8">
          {(['projects', 'tech', 'other'] as TabKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-4 py-2 font-medium transition ${active === key
                  ? 'border-b-2 border-accent text-white'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>

        {/* Active tab content */}
        <div>
          {active === 'projects' && <ProjectsTab />}
          {active === 'tech' && <TechTab />}
          {active === 'other' && <OtherTab />}
        </div>
      </div>
    </section>
  );
}