// ─── berbotu. — main.js ────────────────────────────────────────

// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

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

  // Duplicate for seamless loop
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

// ─── Scroll Reveal ─────────────────────────────────────────────
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ─── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildFeatured();
  buildTicker();
  buildReleases();
  initReveal();
});
