---
layout: single
permalink: /gallery/
title: Gallery
excerpt: "Explore memorable moments from MAPZ events, activities, and community gatherings."
---

{% include gallery-grid.html %}


<!-- Lightbox Modal -->
<div id="lightbox" class="gl-lightbox">
  <span class="gl-lightbox-close" onclick="closeLightbox()">&times;</span>
  <img class="gl-lightbox-img" id="lightbox-img">
  <div class="gl-lightbox-nav">
    <button class="gl-lightbox-btn" onclick="prevImage()">&#10094;</button>
    <button class="gl-lightbox-btn" onclick="nextImage()">&#10095;</button>
  </div>
</div>

<style>
/* ============================================================
   GALLERY PAGE — Modern Design
   ============================================================ */

/* ---- Intro ---- */
.gl-intro {
  text-align: center;
  font-size: 1.05rem;
  color: #5a5754;
  line-height: 1.7;
  margin: 0 auto 2rem;
  max-width: 600px;
}

/* ---- Filter Buttons ---- */
.gl-filters {
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 0 2rem;
}

.gl-filter-btn {
  padding: 0.5rem 1.2rem;
  border: 1.5px solid #dcd7c9;
  background: #fff;
  color: #2a2825;
  border-radius: 50px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.25s ease;

  &:hover {
    border-color: #9f1319;
    color: #9f1319;
  }

  &.active {
    background: linear-gradient(135deg, #9f1319, #c0392b);
    color: #fff;
    border-color: transparent;
    box-shadow: 0 2px 8px rgba(159, 19, 25, 0.3);
  }
}

/* ---- Gallery Grid ---- */
.gl-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin: 0 0 2rem;
}

.gl-item {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  transition: all 0.35s ease;

  &:hover {
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
    transform: translateY(-3px);
  }

  &:hover img {
    transform: scale(1.06);
  }

  &:hover .gl-caption {
    opacity: 1;
    transform: translateY(0);
  }

  img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    display: block;
    transition: transform 0.45s ease;
  }
}

.gl-item--wide {
  grid-column: span 2;

  img {
    height: 320px;
  }
}

/* ---- Photo Caption Overlay ---- */
.gl-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.25rem;
  background: linear-gradient(transparent, rgba(0,0,0,0.75));
  opacity: 0;
  transform: translateY(8px);
  transition: all 0.35s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.gl-tag {
  display: inline-block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #fff;
  background: rgba(159, 19, 25, 0.8);
  padding: 0.2rem 0.6rem;
  border-radius: 50px;
  font-weight: 700;
  flex-shrink: 0;
}

.gl-caption h4 {
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
}

/* ---- CTA Banner ---- */
.gl-cta-banner {
  background: linear-gradient(135deg, #1a2332, #2a3a4e);
  border-radius: 1.15rem;
  padding: 3rem 2.5rem;
  text-align: center;
  margin: 1.5rem 0;
  position: relative;
  overflow: hidden;
}

.gl-cta-banner::before {
  content: "";
  position: absolute;
  top: -50%;
  right: -20%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: rgba(159, 19, 25, 0.12);
  pointer-events: none;
}

.gl-cta-content {
  position: relative;
  z-index: 1;

  h3 {
    color: #fff;
    font-size: 1.5rem;
    margin: 0 0 0.75rem 0;
    padding: 0;
  }

  p {
    color: rgba(255,255,255,0.85);
    margin: 0 0 1.5rem 0;
    padding: 0;
    font-size: 1rem;
  }
}

.gl-cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.gl-cta-btn {
  display: inline-block;
  padding: 0.75rem 1.75rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none !important;
  transition: all 0.3s ease;
}

.gl-cta-btn--primary {
  background: linear-gradient(135deg, #9f1319, #c0392b);
  color: #fff !important;
  box-shadow: 0 4px 14px rgba(159, 19, 25, 0.35);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(159, 19, 25, 0.45);
    text-decoration: none;
  }
}

.gl-cta-btn--outline {
  background: transparent;
  color: #fff !important;
  border: 1.5px solid rgba(255,255,255,0.35);

  &:hover {
    background: rgba(255,255,255,0.1);
    border-color: rgba(255,255,255,0.6);
    text-decoration: none;
  }
}

/* ---- Lightbox ---- */
.gl-lightbox {
  display: none;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.92);
  align-items: center;
  justify-content: center;
  animation: glFadeIn 0.25s ease;
}

.gl-lightbox.active {
  display: flex;
}

@keyframes glFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.gl-lightbox-img {
  max-width: 88%;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 8px;
  animation: glZoomIn 0.3s ease;
}

@keyframes glZoomIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.gl-lightbox-close {
  position: absolute;
  top: 24px;
  right: 32px;
  color: #fff;
  font-size: 2.5rem;
  font-weight: 300;
  cursor: pointer;
  transition: color 0.2s ease;
  line-height: 1;

  &:hover {
    color: #caa64f;
  }
}

.gl-lightbox-nav {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
}

.gl-lightbox-btn {
  padding: 0.6rem 1.2rem;
  background: rgba(255,255,255,0.12);
  border: 1.5px solid rgba(255,255,255,0.4);
  color: #fff;
  font-size: 1.15rem;
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255,255,255,0.25);
    border-color: #fff;
  }
}

/* ---- Responsive ---- */
@media (max-width: 768px) {
  .gl-grid {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }

  .gl-item--wide {
    grid-column: span 2;
  }

  .gl-item img {
    height: 180px;
  }

  .gl-item--wide img {
    height: 220px;
  }

  .gl-caption {
    opacity: 1;
    transform: translateY(0);
  }

  .gl-cta-banner {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .gl-grid {
    grid-template-columns: 1fr;
  }

  .gl-item--wide {
    grid-column: span 1;
  }

  .gl-item img,
  .gl-item--wide img {
    height: 220px;
  }
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
  let currentPath = window.location.pathname;
  if (currentPath !== "/" && currentPath.endsWith("/")) {
    currentPath = currentPath.slice(0, -1);
  }
  const navLinks = document.querySelectorAll("a[href]");
  navLinks.forEach(link => {
    let href = link.getAttribute("href");
    if (href !== "/" && href.endsWith("/")) {
      href = href.slice(0, -1);
    }
    const isActive = (currentPath === "/" && href === "/") || 
                     (currentPath !== "/" && currentPath === href);
    if (isActive) {
      link.classList.add("active");
    }
  });
});
</script>

<script>
function filterGallery(category) {
  const buttons = document.querySelectorAll('.gl-filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  const items = document.querySelectorAll('.gl-item');
  items.forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = '';
      setTimeout(() => { item.style.opacity = '1'; }, 10);
    } else {
      item.style.opacity = '0';
      setTimeout(() => { item.style.display = 'none'; }, 300);
    }
  });
}

let currentImageIndex = 0;
let galleryImages = [];

function openLightbox(imgEl) {
  document.getElementById('lightbox-img').src = imgEl.src;
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';

  galleryImages = Array.from(document.querySelectorAll('.gl-item:not([style*="display: none"]) img'));
  currentImageIndex = galleryImages.indexOf(imgEl);
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

function nextImage() {
  if (galleryImages.length > 0) {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    document.getElementById('lightbox-img').src = galleryImages[currentImageIndex].src;
  }
}

function prevImage() {
  if (galleryImages.length > 0) {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    document.getElementById('lightbox-img').src = galleryImages[currentImageIndex].src;
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
});

document.addEventListener('click', (e) => {
  if (e.target === document.getElementById('lightbox')) closeLightbox();
});
</script>
