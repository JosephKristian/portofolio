// components/Navigation/Logo.jsx
import { motion } from 'framer-motion'

export default function Logo({ isDark }) {
  return (
    <div className="flex items-center gap-2">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="w-8 h-8 rounded-full border-2 border-blue-500"
      />
      <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-300">
        JOSEPH KRISTIAN TANUDJAJA
      </span>
    </div>
  )
}