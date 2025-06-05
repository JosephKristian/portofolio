import techStack from "../../constant/techStackData";

const TechStackSection = (
    
) => {
    return (
        <>
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
                    Technical Expertise
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                    Mastery of modern web technologies and frameworks that power exceptional user experiences
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className="tech-item bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1"
                        >
                            <div className={`w-14 h-14 rounded-lg ${tech.color} flex items-center justify-center text-2xl mb-3 mx-auto`}>
                                {tech.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-white">
                                {tech.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default TechStackSection