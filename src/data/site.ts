// Contenu central du site WM Athletics.
// Modifie ce fichier pour mettre à jour tarifs, planning, coachs, horaires, etc.

export const CONTACT = {
  phone: '07 56 97 54 07',
  phoneHref: 'tel:+33756975407',
  email: 'contact@warmachineathletics.fr',
  phoneNote: 'Indisponible le samedi après-midi, le dimanche et les jours fériés.',
  instagram: '#', // TODO : lien Instagram
  facebook: 'https://www.facebook.com/CrossFit-War-Machine-424815877661032/',
};

// TODO : remplacer par les liens Peppy exacts de chaque salle
export const BOOKING = {
  essai: {
    wm1: 'https://app.peppy.cool/quicksell/cl139oqan15463251imow4qafjtk/book/trial/',
    wm2: 'https://app.peppy.cool', // TODO : lien Peppy essai WM2
  },
  dropin: { wm1: 'https://app.peppy.cool', wm2: 'https://app.peppy.cool' },
};

// TODO : endpoint d'envoi des formulaires (Formspree, Brevo, back-office…)
export const FORM_ENDPOINT = '#';

export const ROUTES = {
  home: '/',
  wm1: '/crosstraining-chantenay-nantes/',
  wm2: '/crosstraining-haute-goulaine/',
  tarifs: '/tarifs-planning-crosstraining/',
  blog: '/blog-crosstraining/',
  contact: '/contact-crosstraining-nantes/',
  essai: '/essai-gratuit/',
  essaiWm2: '/essai-gratuit-wm-haute-goulaine/',
  dropin: '/drop-in-wm-chantenay/',
  dropinWm2: '/drop-in-wm-haute-goulaine/',
  recrutement: '/recrutement-war-machine/',
  teamBuilding: '/team-building/',
  faq: '/faq-warmachine/',
  mentions: '/mentions-legales/',
  confidentialite: '/politique-de-confidentialite/',
  cookies: '/cookies/',
};

export const NAV = [
  { label: 'Chantenay', href: ROUTES.wm1 },
  { label: 'Haute-Goulaine', href: ROUTES.wm2 },
  { label: 'Tarifs & planning', href: ROUTES.tarifs },
  { label: 'Blog', href: ROUTES.blog },
  { label: 'Contact', href: ROUTES.contact },
];

export const HORAIRES = [
  ['Lundi', '07:00 – 21:00'],
  ['Mardi', '10:00 – 21:00'],
  ['Mercredi', '07:00 – 21:00'],
  ['Jeudi', '10:00 – 21:00'],
  ['Vendredi', '07:00 – 20:00'],
  ['Samedi', '10:00 – 12:00'],
  ['Dimanche', '10:00 – 12:00'],
] as const;

export const HORAIRES_COURTS = [
  ['Lun. · Mer.', '7h – 21h'],
  ['Mar. · Jeu.', '10h – 21h'],
  ['Vendredi', '7h – 20h'],
  ['Sam. · Dim.', '10h – 12h'],
] as const;

export type SalleId = 'wm1' | 'wm2';

