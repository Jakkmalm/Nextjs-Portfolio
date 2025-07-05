// src/app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Breadcrumb from '../../../components/Breadcrumb'
import ProjectDetail from '../../../components/ProjectDetails'
import { projects } from '../../data/projects'

interface Props {
  params: { slug: string }
}

export default async function ProjectPage({ params }: Props) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) return notFound()

  return (
    <main className="w-full bg-[#050114] min-h-screen py-16">
      <div className="container mx-auto px-8 lg:px-16">
        <Breadcrumb
          backHref="/"
          items={[{ label: 'Projects', href: '/' }, { label: project.title }]}
        />
        <ProjectDetail project={project} />
      </div>
    </main>
  )
}
