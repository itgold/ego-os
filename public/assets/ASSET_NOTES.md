# Homepage asset notes

- `source/ego-os-homepage-reference.png` and `source/ego-os-visual-system-reference.png` are unchanged copies of the supplied design references.
- `illustrations/foundations-landscape.webp` was reconstructed from the supplied references with OpenAI ImageGen. It contains no embedded labels and has a transparent background.
- `home-layers/*.webp` are independently movable production-shaped assets reconstructed from the supplied visual language. Their color and paper grain are intentionally restrained so future commissioned textures can replace them without changing layout code.
- `masks/*.svg`, `overlays/*.svg`, the coral fold, and the unfold icon are project-native assets. The five masks preserve the individual organic silhouettes during movement.

## Production artwork follow-up

The four lower-part WebP textures are temporary art-direction assets. Replace them with commissioned illustrations or final scanned paper textures while keeping the filenames, transparent silhouettes, and 1400 × 720 canvas dimensions.

## Static layer shadows

`shadows/layer-01-shadow.png` through `layer-08-shadow.png` replace the runtime SVG blur filters. Regenerate them with `npm run assets:shadows` after changing the corresponding `home-layers/layer-XX-texture-stack.png` textures. The script uses Sharp supplied by the current Astro dependency tree.

Each shadow preserves the original 1163 × 853 artwork coordinates, Gaussian blur sigma 18, offset (8, 18), and black opacity 60%. An 80px transparent border gives a 1323 × 1013 output, placed at (-80, -80) inside the existing SVG viewBox so responsive scaling and overflow stay aligned.
