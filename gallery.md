---
layout: single
permalink: /gallery/
title: Gallery
excerpt: "Explore memorable moments from MAPZ events, activities, and community gatherings."
---

## Gallery

Explore our community moments! Browse photos from our events, team activities, and memorable gatherings throughout the year.

---

## Filter

<div class="gallery-filters">
  <button class="filter-btn active" onclick="filterGallery('all')">All</button>
  <button class="filter-btn" onclick="filterGallery('events')">Events</button>
  <button class="filter-btn" onclick="filterGallery('networking')">Networking</button>
  <button class="filter-btn" onclick="filterGallery('cultural')">Cultural</button>
  <button class="filter-btn" onclick="filterGallery('team')">Team</button>
</div>

---

## Photos

<div class="gallery-placeholder" style="text-align: center; padding: 4em 1em; background: #f9f9f9; border-radius: 8px;">
  <h3>📸 Gallery Coming Soon!</h3>
  <p>We are currently gathering the best moments from our recent events. Check back soon!</p>
  <p>In the meantime, you can view our shared album on Google Photos:</p>
  <a href="https://photos.google.com/placeholder" class="btn btn--primary" target="_blank">View Google Photos Album</a>
</div>

---

## Share Your Photos

Have a memorable photo from a MAPZ event? We'd love to see it! Send us your photos and they might be featured in our gallery.

<div class="photo-submission">
  <a href="/contact/" class="btn btn--primary">Submit Photos</a>
  <a href="/events/" class="btn btn--secondary">View Upcoming Events</a>
</div>

<!-- Lightbox Modal -->
<div id="lightbox" class="lightbox">
  <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
  <img class="lightbox-content" id="lightbox-img">
  <div class="lightbox-nav">
    <button class="lightbox-prev" onclick="prevImage()">&#10094;</button>
    <button class="lightbox-next" onclick="nextImage()">&#10095;</button>
  </div>
</div>

<style>
/* Gallery Filters */
.gallery-filters {
  display: flex;
  gap: $space-md;
  justify-content: center;
  flex-wrap: wrap;
  margin: $space-2xl 0;
  padding: 0 $space-lg;
}

.filter-btn {
  padding: $space-md $space-lg;
  border: 2px solid $medium-gray;
  background-color: $white;
  color: $primary-dark;
  border-radius: $border-radius-md;
  cursor: pointer;
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  transition: all 0.25s ease-in-out;

  &:hover {
    border-color: $primary-color;
    background-color: $light-gray;
  }

  &.active {
    background-color: $primary-color;
    color: $white;
    border-color: $primary-color;
  }
}

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: $space-xl;
  padding: $space-xl;
  margin: $space-2xl 0;
}

/* Gallery Item */
.gallery-item {
  background: $white;
  border-radius: $border-radius-md;
  overflow: hidden;
  box-shadow: $shadow-sm;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: $shadow-lg;
    transform: translateY(-4px);

    .gallery-overlay {
      opacity: 1;
    }
  }
}

.gallery-image {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  background-color: $light-gray;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.05);
  }
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($primary-color, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.gallery-btn {
  padding: $space-md $space-lg;
  background-color: $white;
  color: $primary-color;
  border: none;
  border-radius: $border-radius-sm;
  font-size: $font-size-base;
  font-weight: $font-weight-semibold;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: $secondary-color;
    color: $white;
    transform: scale(1.05);
  }
}

.gallery-info {
  padding: $space-lg;
  text-align: center;

  h4 {
    margin: 0 0 $space-sm 0;
    color: $primary-dark;
    font-size: $font-size-base;
  }

  p {
    margin: 0;
    color: $dark-gray;
    font-size: $font-size-sm;
  }
}

