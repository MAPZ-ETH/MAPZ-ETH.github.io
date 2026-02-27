---
layout: single
permalink: /sponsors/
title: Our Sponsors
excerpt: "Proud partners supporting the MAPZ community and our mission to empower Moroccan students at ETH Zurich."
---

<div class="sp-intro">
  <p>MAPZ is grateful to our sponsors who help us organize events, provide mentorship opportunities, and support our community. Their support enables us to create meaningful experiences for Moroccan students and alumni at ETH Zurich.</p>
</div>

---

## Our Partners

{% include sponsors-grid.html %}

---

## Event Highlights with Sponsors

<p class="sp-section-desc">Recent events made possible by our generous sponsors.</p>

<div class="carousel-container">
  <div class="carousel-wrapper">
    <div class="carousel-item">
      <img src="/assets/images/events/event-1.jpg" alt="Event Highlight 1">
      <div class="carousel-caption">
        <h4>Annual Networking Event</h4>
        <p>Connecting Moroccan professionals and students across industries</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src="/assets/images/events/event-2.jpg" alt="Event Highlight 2">
      <div class="carousel-caption">
        <h4>Cultural Celebration</h4>
        <p>Celebrating our Moroccan heritage with the ETH community</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src="/assets/images/events/event-3.jpg" alt="Event Highlight 3">
      <div class="carousel-caption">
        <h4>Career Workshop</h4>
        <p>Industry insights and career development opportunities</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src="/assets/images/events/event-4.jpg" alt="Event Highlight 4">
      <div class="carousel-caption">
        <h4>Alumni Meetup</h4>
        <p>Reconnecting with successful MAPZ alumni</p>
      </div>
    </div>
  </div>

  <button class="carousel-btn carousel-prev" onclick="moveCarousel(-1)">❮</button>
  <button class="carousel-btn carousel-next" onclick="moveCarousel(1)">❯</button>

  <div class="carousel-dots">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
    <span class="dot" onclick="currentSlide(4)"></span>
  </div>
</div>

---

## Sponsorship Tiers

<p class="sp-section-desc">Choose a tier that aligns with your goals — every level makes a meaningful impact on our community.</p>

<div class="sp-tiers-grid">
  <!-- Silver -->
  <div class="sp-tier-card sp-tier--silver">
    <div class="sp-tier-badge">🥈</div>
    <h3 class="sp-tier-name">Silver</h3>
    <ul class="sp-tier-perks">
      <li><span class="sp-check">✓</span> Logo on Website & Events</li>
      <li><span class="sp-check">✓</span> 1–2 Sponsored Events / Year</li>
      <li><span class="sp-check">✓</span> Quarterly Social Media Mentions</li>
      <li><span class="sp-check">✓</span> Annual Newsletter Feature</li>
      <li><span class="sp-check">✓</span> Booth Available at Events</li>
      <li><span class="sp-check">✓</span> Speaking Opportunity on Request</li>
    </ul>
  </div>

  <!-- Gold -->
  <div class="sp-tier-card sp-tier--gold sp-tier--featured">
    <div class="sp-tier-ribbon">Popular</div>
    <div class="sp-tier-badge">🥇</div>
    <h3 class="sp-tier-name">Gold</h3>
    <ul class="sp-tier-perks">
      <li><span class="sp-check">✓</span> Logo on All Materials</li>
      <li><span class="sp-check">✓</span> 2–3 Sponsored Events / Year</li>
      <li><span class="sp-check">✓</span> Monthly Social Media Mentions</li>
      <li><span class="sp-check">✓</span> Quarterly Newsletter Feature</li>
      <li><span class="sp-check">✓</span> Standard Booth at Events</li>
      <li><span class="sp-check">✓</span> Speaking Opportunity on Request</li>
    </ul>
  </div>

  <!-- Platinum -->
  <div class="sp-tier-card sp-tier--platinum">
    <div class="sp-tier-badge">💎</div>
    <h3 class="sp-tier-name">Platinum</h3>
    <ul class="sp-tier-perks">
      <li><span class="sp-check">✓</span> Logo on All Materials + Homepage</li>
      <li><span class="sp-check">✓</span> 4+ Sponsored Events / Year</li>
      <li><span class="sp-check">✓</span> Regular Social Media Features</li>
      <li><span class="sp-check">✓</span> Monthly Newsletter Feature</li>
      <li><span class="sp-check">✓</span> Premium Booth Position</li>
      <li><span class="sp-check">✓</span> Guaranteed Speaking Opportunity</li>
    </ul>
  </div>
