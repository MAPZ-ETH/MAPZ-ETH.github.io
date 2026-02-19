---
layout: single
permalink: /contact/
title: Get in Touch
excerpt: "Have questions or want to connect? We'd love to hear from you!"
---

<div class="contact-intro">
  <h2>Let's Connect! 👋</h2>
  <p>We're a student association — so the quickest way to reach us is through our community channels.<br>Jump into the group chat, DM us on socials, or drop us an email!</p>
</div>

---

## Join the Conversation

<div class="contact-cards-grid">
  <a href="https://chat.whatsapp.com/FWKoUwnsdYH0TgIuIX7NcY" target="_blank" class="contact-card contact-card--whatsapp">
    <div class="contact-card__icon">
      <img src="/assets/images/logos/WhatsApp_icon.png" alt="WhatsApp">
    </div>
    <div class="contact-card__body">
      <h3>WhatsApp Group</h3>
      <p>Our main community chat — ask questions, get updates, and meet members in real time.</p>
      <span class="contact-card__action">Join the group →</span>
    </div>
  </a>

  <a href="https://www.instagram.com/mapz_ethz" target="_blank" class="contact-card contact-card--instagram">
    <div class="contact-card__icon">
      <img src="/assets/images/logos/instagram-logo.png" alt="Instagram">
    </div>
    <div class="contact-card__body">
      <h3>Instagram</h3>
      <p>Follow us for event highlights, behind-the-scenes, and community vibes.</p>
      <span class="contact-card__action">@mapz_ethz →</span>
    </div>
  </a>

  <a href="https://www.linkedin.com/company/mapzeth/" target="_blank" class="contact-card contact-card--linkedin">
    <div class="contact-card__icon">
      <img src="/assets/images/logos/LinkedIn_logo_initials.png.webp" alt="LinkedIn">
    </div>
    <div class="contact-card__body">
      <h3>LinkedIn</h3>
      <p>Professional networking, alumni connections, and career opportunities.</p>
      <span class="contact-card__action">Connect with us →</span>
    </div>
  </a>

  <a href="mailto:contact@mapz.ch" class="contact-card contact-card--email">
    <div class="contact-card__icon">
      <span class="email-icon">✉️</span>
    </div>
    <div class="contact-card__body">
      <h3>Email Us</h3>
      <p>For formal inquiries, partnerships, sponsorship requests, or anything official.</p>
      <span class="contact-card__action">contact@mapz.ch →</span>
    </div>
  </a>
</div>

---

## Where to Find Us

<div class="contact-location-bar">
  <div class="location-item">
    <span class="location-emoji">📍</span>
    <div>
      <strong>ETH Zurich Campus</strong>
      <p>Zurich, Switzerland — Come say hi at our events!</p>
    </div>
  </div>
  <div class="location-item">
    <span class="location-emoji">📅</span>
    <div>
      <strong>Events & Meetups</strong>
      <p>The best way to meet us in person — <a href="/events/">see upcoming events</a></p>
    </div>
  </div>
  <div class="location-item">
    <span class="location-emoji">⏰</span>
    <div>
      <strong>Response Time</strong>
      <p>We usually reply within 24h on WhatsApp — email may take a bit longer.</p>
    </div>
  </div>
</div>

---

## Contact Form

We'd love to hear from you! Fill out the form below and we'll get back to you.

<iframe src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true" width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>



<style>
/* ─── Intro ─── */
.contact-intro {
  text-align: center;
  margin: 2.5rem auto 0;
  max-width: 640px;
}

.contact-intro h2 {
  font-size: 2.25rem;
  font-weight: 800;
  color: #2a2825;
  margin: 0 0 0.75rem 0;
  padding: 0;
  letter-spacing: -0.02em;
}

.contact-intro p {
  font-size: 1.05rem;
  color: #5a5754;
  line-height: 1.65;
  margin: 0;
  padding: 0;
}

