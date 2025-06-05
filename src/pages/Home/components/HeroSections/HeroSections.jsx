import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ArrowDownIcon,
    ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';
import Profile from '../../../../assets/images/AYANGKUPP.png'
import AbstractVisual from './AbstractVisual';

const HeroSection = ({ addButtonToRefs }) => {
    // Track scroll for interactivity
    const { scrollY } = useScroll();
    const y = useSpring(useTransform(scrollY, [0, 300], [0, 30]), {
        stiffness: 100,
        damping: 20,
    });

    return (
        <>
            {/* Left: Profile & Text */}
            <motion.div
                className="flex-1 max-w-2xl text-center md:text-left z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Profile Photo */}
                <motion.div
                    style={{ y }}
                    className="relative w-32 h-32 mx-auto md:mx-0 mb-8 md:mb-12 group"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    aria-label="Profile photo"
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 animate-spin-slow blur-[20px] opacity-30 dark:opacity-20" />
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-xl overflow-hidden">
                        <img
                            src={Profile}
                            alt="Profile"
                            className="w-full h-full object-cover m-1 rounded-full"
                        />
                    </div>
                </motion.div>

                {/* Headline and Description */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                    Crafting Digital{' '}
                    <span className="relative inline-block">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Excellence</span>
                        <motion.div
                            className="absolute -bottom-2 left-0 h-1.5 w-full bg-blue-400/50 origin-left"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        />
                    </span>
                </h1>

                <motion.p
                    className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    Senior Front End Architect specializing in <strong>React ecosystem</strong>, building performant and accessible web applications with modern tools.
                    <br />10+ years transforming complex problems into elegant solutions.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 flex-wrap mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <Link
                        to="/projects"
                        ref={addButtonToRefs}
                        className="px-8 py-3.5 rounded-xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 text-white hover:shadow-xl transition-all duration-300 group relative overflow-hidden shadow-lg"
                        aria-label="Explore my work"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Explore My Work <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-purple-700 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </Link>

                    <a
                        href="#contact"
                        ref={addButtonToRefs}
                        className="px-8 py-3.5 rounded-xl font-bold border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900/30 transition-colors relative overflow-hidden group shadow-lg"
                        aria-label="Schedule consultation"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Schedule Consultation <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                        </span>
                        <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                </motion.div>
            </motion.div>

            {/* Right: Abstract Visual */}
            <motion.div
                className="flex-1 hidden md:block max-w-xl h-[500px] relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >

                <AbstractVisual />

            </motion.div>

            {/* Scroll down indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
            >
                <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <ArrowDownIcon className="w-6 h-6 text-gray-500" />
                </motion.div>
            </motion.div>
        </>
    );
};

export default HeroSection;
