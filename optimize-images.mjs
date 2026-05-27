import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = path.join(process.cwd(), 'src', 'assets', 'leadership-page');

async function optimizeImages() {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const inputPath = path.join(dir, file);
      const outputName = file.replace(/\.(png|jpg|jpeg)$/, '.webp');
      const outputPath = path.join(dir, outputName);
      
      console.log(`Optimizing ${file}...`);
      try {
        await sharp(inputPath)
          .webp({ quality: 80 }) // 80% quality is a great balance of size and visual fidelity
          .toFile(outputPath);
        console.log(`Created ${outputName}`);
        
        // delete original file after successful conversion
        fs.unlinkSync(inputPath);
        console.log(`Deleted original ${file}`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
}

optimizeImages();
