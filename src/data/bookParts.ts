/** Canonical reading order, titles, routes, and chapter lists for the entire book. */
export interface BookPart {
  id: string;
  number: string;
  title: string;
  slug: string;
  href: string;
  pageType: 'content' | 'overview';
  contentSlug?: string;
  chapters: string[];
}

type PartDefinition = Omit<BookPart, 'number' | 'href' | 'pageType'> & { pageType?: BookPart['pageType'] };

const definitions: PartDefinition[] = [
  { id: 'part-01', title: 'Introduction', slug: 'introduction', pageType: 'content', contentSlug: '01-introduction', chapters: [] },
  { id: 'part-02', title: 'Foundations', slug: 'foundations', chapters: ['Brain Is a Computer', 'Ego Is the Mind', 'Three Models of the Same System'] },
  { id: 'part-03', title: 'Ego OS Architecture', slug: 'ego-os-architecture', chapters: ['Automated Layer', 'Unconscious Layer', 'Conscious Layer'] },
  { id: 'part-04', title: 'The Self and Its World', slug: 'self-and-world', chapters: ['Self and Identity', 'Boundaries'] },
  { id: 'part-05', title: 'Control and Behavior', slug: 'control-and-behavior', chapters: ['Goals and Attention', 'Conflict and Ambivalence', 'Action and Learning'] },
  { id: 'part-06', title: 'System Resources', slug: 'system-resources', chapters: ['Fatigue and Rest'] },
  { id: 'part-07', title: 'Conclusion', slug: 'conclusion', chapters: [] },
];

export const bookParts: BookPart[] = definitions.map((part, index) => ({
  ...part,
  number: String(index + 1).padStart(2, '0'),
  href: `/book/${part.slug}/`,
  pageType: part.pageType ?? 'overview',
}));

export function getBookPart(slug: string) {
  return bookParts.find((part) => part.slug === slug);
}

export function getBookPartById(id: string): BookPart {
  const part = bookParts.find((part) => part.id === id);
  if (!part) throw new Error(`Unknown book section: ${id}`);
  return part;
}

export function getBookNeighbors(id: string) {
  const index = bookParts.indexOf(getBookPartById(id));
  return { previous: bookParts[index - 1], next: bookParts[index + 1] };
}
