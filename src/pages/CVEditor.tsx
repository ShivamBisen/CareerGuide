import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const CVEditor: React.FC = () => {
  const { institute } = useParams<{ institute: string }>();
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadTemplate();
  }, [institute]);

  const loadTemplate = async () => {
    try {
      setIsLoading(true);
      // First try to load saved content
      const savedContent = localStorage.getItem(`cv-${institute}`);
      if (savedContent) {
        setContent(savedContent);
        return;
      }

      // If no saved content, load the template
      const response = await fetch(`/cv-buddy-original/repo/${institute}/index.html`);
      if (!response.ok) {
        throw new Error('Failed to load template');
      }
      const templateContent = await response.text();
      setContent(templateContent);
    } catch (error) {
      console.error('Error loading template:', error);
      setContent('<div>Error loading template. Please try again.</div>');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = () => {
    const cvContent = document.getElementById('cv')?.innerHTML;
    if (cvContent) {
      localStorage.setItem(`cv-${institute}`, cvContent);
      alert('CV saved successfully!');
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset? All changes will be lost.')) {
      localStorage.removeItem(`cv-${institute}`);
      loadTemplate();
    }
  };

  const handleEdit = () => {
    const cvContainer = document.getElementById('cv');
    if (cvContainer) {
      const elements = cvContainer.querySelectorAll('*');
      elements.forEach(element => {
        if (element.tagName !== 'IMG') {
          element.setAttribute('contenteditable', 'true');
        }
      });
    }
  };

  const handleDownload = () => {
    const cvContent = document.getElementById('cv');
    if (cvContent) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>CV | ${institute.toUpperCase()}</title>
              <link rel="stylesheet" href="/cv-buddy-original/repo/global.css">
              <link rel="stylesheet" href="/cv-buddy-original/repo/${institute}/styles.css">
            </head>
            <body>
              ${cvContent.outerHTML}
            </body>
          </html>
        `);
        printWindow.document.close();
        setTimeout(() => {
          printWindow.print();
          printWindow.close();
        }, 250);
      }
    }
  };

  if (isLoading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <div className="main-container">
      <div className="m-4 d-flex justify-content-center">
        <Link to="/" className="btn btn-info mx-2">Home</Link>
        <button id="editCv" className="btn btn-secondary mx-2" onClick={handleEdit}>Edit</button>
        <button id="saveCv" className="btn btn-primary mx-2" onClick={handleSave}>Save</button>
        <button id="resetCv" className="btn btn-danger mx-2" onClick={handleReset}>Reset</button>
        <button id="printCv" className="btn btn-success mx-2" onClick={handleDownload}>Download</button>
      </div>
      <hr className="section-separator" />
      <div 
        id="cv" 
        className={`${institute}-cv-container cv-container`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default CVEditor; 