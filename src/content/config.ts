import { defineCollection, z } from 'astro:content';

const chapters = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    chapterNumber: z.number().int().positive(),
    order: z.number().int().positive(),
    illustration: z.string().nullable(),
    draft: z.boolean(),
  }),
});

const parts = defineCollection({
  type: 'content',
  schema: z.object({
    partId: z.string(),
    activeNumber: z.string(),
    activeTitle: z.string(),
    activeQuote: z.array(z.string()),
  }),
});

export const collections = { chapters, parts };
