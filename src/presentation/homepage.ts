import { bookParts } from '../data/bookParts';

/** Visual placement keyed by content ID; no book copy belongs here. */
export interface PartPresentation {
  copy: { x: string; y: string; mobileX?: string; mobileY?: string };
  theme: 'light' | 'dark';
  marker: { y: string; anchor: string; line: number; breakAfterWords?: number };
}

export const partPresentation: Record<string, PartPresentation> = {
  'part-01': { copy: { x: '34%', y: '31%', mobileX: '1.7rem', mobileY: '5.5rem' }, theme: 'dark', marker: { y: '20%', anchor: '93%', line: 60 } },
  'part-02': { copy: { x: '35%', y: '32%' }, theme: 'dark', marker: { y: '29.8%', anchor: '94%', line: 80 } },
  'part-03': { copy: { x: '11%', y: '37%' }, theme: 'light', marker: { y: '40.7%', anchor: '96%', line: 72, breakAfterWords: 2 } },
  'part-04': { copy: { x: '50%', y: '33%' }, theme: 'dark', marker: { y: '50.4%', anchor: '97%', line: 70, breakAfterWords: 2 } },
  'part-05': { copy: { x: '40%', y: '30%' }, theme: 'dark', marker: { y: '62%', anchor: '97%', line: 71, breakAfterWords: 1 } },
  'part-06': { copy: { x: '40%', y: '28%' }, theme: 'dark', marker: { y: '71%', anchor: '97%', line: 61 } },
  'part-07': { copy: { x: '40%', y: '28%' }, theme: 'light', marker: { y: '80%', anchor: '97%', line: 66 } },
};

export function getPartPresentation(partId: string): PartPresentation {
  const presentation = partPresentation[partId];
  if (!presentation) throw new Error(`Missing homepage presentation for ${partId}`);
  return presentation;
}

/** Renderable artwork layers; the eighth layer is decorative, outside reading order. */
export interface HomepageLayer {
  id: string;
  number: string;
  title: string;
  href: string;
  asset: string;
  mask: string;
  color: string;
  labelY: string;
  defaultLayer?: boolean;
}

const layerColors = ['#eee4d2', '#879084', '#b09054', '#927e89', '#27343c', '#53616a', '#53616a', '#53616a'];

export const homepageLayers: HomepageLayer[] = [
  ...bookParts.map((part) => ({ ...part, defaultLayer: part.id === 'part-01' })),
  { id: 'part-08', number: '08', title: '', href: '#', defaultLayer: false },
].map((part, index) => ({
  ...part,
  asset: `/assets/home-layers/layer-${part.id.replace('part-', '')}-texture-stack.png`,
  mask: '',
  color: layerColors[index] ?? '#53616a',
  labelY: partPresentation[part.id]?.copy.y ?? '90%',
}));
