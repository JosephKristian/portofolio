// components/SkillsSection/SkillBadge.jsx
import { motion } from 'framer-motion'

export default function SkillBadge({ skill }) {
  const IconComponent = skill.icon
  
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
    >
      <IconComponent className="w-8 h-8" />
    </motion.div>
  )
}