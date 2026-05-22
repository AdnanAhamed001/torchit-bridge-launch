import fs from 'fs';
import path from 'path';

const content = fs.readFileSync('src/routes/low-vision-solutions.tsx', 'utf-8');
const imports = content.match(/@\/assets\/Low Vision\/[^"']+/g) || [];

let issues = 0;
imports.forEach(importPath => {
  const fileName = importPath.replace('@/assets/Low Vision/', '');
  const realPath = path.join('src/assets/Low Vision', fileName);
  
  // Check if file exists with EXACT case
  try {
    const dirContent = fs.readdirSync('src/assets/Low Vision');
    if (!dirContent.includes(fileName)) {
      console.log(`CASE MISMATCH OR MISSING: ${fileName}`);
      issues++;
    }
  } catch(e) {
    console.log(`Error reading directory`);
  }
});

console.log(`Total issues found: ${issues}`);
