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

export const collections = { chapters };
