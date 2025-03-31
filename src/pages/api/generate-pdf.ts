import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { content, institute } = req.body;

        // Launch Puppeteer
        const browser = await puppeteer.launch({
            headless: 'new',
        });
        const page = await browser.newPage();

        // Set content with styles
        await page.setContent(content, {
            waitUntil: 'networkidle0',
        });

        // Add the styles from our CSS file
        const cssPath = `${process.cwd()}/cv-buddy-original/styles.css`;
        const css = await import('fs').then(fs => fs.readFileSync(cssPath, 'utf8'));
        await page.addStyleTag({ content: css });

        // Generate PDF
        const pdf = await page.pdf({
            format: 'A4',
            printBackground: true,
            margin: {
                top: '20px',
                right: '20px',
                bottom: '20px',
                left: '20px',
            },
        });

        await browser.close();

        // Send the PDF
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=cv-${institute}.pdf`);
        res.send(pdf);
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).json({ message: 'Error generating PDF' });
    }
} 