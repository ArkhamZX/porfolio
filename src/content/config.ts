import { defineCollection, z } from 'astro:content';



const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      summary: z.string(),
      isInConstruction: z.boolean(),
      isFeatured: z.boolean(),
      tags: z.array(z.string()),
      draft: z.boolean().optional(),
      demoUrl: z.string().optional(),
      repoUrl: z.string()
    })
});

export const collections = { projects };