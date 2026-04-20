import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string().max(160),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		difficulty: z.enum(['Junior', 'Senior']).default('Senior'),
		tags: z.array(z.string()).default([]),
		image: image().optional(),
		i18nRef: z.string().optional(),
	}),
});

export const collections = { blog };
