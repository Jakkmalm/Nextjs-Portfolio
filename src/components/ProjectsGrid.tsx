// // src/components/ProjectsGrid.tsx
// import React, { useState } from 'react'
// import ProjectCard from './ProjectCard'
// import { projects, Project } from '../app/data/projects'

// export function ProjectsGrid() {
//   const [visible, setVisible] = useState(6)

//   return (
//     <>
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {projects.slice(0, visible).map((p: Project) => (
//           // Skicka hela projekt-objektet
//           <ProjectCard key={p.slug} project={p} />
//         ))}
//       </div>

//       {visible < projects.length && (
//         <button
//           onClick={() => setVisible(v => v + 6)}
//           className="mt-6 px-6 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition"
//         >
//           See More
//         </button>
//       )}
//     </>
//   )
// }
