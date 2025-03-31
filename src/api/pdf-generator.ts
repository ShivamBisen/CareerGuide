import express from 'express';
import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';

const router = express.Router();

router.post('/generate-pdf', async (req, res) => {
  const { institute, content } = req.body;

  try {
    // Load template styles
    const styleContent = await fs.readFile(
      path.join(process.cwd(), 'public', 'templates', institute.toLowerCase(), 'style.css'),
      'utf-8'
    );

    // Create HTML with content and styles
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>${styleContent}</style>
        </head>
        <body>
          ${content}
        </body>
      </html>
    `;

    // Launch browser
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox']
    });

    // Create new page
    const page = await browser.newPage();
    
    // Set content
    await page.setContent(html, {
      waitUntil: 'networkidle0'
    });

    // Generate PDF
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20mm',
        right: '20mm',
        bottom: '20mm',
        left: '20mm'
      }
    });

    // Close browser
    await browser.close();

    // Send PDF
    res.contentType('application/pdf');
    res.send(pdf);
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
});

export default router; 