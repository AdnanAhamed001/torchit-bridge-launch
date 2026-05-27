import sharp from 'sharp';

async function run() {
  await sharp('src/assets/Shhruti/4.png')
    .resize(1200)
    .png({ quality: 80, compressionLevel: 9 })
    .toFile('src/assets/Shhruti/4-small.png');
  console.log('Done shrinking 4.png');
}

run();
