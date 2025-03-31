// CV Editor utility functions
export const loadTemplate = async (institute: string): Promise<{ html: string; css: string; js: string }> => {
  try {
    const [htmlResponse, cssResponse, jsResponse] = await Promise.all([
      fetch(`/templates/${institute}/index.html`),
      fetch(`/templates/${institute}/style.css`),
      fetch(`/templates/${institute}/script.js`)
    ]);

    if (!htmlResponse.ok || !cssResponse.ok || !jsResponse.ok) {
      throw new Error('Failed to load template files');
    }

    const [html, css, js] = await Promise.all([
      htmlResponse.text(),
      cssResponse.text(),
      jsResponse.text()
    ]);

    return { html, css, js };
  } catch (error) {
    console.error('Error loading template:', error);
    throw error;
  }
};

export const saveCV = async (institute: string, content: { html: string; css: string; js: string }): Promise<void> => {
  try {
    // Save to localStorage
    localStorage.setItem(`cv-${institute}`, JSON.stringify(content));
    
    // You can also implement server-side saving here
    // await fetch('/api/save-cv', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ institute, content })
    // });
  } catch (error) {
    console.error('Error saving CV:', error);
    throw error;
  }
};

export const generatePDF = async (institute: string, content: { html: string; css: string }): Promise<Blob> => {
  try {
    const combinedHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>${content.css}</style>
      </head>
      <body>
        ${content.html}
      </body>
      </html>
    `;

    const response = await fetch('/api/generate-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        institute, 
        content: combinedHTML 
      })
    });
    
    if (!response.ok) throw new Error('Failed to generate PDF');
    return await response.blob();
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};

export const loadSavedCV = (institute: string): { html: string; css: string; js: string } | null => {
  const saved = localStorage.getItem(`cv-${institute}`);
  return saved ? JSON.parse(saved) : null;
}; 