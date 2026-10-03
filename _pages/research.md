---
layout: page
title: Research
permalink: /research/
nav: true
nav_order: 2
scholar:
  group_by: none
  bibliography_template: bibliography_short
  bibliography_list_tag: div
  bibliography_item_tag: span
---

<style>
  .container { max-width: 1200px !important; }

  .research-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem;
    margin-bottom: 1rem;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  .research-cards-divider {
    border: none;
    border-top: 1px solid var(--global-divider-color);
    margin: 2rem 0 2.5rem;
  }
  .research-card {
    background: var(--global-card-bg-color);
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: box-shadow 0.2s ease;
    border: 1px solid var(--global-divider-color);
    text-decoration: none !important;
  }
  .research-card:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  }
  .research-card img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    display: block;
    transition: filter 0.2s ease;
  }
  .research-card:hover img { filter: brightness(1.05); }
  /* Show the full (very wide) dorsal spine instead of cropping to the middle */
  .research-card img.fit-contain { object-fit: contain; background: #20242a; }
  .research-card-body {
    padding: 1rem 1.2rem 1.2rem;
    border-top: 3px solid var(--global-theme-color);
    text-align: center;
  }
  .research-card-body p {
    font-size: 1rem;
    font-weight: 600;
    color: var(--global-text-color) !important;
    margin: 0;
    line-height: 1.4;
  }
  .research-card-body span {
    display: inline-block;
    margin-top: 0.45rem;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--global-theme-color);
  }
  /* Hover lift/nudge only for visitors who haven't asked for reduced motion */
  @media (prefers-reduced-motion: no-preference) {
    .research-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
    .research-card:hover { transform: translateY(-4px); }
    .research-card-body span { transition: transform 0.2s ease; }
    .research-card:hover .research-card-body span { transform: translateY(2px); }
  }

  @media (prefers-reduced-motion: no-preference) { html { scroll-behavior: smooth; } }
  .research-section {
    border-left: 5px solid var(--global-theme-color);
    border-radius: 0 8px 8px 0;
    padding: 1.5rem 2rem;
    margin-bottom: 1.5rem;
    background-color: var(--global-code-bg-color);
  }
  .research-section > h2:first-child { font-size: 1.75rem; margin-top: 0; margin-bottom: 1rem; color: var(--global-theme-color); }
  .research-section h3 { font-size: 1.35rem; }
  /* Card clicks and #section-* links land with the heading below the fixed navbar */
  [id^="section-"] { scroll-margin-top: calc(56px + 1rem); }

  /* Video + caption rows: side by side on desktop, stacked on phones */
  .media-row { display: flex; align-items: center; gap: 1.5rem; }
  .media-row.media-row-top { align-items: flex-start; }
  .media-row.media-row-narrow { margin: 2rem auto 1rem; width: 85%; }
  .media-caption { flex: 1; margin: 0; font-size: 0.85em; }
  @media (max-width: 576px) {
    .media-row { flex-direction: column; align-items: stretch; gap: 1rem; }
    .media-row.media-row-narrow { width: 100%; }
    /* !important beats the inline flex/width styles, incl. the width gif-player.js copies onto .video-wrapper */
    .media-row > * { flex: none !important; width: 100% !important; }
    .media-row video { width: 100% !important; }
  }
</style>

<div class="research-cards">
  <a class="research-card" href="#section-spine">
    <img class="fit-contain" src="/assets/img/research/card_spine.webp" alt="">
    <div class="research-card-body">
      <p>Spine Biomechanics</p>
      <span aria-hidden="true">Explore ↓</span>
    </div>
  </a>
  <a class="research-card" href="#section-elasto">
    <img src="/assets/img/research/card_elastohydrodynamics.webp" alt="">
    <div class="research-card-body">
      <p>Elastohydrodynamics and Adhesion</p>
      <span aria-hidden="true">Explore ↓</span>
    </div>
  </a>
  <a class="research-card" href="#section-bubbles">
    <img src="/assets/img/research/card_bubbles.webp" alt="">
    <div class="research-card-body">
      <p>Surface Bubbles and Aerosols</p>
      <span aria-hidden="true">Explore ↓</span>
    </div>
  </a>
  <a class="research-card" href="#section-droplets">
    <img src="/assets/img/research/card_droplets.webp" alt="">
    <div class="research-card-body">
      <p>Droplets and Capillarity</p>
      <span aria-hidden="true">Explore ↓</span>
    </div>
  </a>
</div>

