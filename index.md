---
layout: splash
permalink: /

header:
  overlay_filter: "0.5"
  overlay_image: /assets/images/team.gif
  overlay_size: cover
  overlay_position: center center

title: "MAPZ"
subtitle: "Moroccan Association of Polytechnicians in Zurich"
excerpt: "Building a vibrant community of Moroccan students and alumni at ETH Zurich. We connect, inspire, and grow together."

feature_row:
  - image_path: 
    alt: "Networking"
    title: "Networking"
    excerpt: "Connect with fellow Moroccan polytechnicians and build lasting professional relationships."
    
  - image_path: 
    alt: "Events"
    title: "Events & Workshops"
    excerpt: "Participate in regular meetups, seminars, and social events throughout the year."
    
  - image_path: 
    alt: "Career"
    title: "Career Support"
    excerpt: "Access mentorship, job opportunities, and professional development resources."
    
  - image_path: 
    alt: "Community"
    title: "Cultural Exchange"
    excerpt: "Celebrate our Moroccan heritage while embracing the diverse ETH community."

cta_section:
  - excerpt: "Ready to join our community?"
    btn_label: "Join MAPZ"
    btn_url: /join/
    
intro:
  - excerpt: "## About MAPZ

MAPZ is the official association for Moroccan students and alumni at ETH Zurich. We bring together talented individuals to share experiences, support each other's academic and professional growth, and maintain our cultural connections.

Whether you're just starting your studies or are a successful alumnus, MAPZ provides a welcoming space to network, learn, and grow.
"
---

{% include feature_row id="intro" type="center" %}

{% include feature_row %}

## Upcoming Events

Stay tuned for our upcoming events and activities. [View all events →](/events/)

## Get Connected

<div class="text-center">
  <p><strong>Want to learn more or get involved?</strong></p>
  <p>
    <a href="/join/" class="btn btn--primary">Join Us</a>
    <a href="/contact/" class="btn btn--secondary">Contact Us</a>
  </p>
</div>

<style>
.page__hero {
  background-position: center center !important;
  background-size: cover !important;
  min-height: 600px !important;
}

.page__hero--overlay {
  background-position: center center !important;
  min-height: 600px !important;
}
</style>

<script>
function highlightActiveNav() {
  let currentPath = window.location.pathname;
  if (currentPath !== '/' && currentPath.endsWith('/')) {
    currentPath = currentPath.slice(0, -1);
  }
  
  // Target only the visible-links navigation
  const navLinks = document.querySelectorAll('.visible-links a');
  navLinks.forEach(link => {
    let href = link.getAttribute('href');
    if (!href) return;
    
    if (href !== '/' && href.endsWith('/')) {
      href = href.slice(0, -1);
    }
    
    let isActive = false;
    if (currentPath === '/' && href === '/') {
      isActive = true;
    } else if (currentPath !== '/' && currentPath === href) {
      isActive = true;
    }
    
    if (isActive) {
      link.classList.add('active');
    }
  });
}

// Run immediately and also after a short delay to ensure DOM is ready
highlightActiveNav();
setTimeout(highlightActiveNav, 100);
</script>