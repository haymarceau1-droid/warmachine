// Charge les images de fond (data-bg) seulement quand elles approchent de l'écran.
const els = document.querySelectorAll<HTMLElement>('[data-bg]');
const load = (el: HTMLElement) => { el.style.backgroundImage = el.dataset.bg!; el.removeAttribute('data-bg'); };
if (!('IntersectionObserver' in window)) els.forEach(load);
else {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { load(e.target as HTMLElement); io.unobserve(e.target); }
  }, { rootMargin: '600px 0px' });
  els.forEach((el) => io.observe(el));
}
