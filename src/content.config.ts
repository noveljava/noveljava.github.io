import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/reviews' }),
  schema: z.object({
    title: z.string(),
    bookTitle: z.string(),
    author: z.string(),
    publishedAt: z.coerce.date(),
    finishedAt: z.coerce.date().optional(),
    shelf: z.enum(['development', 'general']).default('general'),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    rating: z.number().min(0).max(5).optional(),
    summary: z.string().max(180),
    cover: z.string().optional(),
    isbn: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { reviews };
