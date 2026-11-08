import { config, collection, fields } from '@keystatic/core';

// Interface d'administration du blog (accessible sur /keystatic).
// - En local (npm run dev) : les articles sont écrits directement dans le dossier du projet.
// - En ligne : stockage GitHub par défaut (le mode local ne voit pas les fichiers sur Vercel → « empty collection »).
//   PUBLIC_KEYSTATIC_STORAGE=cloud pour Keystatic Cloud — voir README, section « Blog : accès client ».
const storageKind = import.meta.env.PUBLIC_KEYSTATIC_STORAGE ?? (import.meta.env.PROD ? 'github' : 'local');

const storage =
  storageKind === 'cloud'
    ? ({ kind: 'cloud' } as const)
    : storageKind === 'github'
      ? ({ kind: 'github', repo: 'haymarceau1-droid/warmachine' } as const)
      : ({ kind: 'local' } as const);

export default config({
  storage,
  ...(storageKind === 'cloud' && import.meta.env.PUBLIC_KEYSTATIC_CLOUD_PROJECT
    ? { cloud: { project: import.meta.env.PUBLIC_KEYSTATIC_CLOUD_PROJECT } }
    : {}),
  locale: 'fr-FR',
  ui: {
    brand: { name: 'WM Athletics' },
    navigation: { Blog: ['articles'] },
  },
  collections: {
    articles: collection({
      label: 'Articles',
      slugField: 'titre',
      path: 'src/content/articles/*',
      format: { contentField: 'contenu' },
      entryLayout: 'content',
      columns: ['titre', 'date', 'categorie'],
      schema: {
        titre: fields.slug({
          name: { label: 'Titre', validation: { isRequired: true, length: { max: 90 } } },
          slug: { label: 'Adresse de la page', description: 'Générée à partir du titre. À ne pas modifier une fois publié.' },
        }),
        categorie: fields.select({
          label: 'Catégorie',
          options: [
            { label: 'Entraînement', value: 'Entraînement' },
            { label: 'Mobilité', value: 'Mobilité' },
            { label: 'Nutrition', value: 'Nutrition' },
            { label: 'Perte de poids', value: 'Perte de poids' },
            { label: 'Vie du club', value: 'Vie du club' },
          ],
          defaultValue: 'Entraînement',
        }),
        date: fields.date({ label: 'Date de publication', defaultValue: { kind: 'today' }, validation: { isRequired: true } }),
        image: fields.image({
          label: 'Image de couverture',
          description: 'Format paysage, 1600 px de large conseillé.',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
        }),
        extrait: fields.text({
          label: 'Résumé',
          description: 'Une ou deux phrases affichées dans la liste des articles et sur Google.',
          multiline: true,
          validation: { isRequired: true, length: { max: 200 } },
        }),
        auteur: fields.text({ label: 'Auteur', defaultValue: 'Florian Thin' }),
        role: fields.text({ label: 'Rôle de l’auteur', defaultValue: 'Fondateur de WM Athletics' }),
        une: fields.checkbox({ label: 'Mettre à la une', description: 'Affiché en grand en haut du blog (le plus récent l’emporte).', defaultValue: false }),
        brouillon: fields.checkbox({ label: 'Brouillon', description: 'Coché : l’article n’apparaît pas sur le site.', defaultValue: false }),
        contenu: fields.markdoc({
          label: 'Article',
          options: {
            image: { directory: 'public/images/blog', publicPath: '/images/blog/' },
            heading: [2, 3],
          },
        }),
      },
    }),
  },
});