export const SALLES = {
  wm1: {
    id: 'wm1' as SalleId,
    code: 'WM1',
    nom: 'Chantenay',
    href: ROUTES.wm1,
    adresse: '6 rue de la Gare de Chantenay',
    ville: '44100 Nantes',
    acces: 'Quartier Chantenay, à 5–10 minutes du centre-ville et du périphérique.',
    maps: 'https://www.google.com/maps/search/?api=1&query=6+rue+de+la+Gare+de+Chantenay+44100+Nantes',
    photo: '/images/rig.jpg',
    hero: '/images/wod.jpg',
    surface: '310 m²',
    surfaces: [
      ['310 m²', 'd’entraînement au total'],
      ['240 m²', 'pour les WOD'],
      ['80 m²', 'free training & cours spécifiques'],
      ['70 m²', 'de vestiaires'],
    ],
    galerie: ['/images/pano.jpg', '/images/rig.jpg', '/images/handstand.jpg'],
    intro: '310 m² d’entraînement dans le quartier Chantenay, à 5–10 min du centre-ville et du périphérique. Plus de 50 h de cours par semaine, du lundi au dimanche.',
    salleSide: 'Un grand plateau pour les WOD, un espace dédié au free training et aux cours spécifiques, et des vestiaires spacieux.',
  },
  wm2: {
    id: 'wm2' as SalleId,
    code: 'WM2',
    nom: 'Haute-Goulaine',
    href: ROUTES.wm2,
    adresse: '2 bis rue Jean Mermoz',
    ville: '44115 Haute-Goulaine',
    acces: 'À 5–10 minutes de Vertou, Basse-Goulaine et Saint-Sébastien-sur-Loire.',
    maps: 'https://www.google.com/maps/search/?api=1&query=2+bis+rue+Jean+Mermoz+44115+Haute-Goulaine',
    photo: '/images/exterieur.jpg',
    hero: '/images/bois.jpg',
    surface: '360 m²',
    surfaces: [
      ['360 m²', 'd’entraînement au total'],
      ['250 m²', 'pour les WOD'],
      ['80 m²', 'free training & cours spécifiques'],
      ['70 m²', 'de vestiaires'],
      ['12 m²', 'espace détente'],
    ],
    galerie: ['/images/exterieur.jpg', '/images/bois.jpg', '/images/groupe.jpg'],
    intro: '360 m² d’entraînement à 5–10 min de Vertou, Basse-Goulaine et Saint-Sébastien-sur-Loire. Plus de 50 h de cours par semaine, avec le Family WOD le dimanche.',
    salleSide: 'Un plateau WOD de 250 m², un espace free training, des vestiaires et un coin détente pour souffler après la séance.',
  },
};

export const TARIFS = [
  { nom: 'Heures creuses', prix: 59, desc: 'Cours de 10 h et 17 h + bonus training, hors week-end. Jusqu’à 2 séances par jour.', note: 'Places limitées · engagement 6 mois', highlight: false },
  { nom: 'Unique', prix: 79, desc: '2 séances par semaine, accès à tous les cours : WOD, SPÉ, bonus training, FREE.', note: 'Packs de séances en plus via l’app · engagement 6 mois', highlight: false },
  { nom: 'Premium Access', prix: 115, desc: 'Illimité, jusqu’à 2 séances par jour, 7j/7. Tous les cours, sans pack à acheter.', note: 'Le choix des athlètes · engagement 6 mois', highlight: true },
];

export const EXTRAS = [
  ['Carnet 10 séances', '150 €', 'Valable 6 mois · 140 € tarif −30 ans'],
  ['Carnet 20 séances', '260 €', 'Valable 10 mois · 250 € tarif −30 ans'],
  ['Drop-in', '20 €', 'Séance à l’unité · CB ou espèces'],
  ['Séance d’essai', 'Offerte', 'Dans la salle de ton choix'],
] as const;

export const COURS = [
  ['WOD / Hyrox', 'Le cœur de WM : une séance complète orientée performance.', 'Tous niveaux'],
  ['Hyrox Interval', 'Cardio haute intensité en intervalles pour repousser tes limites.', 'Intensité haute'],
  ['Hyrox Strength', 'Renforcement musculaire au service de la course et des stations.', 'Force'],
  ['Hyrox Endurance', 'Cardio d’intensité faible à modérée pour construire ton moteur.', 'Endurance'],
  ['Haltérophilie', 'Épaulé-jeté et arraché : la technique avant la charge.', 'Technique'],
  ['Gymnastique', 'Tractions, muscle-up, équilibres : maîtrise ton poids de corps.', 'Technique'],
  ['Family WOD', 'Une séance à partager avec ton enfant.', 'WM2 uniquement'],
  ['Coaching privé', 'Une séance individuelle avec le coach de ton choix.', 'Sur réservation'],
] as const;

