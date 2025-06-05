import { motion } from "framer-motion";
import techStack from "../../constant/techStackData";


const TechStackSection = () => {
    const handleClick = (tech) => {
        window.open(tech.link, "_blank");
    };


    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <motion.h2
                className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Technical Expertise
            </motion.h2>

            <motion.p
                className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
            >
                Mastery of modern web technologies and frameworks that power exceptional user experiences
            </motion.p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
                {techStack.map((tech, index) => (
                    <motion.button
                        key={index}
                        onClick={() => handleClick(tech)}
                        type="button"
                        tabIndex={0}
                        className="w-full bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                        whileHover={{
                            scale: 1.06,
                            rotate: [0, 1.2, -1.2, 0],
                            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                        }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className={`w-14 h-14 rounded-lg ${tech.color} flex items-center justify-center text-2xl mb-3 mx-auto`}
                            whileHover={{
                                rotate: 360,
                            }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                        >
                            {tech.icon}
                        </motion.div>
                        <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-white">
                            {tech.name}
                        </h3>
                    </motion.button>
                ))}
            </div>
        </section>
    );
};

export default TechStackSection;
