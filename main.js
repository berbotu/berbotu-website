// ─── berbotu. — main.js ────────────────────────────────────────

// ─── Nav scroll ───────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ─── Featured Latest Drop ──────────────────────────────────────
function buildFeatured() {
  const section = document.getElementById('featured');
  if (!section || !window.RELEASES) return;

  const r = RELEASES[0];

  const linksHTML = [
    r.sc       ? `<a href="${r.sc}" target="_blank" rel="noopener" class="featured-cta">Listen ↗</a>` : '',
    r.bandcamp ? `<a href="${r.bandcamp}" target="_blank" rel="noopener" class="featured-cta-sec">Bandcamp</a>` : ''
  ].filter(Boolean).join('');

  const artworkDiv = document.createElement('div');
  artworkDiv.className = 'featured-artwork';
  artworkDiv.innerHTML = `<img src="${r.artwork}" alt="${r.artist} — ${r.title}" loading="eager" />`;

  const infoDiv = document.createElement('div');
  infoDiv.className = 'featured-info';
  infoDiv.innerHTML = `
    <span class="featured-tag">latest drop</span>
    <div class="featured-artist">${r.artist.toLowerCase()}</div>
    <div class="featured-title">${r.title}</div>
    <div class="featured-actions">${linksHTML}</div>
  `;

  section.innerHTML = '';
  section.appendChild(artworkDiv);
  section.appendChild(infoDiv);
}

// ─── Artist Ticker ─────────────────────────────────────────────
function buildTicker() {
  const track = document.getElementById('ticker-track');
  if (!track || !window.ARTISTS) return;

  const names = ARTISTS.map(a =>
    `<span>${a.name.toLowerCase()}</span><span class="ticker-sep">·</span>`
  ).join('');

  track.innerHTML = names + names;
}

// ─── Releases Grid ─────────────────────────────────────────────
function buildReleases() {
  const grid = document.getElementById('releases-grid');
  const countEl = document.getElementById('releases-count');
  if (!grid || !window.RELEASES) return;

  if (countEl) countEl.textContent = `${RELEASES.length} releases`;

  RELEASES.forEach(r => {
    const card = document.createElement('div');
    card.className = 'release-card';

    const linksHTML = [
      r.sc       ? `<a href="${r.sc}" target="_blank" rel="noopener">SoundCloud</a>` : '',
      r.bandcamp ? `<a href="${r.bandcamp}" target="_blank" rel="noopener">Bandcamp</a>` : '',
      r.spotify  ? `<a href="${r.spotify}" target="_blank" rel="noopener">Spotify</a>` : ''
    ].filter(Boolean).join('');

    card.innerHTML = `
      <img src="${r.artwork}" alt="${r.artist} — ${r.title}" loading="lazy" />
      <div class="release-overlay">
        <div class="release-artist">${r.artist.toLowerCase()}</div>
        <div class="release-title">${r.title}</div>
        <div class="release-links">${linksHTML}</div>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (!e.target.closest('a') && r.sc) {
        window.open(r.sc, '_blank', 'noopener');
      }
    });

    grid.appendChild(card);
  });
}

// ─── Custom Cursor ─────────────────────────────────────────────
function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor || !window.gsap) return;

  // Follows mouse with slight lag
  document.addEventListener('mousemove', e => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.14,
      ease: 'power2.out'
    });
  }, { passive: true });

  // Fade in/out on enter/leave
  document.addEventListener('mouseenter', () => {
    gsap.to(cursor, { opacity: 1, duration: 0.3 });
  });
  document.addEventListener('mouseleave', () => {
    gsap.to(cursor, { opacity: 0, duration: 0.3 });
  });

  // Grow on interactive elements
  const targets = 'a, button, .release-card, .featured-artwork';
  document.querySelectorAll(targets).forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
  });
}

// ─── Hero entrance animation ───────────────────────────────────
function initHeroAnimations() {
  if (!window.gsap) return;

  gsap.set(['.hero-logo', '.hero-accent', '.hero-tagline', '.hero-links', '.hero-scroll-hint'], {
    opacity: 0
  });

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.to('.hero-logo',        { opacity: 1, y: 0, duration: 1.2, from: { y: 28 } })
    .to('.hero-accent',      { opacity: 0.45, scaleX: 1, duration: 0.7, ease: 'power2.inOut', from: { scaleX: 0 } }, '-=0.8')
    .to('.hero-tagline',     { opacity: 1, y: 0, duration: 0.9, from: { y: 14 } }, '-=0.5')
    .to('.hero-links',       { opacity: 1, y: 0, duration: 0.8, from: { y: 14 } }, '-=0.6')
    .to('.hero-scroll-hint', { opacity: 1, duration: 0.6 }, '-=0.4');
}

// ─── Scroll animations ─────────────────────────────────────────
function initScrollAnimations() {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  // Featured info — stagger children in
  gsap.from('.featured-info > *', {
    opacity: 0,
    y: 22,
    stagger: 0.12,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#featured',
      start: 'top 78%',
    }
  });

  // Releases header
  gsap.from('.releases-header', {
    opacity: 0,
    y: 18,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#releases',
      start: 'top 80%',
    }
  });

  // Release cards — staggered grid entrance
  gsap.from('.release-card', {
    opacity: 0,
    y: 28,
    stagger: { amount: 0.6, from: 'start' },
    duration: 0.75,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.releases-grid',
      start: 'top 82%',
    }
  });

  // Music section
  gsap.from('#music', {
    opacity: 0,
    y: 20,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#music',
      start: 'top 80%',
    }
  });

  // Demos — email comes in with weight
  gsap.from('.demos-inner > *', {
    opacity: 0,
    y: 28,
    stagger: 0.15,
    duration: 1.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#demos',
      start: 'top 72%',
    }
  });
}

// ─── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildFeatured();
  buildTicker();
  buildReleases();
  initCursor();
  initHeroAnimations();
  initScrollAnimations();
});