export const COACHS: { nom: string; role: string; quote: string; salles: SalleId[] }[] = [
  { nom: 'Florian', role: 'Owner', quote: '« Pathemata mathemata. » Parce que c’est carrément plus classe que « No pain no gain ».', salles: ['wm1', 'wm2'] },
  { nom: 'Laetitia', role: 'Manager · Coach', quote: '« Cela semble toujours impossible jusqu’à ce qu’on le fasse. »', salles: ['wm1'] },
  { nom: 'Gabriel', role: 'Coach', quote: '« J’adore aider quelqu’un à se réapproprier son corps. »', salles: ['wm1'] },
  { nom: 'Teddy', role: 'Coach', quote: '« Je ne perds jamais : soit je gagne, soit j’apprends. »', salles: ['wm1', 'wm2'] },
  { nom: 'Robin', role: 'Coach', quote: '« Brick by brick. »', salles: ['wm1', 'wm2'] },
  { nom: 'Léo', role: 'Coach', quote: '« Profiter de la vie et saisir les opportunités. »', salles: ['wm1', 'wm2'] },
  { nom: 'Chloé', role: 'Coach', quote: '« Fais les choses avec sérieux sans jamais te prendre au sérieux. »', salles: ['wm1', 'wm2'] },
  { nom: 'Justin', role: 'Coach', quote: '« Lorsque tu auras désappris à espérer, je t’apprendrai à vouloir. »', salles: ['wm1', 'wm2'] },
  { nom: 'Benjamin', role: 'Coach', quote: '« Permettre à votre corps de redevenir votre allié. »', salles: ['wm1', 'wm2'] },
  { nom: 'Fabien', role: 'Coach', quote: '« Be the best or be nothing. »', salles: ['wm1', 'wm2'] },
  { nom: 'Cyril', role: 'Coach', quote: '« When you lose, talk little. When you win, talk less! »', salles: ['wm1', 'wm2'] },
  { nom: 'Baptiste', role: 'Assistant office manager', quote: '« Ce qui ne nous tue pas nous rend plus fort. »', salles: ['wm1', 'wm2'] },
  { nom: 'Camille', role: 'Alternante coach · Office', quote: '« Il y a un enseignement à tirer dans chaque situation. »', salles: ['wm1', 'wm2'] },
];

export const AVIS = [
  { titre: 'Super expérience !', texte: 'Super expérience !\nCoachs à l’écoute et bienveillants\nEntraînements variés et adaptés à tout types de niveaux.\nEt playlist musicale au top !', auteur: 'Manon L.' },
  { titre: 'Les coachs sont top !!', texte: 'J’ai découvert le Crosstraining dans cette salle et c’était super. Les programmes sont variés, l’ambiance est bienveillante et les coachs sont top!!', auteur: 'Shaymae' },
  { titre: 'Je recommande sans hésitation', texte: 'Super expérience durant ces 4 derniers mois. Des coachs compétents et encourageant avec le sourire (même s’ils veulent pas mettre de shatta durant les entraînements mdr). Je recommande sans hésitation', auteur: 'Pierre R.' },
];

// ---------- Planning ----------
// Type de cours : W = WOD, H = Hyrox, S = Spé (gym, haltéro, mobilité…), B = Bonus training
export type ChipType = 'W' | 'H' | 'S' | 'B';
export type Cell = [string, ChipType][] | null;
export type Row = { heure: string; cells: Cell[] } | { heure: string; span: string };

const W: [string, ChipType][] = [['WOD', 'W']];
const H: [string, ChipType][] = [['Hyrox', 'H']];
const BT: [string, ChipType][] = [['Bonus training*', 'B']];
const p = (a: string, ta: ChipType, b: string, tb: ChipType): [string, ChipType][] => [[a, ta], [b, tb]];

export const JOURS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

