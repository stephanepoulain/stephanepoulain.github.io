# Shrew Spine Atlas

An ergonomic 3D viewer for micro-CT vertebra scans of shrews. Browse a single
vertebra, an adjacent pair, the whole assembled spine, or compare two specimens —
with realistic bone shading, a live scale bar, an orientation gizmo, and a
miniature spine map. Works on desktop and mobile, runs entirely in the browser.

---

## Quick start (local)

Open **`Viewer.dc.html`** in any modern browser. It loads the 66 bundled vertebrae
(3 specimens) from `models/` via `models/manifest.json`.

`index.html` simply redirects to the viewer (it's the entry point for GitHub Pages).

## Files

| Path | What it is |
|------|------------|
| `index.html` | Entry point — redirects to the viewer (for GitHub Pages). |
| `Viewer.dc.html` | The viewer app. |
| `Optimize.dc.html` | Batch tool: drop raw STL files → decimated `.glb` (re-generate models). |
| `support.js` | Small runtime both pages need — keep it alongside them. |
| `models/*.glb` | 66 optimized vertebrae (~0.5 MB each). |
| `models/manifest.json` | List of model paths the viewer loads on startup. |

## Specimens included

- **Scutisorex somereni** (FMNH 148271) — 25 vertebrae (T1–T14, L1–L11)
- **Crocidura goliath** (FMNH 162144) — 19 vertebrae (T1–T14, L1–L5)
- **Scutisorex thori** (FMNH 219669) — 22 vertebrae (T1–T14, L1–L8)

Each is positioned by its real scan coordinates, so Spine mode self-assembles the
true articulated column.

---

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `shrew-spine`).
2. Upload **all** files in this folder, preserving structure (the `models/` folder
   must stay a subfolder). Drag-and-drop in the GitHub web UI works.
3. Repo **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*,
   Branch = `main`, folder = `/ (root)`. Save.
4. Wait ~1 minute. Your site is at `https://<username>.github.io/<repo>/`.
5. Open that URL on desktop or phone.

No build step, no framework, no server — it's static files.

> Note: the whole `models/` folder is ~40 MB, well within GitHub's limits.

## Regenerating / adding models

1. Open `Optimize.dc.html`, drag in raw `.stl` files, pick a triangle budget
   (Balanced ≈ 30k is recommended), download the `.glb` set.
2. Drop the `.glb` files into `models/`.
3. Update `models/manifest.json` to list every model path (relative to the viewer),
   e.g. `"models/FMNH_148271_Scutisorex_somereni_T1.glb"`.

## Filename convention (drives grouping & spine order)

```
FMNH_148271_Scutisorex_somereni_L1   →   genus+species = specimen,  L1 = vertebra
```
Order: Cervical → Thoracic → Lumbar → Sacral → Caudal. The viewer also accepts the
original `_smoothed` / `_shrinkwrap_smoothed` suffixes and zero-padded numbers.

---

## Note for Claude Code (deploy handoff)

This is a **static site** — no dependencies, no build. To deploy: push this folder to
a GitHub repo and enable Pages (root of `main`). The entry point is `index.html`
(redirects to `Viewer.dc.html`). Keep `support.js` and `models/` next to the HTML.
Nothing needs transpiling or bundling. If you want a single-file build, the viewer's
assets can be inlined, but it's unnecessary for Pages.
