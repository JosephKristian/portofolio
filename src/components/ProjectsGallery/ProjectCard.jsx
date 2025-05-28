// components/ProjectsGallery/ProjectCard.jsx
import { motion } from 'framer-motion'
import { LinkIcon, CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'

export default function ProjectCard({ 
  title, 
  description, 
  tech, 
  demoLink,
  codeLink,
  image 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
              aria-label="Live Demo"
            >
              <EyeIcon className="w-6 h-6 text-gray-900" />
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
              aria-label="View Code"
            >
              <CodeBracketIcon className="w-6 h-6 text-gray-900" />
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <span 
              key={item}
              className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <LinkIcon className="w-4 h-4" />
            <span>Featured Project</span>
          </div>
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              Source Code
              <CodeBracketIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}