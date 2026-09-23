# Videography portfolio

This is a static HTML/CSS/JavaScript site. Edit the text in [`dist/index.html`](dist/index.html); video cover images are in `dist/assets/covers/`.

To preview locally, open a terminal in `dist/`, run `python -m http.server 8000`, and visit <http://localhost:8000>. Save and refresh to see edits.

To publish with GitHub Pages, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**. The workflow in `.github/workflows/pages.yml` publishes `dist/` on each push to `main`.
