import { z } from 'astro/zod'
import type { SchemaContext } from 'astro:content'
import { slugify } from 'astro-toolkit/utils'

export const docSchema = ({ image }: SchemaContext) =>
  z
    .object({
      title: z.string().max(60, "it can't be more than 60 characters").min(3),
      description: z
        .string()
        .max(160, "it can't be more than 160 characters")
        .min(10),
      href: z.string().optional(),
      image: z
        .object({ src: z.union([image(), z.string().url()]), alt: z.string() })
        .optional(),
      keywords: z.union([z.string(), z.array(z.string())]).optional(),
      category: z.string(),
      position: z.number().optional(),
      authors: z.string().optional(),
      draft: z.boolean().default(false),
    })
    .strict()
    .transform((data) => ({
      ...data,
      link: data.href ?? `${data.category}/${slugify(data.title)}`,
    }))

export const 

export function authorSchema({ image }: SchemaContext) {
  z.object({
    name: z.string(),
    bio: z.string().optional(),
    email: z.string().email().optional(),
    role: z.string().optional(),
    profile: z.union([image(), z.string().url()]),
  }).strict()
}
