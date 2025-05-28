// components/SkillsSection/index.jsx
import { motion } from 'framer-motion'
import { SKILLS } from '../../data/skills'
import SkillBadge from './SkillBadge'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Technical Arsenal
        </h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <SkillBadge skill={skill} />
              <span className="mt-3 text-center font-medium dark:text-white">
                {skill.name}
              </span>
              <div className="w-full mt-2 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                <div 
                  className="bg-blue-600 h-1.5 rounded-full" 
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}