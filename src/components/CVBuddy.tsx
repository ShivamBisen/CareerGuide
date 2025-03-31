import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ReloadIcon, DownloadIcon } from '@radix-ui/react-icons';

interface CVBuddyProps {
    institute: string;
}

const CVBuddy: React.FC<CVBuddyProps> = ({ institute }) => {
    const [content, setContent] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

    useEffect(() => {
        loadContent();
    }, [institute]);

    const loadContent = async () => {
        try {
            setIsLoading(true);
            // First try to load saved content
            const savedContent = localStorage.getItem(`cv-${institute}`);
            if (savedContent) {
                setContent(savedContent);
                return;
            }

            // If no saved content, load the default template
            const response = await fetch(`/cv-buddy/${institute}/index.html`);
            if (!response.ok) {
                throw new Error('Failed to load template');
            }
            const templateContent = await response.text();
            setContent(templateContent);
        } catch (error) {
            console.error('Error loading content:', error);
            setContent('<div>Error loading template. Please try again.</div>');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSave = async () => {
        try {
            setIsSaving(true);
            localStorage.setItem(`cv-${institute}`, content);
            // Also save to the template file
            const response = await fetch(`/api/cv/save/${institute}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content }),
            });
            if (!response.ok) {
                throw new Error('Failed to save CV');
            }
        } catch (error) {
            console.error('Error saving CV:', error);
        } finally {
            setIsSaving(false);
        }
    };

    const handleDownload = async () => {
        try {
            setIsGeneratingPDF(true);
            // Use the browser's print functionality
            window.print();
        } catch (error) {
            console.error('Error generating PDF:', error);
        } finally {
            setIsGeneratingPDF(false);
        }
    };

    const handleReset = async () => {
        if (window.confirm('Are you sure you want to reset this CV? All changes will be lost.')) {
            try {
                setIsLoading(true);
                const response = await fetch(`/cv-buddy/${institute}/index.html`);
                if (!response.ok) {
                    throw new Error('Failed to load template');
                }
                const templateContent = await response.text();
                setContent(templateContent);
                localStorage.removeItem(`cv-${institute}`);
            } catch (error) {
                console.error('Error resetting CV:', error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">CV Builder - {institute.toUpperCase()}</h1>
                <div className="space-x-2">
                    <Button
                        onClick={handleSave}
                        disabled={isSaving}
                        variant="outline"
                    >
                        {isSaving ? (
                            <>
                                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                Saving...
                            </>
                        ) : (
                            'Save'
                        )}
                    </Button>
                    <Button
                        onClick={handleDownload}
                        disabled={isGeneratingPDF}
                        variant="outline"
                    >
                        {isGeneratingPDF ? (
                            <>
                                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                Generating PDF...
                            </>
                        ) : (
                            <>
                                <DownloadIcon className="mr-2 h-4 w-4" />
                                Download PDF
                            </>
                        )}
                    </Button>
                    <Button
                        onClick={handleReset}
                        disabled={isLoading}
                        variant="outline"
                    >
                        {isLoading ? (
                            <>
                                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                Loading...
                            </>
                        ) : (
                            'Reset'
                        )}
                    </Button>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
                <div
                    className="cv-content"
                    dangerouslySetInnerHTML={{ __html: content }}
                    contentEditable
                    onInput={(e) => setContent(e.currentTarget.innerHTML)}
                />
            </div>
        </div>
    );
};

export default CVBuddy; 