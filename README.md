# Ego OS

A minimal Astro foundation for an illustrated digital book. The included chapter and home-page copy are clearly marked placeholders; replace them with the manuscript when it is ready.

## Installation

Use Node.js 18.17 or later.

```sh
npm install
```

## Development

```sh
npm run dev
```

Astro prints the local address after the server starts.

## Production build

```sh
npm run build
```

To preview the production output locally:

```sh
npm run preview
```

## Creating a chapter

1. Add an `.mdx` file to `src/content/chapters/`. Its file name becomes its chapter URL, such as `02-example.mdx` becoming `/chapters/02-example/`.
2. Include all required frontmatter fields: `title`, `description`, `chapterNumber`, `order`, `illustration`, and `draft`.
3. Set `draft: false` when the chapter should appear in the table of contents and navigation.
4. Write the chapter in MDX. To add an illustration, place its file in `public/images/illustrations/`, then import and use `Illustration.astro` with meaningful `alt` text and an optional caption.

```mdx
---
title: "Chapter title"
description: "A brief chapter description."
chapterNumber: 2
order: 2
illustration: null
draft: true
---

Chapter text goes here.
```
