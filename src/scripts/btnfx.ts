// Hover dynamique des boutons : le remplissage part du point d'entrée du curseur.
if (matchMedia('(hover: hover) and (pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const setPos = (el: HTMLElement, e: PointerEvent) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', e.clientX - r.left + 'px');
    el.style.setProperty('--my', e.clientY - r.top + 'px');
    return r;
  };
  document.addEventListener('pointerover', (e) => {
    const el = (e.target as Element | null)?.closest<HTMLElement>('.btn');
    if (el && !el.contains(e.relatedTarget as Node | null)) setPos(el, e);
  });
  document.addEventListener('pointermove', (e) => {
    const el = (e.target as Element | null)?.closest<HTMLElement>('.btn');
    if (!el) return;
    setPos(el, e);
  });
  document.addEventListener('pointerout', (e) => {
    const el = (e.target as Element | null)?.closest<HTMLElement>('.btn');
    if (el && !el.contains(e.relatedTarget as Node | null)) {
      // on garde la dernière position pour que le remplissage se rétracte vers la sortie
      setPos(el, e);
    }
  });
}
