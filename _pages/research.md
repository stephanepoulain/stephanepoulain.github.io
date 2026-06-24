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
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    border: 1px solid var(--global-divider-color);
    text-decoration: none !important;
  }
  .research-card:hover {
    transform: translateY(-4px);
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
  /* Placeholder thumbnail (used until a real spine image is added) */
  .research-card-thumb {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #2a2933, var(--global-theme-color));
    font-size: 2.6rem;
  }
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
  .research-card-body span { display: none; }

  details {
    border: none !important;
    border-left: 5px solid var(--global-theme-color) !important;
    border-radius: 0 8px 8px 0 !important;
    padding: 1.5rem 2rem !important;
    margin-bottom: 1.5rem !important;
    background-color: var(--global-code-bg-color) !important;
  }
  details:not([open]):hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.08) !important;
    transform: translateY(-2px) !important;
  }
  details summary { font-size: 1.6rem !important; }
</style>

<div class="research-cards">
  <a class="research-card" onclick="openSection('section-elasto'); return false;" href="#section-elasto">
    <img src="/assets/img/research/lubribot_frame.png" alt="Elastohydrodynamics">
    <div class="research-card-body">
      <p>Elastohydrodynamics and Adhesion</p>
      <span>▶ explore</span>
    </div>
  </a>
  <a class="research-card" onclick="openSection('section-bubbles'); return false;" href="#section-bubbles">
    <img src="/assets/img/publication_preview/Poulain2018_bubble.png" alt="Surface Bubbles">
    <div class="research-card-body">
      <p>Surface Bubbles and Aerosols</p>
      <span>▶ explore</span>
    </div>
  </a>
  <a class="research-card" onclick="openSection('section-droplets'); return false;" href="#section-droplets">
    <img src="/assets/img/publication_preview/Poulain2023_vibrations.png" alt="Droplets">
    <div class="research-card-body">
      <p>Droplets and Capillarity</p>
      <span>▶ explore</span>
    </div>
  </a>
  <a class="research-card" onclick="openSection('section-spine'); return false;" href="#section-spine">
    <div class="research-card-thumb" aria-label="Spine biomechanics">🦴</div>
    <div class="research-card-body">
      <p>Spine Biomechanics</p>
      <span>▶ explore</span>
    </div>
  </a>
</div>

<hr class="research-cards-divider">

<script>
function openSection(id) {
  var el = document.getElementById(id).querySelector('details');
  el.open = true;
  document.getElementById(id).scrollIntoView({behavior: 'smooth', block: 'start'});
}
// Open a section directly when the page loads with its #hash (e.g. /research/#section-spine)
window.addEventListener('DOMContentLoaded', function () {
  if (!location.hash) return;
  var sec = document.querySelector(location.hash);
  if (!sec) return;
  var d = sec.querySelector('details');
  if (d) { d.open = true; sec.scrollIntoView({block: 'start'}); }
});
</script>

<div id="section-elasto">
{% details **Elastohydrodynamics and Adhesion** %}

### Contactless adhesion of actuated sheets

When an elastic sheet is periodically actuated near a surface, fluid-structure interactions break time-reversal symmetry and generate a net attractive effect: the sheet adheres without contact and supports substantial loads. Such actuated disks can lift objects up to tens of kilograms. We combined asymptotic analysis and numerical simulations to derive the hovering height predicted by a purely viscous model. We then extended our lubrication framework to incorporate first-order effects of fluid inertia and compressibility, and showed how these weaken adhesion.

<div style="display: flex; align-items: center; gap: 1.5rem;">
  <video src="/assets/img/research/lubribot_num1.webm" width="40%" loop muted playsinline></video>
  <p style="flex: 1; margin: 0; font-size: 0.85em;"><em style="color: var(--global-text-color-light);">An elastic sheet, periodically pushed and pulled at its center beneath a rigid wall, deforms and drives a viscous flow. The resulting pressure field (color) generates an effective net upward force, keeping the sheet levitating against gravity.</em></p>
</div>

**Related publications:**
- {% bibliography --query @*[key=Poulain2025_hovering] %}
- {% bibliography --query @*[key=Poulain2025_hovering2] %}

<br>

### Bonding of an elastic sheet

As an elastic sheet first touches a substrate, a contact front propagates outward, squeezing out the fluid trapped between them. We modeled the interplay between bending, viscous drainage, and adhesion forces to predict the front speed and shape — results relevant to biological adhesion and wafer bonding.

