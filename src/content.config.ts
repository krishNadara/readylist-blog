import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    target_keyword: z.string().optional(),
    slug: z.string().optional(),
    ogImage: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    canonical: z.string().optional(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { blog };