/* Photo Submission Section */
.photo-submission {
  display: flex;
  gap: $space-lg;
  justify-content: center;
  flex-wrap: wrap;
  padding: $space-2xl $space-xl;
  background: linear-gradient(135deg, $primary-color, $primary-light);
  border-radius: $border-radius-md;
  margin: $space-2xl 0;

  .btn {
    padding: $space-lg $space-2xl;
  }

  .btn--primary {
    background-color: $white;
    color: $primary-color;

    &:hover {
      background-color: $secondary-color;
      color: $white;
    }
  }

  .btn--secondary {
    background-color: transparent;
    border: 2px solid $white;
    color: $white;

    &:hover {
      background-color: $white;
      color: $primary-color;
    }
  }
}

/* Lightbox */
.lightbox {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  animation: fadeIn 0.3s ease-in-out;
}

.lightbox.active {
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.lightbox-content {
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
  animation: zoomIn 0.3s ease-in-out;
}

@keyframes zoomIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.lightbox-close {
  position: absolute;
  top: 30px;
  right: 40px;
  color: $white;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.25s ease-in-out;

  &:hover {
    color: $secondary-color;
  }
}

.lightbox-nav {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: $space-lg;
}

.lightbox-prev,
.lightbox-next {
  padding: $space-md $space-lg;
  background-color: rgba($white, 0.2);
  border: 2px solid $white;
  color: $white;
  font-size: $font-size-xl;
  cursor: pointer;
  border-radius: $border-radius-sm;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: $secondary-color;
    border-color: $secondary-color;
  }
}

/* Responsive */
@media (max-width: $breakpoint-md) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: $space-lg;
    padding: $space-lg;
  }

  .gallery-filters {
    gap: $space-sm;
  }

  .filter-btn {
    padding: $space-sm $space-md;
    font-size: $font-size-xs;
  }

  .gallery-image {
    height: 200px;
  }

  .lightbox-close {
    top: 15px;
    right: 15px;
    font-size: 30px;
  }

  .lightbox-content {
    max-width: 95%;
    max-height: 80vh;
  }

  .lightbox-nav {
    bottom: 15px;
    gap: $space-sm;
  }

  .lightbox-prev,
  .lightbox-next {
    padding: $space-sm $space-md;
    font-size: $font-size-lg;
  }

  .photo-submission {
    flex-direction: column;

    .btn {
      width: 100%;
      text-align: center;
    }
  }
}

@media (max-width: $breakpoint-sm) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .gallery-filters {
    gap: $space-xs;
    padding: 0 $space-md;
  }

  .filter-btn {
    padding: $space-sm $space-md;
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
  // Update active button
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  // Filter items
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = 'block';
      setTimeout(() => {
        item.style.opacity = '1';
      }, 10);
    } else {
      item.style.opacity = '0';
      setTimeout(() => {
        item.style.display = 'none';
      }, 300);
    }
  });
}

let currentImageIndex = 0;
let visibleImages = [];

function openLightbox(button) {
  const img = button.parentElement.parentElement.querySelector('img');
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox').classList.add('active');

  // Get all visible images for navigation
  visibleImages = Array.from(document.querySelectorAll('.gallery-item[style*="display: block"], .gallery-item:not([style*="display: none"])')).map(item => item.querySelector('img'));
  currentImageIndex = visibleImages.findIndex(image => image.src === img.src);
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

function nextImage() {
  if (visibleImages.length > 0) {
    currentImageIndex = (currentImageIndex + 1) % visibleImages.length;
    document.getElementById('lightbox-img').src = visibleImages[currentImageIndex].src;
  }
}

function prevImage() {
  if (visibleImages.length > 0) {
    currentImageIndex = (currentImageIndex - 1 + visibleImages.length) % visibleImages.length;
    document.getElementById('lightbox-img').src = visibleImages[currentImageIndex].src;
  }
}

// Close lightbox on escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeLightbox();
  }
  if (event.key === 'ArrowRight') {
    nextImage();
  }
  if (event.key === 'ArrowLeft') {
    prevImage();
  }
});

// Close lightbox when clicking outside the image
document.addEventListener('click', (event) => {
  const lightbox = document.getElementById('lightbox');
  if (event.target === lightbox) {
    closeLightbox();
  }
});
</script>
