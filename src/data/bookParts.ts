export interface BookPart {
  id: string;
  number: string;
  title: string;
  href: string;
  asset: string;
  mask: string;
  color: string;
  labelY: string;
  defaultLayer?: boolean;
  pageType?: 'content' | 'overview';
  chapters: string[];
}

export const bookParts: BookPart[] = [
  {
    id: 'part-01',
    number: 'Part I',
    title: 'Foundations',
    href: '/book/introduction/',
    asset: '/assets/home-layers/layer-01-texture-stack.png',
    mask: '/assets/masks/part-01-mask.svg',
    color: '#eee4d2',
    labelY: '31%',
    defaultLayer: true,
    pageType: 'content',
    chapters: [
      'Brain Is a Computer',
      'Ego Is the Mind',
      'Three Models of the Same System',
    ],
  },
  {
    id: 'part-02',
    number: 'Part II',
    title: 'Ego OS Architecture',
    href: '/book/ego-os-architecture/',
    asset: '/assets/home-layers/layer-02-texture-stack.png',
    mask: '/assets/masks/part-02-mask.svg',
    color: '#879084',
    labelY: '43%',
    chapters: ['Automated Layer', 'Unconscious Layer', 'Conscious Layer'],
  },
  {
    id: 'part-03',
    number: 'Part III',
    title: 'The Self and Its World',
    href: '/book/self-and-world/',
    asset: '/assets/home-layers/layer-03-texture-stack.png',
    mask: '/assets/masks/part-03-mask.svg',
    color: '#b09054',
    labelY: '55%',
    chapters: ['Self and Identity', 'Boundaries'],
  },
  {
    id: 'part-04',
    number: 'Part IV',
    title: 'Control and Behavior',
    href: '/book/control-and-behavior/',
    asset: '/assets/home-layers/layer-04-texture-stack.png',
    mask: '/assets/masks/part-04-mask.svg',
    color: '#927e89',
    labelY: '67%',
    chapters: ['Goals and Attention', 'Conflict and Ambivalence', 'Action and Learning'],
  },
  {
    id: 'part-05',
    number: 'Part V',
    title: 'System Resources',
    href: '/book/system-resources/',
    asset: '/assets/home-layers/layer-05-texture-stack.png',
    mask: '/assets/masks/part-05-mask.svg',
    color: '#27343c',
    labelY: '79%',
    chapters: ['Fatigue and Rest'],
  },
];

export function getBookPart(slug: string) {
  return bookParts.find((part) => part.href === `/book/${slug}/`);
}
