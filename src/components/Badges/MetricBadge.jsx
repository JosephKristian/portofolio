import { motion } from 'framer-motion'

export default function MetricBadge({ icon, value, label, delay = 0 }) {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-4 rounded-2xl bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
    >
      <div className="w-12 h-12 mb-3 text-blue-600 dark:text-blue-400">
        {icon}
      </div>
      <div className="text-2xl font-bold text-gray-800 dark:text-white">{value}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
    </motion.div>
  )
}
