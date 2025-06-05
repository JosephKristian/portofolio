import { DocumentArrowDownIcon, EyeIcon } from "@heroicons/react/24/outline";

const CvSection = (
    {addButtonToRefs}
) => {
    return (
        <>
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                    Download My Professional Profile
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    Comprehensive overview of my technical expertise, project experience, and professional achievements.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="#"
                        ref={addButtonToRefs}
                        className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:shadow-xl transition-all relative overflow-hidden group flex items-center justify-center gap-2"
                    >
                        <span className="relative z-10">Download CV (PDF)</span>
                        <DocumentArrowDownIcon className="w-5 h-5 relative z-10" />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </a>
                    <a
                        href="#"
                        ref={addButtonToRefs}
                        className="px-8 py-4 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900/30 transition-colors relative overflow-hidden group flex items-center justify-center gap-2"
                    >
                        <span className="relative z-10">Preview Online</span>
                        <EyeIcon className="w-5 h-5 relative z-10" />
                        <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default CvSection