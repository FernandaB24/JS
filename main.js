// main.js — versão "MARAVILHOSO"
// Se rodar no Node, apenas loga e não tenta manipular DOM
if (typeof document === 'undefined') {
  console.log("Olá mundo! (rodando via Node) — abra index.html no Live Server para ver a versão maravilhosa.");
} else {
  // Limpeza caso o script seja recarregado várias vezes no Live Server
  const existing = document.getElementById('maravilhoso-root');
  if (existing) existing.remove();

  // Root container (full-screen)
  const root = document.createElement('div');
  root.id = 'maravilhoso-root';
  Object.assign(root.style, {
    position: 'fixed',
    inset: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    pointerEvents: 'none',
    fontFamily: 'Inter, "Segoe UI", Roboto, system-ui, -apple-system, "Helvetica Neue", Arial',
  });
  document.body.appendChild(root);

  // Subtle blurred backdrop (glass)
  const backdrop = document.createElement('div');
  Object.assign(backdrop.style, {
    position: 'absolute',
    inset: '0',
    background: 'radial-gradient(1200px 600px at 10% 10%, rgba(120,88,255,0.08), transparent 8%), radial-gradient(900px 500px at 90% 90%, rgba(255,110,165,0.06), transparent 8%)',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    pointerEvents: 'none'
  });
  root.appendChild(backdrop);

  // Floating soft particles for depth
  const particlesCount = 18;
  for (let i = 0; i < particlesCount; i++) {
    const p = document.createElement('div');
    const size = 8 + Math.random() * 28;
    Object.assign(p.style, {
      position: 'absolute',
      left: Math.random() * 100 + 'vw',
      top: Math.random() * 100 + 'vh',
      width: size + 'px',
      height: size + 'px',
      borderRadius: '50%',
      background: `linear-gradient(180deg, rgba(255,255,255,${0.07 + Math.random()*0.07}), rgba(255,255,255,0))`,
      transform: `translateY(${Math.random()*30}px)`,
      filter: 'blur(6px)',
      opacity: 0.7,
      pointerEvents: 'none',
      transition: 'transform 8s linear, opacity 6s ease-in-out'
    });
    root.appendChild(p);
    // gentle vertical motion loop
    setTimeout(() => {
      p.style.transform = `translateY(${(30 + Math.random()*120) * (Math.random() < 0.5 ? -1 : 1)}px)`;
      p.style.opacity = 0.35 + Math.random()*0.6;
    }, 60 + i * 150);
    setInterval(() => {
      p.style.transform = `translateY(${(30 + Math.random()*120) * (Math.random() < 0.5 ? -1 : 1)}px)`;
      p.style.opacity = 0.35 + Math.random()*0.6;
    }, 7000 + Math.random()*5000);
  }

  // Card wrapper (center)
  const card = document.createElement('div');
  card.setAttribute('role', 'region');
  card.setAttribute('aria-label', 'Mensagem criativa');
  Object.assign(card.style, {
    position: 'relative',
    width: 'min(860px, 92%)',
    maxWidth: '920px',
    padding: '28px 36px',
    borderRadius: '18px',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))',
    boxShadow: '0 20px 50px rgba(2,6,23,0.6), inset 0 1px 0 rgba(255,255,255,0.02)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
    pointerEvents: 'auto',
    overflow: 'visible',
    transform: 'translateY(8px)',
    opacity: '0',
  });
  root.appendChild(card);

  // Animated gradient border (pseudo via overlay)
  const border = document.createElement('div');
  Object.assign(border.style, {
    position: 'absolute',
    inset: '-2px',
    borderRadius: '20px',
    padding: '2px',
    background: 'conic-gradient(from 180deg at 50% 50%, #7b61ff, #00d4ff, #ff7eb3, #ffb86b, #7b61ff)',
    zIndex: -1,
    filter: 'blur(14px)',
    opacity: 0.85,
    transition: 'opacity .35s ease'
  });
  card.appendChild(border);

  // Inner content area (keeps crisp edges)
  const inner = document.createElement('div');
  Object.assign(inner.style, {
    width: '100%',
    borderRadius: '14px',
    padding: '18px',
    background: 'linear-gradient(180deg, rgba(10,12,20,0.45), rgba(6,8,15,0.6))',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02)'
  });
  card.appendChild(inner);

  // Left: headline + subtitle
  const left = document.createElement('div');
  Object.assign(left.style, { display: 'flex', flexDirection: 'column', gap: '10px' });
  inner.appendChild(left);

  // Headline with gradient text and glow
  const headline = document.createElement('h1');
  headline.innerText = '🚀 Explore ideias, crie mundos e deixe o JavaScript brilhar!';
  Object.assign(headline.style, {
    margin: 0,
    fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
    lineHeight: 1.05,
    fontWeight: 700,
    background: 'linear-gradient(90deg, #fff 10%, #ffd6e0 30%, #ffd98b 60%, #fff 90%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    textShadow: '0 6px 22px rgba(123,97,255,0.14), 0 2px 6px rgba(0,0,0,0.6)'
  });
  left.appendChild(headline);

  // Decorative subline
  const sub = document.createElement('p');
  sub.innerText = 'Um pequeno espetáculo visual — feito só com DOM, cores e animação.';
  Object.assign(sub.style, {
    margin: 0,
    fontSize: '0.95rem',
    color: 'rgba(255,255,255,0.86)',
    opacity: 0.9
  });
  left.appendChild(sub);

  // Right: accent badge + small note
  const right = document.createElement('div');
  Object.assign(right.style, { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' });
  inner.appendChild(right);

  const badge = document.createElement('div');
  badge.innerText = '✨ Feito com amor';
  Object.assign(badge.style, {
    fontWeight: 600,
    fontSize: '0.9rem',
    padding: '8px 12px',
    borderRadius: '999px',
    background: 'linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
    border: '1px solid rgba(255,255,255,0.06)',
    color: 'white',
    boxShadow: '0 6px 18px rgba(11,8,20,0.45)',
  });
  right.appendChild(badge);

  const small = document.createElement('div');
  small.innerText = 'Toque no centro para uma surpresa ✨';
  Object.assign(small.style, {
    fontSize: '0.8rem',
    color: 'rgba(255,255,255,0.65)'
  });
  right.appendChild(small);

  // Appear animation
  requestAnimationFrame(() => {
    card.style.transition = 'opacity .6s ease, transform .6s cubic-bezier(.2,.9,.22,1)';
    card.style.transform = 'translateY(0)';
    card.style.opacity = '1';
  });

  // Subtle pulse on hover (card)
  card.addEventListener('mouseenter', () => {
    border.style.filter = 'blur(18px)';
    card.style.transform = 'translateY(-6px) scale(1.01)';
  });
  card.addEventListener('mouseleave', () => {
    border.style.filter = 'blur(14px)';
    card.style.transform = 'translateY(0) scale(1)';
  });

  // Click surprise: burst of tasteful sparkles
  function burstSparkles(x = inner.getBoundingClientRect().left + inner.offsetWidth / 2, y = inner.getBoundingClientRect().top + inner.offsetHeight / 2) {
    const colors = ['#7b61ff', '#00d4ff', '#ff7eb3', '#ffd86b'];
    const count = 20;
    for (let i = 0; i < count; i++) {
      const s = document.createElement('div');
      const size = 6 + Math.random() * 10;
      Object.assign(s.style, {
        position: 'fixed',
        left: x + (Math.random() - 0.5) * 120 + 'px',
        top: y + (Math.random() - 0.5) * 80 + 'px',
        width: size + 'px',
        height: size + 'px',
        borderRadius: '50%',
        background: colors[Math.floor(Math.random() * colors.length)],
        boxShadow: '0 6px 18px rgba(0,0,0,0.35), 0 0 10px rgba(255,255,255,0.06)',
        opacity: 1,
        transform: `translateY(0) scale(0.8)`,
        pointerEvents: 'none',
        transition: 'transform 900ms cubic-bezier(.2,.8,.2,1), opacity 900ms ease'
      });
      document.body.appendChild(s);
      // animate outward
      setTimeout(() => {
        const dx = (Math.random() - 0.5) * 300;
        const dy = (Math.random() - 0.5) * 260 - 40;
        s.style.transform = `translate(${dx}px, ${dy}px) scale(1)`;
        s.style.opacity = '0';
      }, 20);
      setTimeout(() => s.remove(), 1100);
    }
  }

  inner.addEventListener('click', (ev) => {
    const x = ev.clientX;
    const y = ev.clientY;
    burstSparkles(x, y);
  });

  // Accessibility: allow keyboard activation (Enter/Space)
  inner.tabIndex = 0;
  inner.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      burstSparkles(window.innerWidth/2, window.innerHeight/2);
      e.preventDefault();
    }
  });

  // Make sure card shrinks nicely on small screens
  Object.assign(card.style, { maxWidth: 'min(920px, 94%)' });
}
