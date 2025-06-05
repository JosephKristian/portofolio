import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import projects from "../../constant/projectData";
import { Link } from 'react-router-dom';

const FeaturedProjectSection = ({ addProjectCardToRefs, addButtonToRefs }) => {
    return (
        <>
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
                    Featured Case Studies
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                    Complex solutions delivered with cutting-edge frontend architecture and pixel-perfect implementation
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            ref={addProjectCardToRefs}
                            className="relative group rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 h-80 cursor-pointer"
                        >
                            {/* Project background with gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30" />

                            {/* Abstract background pattern */}
                            <div className="absolute inset-0 opacity-30 dark:opacity-10">
                                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full filter blur-xl" />
                                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-400/20 to-transparent rounded-full filter blur-xl" />
                            </div>

                            {/* Content overlay */}
                            <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-500" />

                            {/* Project content */}
                            <div className="project-content absolute bottom-0 left-0 right-0 p-6 translate-y-5 transition-transform duration-500">
                                <div className="flex items-center gap-2 mb-3">
                                    {project.tech.slice(0, 3).map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="px-2 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20">
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-200 mb-4">{project.description}</p>
                                <div className="text-sm font-medium text-blue-300 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                                    {project.metrics}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/projects"
                        ref={addButtonToRefs}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all"
                    >
                        View Full Project Portfolio
                        <ArrowTopRightOnSquareIcon className="ml-2 -mr-1 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default FeaturedProjectSection