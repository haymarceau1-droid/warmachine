import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://warmachineathletics.fr',
  trailingSlash: 'ignore',
  // CSS intégré au HTML : plus de feuilles de style qui bloquent le rendu (3 requêtes en moins).
  build: { inlineStylesheets: 'always' },
  // Précharge les pages liées quand elles entrent dans l'écran : navigation quasi instantanée.
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  // Pages statiques ; seule l'admin du blog (/keystatic) tourne côté serveur sur Vercel.
  adapter: vercel(),
  integrations: [react(), markdoc(), keystatic()],
});
