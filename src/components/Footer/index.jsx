// components/Footer/index.jsx
import { motion } from 'framer-motion'
import { 
  EnvelopeIcon,
  LinkedinIcon,
  GithubIcon,
  DocumentTextIcon 
} from '@heroicons/react/24/outline'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900/80 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Let's Connect</h3>
            <div className="flex flex-col gap-3">
              <a href="mailto:youremail@domain.com" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600">
                <EnvelopeIcon className="w-5 h-5" />
                youremail@domain.com
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600">
                <LinkedinIcon className="w-5 h-5" />
                LinkedIn Profile
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Explore More</h3>
            <div className="flex flex-col gap-3">
              <a href="https://github.com/yourusername" target="_blank" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600">
                <GithubIcon className="w-5 h-5" />
                GitHub Repositories
              </a>
              <a href="/resume.pdf" download className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600">
                <DocumentTextIcon className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Navigation</h3>
            <div className="flex flex-col gap-3">
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Projects</a>
              <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Skills</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Contact</a>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Salsabila Maajid. All rights reserved.</p>
          <p className="mt-2">Built with React, Tailwind CSS, and ❤️</p>
        </div>
      </div>
    </footer>
  )
}