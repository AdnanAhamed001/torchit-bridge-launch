import fs from 'fs';
import path from 'path';

const oldDir = 'src/assets/Low Vision';
const newDir = 'src/assets/low-vision';

// 1. Rename the directory
if (fs.existsSync(oldDir)) {
  fs.renameSync(oldDir, newDir);
  console.log(`Renamed directory to ${newDir}`);
}

const targetFile = 'src/routes/low-vision-solutions.tsx';
let tsxContent = fs.readFileSync(targetFile, 'utf-8');

// 2. Read all files in the new directory
const files = fs.readdirSync(newDir);

// 3. Rename files and update imports
files.forEach(file => {
  // Create a clean filename: lowercase, replace spaces and special chars with hyphens
  const ext = path.extname(file);
  const baseName = path.basename(file, ext);
  
  // Clean the basename
  let cleanBaseName = baseName.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphen
    .replace(/^-+|-+$/g, '');    // Trim hyphens from start/end
  
  const cleanFileName = `${cleanBaseName}${ext}`;
  
  if (file !== cleanFileName) {
    const oldPath = path.join(newDir, file);
    const newPath = path.join(newDir, cleanFileName);
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed: "${file}" -> "${cleanFileName}"`);
    
    // Update the tsx file: replacing BOTH the old Low Vision path AND the old filename
    // We need to escape regex special chars in the old filename
    const escapedFile = file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex1 = new RegExp(`@/assets/Low Vision/${escapedFile}`, 'g');
    const regex2 = new RegExp(`@/assets/low-vision/${escapedFile}`, 'g');
    
    tsxContent = tsxContent.replace(regex1, `@/assets/low-vision/${cleanFileName}`);
    tsxContent = tsxContent.replace(regex2, `@/assets/low-vision/${cleanFileName}`);
  }
});

// Also replace any remaining 'Low Vision' paths to 'low-vision'
tsxContent = tsxContent.replace(/@\/assets\/Low Vision\//g, '@/assets/low-vision/');

// Fix the missing ChatGPT image that doesn't exist
tsxContent = tsxContent.replace(
  /@\/assets\/low-vision\/chatgpt-image-may-22-2026-08-32-56-pm\.png/g, 
  '@/assets/low-vision/hero-section-image.png'
);

// If the original string had exact spaces:
tsxContent = tsxContent.replace(
  /ChatGPT Image May 22, 2026, 08_32_56 PM\.png/g, 
  'hero-section-image.png'
);

fs.writeFileSync(targetFile, tsxContent);
console.log('Successfully updated low-vision-solutions.tsx!');
