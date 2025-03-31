import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface CVTemplateProps {
    institute: string;
}

const CVTemplate: React.FC<CVTemplateProps> = ({ institute }) => {
    const [isEditing, setIsEditing] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        if (iframeRef.current) {
            iframeRef.current.src = `/cv-buddy/${institute}/index.html`;
            
            // Load saved content if it exists
            const savedContent = localStorage.getItem(`cv-${institute}`);
            if (savedContent) {
                const iframe = iframeRef.current;
                iframe.onload = () => {
                    const cv = iframe.contentDocument?.getElementById('cv');
                    if (cv) {
                        cv.innerHTML = savedContent;
                    }
                };
            }
        }
    }, [institute]);

    const handleEdit = () => {
        setIsEditing(!isEditing);
        if (iframeRef.current) {
            const iframe = iframeRef.current;
            const cv = iframe.contentDocument?.getElementById('cv');
            if (cv) {
                const editableElements = cv.querySelectorAll('.intro-text, td, li, p');
                editableElements.forEach(element => {
                    (element as HTMLElement).contentEditable = isEditing ? 'false' : 'true';
                    if (!isEditing) {
                        (element as HTMLElement).style.backgroundColor = '#f8fafc';
                        (element as HTMLElement).style.padding = '2px 4px';
                        (element as HTMLElement).style.borderRadius = '4px';
                    } else {
                        (element as HTMLElement).style.backgroundColor = '';
                        (element as HTMLElement).style.padding = '';
                        (element as HTMLElement).style.borderRadius = '';
                    }
                });
            }
        }
    };

    const handleSave = () => {
        if (iframeRef.current) {
            const iframe = iframeRef.current;
            const cv = iframe.contentDocument?.getElementById('cv');
            if (cv) {
                const content = cv.innerHTML;
                localStorage.setItem(`cv-${institute}`, content);
                alert('CV saved successfully!');
            }
        }
    };

    const handleReset = () => {
        if (window.confirm('Are you sure you want to reset this CV? All changes will be lost.')) {
            localStorage.removeItem(`cv-${institute}`);
            if (iframeRef.current) {
                iframeRef.current.src = `/cv-buddy/${institute}/index.html`;
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50/50 pt-20">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <Link 
                            to="/cv-buddy" 
                            className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Templates
                        </Link>
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={handleEdit}
                                className={`px-4 py-2 rounded-md transition-colors ${
                                    isEditing 
                                        ? 'bg-green-600 text-white hover:bg-green-700' 
                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                }`}
                            >
                                {isEditing ? 'Done' : 'Edit'}
                            </button>
                            <button 
                                onClick={handleSave}
                                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                                disabled={!isEditing}
                            >
                                Save
                            </button>
                            <button 
                                onClick={handleReset}
                                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                            >
                                Reset
                            </button>
                        </div>
                    </div>

                    <iframe
                        ref={iframeRef}
                        className="w-full h-[calc(100vh-200px)] border border-gray-200 rounded-lg"
                        title={`CV Template - ${institute}`}
                    />
                </div>
            </div>
        </div>
    );
};

export default CVTemplate; 