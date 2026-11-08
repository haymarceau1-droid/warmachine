import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Articles du blog : fichiers Markdoc écrits depuis l'admin Keystatic (/keystatic).
const articles = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/articles' }),
  schema: z.object({
    titre: z.string(),
    categorie: z.string().default('Entraînement'),
    date: z.coerce.date(),
    image: z.string().nullable().optional(),
    extrait: z.string(),
    auteur: z.string().optional().default(''),
    role: z.string().optional().default(''),
    une: z.boolean().default(false),
    brouillon: z.boolean().default(false),
  }),
});

export const collections = { articles };
