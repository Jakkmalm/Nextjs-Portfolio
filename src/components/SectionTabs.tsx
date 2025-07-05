// // src/components/SectionTabs.tsx
// 'use client';

// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {ProjectsGrid} from './ProjectsGrid';
// import {CertificatesGrid} from './CertificatesGrid';
// import {TechGrid} from './TechGrid';

// export type TabKey = 'projects' | 'certificates' | 'tech';

// interface SectionTabsProps {
//   active: TabKey;
//   onChange: (tab: TabKey) => void;
// }

// const tabs: { key: TabKey; label: string }[] = [
//   { key: 'projects', label: 'Projects' },
//   { key: 'certificates', label: 'Certificates' },
//   { key: 'tech', label: 'Tech Stack' },
// ];

// const tabVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// export default function SectionTabs({ active, onChange }: SectionTabsProps) {
//   return (
//     <div>
//       <nav className="relative flex space-x-4 border-b border-gray-300 dark:border-gray-700 pb-2">
//         {tabs.map((t) => (
//           <button
//             key={t.key}
//             onClick={() => onChange(t.key)}
//             className="px-4 py-2 text-gray-600 dark:text-gray-300 relative"
//           >
//             {t.label}
//             {active === t.key && (
//               <motion.span
//                 className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-600 dark:bg-blue-400"
//                 layoutId="tab-underline"
//                 transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//               />
//             )}
//           </button>
//         ))}
//       </nav>

//       <div className="mt-6">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={active}
//             variants={tabVariants}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             transition={{ duration: 0.4 }}
//           >
//             {active === 'projects' && <ProjectsGrid />}
//             {active === 'certificates' && <CertificatesGrid />}
//             {active === 'tech' && <TechGrid />}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

// src/components/SectionTabs.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export type TabKey = 'projects' | 'certificates' | 'tech';

interface SectionTabsProps {
    active: TabKey;
    onChange: (tab: TabKey) => void;
}

const tabs: { key: TabKey; label: string }[] = [
    { key: 'projects', label: 'Projects' },
    { key: 'certificates', label: 'Certificates' },
    { key: 'tech', label: 'Tech Stack' },
];

export default function SectionTabs({ active, onChange }: SectionTabsProps) {
    return (
        <nav className="relative flex justify-center gap-16 space-x-8 border-b border-gray-300 dark:border-gray-700 pb-2">
            {tabs.map((t) => (
                <button
                    key={t.key}
                    onClick={() => onChange(t.key)}
                    className={`relative px-1 pb-1 font-medium ${active === t.key
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-300'
                        }`}
                >
                    {t.label}
                    {active === t.key && (
                        <motion.span
                            className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-blue-600 dark:bg-blue-400"
                            layoutId="tab-underline"
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                    )}
                </button>
            ))}
        </nav>
    );
}

