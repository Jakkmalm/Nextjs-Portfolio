// // src/components/TabSection.tsx
// 'use client';

// import { useState } from 'react';
// import ProjectsTab from './ProjectsTab';
// import TechTab from './TechTab';
// import OtherTab from './OtherTab';

// type TabKey = 'projects' | 'tech' | 'other';

// export default function TabSection() {
//   const [active, setActive] = useState<TabKey>('projects');

//   return (
//     <section id="showcase" className="py-16">
//       {/* Container for consistent padding */}
//       <div className="container mx-auto px-8 lg:px-16">
//         {/* Tab buttons */}
//         <div className="flex gap-4 justify-center mb-8">
//           {(['projects', 'tech', 'other'] as TabKey[]).map((key) => (
//             <button
//               key={key}
//               onClick={() => setActive(key)}
//               className={`px-4 py-2 font-medium transition ${active === key
//                 ? 'border-b-2 border-accent text-white'
//                 : 'text-gray-400 hover:text-white'
//                 }`}
//             >
//               {key.charAt(0).toUpperCase() + key.slice(1)}
//             </button>
//           ))}
//         </div>

//         {/* Active tab content */}
//         <div>
//           {active === 'projects' && <ProjectsTab />}
//           {active === 'tech' && <TechTab />}
//           {active === 'other' && <OtherTab />}
//         </div>
//       </div>
//     </section>
//   );
// }

// src/components/TabSection.tsx
'use client';

import { useState } from 'react';
import ProjectsTab from './ProjectsTab';
import TechTab from './TechTab';
import OtherTab from './OtherTab';
import AnimatedHeadline from './AnimatedHeadline';
import { BriefcaseBusiness, Cpu, Sparkles } from '../lib/icons';

type TabKey = 'projects' | 'tech' | 'other';

export default function TabSection() {
  const [active, setActive] = useState<TabKey>('projects');

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
        <div className="mt-4 mb-10 max-w-2xl">
          <p className="text-white text-md sm:text-lg leading-relaxed">
            Här hittar du ett urval av mina projekt – med fokus på design, funktionalitet och teknik. Använd flikarna nedan för att utforska olika typer av arbete.
          </p>
        </div>
        {/* Tab buttons */}
        <div className="relative grid grid-cols-3 mb-6 p-3  border border-white/20 rounded-2xl overflow-hidden shadow-lg">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`hover:cursor-pointer hover-star-border rounded-xl py-5 text-center font-bold mx-2 transition-colors duration-300 ${active === tab.key ? 'rounded-xl  text-white' : 'text-gray-500 hover:text-white hover:bg-gradient-to-br from-purple-800/20 via-[#230a27]/20 to-[#053c54]/20 backdrop-blur-lg'
                }`}
            >
              <tab.icon
                size={20}
                color={active === tab.key ? '#00C6FF' : '#9CA3AF'} // accent vs gray-400
                className="mx-auto mb-1 transition-colors duration-300"
              />
              {tab.label}
            </button>
          ))}
          {/* Sliding underline indicator */}
          <span
            className="absolute bottom-0 h-1 bg-white rounded-full transition-transform duration-300"
            style={{
              width: `calc(100% / ${tabs.length})`, // Equal width
              transform: `translateX(${activeIndex * 100}%)`,
            }}
          />
        </div>

        {/* Active tab content */}
        <div className='px-4'>
          {active === 'projects' && <ProjectsTab />}
          {active === 'tech' && <TechTab />}
          {active === 'other' && <OtherTab />}
        </div>
      </div>
    </section>
  );
}