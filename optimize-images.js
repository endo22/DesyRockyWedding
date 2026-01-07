// Script untuk optimize gambar
// Install dependencies: npm install sharp --save-dev
// Jalankan: node optimize-images.js

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'public', 'img');
const outputDir = path.join(__dirname, 'public', 'img-optimized');

// Buat folder output jika belum ada
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
  try {
    const files = fs.readdirSync(inputDir);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );

    console.log(`Found ${imageFiles.length} images to optimize...\n`);

    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
      
      const stats = fs.statSync(inputPath);
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);

      try {
        await sharp(inputPath)
          .resize(1920, 1920, { // Max 1920px, maintain aspect ratio
            fit: 'inside',
            withoutEnlargement: true
          })
          .webp({ quality: 80 }) // Convert to WebP with 80% quality
          .toFile(outputPath);

        const newStats = fs.statSync(outputPath);
        const newSizeMB = (newStats.size / (1024 * 1024)).toFixed(2);
        const reduction = ((1 - newStats.size / stats.size) * 100).toFixed(1);

        console.log(`✓ ${file}: ${sizeMB}MB → ${newSizeMB}MB (${reduction}% reduction)`);
      } catch (err) {
        console.error(`✗ Error processing ${file}:`, err.message);
      }
    }

    console.log('\n✓ Optimization complete!');
    console.log(`\nOptimized images saved to: ${outputDir}`);
    console.log('\nNext steps:');
    console.log('1. Review the optimized images');
    console.log('2. Replace public/img with public/img-optimized');
    console.log('3. Update GallerySection.tsx to use .webp extension');
    
  } catch (error) {
    console.error('Error:', error);
  }
}

optimizeImages();
