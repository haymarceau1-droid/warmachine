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

- **Tout le contenu** (tarifs, planning, coachs, horaires, avis, articles, FAQ, liens) : `src/data/site.ts`
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
- [ ] Contenu des 8 autres articles de blog, de la FAQ et des pages légales
- [ ] Bannière cookies si des outils de mesure sont ajoutés
