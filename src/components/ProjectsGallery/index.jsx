// components/ProjectsGallery/index.jsx
import { PROJECTS } from '../../data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectsGallery() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
        Featured Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}