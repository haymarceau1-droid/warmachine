# warmachine

Site de **WM Athletics** — Hyrox & cross-training à Nantes (WM1 Chantenay, WM2 Haute-Goulaine).
Construit avec [Astro](https://astro.build), à partir de la maquette Figma « Site WM Athletics — Desktop ».

## Démarrer

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère le site statique dans dist/
npm run preview
```

## Où modifier quoi

- **Articles du blog** : depuis l'admin `/keystatic` (fichiers dans `src/content/articles/`)
- **Le reste du contenu** (tarifs, planning, coachs, horaires, avis, FAQ, liens) : `src/data/site.ts`
- **Couleurs, typographies, boutons** : `src/styles/global.css`
- **Header / footer / bloc « Une envie de tester ? »** : `src/components/`
- **Photos** : `public/images/` (voir `public/images/README.md`)

## Pages

| URL | Page |
|---|---|
| `/` | Accueil |
| `/crosstraining-chantenay-nantes/` | WM Chantenay |
| `/crosstraining-haute-goulaine/` | WM Haute-Goulaine |
| `/tarifs-planning-crosstraining/` | Tarifs & planning |
| `/blog-crosstraining/` + `/<slug>/` | Blog et articles |
| `/contact-crosstraining-nantes/` | Contact |
| `/essai-gratuit/`, `/essai-gratuit-wm-haute-goulaine/` | Séance d'essai |
| `/drop-in-wm-chantenay/`, `/drop-in-wm-haute-goulaine/` | Drop-in |
| `/recrutement-war-machine/` | Recrutement |
| `/team-building/` | Séminaires & team building |
| `/faq-warmachine/` | FAQ |
| `/mentions-legales/`, `/politique-de-confidentialite/`, `/cookies/` | Pages légales |

Les URL reprennent celles du site actuel pour conserver le référencement.

## À compléter avant la mise en ligne

- [ ] Photos dans `public/images/` (salles + coachs)
- [ ] Liens de réservation Peppy exacts (`BOOKING` dans `site.ts`)
- [ ] Envoi des formulaires (`FORM_ENDPOINT` dans `site.ts` : Formspree, Brevo…)
- [ ] Lien Instagram (`CONTACT.instagram`)
- [ ] Contenu des 8 autres articles (via l'admin), de la FAQ et des pages légales
- [ ] Bannière cookies si des outils de mesure sont ajoutés

## Blog : accès client

Le blog se gère depuis une interface d'administration, **Keystatic**, sur `/keystatic`.
Ton client y écrit ses articles (titre, catégorie, image, résumé, texte mis en forme), coche « Brouillon » pour les garder privés et « Mettre à la une » pour les afficher en grand.
Chaque article est un fichier dans `src/content/articles/` ; les images vont dans `public/images/blog/`.

### En local

`npm run dev`, puis ouvrir http://localhost:4321/keystatic. Les articles sont écrits directement dans le dossier du projet.

### En ligne (Vercel)

Le site est configuré pour Vercel (adaptateur `@astrojs/vercel`) : les pages restent statiques, seule l'admin `/keystatic` tourne en fonction serverless.
À chaque publication, Keystatic crée un commit sur GitHub, Vercel reconstruit le site et l'article est en ligne en 1 à 2 minutes.

1. **Projet Vercel** : le dépôt `haymarceau1-droid/warmachine` doit être importé dans Vercel (Astro est détecté automatiquement, rien à régler pour le build).
2. **Créer la GitHub App de Keystatic** (une seule fois) :
   - en local, lancer `PUBLIC_KEYSTATIC_STORAGE=github npm run dev` et ouvrir http://localhost:4321/keystatic ;
   - suivre l'assistant, qui crée l'app GitHub et écrit les clés dans `.env` ;
   - dans les réglages de l'app sur GitHub (Settings → Developer settings → GitHub Apps), ajouter l'URL de rappel du site en ligne : `https://<domaine>/api/keystatic/github/oauth/callback` ;
   - dans Vercel → Settings → Environment Variables, ajouter `PUBLIC_KEYSTATIC_STORAGE=github` et recopier les 4 variables du `.env` (`KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET`, `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`), puis redéployer.
3. **Donner l'accès au client** : il crée un compte GitHub gratuit, tu l'ajoutes en collaborateur du dépôt (Settings → Collaborators, rôle « Write »), il installe l'app Keystatic sur le dépôt quand on le lui propose, puis se connecte sur `https://<domaine>/keystatic`.

**Alternative sans compte GitHub pour le client** : Keystatic Cloud (connexion par email). Créer un projet sur keystatic.cloud, puis dans Vercel mettre `PUBLIC_KEYSTATIC_STORAGE=cloud` et `PUBLIC_KEYSTATIC_CLOUD_PROJECT=<equipe>/<projet>`, redéployer, et inviter le client par email depuis keystatic.cloud. Vérifier les conditions et la tarification en vigueur.

Les variables à renseigner sont listées dans `.env.example`.