**Related publications:**
- {% bibliography --query @*[key=Poulain2022_sheets] %}

{% enddetails %}
</div>

<div id="section-bubbles">
{% details **Surface Bubbles and Aerosols** %}

Upon bursting, surface bubbles transfer chemicals and pathogens from water to the atmosphere. We investigated the thinning dynamics of bubbles, exploring the interplay between capillary drainage, Marangoni flows, and evaporation in pure water, salt water, soapy water, and bacteria-contaminated water. We also proposed a mechanism that rationalizes their burst.

<div style="display: flex; gap: 1.5rem; align-items: flex-start;">
  <div style="flex: 0 0 40%; text-align: center;">
    <video src="/assets/img/research/bubble_mixing.webm" width="100%" loop muted playsinline></video>
    <p style="margin: 0.3rem auto 0; width: 80%; font-size: 0.85em;"><em style="color: var(--global-text-color-light);">Mixing dynamics within a surface bubble at the air–water interface.</em></p>
  </div>
  <div style="flex: 0 0 48%; text-align: center;">
    <video src="/assets/img/research/bubble_burst.webm" width="100%" loop muted playsinline></video>
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

{% enddetails %}
</div>

<div id="section-droplets">
{% details **Droplets and Capillarity** %}

### Droplet impact on soft substrates

We developed a three-phase lubrication model to understand how droplets settle on solids coated with soft layers (viscous films, elastic layers). Our analysis reveals how soft coatings significantly alter droplet dynamics during gravitational settling.

**Related publications:**
- {% bibliography --query @*[key=Poulain2022_droplet] %}

<br>

### Droplets on vibrating fibers

We experimentally studied the dynamics of water droplets on tilted, vertically oscillating fibers. Droplets exhibit different modes—harmonic pumping, subharmonic pumping, rocking, and swinging—depending on the oscillation frequency and amplitude, significantly affecting their sliding speed.

<div style="display: flex; align-items: center; gap: 1.5rem; margin: 4rem auto 1rem; width: 80%;">
  <video src="/assets/img/research/subharmo.webm" width="50%" loop muted playsinline style="transform: rotate(27deg); margin: 1.5rem 0;"></video>
  <p style="flex: 1; margin-top: -4rem; font-size: 0.85em; position: relative; z-index: 1;"><em style="color: var(--global-text-color-light);">A water droplet sliding on a fiber vibrating at 90 Hz exhibits a subharmonic response and sheds satellite droplets.</em></p>
</div>

<div style="position: relative; z-index: 1;" markdown="1">

**Related publications:**
- {% bibliography --query @*[key=Poulain2023_sliding] %}

</div>

<br>

### Cavitation and particle dynamics

We characterized how spherical particles respond to cavitation bubbles in fluids, showing that particle velocity depends on distance from the bubble as an inverse-fourth-power law.

<img src="/assets/img/research/cavitation_experiment.png" width="60%" style="display: block; margin: 1rem auto;">

**Related publications:**
- {% bibliography --query @*[key=Poulain2015_cavitation] %}

{% enddetails %}
</div>

<div id="section-spine">
{% details **Spine Biomechanics** %}

Shrews of the genus *Scutisorex* — the "hero shrews" — have the most robust and intricately interlocking vertebral column of any mammal: their lumbar vertebrae carry dense arrays of interdigitating tubercles that let the spine bear extraordinary loads for its size. I am studying how this geometry translates into mechanical function, combining micro-CT imaging with finite-element modelling and comparing *Scutisorex* against ordinary shrews.

The interactive atlas below assembles micro-CT vertebrae from three specimens. Browse a single vertebra, an adjacent pair, the full column reassembled from each specimen's real scan coordinates, or compare two species side by side — it runs entirely in your browser.

<div style="position:relative; border-radius:10px; overflow:hidden; border:1px solid var(--global-divider-color); margin:1rem 0;">
  <iframe src="/shrew-spine/Viewer.dc.html"
          title="Shrew Spine Atlas — interactive 3D viewer"
          loading="lazy" allow="fullscreen; xr-spatial-tracking" allowfullscreen
          style="width:100%; height:520px; border:0; display:block; background:#252429;"></iframe>
</div>
<p style="text-align:center; margin:.3rem 0 0;">
  <a href="/shrew-spine/" target="_blank" rel="noopener">Open full screen ↗</a>
</p>

{% enddetails %}
</div>
