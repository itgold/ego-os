import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// Match the former SVG filter: Gaussian sigma 18, offset (8, 18), black at 60%.
// 80px of padding keeps the blur outside the artwork without clipping its edges.
const width = 1163;
const height = 853;
const padding = 80;
const output = fileURLToPath(new URL('../public/assets/shadows/', import.meta.url));
await mkdir(output, { recursive: true });

for (let depth = 1; depth <= 8; depth += 1) {
  const name = `layer-${String(depth).padStart(2, '0')}`;
  const source = fileURLToPath(new URL(`../public/assets/home-layers/${name}-texture-stack.png`, import.meta.url));
  const metadata = await sharp(source).metadata();
  if (metadata.width !== width || metadata.height !== height) {
    throw new Error(`${name}: expected ${width} × ${height}; update shadow geometry before regenerating.`);
  }
  // Interpret extracted alpha as grayscale so padding is zero, rather than opaque alpha.
  const sourceAlpha = await sharp(source).extractChannel('alpha').raw().toBuffer();
  const alpha = await sharp(sourceAlpha, { raw: { width, height, channels: 1 } })
    .extend({ left: padding + 8, right: padding - 8, top: padding + 18, bottom: padding - 18, background: '#000' })
    .blur(18)
    .greyscale()
    .raw()
    .toBuffer();
  // Scale alpha explicitly: Sharp's linear operation leaves alpha channels unchanged.
  for (let i = 0; i < alpha.length; i += 1) alpha[i] = Math.round(alpha[i] * 0.6);
  await sharp({ create: { width: width + padding * 2, height: height + padding * 2, channels: 3, background: '#000' } })
    .joinChannel(alpha, { raw: { width: width + padding * 2, height: height + padding * 2, channels: 1 } })
    .png({ compressionLevel: 9 })
    .toFile(`${output}${name}-shadow.png`);
  console.log(`Rendered ${name}-shadow.png`);
}