<hr class="research-cards-divider">

<script>
// Sections are always visible: load the 3D viewer when it nears the viewport, and play videos
// only while they are on screen (never automatically when "reduce motion" is set).
document.addEventListener('DOMContentLoaded', function () {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('iframe[data-src]').forEach(function (f) { f.src = f.getAttribute('data-src'); });
    return;
  }
  var frames = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.src = e.target.getAttribute('data-src');
      e.target.removeAttribute('data-src');
      frames.unobserve(e.target);
    });
  }, { rootMargin: '300px 0px' });
  document.querySelectorAll('iframe[data-src]').forEach(function (f) { frames.observe(f); });
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var vids = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        var p = e.target.play();
        if (p && p.catch) p.catch(function () {});
      } else {
        e.target.pause();
      }
    });
  }, { threshold: 0.25 });
  document.querySelectorAll('.research-section video').forEach(function (v) { vids.observe(v); });
});
</script>

<div id="section-spine" class="research-section" markdown="1">

## Spine Biomechanics

The "hero shrew" (*Scutisorex*) has the strangest spine of any mammal: its lumbar vertebrae interlock through dense arrays of bony tubercles. We use finite-element modelling to investigate the evolutionary advantage these tubercles might confer.

The interactive animation below shows 3D micro-CT scans of three shrews: the hero shrew (*Scutisorex somereni*), Thor's hero shrew (*Scutisorex thori*), and a shrew with an ordinary spine, the goliath shrew (*Crocidura goliath*).

<p style="font-size:0.8em; color:var(--global-text-color-light); margin:0.4rem 0 0;">Micro-CT scans courtesy of Stephanie Smith (Field Museum of Natural History, Chicago), from <a href="https://doi.org/10.1098/rspb.2020.0457">Smith &amp; Angielczyk (2020)</a>.</p>

<div style="max-width:600px; margin:1rem auto;">
  <div style="position:relative; width:100%; height:300px; overflow:hidden; border-radius:10px; border:1px solid var(--global-divider-color); background:#252429;">
    <!-- iframe renders at 2x the panel size then scales down, so the viewer's UI looks
         fullscreen-proportioned (smaller) in this embed while the standalone app is untouched -->
    <iframe data-src="/shrew-spine/Viewer.dc.html"
            title="Shrew Spine Atlas — interactive 3D viewer"
            loading="lazy" allow="fullscreen; xr-spatial-tracking" allowfullscreen
            style="position:absolute; top:0; left:0; width:200%; height:200%; transform:scale(0.5); transform-origin:top left; border:0; background:#252429;"></iframe>
  </div>
</div>
<p style="text-align:center; margin:.3rem 0 0;">
  <a href="/shrew-spine/" target="_blank" rel="noopener">Open full screen ↗</a>
</p>

</div>

<div id="section-elasto" class="research-section" markdown="1">

## Elastohydrodynamics and Adhesion

### Contactless suction cups