/* ─── Cards Grid ─── */
.contact-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin: 2rem 0;
  padding: 0 2rem;
}

.contact-card {
  display: flex;
  gap: 1.25rem;
  padding: 1.5rem 1.75rem;
  background: #fff;
  border-radius: 1rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border: 1px solid rgba(0,0,0,0.06);
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}

.contact-card,
.contact-card:hover,
.contact-card:active,
.contact-card:visited,
.contact-card:focus {
  text-decoration: none !important;
}

.contact-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px -8px rgba(0,0,0,0.12);
}

.contact-card:hover .contact-card__body h3 {
  text-decoration: underline;
}

/* Brand accent strip */
.contact-card::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 1.5rem;
  right: 1.5rem;
  height: 3px;
  border-radius: 3px 3px 0 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.contact-card:hover::after { opacity: 1; }
.contact-card--whatsapp::after  { background: #25D366; }
.contact-card--instagram::after { background: linear-gradient(90deg, #F58529, #DD2A7B, #8134AF); }
.contact-card--linkedin::after  { background: #0A66C2; }
.contact-card--email::after     { background: #caa64f; }

/* Icon */
.contact-card__icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-card__icon img {
  width: 44px;
  height: 44px;
  object-fit: contain;
  border-radius: 10px;
}

.contact-card__icon .email-icon {
  font-size: 2.25rem;
  line-height: 1;
}

/* Body */
.contact-card__body {
  flex: 1;
  min-width: 0;
}

.contact-card__body h3 {
  margin: 0 0 0.35rem 0;
  padding: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #2a2825;
}

.contact-card__body p {
  margin: 0 0 0.6rem 0;
  padding: 0;
  font-size: 0.875rem;
  color: #5a5754;
  line-height: 1.5;
}

.contact-card__action {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  transition: opacity 0.2s ease;
}

.contact-card--whatsapp .contact-card__action  { color: #25D366; }
.contact-card--instagram .contact-card__action { color: #DD2A7B; }
.contact-card--linkedin .contact-card__action  { color: #0A66C2; }
.contact-card--email .contact-card__action     { color: #b8942e; }

.contact-card:hover .contact-card__action { opacity: 0.8; }

/* ─── Location Bar ─── */
.contact-location-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin: 2rem 0;
  padding: 0 2rem;
}

.location-item {
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
  padding: 1.25rem 1.5rem;
  background: #fff;
  border-radius: 0.85rem;
  border: 1px solid rgba(0,0,0,0.06);
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}

.location-item:hover {
  box-shadow: 0 6px 16px -4px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

.location-emoji {
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.location-item strong {
  display: block;
  color: #2a2825;
  font-size: 0.95rem;
  margin-bottom: 0.2rem;
}

.location-item p {
  margin: 0;
  padding: 0;
  font-size: 0.85rem;
  color: #5a5754;
  line-height: 1.5;
}

.location-item a {
  color: #9f1319;
  font-weight: 600;
  text-decoration: none;
}

.location-item a:hover {
  text-decoration: underline;
}



/* ─── Responsive ─── */
@media (max-width: 768px) {
  .contact-cards-grid {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }

  .contact-location-bar {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }

  .contact-intro h2 {
    font-size: 1.75rem;
  }

  .contact-quick-links {
    flex-direction: column;
    padding: 1.5rem;
  }

  .contact-quick-links .btn {
    width: 100%;
    text-align: center;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  let currentPath = window.location.pathname;
  if (currentPath !== '/' && currentPath.endsWith('/')) {
    currentPath = currentPath.slice(0, -1);
  }
  const navLinks = document.querySelectorAll('a[href]');
  navLinks.forEach(link => {
    let href = link.getAttribute('href');
    if (href !== '/' && href.endsWith('/')) {
      href = href.slice(0, -1);
    }
    if ((currentPath === '/' && href === '/') || (currentPath !== '/' && currentPath === href)) {
      link.classList.add('active');
    }
  });
});
</script>
