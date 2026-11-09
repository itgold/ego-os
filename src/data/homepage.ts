import { bookParts } from './bookParts';

const tagline = 'An interactive book about the architecture of self';

/** Homepage wording and destinations. Layout belongs in components and CSS. */
export const homepage = {
  browserTitle: `Ego OS — ${tagline}`,
  description: `${tagline}.`,
  title: 'Ego OS',
  subtitle: `${tagline}.`,
  heading: 'The self is a system we can learn to understand.',
  introduction: 'Ego OS explores how the mind constructs reality, forms a sense of “I,” and produces behavior through patterns that often run outside awareness, and where conscious choice fits within it.',
  readingLink: { label: 'Begin reading', href: bookParts[0].href },
  editionMark: 'A field guide to the architecture of self · 2026',
  labels: {
    navigation: 'Main navigation',
    openMenu: 'Open menu',
    structure: 'Explore Ego OS',
    parts: 'Parts',
    readingDepth: 'Reading depth',
  },
};
