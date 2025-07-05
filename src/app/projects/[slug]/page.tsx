// src/app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Breadcrumb from '../../../components/Breadcrumb'
import ProjectDetail from '../../../components/ProjectDetails'
import { projects } from '../../data/projects'

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  // Unwrap the params promise as per Next.js App Router requirements
  const { slug } = await params

  const project = projects.find(p => p.slug === slug)
  if (!project) return notFound()

  return (
    <main className="w-full bg-[#050114] min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-8">
        <Breadcrumb
          backHref="/"
          items={[{ label: 'Projects', href: '/' }, { label: project.title }]}
        />
        <ProjectDetail project={project} />
      </div>
    </main>
  )
}

