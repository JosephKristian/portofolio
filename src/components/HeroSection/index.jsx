// components/HeroSection/index.jsx
import { motion } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/24/outline'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 dark:text-white"
          animate={{ textShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
        >
          Joseph Kristian
          <motion.span 
            className="block text-4xl md:text-6xl font-normal mt-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            Frontend Engineer
          </motion.span>
        </motion.h1>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block"
        >
          <a
            href="#projects"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg flex items-center gap-2 mx-auto w-max hover:bg-blue-700 transition-colors"
          >
            Explore My Work
            <ArrowDownIcon className="w-5 h-5 mt-1 animate-bounce" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}