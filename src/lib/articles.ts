import { getCollection, type CollectionEntry } from 'astro:content';

export type ArticleEntry = CollectionEntry<'articles'>;

/** Articles publiés (hors brouillons), du plus récent au plus ancien. */
export async function getArticles(): Promise<ArticleEntry[]> {
  const all = await getCollection('articles', ({ data }) => !data.brouillon);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** L'article « à la une » : le plus récent coché, sinon le plus récent tout court. */
export function pickUne(list: ArticleEntry[]): ArticleEntry | undefined {
  return list.find((a) => a.data.une) ?? list[0];
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

export const cover = (a: ArticleEntry) => a.data.image || '/images/wod.webp';
