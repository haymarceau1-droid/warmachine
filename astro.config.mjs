import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import netlify from '@astrojs/netlify';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://warmachineathletics.fr',
  trailingSlash: 'ignore',
  // Pages statiques ; seule l'admin du blog (/keystatic) tourne côté serveur sur Netlify.
  adapter: netlify(),
  integrations: [react(), markdoc(), keystatic()],
});
