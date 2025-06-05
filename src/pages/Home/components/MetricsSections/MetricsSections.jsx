import React from 'react';
import {
    CodeBracketIcon,
    CommandLineIcon,
    CpuChipIcon,

} from '@heroicons/react/24/outline';


const MetricsSection = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-white">
                    Proven Track Record
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="metric-item bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
                            <CodeBracketIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="metric-value text-4xl font-bold text-gray-900 dark:text-white mb-2" data-value="15">
                            0
                        </div>
                        <div className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                            Million+ Lines Coded
                        </div>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">
                            Optimized, maintainable code across enterprise applications
                        </p>
                    </div>

                    <div className="metric-item bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-6">
                            <CommandLineIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div className="metric-value text-4xl font-bold text-gray-900 dark:text-white mb-2" data-value="200">
                            0
                        </div>
                        <div className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                            Projects Delivered
                        </div>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">
                            From startups to Fortune 500 companies
                        </p>
                    </div>

                    <div className="metric-item bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
                            <CpuChipIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                        <div className="metric-value text-4xl font-bold text-gray-900 dark:text-white mb-2" data-value="999">
                            0
                        </div>
                        <div className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                            Performance Score
                        </div>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">
                            Lighthouse average across production projects
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MetricsSection