export const PLANNING: Record<SalleId, Row[]> = {
  wm1: [
    { heure: '7h', cells: [H, null, W, null, W, null, null] },
    { heure: '8h – 9h45', cells: [BT, null, BT, null, BT, null, null] },
    { heure: '10h', cells: [W, W, W, W, W, W, W] },
    { heure: '11h', cells: [null, null, null, null, null, W, W] },
    { heure: '12h30', cells: [p('WOD', 'W', 'Hyrox Interval', 'H'), p('WOD', 'W', 'Gym', 'S'), p('WOD', 'W', 'Mobilité Flow', 'S'), p('WOD', 'W', 'Hyrox Strength', 'H'), p('WOD', 'W', 'Hyrox Endurance', 'H'), null, null] },
    { heure: '14h – 16h', span: 'Bonus training* — du lundi au vendredi' },
    { heure: '17h', cells: [W, W, W, W, W, null, null] },
    { heure: '18h', cells: [p('WOD', 'W', 'Gym', 'S'), p('Hyrox', 'H', 'Haltéro', 'S'), p('WOD', 'W', 'Hyrox Strength', 'H'), p('WOD', 'W', 'Hyrox Endurance', 'H'), W, null, null] },
    { heure: '19h', cells: [p('Hyrox', 'H', 'Haltéro', 'S'), p('WOD', 'W', 'Hyrox Strength', 'H'), p('WOD', 'W', 'Hyrox Endurance', 'H'), p('WOD', 'W', 'Hyrox Interval', 'H'), H, null, null] },
    { heure: '20h', cells: [W, W, H, W, null, null, null] },
  ],
  wm2: [
    { heure: '7h', cells: [H, null, W, null, W, null, null] },
    { heure: '8h – 9h45', cells: [BT, null, BT, null, BT, null, null] },
    { heure: '10h', cells: [W, W, W, W, W, W, p('WOD', 'W', 'Family WOD**', 'S')] },
    { heure: '11h', cells: [null, null, null, null, null, W, W] },
    { heure: '12h30', cells: [p('Hyrox', 'H', 'Gym', 'S'), p('WOD', 'W', 'Gym', 'S'), p('WOD', 'W', 'Hyrox Interval', 'H'), p('WOD', 'W', 'Hyrox Strength', 'H'), p('WOD', 'W', 'Hyrox Endurance', 'H'), null, null] },
    { heure: '14h – 16h', span: 'Bonus training* — du lundi au vendredi' },
    { heure: '17h', cells: [W, W, W, W, W, null, null] },
    { heure: '18h', cells: [p('WOD', 'W', 'Gym', 'S'), p('Hyrox', 'H', 'Haltéro', 'S'), p('WOD', 'W', 'Hyrox Strength', 'H'), p('WOD', 'W', 'Hyrox Endurance', 'H'), H, null, null] },
    { heure: '19h', cells: [p('Hyrox', 'H', 'Haltéro', 'S'), p('WOD', 'W', 'Hyrox Strength', 'H'), p('WOD', 'W', 'Hyrox Endurance', 'H'), p('WOD', 'W', 'Haltéro', 'S'), W, null, null] },
    { heure: '20h', cells: [W, W, H, W, null, null, null] },
  ],
};

// ---------- Blog ----------
// Les articles sont dans src/content/articles/ (édités depuis l'admin /keystatic).

// ---------- FAQ ----------
// La FAQ actuelle n'a pas pu être lue : questions rédigées à partir des infos vérifiées du site.
export const FAQ: [string, [string, string][]][] = [
  ['Débuter', [
    ['Je n’ai jamais fait de cross-training, c’est pour moi ?', 'Oui. Les cours sont ouverts aux débutants comme aux athlètes confirmés : chaque coach adapte les mouvements et les charges à ton niveau et à tes objectifs.'],
    ['Comment se passe la séance d’essai ?', 'Elle est offerte. Tu choisis ta salle, tu réserves un créneau en ligne et un coach t’accueille pour une séance adaptée.'],
    ['Quel rythme pour commencer ?', 'Pour un débutant, l’abonnement de base suffit. On conseille ensuite 3 séances par semaine en intermédiaire, 4 en confirmé et 5 ou plus pour les athlètes.'],
  ]],
  ['Tarifs & abonnements', [
    ['Combien coûte un abonnement ?', 'Trois formules : Heures creuses à 59 €, Unique à 79 € et Premium Access à 115 €, avec un engagement semestriel.'],
    ['Y a-t-il un tarif réduit ?', 'Oui : 10 € de remise pour les moins de 30 ans sur présentation d’un justificatif daté, sauf sur Premium Access.'],
    ['Et sans engagement ?', 'Carnets de 10 séances (150 €, valable 6 mois) ou 20 séances (260 €, valable 10 mois), ou drop-in à 20 € la séance.'],
  ]],
  ['Les salles', [
    ['Quels sont les horaires ?', 'Lundi et mercredi 7h–21h, mardi et jeudi 10h–21h, vendredi 7h–20h, samedi et dimanche 10h–12h, dans les deux salles.'],
    ['Où se trouvent les salles ?', 'WM1 au 6 rue de la Gare de Chantenay à Nantes, WM2 au 2 bis rue Jean Mermoz à Haute-Goulaine.'],
    ['Je suis de passage à Nantes, je peux venir ?', 'Oui, réserve un drop-in à 20 € dans la salle de ton choix.'],
  ]],
];
