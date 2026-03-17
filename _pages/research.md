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
  .container {
    max-width: 1200px !important;
  }
</style>

{% details **Elastohydrodynamics and Adhesion** %}

### Contactless adhesion of vibrating sheets

A vibrating elastic sheet can adhere to surfaces to become a seemingly contactless suction cup. [David Colasante](https://www.youtube.com/watch?v=FiigvkedYRs) and [Weston-Dawkes et al.](https://advanced-onlinelibrary-wiley-com.ezproxy.uio.no/doi/full/10.1002/aisy.202100001) showed that such vibrating disks can lift objects up to tens of kilograms.

<div style="display: flex; align-items: center; gap: 1.5rem;">
  <video src="/assets/img/research/lubribot_num1.webm" width="40%" loop muted playsinline></video>
  <p style="flex: 1; margin: 0; font-size: 0.85em;"><em style="color: var(--global-text-color-light);">An elastic sheet, periodically pushed and pulled at its center beneath a rigid wall, deforms and drives a viscous flow. The resulting pressure field (color) generates an effective net upward force, keeping the sheet levitating against gravity.</em></p>
</div>

Using numerical simulations and theoretical modeling, we have shown how fluid-structure interactions rectify periodic vibrations to produce adhesive forces. The effect originates from the coupling between viscous fluid flow and bending deformations of the sheet, and can be modulated by inertial or compressibility effects. Beyond suction cups, this is relevant for squeeze film and acoustic levitation, and locomotion.

**Related publications:**
- {% bibliography --query @*[key=Poulain2025_hovering] %}
- {% bibliography --query @*[key=Poulain2025_hovering2] %}

<br>

### Contact and bonding of elastic sheets

We studied the dynamics of adhesion of an elastic sheet, modeling the interplay between bending, viscous fluid flow, and intermolecular forces. We derived the speed of the adhesion front and provided effective boundary conditions linking curvature and speed of adhesion. This work is relevant for biological processes and industrial applications such as wafer bonding.

**Related publications:**
- {% bibliography --query @*[key=Poulain2022_sheets] %}

{% enddetails %}

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

{% details **Droplets and Capillarity** %}

### Droplet impact on soft substrates

We developed a three-phase lubrication model to understand how droplets settle on solids coated with soft layers (viscous films, elastic layers). Our analysis reveals how soft coatings significantly alter droplet dynamics during gravitational settling.

**Related publications:**
- {% bibliography --query @*[key=Poulain2022_droplet] %}

<br>

### Droplets on vibrating fibers

We experimentally studied the dynamics of water droplets on tilted, vertically oscillating fibers. Droplets exhibit different modes—harmonic pumping, subharmonic pumping, rocking, and swinging—depending on the oscillation frequency and amplitude, significantly affecting their sliding speed.

<div style="display: flex; align-items: center; gap: 1.5rem; margin: 7rem auto 1rem; width: 80%;">
  <video src="/assets/img/research/subharmo.webm" width="70%" loop muted playsinline style="transform: rotate(27deg); margin: 1.5rem 0;"></video>
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