</div>

---

## Become a Sponsor


<div class="mapz-form-wrapper">
  <form id="sponsor-form" action="https://docs.google.com/forms/d/e/YOUR_SPONSOR_FORM_ID/formResponse" method="POST" target="hidden_iframe_sponsor" onsubmit="sponsorFormSubmitted()">

    <div class="form-row">
      <div class="form-group">
        <label for="company-name">Company / Organization <span class="required">*</span></label>
        <input type="text" id="company-name" name="entry.XXXXXXX1" placeholder="e.g. Acme Corp" required>
      </div>
      <div class="form-group">
        <label for="sponsor-email">Contact Email <span class="required">*</span></label>
        <input type="email" id="sponsor-email" name="entry.XXXXXXX2" placeholder="you@company.com" required>
      </div>
    </div>

    <div class="form-group">
      <label for="sponsor-level">Sponsorship Level <span class="required">*</span></label>
      <select id="sponsor-level" name="entry.XXXXXXX3" required>
        <option value="" disabled selected>Choose a level…</option>
        <option value="Platinum">Platinum</option>
        <option value="Gold">Gold</option>
        <option value="Silver">Silver</option>
        <option value="Not sure yet">Not sure yet</option>
      </select>
    </div>

    <div class="form-group">
      <label for="sponsor-message">Message <span class="required">*</span></label>
      <textarea id="sponsor-message" name="entry.XXXXXXX4" rows="5" placeholder="Tell us about your interest in sponsoring MAPZ…" required></textarea>
    </div>

    <button type="submit" class="form-submit-btn">
      <span class="btn-text">Submit Application</span>
      <span class="btn-icon">→</span>
    </button>
  </form>

  <iframe name="hidden_iframe_sponsor" id="hidden_iframe_sponsor" style="display:none;" onload="if(sponsorSubmitted){showSponsorThankYou();}"></iframe>

  <div id="sponsor-thank-you" class="thank-you-message" style="display:none;">
    <div class="thank-you-icon">✅</div>
    <h3>Thank you!</h3>
    <p>Your sponsorship application has been received. We'll be in touch soon.</p>
  </div>
</div>

---

## Past Sponsors & Partners

<p class="sp-section-desc">We're grateful to all the organizations that have supported MAPZ throughout the years.</p>

<div class="sp-past-timeline">
  <div class="sp-past-year">
    <div class="sp-past-year-badge">2024</div>
    <div class="sp-past-year-partners">
      <span class="sp-partner-chip">Company A</span>
      <span class="sp-partner-chip">Company B</span>
      <span class="sp-partner-chip">Company C</span>
      <span class="sp-partner-chip">Company D</span>
    </div>
  </div>
  <div class="sp-past-year">
    <div class="sp-past-year-badge">2023</div>
    <div class="sp-past-year-partners">
      <span class="sp-partner-chip">Company E</span>
      <span class="sp-partner-chip">Company F</span>
      <span class="sp-partner-chip">Company G</span>
    </div>
  </div>
  <div class="sp-past-year">
    <div class="sp-past-year-badge">2022</div>
    <div class="sp-past-year-partners">
      <span class="sp-partner-chip">Company H</span>
      <span class="sp-partner-chip">Company I</span>
      <span class="sp-partner-chip">Company J</span>
    </div>
  </div>
</div>

---

## Get in Touch

<div class="sp-contact-bar">
  <a href="mailto:sponsors@mapz.org" class="sp-contact-item">
    <span class="sp-contact-icon">✉️</span>
    <div>
      <strong>Email</strong>
      <p>sponsors@mapz.org</p>
    </div>
  </a>
  <a href="/contact/" class="sp-contact-item">
    <span class="sp-contact-icon">💬</span>
    <div>
      <strong>Contact Page</strong>
      <p>Reach us through our contact form</p>
    </div>
  </a>
</div>


