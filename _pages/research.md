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

{% details **Elastohydrodynamics and Adhesion** %}

### Contactless adhesion of vibrating sheets

A vibrating elastic sheet can adhere to surfaces to become a seemingly contactless suction cup. [David Colasante](https://www.youtube.com/watch?v=FiigvkedYRs) and [Weston-Dawkes et al.](https://advanced-onlinelibrary-wiley-com.ezproxy.uio.no/doi/full/10.1002/aisy.202100001) showed that such vibrating disks can lift objects up to tens of kilograms.

<video src="/assets/img/research/lubribot_num1.webm" width="50%" loop muted playsinline></video>

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

<video src="/assets/img/research/bubble_burst.webm" width="48%" loop muted playsinline></video> <video src="/assets/img/research/bubble_mixing.webm" width="40%" loop muted playsinline></video>

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

**Related publications:**
- {% bibliography --query @*[key=Poulain2023_sliding] %}

<br>

### Cavitation and particle dynamics

We characterized how spherical particles respond to cavitation bubbles in fluids, showing that particle velocity depends on distance from the bubble as an inverse-fourth-power law.

**Related publications:**
- {% bibliography --query @*[key=Poulain2015_cavitation] %}

{% enddetails %}