When a thin elastic sheet vibrates just below a ceiling, it can grip the surface in a state of seemingly contactless adhesion, an effect that can lift objects weighing from [a few hundred grams](https://doi.org/10.1002/aisy.202100001) up to [tens of kilograms](https://www.youtube.com/watch?v=ruDpMhlKy6M). We combine viscous lubrication theory and simulations to predict the sheet's hovering height, deformations and load capacity, and show how the air's compressibility and inertia weaken the adhesion.

<div class="media-row">
  <video src="/assets/img/research/lubribot_num1.webm" poster="/assets/img/research/lubribot_num1_poster.webp" width="40%" loop muted playsinline preload="none" style="aspect-ratio: 480 / 255;" aria-label="Simulation of an elastic sheet, pushed and pulled at its center beneath a rigid wall, levitating on the viscous flow it drives"></video>
  <p class="media-caption"><em style="color: var(--global-text-color-light);">An elastic sheet, periodically pushed and pulled at its center beneath a rigid wall, deforms and drives a viscous flow. The resulting pressure field (color) generates an effective net upward force, keeping the sheet levitating against gravity.</em></p>
</div>

**Related publications:**
- {% bibliography --query @*[key=Poulain2025_hovering] %}
- {% bibliography --query @*[key=Poulain2025_hovering2] %}

<br>

### Bonding of an elastic sheet

As an elastic sheet first touches a substrate, a contact front propagates, squeezing out the fluid trapped between them. We model the interplay between bending, viscous drainage, and adhesion to predict the front's speed and shape. This is central to silicon wafer bonding, where adhesion must be controlled precisely enough to join 300 mm-diameter wafers with nanometric accuracy.

**Related publications:**
- {% bibliography --query @*[key=Poulain2022_sheets] %}

</div>

<div id="section-bubbles" class="research-section" markdown="1">

## Surface Bubbles and Aerosols

Upon bursting, surface bubbles transfer chemicals and pathogens from water to the atmosphere. We investigated the thinning dynamics of bubbles, exploring the interplay between capillary drainage, Marangoni flows, and evaporation in pure water, salt water, soapy water, and bacteria-contaminated water. We also proposed a mechanism that rationalizes their burst.

<div class="media-row media-row-top">
  <div style="flex: 0 0 40%; text-align: center;">
    <video src="/assets/img/research/bubble_mixing.webm" poster="/assets/img/research/bubble_mixing_poster.webp" width="100%" loop muted playsinline preload="none" style="aspect-ratio: 480 / 198;" aria-label="Mixing dynamics within a surface bubble at the air–water interface"></video>
    <p style="margin: 0.3rem auto 0; width: 80%; font-size: 0.85em;"><em style="color: var(--global-text-color-light);">Mixing dynamics within a surface bubble at the air–water interface.</em></p>
  </div>
  <div style="flex: 0 0 48%; text-align: center;">
    <video src="/assets/img/research/bubble_burst.webm" poster="/assets/img/research/bubble_burst_poster.webp" width="100%" loop muted playsinline preload="none" style="aspect-ratio: 480 / 167;" aria-label="A surface bubble bursting and ejecting aerosols into the atmosphere"></video>
    <p style="margin: 0.3rem auto 0; width: 80%; font-size: 0.85em;"><em style="color: var(--global-text-color-light);">A surface bubble bursting and ejecting aerosols into the atmosphere.</em></p>
  </div>
</div>

We studied the fragmentation of bubbles into droplets, which, as they dry, become condensation nuclei on which clouds can form. Using simulations of turbulent flows, we investigated how turbulence affects the growth and size distribution of droplets.

**Related publications:**
- {% bibliography --query @*[key=Poulain2018_ageing] %}
- {% bibliography --query @*[key=Poulain2018_bacteria] %}
- {% bibliography --query @*[key=Poulain2019_disease] %}
- {% bibliography --query @*[key=Sardina2018_CCN] %}
- {% bibliography --query @*[key=Wang2018_rim] %}

</div>

<div id="section-droplets" class="research-section" markdown="1">

## Droplets and Capillarity

### Droplet impact on soft substrates

We developed a three-phase lubrication model to understand how droplets settle on solids coated with soft layers (viscous films, elastic layers). Our analysis reveals how soft coatings significantly alter droplet dynamics during gravitational settling.

**Related publications:**
- {% bibliography --query @*[key=Poulain2022_droplet] %}

<br>

### Droplets on vibrating fibers

We experimentally studied the dynamics of water droplets on tilted, vertically oscillating fibers. Droplets exhibit different modes—harmonic pumping, subharmonic pumping, rocking, and swinging—depending on the oscillation frequency and amplitude, significantly affecting their sliding speed.

<div class="media-row media-row-narrow">
  <video src="/assets/img/research/subharmo_rot.webm" poster="/assets/img/research/subharmo_rot_poster.webp" width="45%" loop muted playsinline preload="none" style="aspect-ratio: 734 / 471;" aria-label="A water droplet sliding on a fiber vibrating at 90 Hz, showing a subharmonic response and shedding satellite droplets"></video>
  <p class="media-caption"><em style="color: var(--global-text-color-light);">A water droplet sliding on a fiber vibrating at 90 Hz exhibits a subharmonic response and sheds satellite droplets.</em></p>
</div>

<div style="position: relative; z-index: 1;" markdown="1">

**Related publications:**
- {% bibliography --query @*[key=Poulain2023_sliding] %}

</div>

<br>

### Cavitation and particle dynamics

We characterized how spherical particles respond to cavitation bubbles in fluids, showing that particle velocity depends on distance from the bubble as an inverse-fourth-power law.

<img src="/assets/img/research/cavitation_experiment_1100.webp" width="60%" style="display: block; margin: 1rem auto;" alt="High-speed image sequence: a cavitation bubble grows next to a sphere and pushes it away, then collapses and draws the sphere back toward it">

**Related publications:**
- {% bibliography --query @*[key=Poulain2015_cavitation] %}

</div>