<style>
/* ─── Intro ─── */
.sp-intro {
  max-width: 740px;
  margin: 0 auto 0.5rem;
  text-align: center;
}
.sp-intro p {
  font-size: 1.05rem;
  color: #5a5754;
  line-height: 1.7;
  margin: 0;
  padding: 0;
}

.sp-section-desc {
  color: #5a5754;
  font-size: 1rem;
  margin: 0 0 1.5rem 0;
  padding: 0;
}

/* ─── Carousel ─── */
.carousel-container {
  position: relative;
  max-width: 100%;
  margin: 2rem 0;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  overflow: hidden;
  background: #e8e6e3;
}

.carousel-item {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.carousel-item.active {
  display: block;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.75), transparent);
  color: white;
  padding: 2.5rem 1.5rem 1.25rem;
  text-align: left;
}

.carousel-caption h4 {
  margin: 0 0 0.35rem 0;
  font-size: 1.2rem;
  font-weight: 700;
}

.carousel-caption p {
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.9;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  color: white;
  border: 1px solid rgba(255,255,255,0.2);
  font-size: 1.25rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
}

.carousel-btn:hover {
  background: rgba(255,255,255,0.3);
}

.carousel-prev { left: 0.75rem; }
.carousel-next { right: 0.75rem; }

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem;
  background: #fff;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #d0d0d0;
  cursor: pointer;
  transition: all 0.25s ease;
}

.dot.active {
  background: #9f1319;
  transform: scale(1.2);
}

/* ═══════════ SPONSORSHIP TIERS ═══════════ */
.sp-tiers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 1.5rem 0;
  align-items: stretch;
}

.sp-tier-card {
  position: relative;
  background: #fff;
  border-radius: 1.15rem;
  padding: 2.25rem 1.75rem 2rem;
  text-align: center;
  border: 1.5px solid rgba(0,0,0,0.06);
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.sp-tier-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px -6px rgba(0,0,0,0.12);
}

.sp-tier-badge {
  font-size: 2.5rem;
  margin-bottom: 0.6rem;
  line-height: 1;
}

.sp-tier-name {
  font-size: 1.35rem;
  font-weight: 800;
  margin: 0 0 1.25rem 0;
  padding: 0;
  letter-spacing: -0.01em;
}

