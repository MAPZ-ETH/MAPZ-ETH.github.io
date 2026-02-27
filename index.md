---
layout: splash
permalink: /

header:
  overlay_image: /assets/images/team.gif
  overlay_filter: "0.1"
  actions:
    - label: "Join Us"
      url: "/join/"
  overlay_size: cover
  overlay_position: center center

title: "MAPZ"
subtitle: "Moroccan Association of Polytechnicians in Zurich"
excerpt: "Building a vibrant community of Moroccan students and alumni at ETH Zurich. We connect, inspire, and grow together."

---

<!-- ═══════════ ABOUT MAPZ ═══════════ -->
<div class="mapz-about-section">
  <div class="mapz-about-inner">
    <div class="mapz-about-accent"></div>
    <h2 class="mapz-section-title">About MAPZ</h2>
    <p class="mapz-about-text">
      MAPZ is the official association for Moroccan students and alumni at ETH Zurich. We bring together talented individuals to share experiences, support each other's academic and professional growth, and maintain our cultural connections.
    </p>
    <p class="mapz-about-text">
      Whether you're just starting your studies or are a successful alumnus, MAPZ provides a welcoming space to network, learn, and grow.
    </p>
    <a href="/join/" class="mapz-cta-btn">Join MAPZ →</a>
  </div>
</div>

<!-- ═══════════ OUR IMPACT ═══════════ -->
<div class="mapz-impact-section">
  <h2 class="mapz-section-title">Our Impact</h2>
  <p class="mapz-section-subtitle">Building a thriving community of Moroccan students and alumni in Zurich.</p>
  <div class="mapz-stats-grid">
    <div class="mapz-stat-card">
      <span class="mapz-stat-number">8</span>
      <span class="mapz-stat-label">Founding Members</span>
    </div>
    <div class="mapz-stat-card">
      <span class="mapz-stat-number">10+</span>
      <span class="mapz-stat-label">Fields of Study</span>
    </div>
    <div class="mapz-stat-card">
      <span class="mapz-stat-number">2</span>
      <span class="mapz-stat-label">Universities Connected</span>
    </div>
    <div class="mapz-stat-card">
      <span class="mapz-stat-number">100%</span>
      <span class="mapz-stat-label">Moroccan Spirit</span>
    </div>
  </div>
</div>

<!-- ═══════════ WHAT WE OFFER ═══════════ -->
<div class="mapz-features-section">
  <h2 class="mapz-section-title">What We Offer</h2>
  <div class="mapz-features-grid">
    <div class="mapz-feature-card">
      <div class="mapz-feature-icon">🤝</div>
      <h3>Networking</h3>
      <p>Connect with fellow Moroccan polytechnicians and build lasting professional relationships.</p>
    </div>
    <div class="mapz-feature-card">
      <div class="mapz-feature-icon">🎓</div>
      <h3>Events &amp; Workshops</h3>
      <p>Participate in regular meetups, seminars, and social events throughout the year.</p>
    </div>
    <div class="mapz-feature-card">
      <div class="mapz-feature-icon">🚀</div>
      <h3>Career Support</h3>
      <p>Access mentorship, job opportunities, and professional development resources.</p>
    </div>
    <div class="mapz-feature-card">
      <div class="mapz-feature-icon">🇲🇦</div>
      <h3>Cultural Exchange</h3>
      <p>Celebrate our Moroccan heritage while embracing the diverse ETH community.</p>
    </div>
  </div>
</div>

## Upcoming Events & Activities

Stay tuned for our upcoming events and activities. 🎉 **Join our next event!** We organize seminars and social gatherings monthly. Check our [Events Page](/events/) or join our WhatsApp group for real-time updates.


<style>
.page__hero {
  background-position: center top !important;
  background-size: cover !important;
  min-height: 600px !important;
}

.page__hero--overlay {
  background-position: center 35% !important;
  min-height: 600px !important;
  display: flex !important;
  align-items: flex-end !important;
  transition: background-color 0.5s ease !important;
}

/* Lighter overlay by default to show the photo clearly */
.page__hero--overlay::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.15);
  transition: background 0.5s ease;
  pointer-events: none;
  z-index: 0;
}

/* Darken overlay on hover so text is readable */
.page__hero--overlay:hover::before {
  background: rgba(0, 0, 0, 0.45);
}

/* Hide text by default, reveal on hover */
.page__hero--overlay .wrapper {
  padding-bottom: 2.5rem !important;
  padding-top: 0 !important;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  position: relative;
  z-index: 1;
}

.page__hero--overlay:hover .wrapper {
  opacity: 1;
  transform: translateY(0);
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