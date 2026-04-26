#!/bin/bash
# ─── Berbotu Website — One-time setup script ───────────────────
# Run this once: bash setup.sh

set -e

BRAND="/Users/rodrigopaisana/Library/Mobile Documents/com~apple~CloudDocs/02 BERBOTU/Brand"
PROJ="/Users/rodrigopaisana/Documents/berbotu-website"

echo "Creating folders..."
mkdir -p "$PROJ/assets/brand/fonts"
mkdir -p "$PROJ/assets/releases"

echo "Copying logo..."
cp "$BRAND/Logo/\"BERBOTU\"/VETOR/LETRAS BRANCAS/Sem título-2.svg" "$PROJ/assets/brand/logo.svg"
cp "$BRAND/Logo/\"BERBOTU\"/TRANSPARENTE/LETRAS BRANCAS/Sem título-1.png" "$PROJ/assets/brand/logo-transparent.png"
cp "$BRAND/Logo/\"BERBOTU\"/EXPORT/LETRAS BRANCAS/Sem título-1.png" "$PROJ/assets/brand/logo-black.png"

echo "Copying fonts..."
cp "$BRAND/Vanished.ttf" "$PROJ/assets/brand/fonts/Vanished.ttf"
cp "$BRAND/StartMenu.ttf" "$PROJ/assets/brand/fonts/StartMenu.ttf"
cp "$BRAND/sidewalk.ttf" "$PROJ/assets/brand/fonts/sidewalk.ttf"

echo "Setting up Git..."
cd "$PROJ"
git init
git add .
git commit -m "Initial commit — Berbotu website"

echo ""
echo "✅ Done. Next:"
echo "  1. Create repo on github.com → berbotu-website"
echo "  2. git remote add origin https://github.com/[your-username]/berbotu-website.git"
echo "  3. git push -u origin main"
echo "  4. Connect repo to Netlify at netlify.com"
