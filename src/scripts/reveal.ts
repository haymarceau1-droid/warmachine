// Animations : révélation des titres mot par mot + apparition des blocs au scroll.
// Désactivées si l'utilisateur préfère réduire les animations.

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const TITLES = 'h1.display, h2.display, .cta__title';
const BLOCKS = [
  '.card', '.plan', '.extra', '.coach', '.post', '.une', '.salle', '.cours', '.avis', '.surface',
  '.gallery__img', '.salle-card', '.section-head__side', '.lead', '.pl-tabs', '.pl-legend',
  '.form', '.info', '.infos', '.venir__map', '.hours', 'details', '.prow', '.stat', '.btn-row',
].join(',');

/** Découpe le texte d'un titre en mots masqués, en conservant <br> et <span class="red">. */
function splitWords(el: HTMLElement) {
  let i = 0;
  const walk = (node: Node) => {
    for (const child of Array.from(node.childNodes)) {
      if (child.nodeType === Node.TEXT_NODE) {
        const text = child.textContent ?? '';
        if (!text.trim()) continue;
        const frag = document.createDocumentFragment();
        text.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.append(document.createTextNode(' ')); return; }
          const w = document.createElement('span');
          w.className = 'rv-w';
          const inner = document.createElement('span');
          inner.className = 'rv-wi';
          inner.style.setProperty('--i', String(i++));
          inner.textContent = part;
          w.append(inner);
          frag.append(w);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE && !(child as Element).matches('svg, br')) {
        walk(child);
      }
    }
  };
  walk(el);
  el.classList.add('rv-title');
}

if (!reduce && 'IntersectionObserver' in window) {
  document.querySelectorAll<HTMLElement>(TITLES).forEach(splitWords);

  // Décalage en cascade des blocs d'une même grille
  document.querySelectorAll<HTMLElement>(BLOCKS).forEach((el) => {
    el.classList.add('rv-block');
    const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
    el.style.setProperty('--d', `${Math.min(siblings.indexOf(el), 6) * 70}ms`);
  });

  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    }),
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  document.querySelectorAll('.rv-title, .rv-block').forEach((el) => io.observe(el));

  // Parallaxe douce des photos de hero — uniquement sur grand écran avec souris
  // (désactivée sur mobile : la barre d'adresse qui se rétracte la rend saccadée).
  if (window.matchMedia('(min-width: 901px) and (pointer: fine)').matches) {
    const bgs = Array.from(document.querySelectorAll<HTMLElement>('.hero__bg, .phero__bg'));
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        bgs.forEach((b) => {
          const host = b.parentElement!;
          const h = host.offsetHeight;
          const y = Math.min(window.scrollY, h); // hors écran : on ne bouge plus
          const max = h * 0.07; // reste dans la marge de 8 % ajoutée en CSS
          b.style.transform = `translate3d(0, ${Math.min(y * 0.15, max)}px, 0)`;
        });
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
} else {
  document.documentElement.classList.remove('js');
}
