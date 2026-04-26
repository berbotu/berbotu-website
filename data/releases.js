// ─── Berbotu — Releases Data ───────────────────────────────────
// To add a new release:
// 1. Drop artwork PNG/SVG in assets/releases/
// 2. Add entry at TOP of this array (newest first)
// 3. Save — Netlify auto-deploys
//
// Artwork status:
//   ✅ = confirmed file number visually verified
//   🌐 = using Bandcamp CDN URL
//
// ─── UPCOMING — uncomment on release day ──────────────────────
//
// RELEASE MAY 20 — uncomment when live:
// {
//   artist: "ALEX GUZZO",
//   title: "ON MY BRAIN",
//   artwork: "assets/canva-dump/dump-1/33.svg", // ✅ confirmed — page 33
//   sc: "https://soundcloud.com/berbotu/on-my-brain",
//   bandcamp: "",
//   spotify: ""
// },
//
// RELEASE MAY 6 — uncomment when live:
// {
//   artist: "VDYM",
//   title: "MARCHING TO THE RAVE",
//   artwork: "assets/canva-dump/dump-1/28.svg", // ✅ confirmed — page 28
//   sc: "https://soundcloud.com/berbotu/marching-to-the-rave",
//   bandcamp: "",
//   spotify: ""
// },
//

const RELEASES = [
  {
    artist: "F-17, Paolo Doldo",
    title: "DAME TODO",
    artwork: "assets/canva-dump/dump-1/23.svg", // ✅ confirmed — chrome shuriken, purple
    sc: "https://soundcloud.com/berbotu/dame-todo",
    bandcamp: "",
    spotify: ""
  },
  {
    artist: "GA7O",
    title: "MALA",
    artwork: "assets/canva-dump/dump-1/44.svg", // ✅ confirmed — chrome cat, orange glow
    sc: "https://soundcloud.com/berbotu/mala",
    bandcamp: "",
    spotify: ""
  },
  {
    artist: "PAISANA",
    title: "SIRENII",
    artwork: "assets/canva-dump/dump-1/5.svg", // ✅ confirmed — gold chrome zigzag
    sc: "https://soundcloud.com/berbotu/sirenii",
    bandcamp: "https://berbotu.bandcamp.com/track/sirenii",
    spotify: ""
  },
  {
    artist: "ALEX GUZZO",
    title: "PSEUDONYM",
    artwork: "https://f4.bcbits.com/img/a3011228954_10.jpg", // 🌐 Bandcamp CDN — chrome figures, orange/red
    sc: "https://soundcloud.com/berbotu/pseudonym",
    bandcamp: "https://berbotu.bandcamp.com/track/pseudonym",
    spotify: ""
  },
  {
    artist: "JMARGA",
    title: "TOY DOG",
    artwork: "assets/canva-dump/dump-1/30.svg", // ✅ confirmed — chrome comet star, red
    sc: "https://soundcloud.com/berbotu/toy-dog",
    bandcamp: "",
    spotify: ""
  },
  {
    artist: "PAISANA",
    title: "FLIP FLOP",
    artwork: "assets/canva-dump/dump-1/11.svg", // ✅ confirmed — blue smiley
    sc: "https://soundcloud.com/berbotu/flip-flop",
    bandcamp: "https://berbotu.bandcamp.com/track/flip-flop",
    spotify: ""
  },
  {
    artist: "MASKED",
    title: "UTUMA",
    artwork: "assets/canva-dump/dump-1/46.svg", // ✅ confirmed — chrome ghosts, dark blue
    sc: "https://soundcloud.com/berbotu/utuma",
    bandcamp: "",
    spotify: ""
  },
  {
    artist: "STRICT FOX",
    title: "HOLA QUE TAL",
    artwork: "assets/canva-dump/dump-1/20.svg", // ✅ confirmed — chrome sparkle stars, purple
    sc: "https://soundcloud.com/berbotu/hola-que-tal",
    bandcamp: "",
    spotify: ""
  },
  {
    artist: "GADDAM",
    title: "GASOLINA",
    artwork: "assets/canva-dump/dump-1/17.svg", // ✅ confirmed — chrome gas pump, orange
    sc: "https://soundcloud.com/berbotu/gasolina",
    bandcamp: "",
    spotify: ""
  },
  {
    artist: "GA7O",
    title: "HAN",
    artwork: "assets/canva-dump/dump-1/4.svg", // ✅ confirmed — green chrome swirl
    sc: "https://soundcloud.com/berbotu/han",
    bandcamp: "https://berbotu.bandcamp.com/track/han",
    spotify: ""
  }
];