.sp-tier--silver .sp-tier-name { color: #6b7280; }
.sp-tier--gold .sp-tier-name   { color: #b8860b; }
.sp-tier--platinum .sp-tier-name { color: #4a5568; }

.sp-tier-perks {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
}

.sp-tier-perks li {
  padding: 0.6rem 0;
  font-size: 0.9rem;
  color: #444;
  border-bottom: 1px solid rgba(0,0,0,0.04);
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
}

.sp-tier-perks li:last-child {
  border-bottom: none;
}

.sp-check {
  color: #16a34a;
  font-weight: 700;
  flex-shrink: 0;
}

/* Featured tier (Gold) */
.sp-tier--featured {
  border-color: #b8860b;
  box-shadow: 0 4px 24px rgba(184, 134, 11, 0.15);
  transform: scale(1.04);
}

.sp-tier--featured:hover {
  transform: scale(1.04) translateY(-6px);
}

.sp-tier-ribbon {
  position: absolute;
  top: 14px;
  right: -28px;
  background: linear-gradient(135deg, #b8860b, #d4a838);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.3rem 2.5rem;
  transform: rotate(45deg);
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}

/* ═══════════ CTA BANNER ═══════════ */
.sp-cta-banner {
  background: linear-gradient(135deg, #1a2332, #2a3a4e);
  border-radius: 1.15rem;
  padding: 3rem 2.5rem;
  text-align: center;
  margin: 1.5rem 0;
  position: relative;
  overflow: hidden;
}

.sp-cta-banner::before {
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

.sp-cta-content {
  position: relative;
  z-index: 1;
}

.sp-cta-content h3 {
  color: #fff;
  font-size: 1.6rem;
  font-weight: 800;
  margin: 0 0 0.6rem 0;
  padding: 0;
}

.sp-cta-content p {
  color: rgba(255,255,255,0.75);
  font-size: 1.05rem;
  margin: 0 0 1.5rem 0;
  padding: 0;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
}

.sp-cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.sp-cta-btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  border-radius: 0.6rem;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
}

.sp-cta-btn--primary {
  background: linear-gradient(135deg, #9f1319, #c0392b);
  color: #fff;
  box-shadow: 0 4px 14px rgba(159, 19, 25, 0.35);
}

.sp-cta-btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(159, 19, 25, 0.45);
  color: #fff;
}

.sp-cta-btn--outline {
  background: transparent;
  color: #fff;
  border: 1.5px solid rgba(255,255,255,0.35);
}

.sp-cta-btn--outline:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.6);
  color: #fff;
}

/* ═══════════ PAST SPONSORS TIMELINE ═══════════ */
.sp-past-timeline {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: 1rem 0;
}

.sp-past-year {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem 1.5rem;
  background: #fff;
  border-radius: 0.85rem;
  border: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 1px 4px rgba(0,0,0,0.03);
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}

.sp-past-year:hover {
  box-shadow: 0 6px 16px rgba(0,0,0,0.07);
  transform: translateY(-2px);
}

.sp-past-year-badge {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  border-radius: 14px;
  background: linear-gradient(135deg, #9f1319, #c0392b);
  color: #fff;
  font-size: 0.95rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -0.01em;
}

.sp-past-year-partners {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.sp-partner-chip {
  display: inline-block;
  padding: 0.4rem 0.9rem;
  background: #f4f3f1;
  border-radius: 2rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #444;
  border: 1px solid rgba(0,0,0,0.06);
  transition: all 0.2s ease;
}

.sp-partner-chip:hover {
  background: #eae8e5;
  transform: translateY(-1px);
}

/* ═══════════ CONTACT BAR ═══════════ */
.sp-contact-bar {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin: 1.5rem 0;
}

.sp-contact-item {
  display: flex;
  gap: 1rem;
  padding: 1.35rem 1.5rem;
  background: #fff;
  border-radius: 0.85rem;
  border: 1px solid rgba(0,0,0,0.06);
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.sp-contact-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  text-decoration: none;
  color: inherit;
}

.sp-contact-item:visited,
.sp-contact-item:active {
  text-decoration: none;
  color: inherit;
}

.sp-contact-icon {
  font-size: 1.75rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.sp-contact-item strong {
  display: block;
  font-size: 0.95rem;
  color: #2a2825;
  margin-bottom: 0.15rem;
}

.sp-contact-item p {
  margin: 0;
  padding: 0;
  font-size: 0.85rem;
  color: #5a5754;
  line-height: 1.45;
}

/* ═══════════ RESPONSIVE ═══════════ */
@media (max-width: 768px) {
  .sp-tiers-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .sp-tier--featured {
    transform: none;
    order: -1;
  }

  .sp-tier--featured:hover {
    transform: translateY(-6px);
  }

  .sp-cta-banner {
    padding: 2rem 1.25rem;
  }

  .sp-cta-content h3 {
    font-size: 1.35rem;
  }

  .sp-contact-bar {
    grid-template-columns: 1fr;
  }

  .sp-past-year {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .carousel-btn {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }
}
</style>

<script>
var sponsorSubmitted = false;

function sponsorFormSubmitted() {
  sponsorSubmitted = true;
}

function showSponsorThankYou() {
  document.getElementById('sponsor-form').style.display = 'none';
  document.getElementById('sponsor-thank-you').style.display = 'block';
}
</script>

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
let currentSlideIndex = 1;

function moveCarousel(n) {
  showSlides(currentSlideIndex += n);
}

function currentSlide(n) {
  showSlides(currentSlideIndex = n);
}

function showSlides(n) {
  const slides = document.querySelectorAll('.carousel-item');
  const dots = document.querySelectorAll('.dot');
  
  if (n > slides.length) {
    currentSlideIndex = 1;
  }
  if (n < 1) {
    currentSlideIndex = slides.length;
  }
  
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  if (slides[currentSlideIndex - 1]) {
    slides[currentSlideIndex - 1].classList.add('active');
  }
  if (dots[currentSlideIndex - 1]) {
    dots[currentSlideIndex - 1].classList.add('active');
  }
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', function() {
  showSlides(currentSlideIndex);
});
</script>
