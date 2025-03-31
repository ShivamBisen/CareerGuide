import React from 'react';
import { Link } from 'react-router-dom';

const CVBuddy: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-32">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional CV Templates</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose from our collection of professionally designed CV templates to create your perfect resume</p>
                </div>

                {/* Templates Section */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Link 
                            to="/cv/iitkgp" 
                            className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                            <div className="bg-white p-8 border-2 border-gray-100 rounded-xl group-hover:border-blue-200 transition-all">
                                <div className="relative">
                                    <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors transform group-hover:rotate-6 duration-300">
                                        <span className="text-3xl font-bold text-blue-600">1</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Template-1</h3>
                                <p className="text-gray-600">Professional CV template with modern design</p>
                                <div className="mt-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-blue-600 font-medium">Use Template →</span>
                                </div>
                            </div>
                        </Link>

                        <Link 
                            to="/cv/iitm" 
                            className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                            <div className="bg-white p-8 border-2 border-gray-100 rounded-xl group-hover:border-blue-200 transition-all">
                                <div className="relative">
                                    <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors transform group-hover:rotate-6 duration-300">
                                        <span className="text-3xl font-bold text-blue-600">2</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Template-2</h3>
                                <p className="text-gray-600">Clean and minimalist CV layout</p>
                                <div className="mt-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-blue-600 font-medium">Use Template →</span>
                                </div>
                            </div>
                        </Link>

                        <Link 
                            to="/cv/iitb" 
                            className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                            <div className="bg-white p-8 border-2 border-gray-100 rounded-xl group-hover:border-blue-200 transition-all">
                                <div className="relative">
                                    <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors transform group-hover:rotate-6 duration-300">
                                        <span className="text-3xl font-bold text-blue-600">3</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Template-3</h3>
                                <p className="text-gray-600">Traditional academic CV format</p>
                                <div className="mt-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-blue-600 font-medium">Use Template →</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CVBuddy; 