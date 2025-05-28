import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CodeBracketIcon, CommandLineIcon, CpuChipIcon } from '@heroicons/react/24/outline'
import { useDarkMode } from '../../context/DarkModeContext'
import TechStackCarousel from '../../components/Carousels/TechStackCarousel'
import MetricBadge from '../../components/Badges/MetricBadge'
import Hero3DScene from '../../components/Hero3DScene'
import ImageProfile from '../../assets/images/Profile.jpg'

export default function HomePage() {
    const { scrollYProgress } = useScroll()
    const { isDark } = useDarkMode()

    // Panggil useTransform langsung, jangan di dalam useMemo
    const y = useTransform(scrollYProgress, [0, 1], [0, -150])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 5])

    const profileMotionStyles = { y, scale, rotate }

    const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

    const fadeInUpVariant = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:to-gray-900 transition-colors duration-300">
            <section className="relative h-screen flex flex-row items-center justify-between px-6 py-16 max-w-7xl mx-auto gap-12">
                {/* Left side: Profile and Text */}
                <motion.div
                    className="flex-1 max-w-lg text-center md:text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="top-24 h-32">
                        <motion.div
                            style={profileMotionStyles}
                            className="relative w-32 h-32 mx-auto md:mx-0 group"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            aria-label="Profile photo of Joseph"
                        >
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 animate-spin-slow blur-[20px] opacity-30 dark:opacity-20" />
                            <img
                                src={ImageProfile}
                                alt="Joseph's profile photo"
                                loading="lazy"
                                className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        variants={fadeInUpVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
                            Crafting Digital{' '}
                            <span className="relative inline-block">
                                <span className="text-blue-600 dark:text-blue-400">Excellence</span>
                                <motion.div
                                    className="absolute -bottom-2 left-0 h-2 w-full bg-blue-400/30 origin-left"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                />
                            </span>
                        </h1>

                        <motion.p
                            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-xl mx-auto md:mx-0 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Senior Front End Architect specializing in <strong>React ecosystem</strong>, building performant and accessible web applications with modern tools.
                            <br />10+ years transforming complex problems into elegant solutions.
                        </motion.p>

                        <div className="grid grid-cols-3 gap-6 mb-16 max-w-md mx-auto md:mx-0">
                            <MetricBadge
                                icon={<CodeBracketIcon className="w-6 h-6" aria-hidden="true" />}
                                value="15M+"
                                label="Lines Coded"
                                delay={0.6}
                            />
                            <MetricBadge
                                icon={<CommandLineIcon className="w-6 h-6" aria-hidden="true" />}
                                value="200+"
                                label="Projects Delivered"
                                delay={0.8}
                            />
                            <MetricBadge
                                icon={<CpuChipIcon className="w-6 h-6" aria-hidden="true" />}
                                value="99.9%"
                                label="Performance Score"
                                delay={1.0}
                            />
                        </div>

                        <motion.div
                            className="flex justify-center md:justify-start gap-4 flex-wrap"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                        >
                            <Link
                                to="/projects"
                                className="px-8 py-4 rounded-2xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 text-white hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                                aria-label="Explore my work"
                            >
                                <span className="relative z-10">Explore My Work</span>
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>

                            <a
                                href="#contact"
                                className="px-8 py-4 rounded-2xl font-bold border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900/30 transition-colors"
                                aria-label="Schedule consultation"
                            >
                                Schedule Consultation
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Right side: Hero3DScene */}
                <motion.div className="flex-1 hidden md:block max-w-xl h-[500px]">
                    <Hero3DScene />
                </motion.div>
            </section>

            <section className="py-12 text-center">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Get My CV</h3>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <a
                        href="/cv/Joseph-Kristian-Tanudjaja-CV.pdf"
                        download
                        className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                    >
                        Download CV (PDF)
                    </a>
                    <a
                        href="/cv/Joseph-Kristian-Tanudjaja-CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/30 transition"
                    >
                        Preview Online
                    </a>
                </div>
            </section>


            {/* Tech Stack Section */}
            <section className="py-20 bg-white/50 dark:bg-gray-800/30 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
                        Trusted By Industry Leaders
                    </h2>
                    <TechStackCarousel />
                </div>
            </section>

            {/* Featured Project Preview */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
                        Featured Case Studies
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[1, 2].map((item) => (
                            <motion.div
                                key={item}
                                className="relative group rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow"
                                whileHover="hover"
                                initial="rest"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="h-96 bg-gray-100 dark:bg-gray-700" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md">
                                    <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Led frontend development for 10M+ user platform with 98% performance score
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
