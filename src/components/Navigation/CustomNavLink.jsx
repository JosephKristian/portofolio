import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CustomNavLink({ to, children, className = '', ...props }) {
  return (
    <NavLink to={to} {...props}>
      {({ isActive }) => (
        <motion.div
          className={`relative inline-block px-1 py-0.5 text-sm font-medium cursor-pointer ${
            isActive
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300'
          } ${className}`}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          aria-current={isActive ? 'page' : undefined}
        >
          {children}
          {/* Animated underline */}
          {isActive && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 bottom-0 h-[2px] w-full bg-blue-500 dark:bg-blue-400 rounded-full"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
        </motion.div>
      )}
    </NavLink>
  )
}
