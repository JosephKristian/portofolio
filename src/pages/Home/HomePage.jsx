import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
    CodeBracketIcon,
    CommandLineIcon,
    CpuChipIcon,
    ArrowDownIcon,
    ArrowTopRightOnSquareIcon,
    DocumentArrowDownIcon,
    EyeIcon
} from '@heroicons/react/24/outline';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './components/HeroSections/HeroSections';
import MetricsSection from './components/MetricsSections/MetricsSections';
import CvSection from './components/CvSections/CvSections';
import TechStackSection from './components/TechStackSections/TechStackSections';
import FeaturedProjectSection from './components/FeaturedProjectsSections/FeaturedProjectsSections';
import ContactSection from './components/ContactSections/ContactSections';
import { animateHero } from './animations/heroAnimation';
import { setupButtonAnimations } from './animations/buttonAnimations';
import { setupProjectCardAnimations } from './animations/projectCardAnimations';
import { animateTechStack } from './animations/techStackAnimations';
import { animateMetrics } from './animations/metricsAnimations';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const buttonRefs = useRef([]);
    const projectCardRefs = useRef([]);
    const techSectionRef = useRef(null);
    const metricsSectionRef = useRef(null);
    const ctx = useRef();
    const location = useLocation()

    const { scrollYProgress } = useScroll({ container: containerRef });

    // Framer Motion Transforms
    const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const profileMotionStyles = { y, scale, rotate };

    // Refs adder
    const addButtonToRefs = el => {
        if (el && !buttonRefs.current.includes(el)) {
            buttonRefs.current.push(el);
        }
    };

    const addProjectCardToRefs = el => {
        if (el && !projectCardRefs.current.includes(el)) {
            projectCardRefs.current.push(el);
        }
    };

    useEffect(() => {
        if (location.hash === '#contact') {
            // Tunggu render selesai
            setTimeout(() => {
                const contactSection = document.getElementById('contact')
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                }
            }, 100)
        }
    }, [location])

    useEffect(() => {
        ctx.current = gsap.context(() => {
            animateHero(heroRef);
            setupButtonAnimations(buttonRefs);
            setupProjectCardAnimations(projectCardRefs);
            animateTechStack(techSectionRef);
            animateMetrics(metricsSectionRef);
        }, containerRef);

        return () => {
            ctx.current?.revert();
            buttonRefs.current.forEach(button => {
                if (button?._gsapOnEnter && button._gsapOnLeave) {
                    button.removeEventListener('mouseenter', button._gsapOnEnter);
                    button.removeEventListener('mouseleave', button._gsapOnLeave);
                }
            });
            projectCardRefs.current.forEach(card => {
                if (card?._gsapOnEnter && card._gsapOnLeave) {
                    card.removeEventListener('mouseenter', card._gsapOnEnter);
                    card.removeEventListener('mouseleave', card._gsapOnLeave);
                }
            });
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-gray-900 dark:to-gray-950 overflow-y-auto scroll-smooth"
            style={{ scrollBehavior: 'smooth' }}
        >
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative h-screen flex flex-col md:flex-row items-center justify-between px-6 py-16 max-w-7xl mx-auto gap-12"
            >
                <HeroSection
                    profileMotionStyles={profileMotionStyles}
                    addButtonToRefs={addButtonToRefs}
                />
            </section>

            {/* Metrics Section */}
            <section
                ref={metricsSectionRef}
                className="py-16 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm"
            >
                <MetricsSection />
            </section>

            {/* CV Section */}
            <section className="py-16">
                <CvSection
                    addButtonToRefs={addButtonToRefs}
                />
            </section>

            {/* Tech Stack Section */}
            <section
                ref={techSectionRef}
                className="py-20 bg-white dark:bg-gray-900"
            >
                <TechStackSection />
            </section>

            {/* Featured Project Preview */}
            <section className="py-20 bg-gradient-to-b from-slate-50 to-indigo-50 dark:from-gray-900 dark:to-gray-950">
                <FeaturedProjectSection
                    addProjectCardToRefs={addProjectCardToRefs}
                    addButtonToRefs={addButtonToRefs}
                />
            </section>

            {/* Contact CTA */}
            <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
                <ContactSection
                    addButtonToRefs={addButtonToRefs}
                />
            </section>
        </div>
    );
};

export default HomePage;