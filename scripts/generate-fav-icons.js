const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Helper function to build a valid Windows ICO buffer from PNG buffers
function createIcoFromPngs(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(count, 4); // Number of images

  let offset = 6 + (16 * count);
  const dirEntries = [];
  const imageBuffers = [];

  for (const { buffer, size } of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // image size
    entry.writeUInt32LE(offset, 12); // image offset

    dirEntries.push(entry);
    imageBuffers.push(buffer);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...imageBuffers]);
}

async function run() {
  const publicDir = path.join(__dirname, '..', 'public');
  const appDir = path.join(__dirname, '..', 'src', 'app');
  const sourceFav = path.join(publicDir, 'fav.png');

  // 1. Trim transparent whitespace around the logo emblem
  const trimmedBuffer = await sharp(sourceFav).trim().png().toBuffer();
  console.log('Trimmed transparent padding from source icon');

  // Save the trimmed full-bleed version back to fav.png
  fs.writeFileSync(sourceFav, trimmedBuffer);

  // Helper function to create maximum edge-to-edge square icons
  // Since the emblem is taller than wide (71x91 aspect ratio ~ 0.78),
  // fitting it to 100% height in the square will maximize the icon size in tabs!
  const makeMaxSquareIcon = async (size) => {
    // Fill the square edge-to-edge (100% height, centered horizontally)
    return sharp(trimmedBuffer)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer();
  };

  const png16 = await makeMaxSquareIcon(16);
  const png32 = await makeMaxSquareIcon(32);
  const png48 = await makeMaxSquareIcon(48);
  const png192 = await makeMaxSquareIcon(192);
  const png512 = await makeMaxSquareIcon(512);

  // Apple Touch Icon: 180x180 with standard gentle margins
  const appleInner = await sharp(trimmedBuffer)
    .resize(150, 150, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const apple180 = await sharp({
    create: {
      width: 180,
      height: 180,
      channels: 4,
      background: { r: 250, g: 247, b: 240, alpha: 1 },
    },
  })
    .composite([{ input: appleInner, gravity: 'center' }])
    .png()
    .toBuffer();

  // Save standard PNG icons
  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), png16);
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), png32);
  fs.writeFileSync(path.join(publicDir, 'favicon.png'), png32);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), apple180);
  fs.writeFileSync(path.join(publicDir, 'android-chrome-192x192.png'), png192);
  fs.writeFileSync(path.join(publicDir, 'android-chrome-512x512.png'), png512);

  // Also save in src/app for Next.js metadata resolution
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), apple180);
  fs.writeFileSync(path.join(appDir, 'icon.png'), png512);

  // 2. Generate multi-resolution ICO file
  const icoBuffer = createIcoFromPngs([
    { buffer: png16, size: 16 },
    { buffer: png32, size: 32 },
    { buffer: png48, size: 48 },
  ]);

  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);

  console.log('Successfully regenerated full-bleed maximized favicons!');
}

run().catch(console.error);
