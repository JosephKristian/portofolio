import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaLaravel } from 'react-icons/fa'
import { SiNestjs, SiPostgresql, SiFirebase, SiGoland, SiFlutter } from 'react-icons/si'

const logos = [
  { Icon: SiFlutter, alt: 'Flutter' },
  { Icon: FaLaravel, alt: 'Laravel' },
  { Icon: FaReact, alt: 'React' },
  { Icon: SiGoland, alt: 'Golang' },
  { Icon: SiNestjs, alt: 'NestJS' },
  { Icon: SiPostgresql, alt: 'PostgreSQL' },
  { Icon: SiFirebase, alt: 'Firebase' },
  { Icon: FaNodeJs, alt: 'Node.js' },
]

export default function TechStackCarousel() {
  // Jarak geser per icon, bisa disesuaikan
  const shiftPerIcon = 120 
  // Total pergeseran = jumlah logo * jarak geser per logo
  const totalShift = logos.length * shiftPerIcon

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex space-x-12 whitespace-nowrap"
        animate={{ x: [0, -totalShift, 0] }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
      >
        {[...logos, ...logos].map(({ Icon, alt }, idx) => (
          <Icon
            key={idx}
            title={alt}
            className="h-16 w-16 text-gray-500 hover:text-gray-900 transition duration-300"
          />
        ))}
      </motion.div>
    </div>
  )
}
