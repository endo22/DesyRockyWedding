// Script untuk membuat OG image yang optimal untuk WhatsApp/Facebook
// Install sharp: npm install sharp
// Jalankan: node create-og-image.js

import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'public', 'img-original-backup', 'PRIM3264.jpg');
const outputPath = path.join(__dirname, 'public', 'img', 'og-image.jpg');

async function createOGImage() {
  try {
    console.log('Creating optimized OG image...');
    
    await sharp(inputPath)
      .resize(1200, 630, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ 
        quality: 85,
        progressive: true 
      })
      .toFile(outputPath);

    const stats = await sharp(outputPath).metadata();
    console.log(`✓ Created: ${outputPath}`);
    console.log(`  Dimensions: ${stats.width}x${stats.height}`);
    console.log(`  Format: ${stats.format}`);
    
    const fs = await import('fs');
    const size = fs.statSync(outputPath).size;
    console.log(`  Size: ${(size / 1024).toFixed(2)} KB`);
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

createOGImage();
