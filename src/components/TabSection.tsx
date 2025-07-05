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

type TabKey = 'projects' | 'tech' | 'other';

export default function TabSection() {
  const [active, setActive] = useState<TabKey>('projects');

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'projects', label: 'Projects' },
    { key: 'tech', label: 'Certificates' },
    { key: 'other', label: 'Tech Stack' },
  ];

  const activeIndex = tabs.findIndex(t => t.key === active);

  return (
    <section id="showcase" className="py-16">
      <div className="container mx-auto px-8 lg:px-16">
        {/* Tab buttons */}
        <div className="relative grid grid-cols-3 mb-6 p-3 bg-gradient-to-br from-purple-800/20 via-[#230a27]/20 to-[#053c54]/20 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-lg">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`py-5 text-center font-medium transition-colors duration-300 ${active === tab.key ? 'bg-white/20 backdrop-blur-sm text-white' : 'text-gray-500 hover:text-white'
                }`}
            >
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
        <div>
          {active === 'projects' && <ProjectsTab />}
          {active === 'tech' && <TechTab />}
          {active === 'other' && <OtherTab />}
        </div>
      </div>
    </section>
  );
}