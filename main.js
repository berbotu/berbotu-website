// ─── Berbotu — Main JS ─────────────────────────────────────────

// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ─── Build Releases Grid ───────────────────────────────────────
function buildReleases() {
  const grid = document.getElementById('releases-grid');
  if (!grid || !window.RELEASES) return;

  RELEASES.forEach(r => {
    const card = document.createElement('div');
    card.className = 'release-card';

    // Build links HTML
    const linksHTML = [
      r.sc       ? `<a href="${r.sc}" target="_blank" rel="noopener">SoundCloud</a>` : '',
      r.bandcamp ? `<a href="${r.bandcamp}" target="_blank" rel="noopener">Bandcamp</a>` : '',
      r.spotify  ? `<a href="${r.spotify}" target="_blank" rel="noopener">Spotify</a>` : ''
    ].filter(Boolean).join('');

    card.innerHTML = `
      <img src="${r.artwork}" alt="${r.artist} — ${r.title}" loading="lazy" />
      <div class="release-overlay">
        <div class="release-artist">${r.artist}</div>
        <div class="release-title">${r.title}</div>
        <div class="release-links">${linksHTML}</div>
      </div>
    `;

    // Click goes to SoundCloud
    card.addEventListener('click', (e) => {
      if (!e.target.closest('a') && r.sc) {
        window.open(r.sc, '_blank', 'noopener');
      }
    });

    grid.appendChild(card);
  });
}

// ─── Build Artists Grid ────────────────────────────────────────
function buildArtists() {
  const grid = document.getElementById('artists-grid');
  if (!grid || !window.ARTISTS) return;

  ARTISTS.forEach(a => {
    const card = document.createElement('div');
    card.className = 'artist-card';

    const linksHTML = [
      a.sc ? `<a href="${a.sc}" target="_blank" rel="noopener">SoundCloud</a>` : '',
      a.ig ? `<a href="${a.ig}" target="_blank" rel="noopener">Instagram</a>` : ''
    ].filter(Boolean).join('');

    card.innerHTML = `
      <div class="artist-name">${a.name}</div>
      <div class="artist-meta">${a.releases} release${a.releases !== 1 ? 's' : ''}</div>
      <div class="artist-links">${linksHTML}</div>
    `;

    grid.appendChild(card);
  });
}

// ─── Intersection observer for section reveals ─────────────────
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('#music, #releases, #artists, #demos').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// ─── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildReleases();
  buildArtists();
  initReveal();
});
