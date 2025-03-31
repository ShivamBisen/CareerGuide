import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEMPLATES_SRC_DIR = path.join(__dirname, '../templates');
const TEMPLATES_DEST_DIR = path.join(__dirname, '../public/templates');

const templates = {
  iitkgp: ['template.html'],
  iitm: ['template.html'],
  iitb: ['template.html']
};

const setupTemplates = async () => {
  // Create templates directory if it doesn't exist
  if (!fs.existsSync(TEMPLATES_DEST_DIR)) {
    fs.mkdirSync(TEMPLATES_DEST_DIR, { recursive: true });
  }

  // Copy institute templates
  for (const [institute, files] of Object.entries(templates)) {
    const instituteDestDir = path.join(TEMPLATES_DEST_DIR, institute);
    if (!fs.existsSync(instituteDestDir)) {
      fs.mkdirSync(instituteDestDir, { recursive: true });
    }

    for (const file of files) {
      const srcPath = path.join(TEMPLATES_SRC_DIR, institute, file);
      const destPath = path.join(instituteDestDir, file);
      
      if (!fs.existsSync(srcPath)) {
        console.warn(`Warning: Source file not found: ${srcPath}`);
        continue;
      }

      try {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Successfully copied ${file} to ${destPath}`);
      } catch (error) {
        console.error(`Error copying ${file}:`, error);
      }
    }

    // Create a default preview image if it doesn't exist
    const previewPath = path.join(instituteDestDir, 'preview.png');
    if (!fs.existsSync(previewPath)) {
      const defaultPreviewPath = path.join(__dirname, '../src/assets/images/default-template-preview.png');
      if (fs.existsSync(defaultPreviewPath)) {
        fs.copyFileSync(defaultPreviewPath, previewPath);
        console.log(`Created default preview for ${institute}`);
      }
    }
  }
};

setupTemplates().then(() => {
  console.log('Template setup complete!');
}).catch(error => {
  console.error('Error setting up templates:', error);
}); 