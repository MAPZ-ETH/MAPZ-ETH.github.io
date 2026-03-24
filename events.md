---
layout: single
permalink: /events/
title: Events
header:
  overlay_image: /assets/images/headers/events.png
  overlay_filter: 0
excerpt: "Join us for networking, learning, and celebrating our community together!"
---

<!-- ═══════════ FEATURED: MORNING RUN & BRUNCH ═══════════ -->
<div class="ev-featured-section" id="morning-run-register">
  <div class="ev-featured-badge">Next Event — Register Now</div>
  <h2 class="ev-featured-title">MAPZ Morning Run &amp; Brunch</h2>
  <p class="ev-featured-subtitle">Join us for a Sunday morning run in Zurich — followed by a well-deserved brunch with the community.</p>
  <div class="ev-featured-meta">
    <span>📅 Sunday, March 29 · 09:00–11:00</span>
    <span>📍 Zurich, Switzerland</span>
  </div>
  <div class="ev-featured-layout">
    <div class="ev-featured-flyer">
      <a href="https://www.instagram.com/mapz_ethz" target="_blank" rel="noopener noreferrer">
        <img src="/assets/images/events/gma.jpg" alt="MAPZ Morning Run & Brunch flyer" />
      </a>
    </div>
    <div class="ev-featured-form">
      <p class="ev-featured-form-label">Secure your spot — fill in the form below:</p>
      <div class="mapz-form-wrapper">
        <form id="run-form" action="https://docs.google.com/forms/d/e/1FAIpQLSf2qw-Die6hSJyxTgBTJnWahHoyYIp28Xu6-ZPyEmv00zOd5w/formResponse" method="POST" target="run_hidden_iframe" onsubmit="submitRunForm()">

          <div class="form-group">
            <label for="run-name">Full Name <span class="required">*</span></label>
            <input type="text" id="run-name" name="entry.1581260360" placeholder="e.g. Amine Alaoui" required>
          </div>

          <div class="form-group">
            <label for="run-participation">Participation <span class="required">*</span></label>
            <select id="run-participation" name="entry.302516738" required>
              <option value="" disabled selected>Choose your participation…</option>
              <option value="I'm coming for the Run + Brunch 🏃‍♀️🥐">Run + Brunch 🏃‍♀️🥐</option>
              <option value="Only the Run 🏃‍♀️">Only the Run 🏃‍♀️</option>
              <option value="Only the Brunch 🥐">Only the Brunch 🥐</option>
            </select>
          </div>

          <div class="form-group">
            <label for="run-pace">Running Pace (5km) <span class="required">*</span></label>
            <select id="run-pace" name="entry.1274903532" required>
              <option value="" disabled selected>Choose your pace…</option>
              <option value="Casual (Above 7:00 min/km)">Casual — Above 7:00 min/km</option>
              <option value="Moderate (5:30 - 7:00 min/km)">Moderate — 5:30–7:00 min/km</option>
              <option value="Fast (Below 5:30 min/km)">Fast — Below 5:30 min/km</option>
              <option value="I will walk/run at my own pace">Walk/Run at my own pace</option>
            </select>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="run-gender">Gender <span class="required">*</span></label>
              <select id="run-gender" name="entry.20154657" required>
                <option value="" disabled selected>Select…</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
            <div class="form-group">
              <label for="run-student">Are you a student? <span class="required">*</span></label>
              <select id="run-student" name="entry.274378874" required onchange="toggleSchool(this.value)">
                <option value="" disabled selected>Select…</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <div class="form-group" id="school-group" style="display:none;">
            <label for="run-school">Which school are you attending?</label>
            <select id="run-school" name="entry.1056687834">
              <option value="" disabled selected>Select your school…</option>
              <option value="ETHZ">ETHZ</option>
              <option value="UZH">UZH</option>
              <option value="EPFL">EPFL</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button type="submit" class="form-submit-btn">
            <span class="btn-text">Register Now</span>
            <span class="btn-icon">→</span>
          </button>
        </form>

        <iframe name="run_hidden_iframe" style="display:none;"></iframe>

        <div id="run-thank-you" class="thank-you-message" style="display:none;">
          <div class="thank-you-icon mapz-icon-green"><i class="fas fa-check-circle"></i></div>
          <h3>You're registered! 🏃‍♀️🥐</h3>
          <p>See you on March 29th — get ready to run and brunch with the MAPZ community!</p>
        </div>
      </div>
    </div>
  </div>
</div>

---

## Upcoming Events

<p class="ev-section-intro">Mark your calendars! Here are the events we have planned. Follow our social media for updates and last-minute announcements.</p>

{% include events-upcoming.html %}

---

## Past Events

{% include events-past.html %}



<style>
/* ============================================================
   EVENTS PAGE — Modern Design
   ============================================================ */

/* ---- Featured Event ---- */
.ev-featured-section {
  padding: 0;
  margin: 0 0 2.5rem 0;
  position: relative;
}

.ev-featured-badge {
  display: inline-block;
  background: linear-gradient(135deg, #caa64f, #9f8337);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 4px 14px;
  border-radius: 50px;
  margin-bottom: 0.85rem;
}

.ev-featured-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: #2a2825;
  margin: 0 0 0.4rem 0;
  padding: 0;
}

.ev-featured-subtitle {
  font-size: 1rem;
  color: #666;
  margin: 0 0 0.75rem 0;
  line-height: 1.6;
}

.ev-featured-meta {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 1.75rem;
}

.ev-featured-layout {
  display: grid;
  grid-template-columns: 38% 62%;
  gap: 2rem;
  align-items: start;
}

.ev-featured-flyer img {
  width: 100%;
  height: auto;
  border-radius: 14px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.14);
  display: block;
}

.ev-featured-form-label {
  font-size: 0.85rem;
  color: #888;
  margin: 0 0 0.5rem 0;
  font-style: italic;
  text-align: center;
}

.ev-featured-form .form-group {
  margin-bottom: 0.6rem;
}

.ev-featured-form .mapz-form-wrapper input,
.ev-featured-form .mapz-form-wrapper select {
  padding: 0.45rem 0.75rem;
  font-size: 0.9rem;
}

.ev-featured-form iframe {
  border-radius: 12px;
  width: 100%;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  border: 1px solid rgba(0,0,0,0.06);
}

@media (max-width: 768px) {
  .ev-featured-layout {
    grid-template-columns: 1fr;
  }
  .ev-featured-section {
    padding: 1.5rem;
  }
  .ev-featured-title {
    font-size: 1.4rem;
  }
}

/* Section intro */
.ev-section-intro {
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  margin: 0 0 2rem 0;
  line-height: 1.7;
}

/* ---- Upcoming Events Grid ---- */
.ev-upcoming-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
}

.ev-card {
  display: flex;
  background: #fff;
  border-radius: 16px;
  border: 1px solid rgba(150, 28, 32, 0.12);
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  overflow: hidden;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  position: relative;

  &:hover {
    box-shadow: 0 6px 24px rgba(150, 28, 32, 0.12);
    transform: translateY(-2px);
  }
}

.ev-card--featured {
  border: 2px solid #caa64f;
  box-shadow: 0 4px 20px rgba(202,166,79,0.15);
}

.ev-card-ribbon {
  position: absolute;
  top: 16px;
  right: -32px;
  background: linear-gradient(135deg, #caa64f, #9f8337);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 4px 40px;
  transform: rotate(45deg);
  z-index: 2;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}

.ev-card-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  padding: 1.5rem 1rem;
  background: linear-gradient(135deg, #6d0d10, #9f1319);
  color: #fff;
  text-align: center;
  flex-shrink: 0;
}

.ev-card-month {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0.9;
  margin-bottom: 2px;
}

.ev-card-day {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 2px;
}

.ev-card-year {
  font-size: 0.75rem;
  opacity: 0.7;
}

.ev-card-body {
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.ev-card-title {
  font-size: 1.25rem;
  color: #2a2825;
  margin: 0 0 0.5rem 0;
  padding: 0;
  font-weight: 700;
}

.ev-card-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.ev-card-meta-item {
  font-size: 0.85rem;
  color: #888;
}

.ev-card-desc {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 1rem 0;
  padding: 0;
  flex: 1;
}

.ev-card-btn {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: #9f1319;
  color: #fff !important;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background 0.2s ease, transform 0.2s ease;
  align-self: flex-start;

  &:hover {
    background: #c23a42;
    transform: translateY(-1px);
    text-decoration: none;
  }
}

/* ---- Past Events ---- */
.ev-past-section {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin: 2rem 0;
}

.ev-year-block {
  position: relative;
}

.ev-year-badge {
  display: inline-block;
  background: linear-gradient(135deg, #6d0d10, #9f1319);
  color: #fff;
  padding: 0.4rem 1.5rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 1.25rem;
}

.ev-past-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.25rem;
}

.ev-past-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  border-top: 3px solid transparent;
  border: 1px solid rgba(150, 28, 32, 0.12);
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 6px 24px rgba(150, 28, 32, 0.12);
    transform: translateY(-2px);
    border-top-color: #caa64f;
  }

  .ev-past-icon {
    font-size: 2.2rem;
    margin-bottom: 0.75rem;
    line-height: 1;
    font-weight: 300;

    &.mapz-icon-gold { color: #a47b30; }
    &.mapz-icon-red { color: #9f1319; }
  }

  h4 {
    font-size: 1.05rem;
    color: #2a2825;
    margin: 0 0 0.35rem 0;
    padding: 0;
    font-weight: 700;
  }

  .ev-past-date {
    font-size: 0.8rem;
    color: #caa64f;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .ev-past-location {
    display: block;
    font-size: 0.8rem;
    color: #888;
    margin-top: 0.2rem;
    i { margin-right: 0.25rem; color: #9f1319; }
  }

  p {
    font-size: 0.9rem;
    color: #666;
    line-height: 1.6;
    margin: 0.5rem 0 0 0;
    padding: 0;
  }
}

/* ---- Stats Bar ---- */
.ev-stats-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 2rem 0;
}

.ev-stat {
  background: linear-gradient(135deg, #6d0d10, #9f1319);
  color: #fff;
  padding: 2rem 1rem;
  border-radius: 14px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(159,19,25,0.2);
  transition: transform 0.25s ease;

  &:hover {
    transform: scale(1.04);
  }
}

.ev-stat-num {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
}

.ev-stat-label {
  display: block;
  font-size: 0.85rem;
  opacity: 0.9;
}

/* ---- Stay Connected ---- */
.ev-connect-section {
  text-align: center;
  margin: 2rem 0;
}

.ev-connect-intro {
  font-size: 1.05rem;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.ev-social-row {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.ev-social-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
  color: #fff !important;

  &:hover {
    transform: translateY(-2px);
    text-decoration: none;
  }
}

.ev-social--instagram {
  background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
  box-shadow: 0 4px 14px rgba(220,39,67,0.25);

  &:hover {
    box-shadow: 0 6px 20px rgba(220,39,67,0.35);
  }
}

.ev-social--linkedin {
  background: linear-gradient(135deg, #0077b5, #005fa3);
  box-shadow: 0 4px 14px rgba(0,119,181,0.25);

  &:hover {
    box-shadow: 0 6px 20px rgba(0,119,181,0.35);
  }
}

.ev-social-icon {
  font-size: 1.2rem;
}

/* ---- CTA Banner ---- */
.ev-cta-banner {
  background: linear-gradient(135deg, #1a2332, #2a3a4e);
  border-radius: 1.15rem;
  padding: 3rem 2.5rem;
  text-align: center;
  margin: 1.5rem 0;
  position: relative;
  overflow: hidden;
}

.ev-cta-banner::before {
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

.ev-cta-content {
  position: relative;
  z-index: 1;

  h3 {
    color: #fff;
    font-size: 1.6rem;
    font-weight: 800;
    margin: 0 0 0.6rem 0;
    padding: 0;
  }

  p {
    color: rgba(255,255,255,0.75);
    font-size: 1.05rem;
    margin: 0 0 1.5rem 0;
    padding: 0;
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
  }
}

.ev-cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.ev-cta-btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  border-radius: 0.6rem;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
}

.ev-cta-btn--primary {
  background: linear-gradient(135deg, #9f1319, #c0392b);
  color: #fff !important;
  box-shadow: 0 4px 14px rgba(159, 19, 25, 0.35);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(159, 19, 25, 0.45);
    text-decoration: none;
  }
}

.ev-cta-btn--outline {
  background: transparent;
  color: #fff !important;
  border: 1.5px solid rgba(255,255,255,0.35);

  &:hover {
    background: rgba(255,255,255,0.1);
    border-color: rgba(255,255,255,0.6);
    text-decoration: none;
  }
}

/* ---- Responsive ---- */
@media (max-width: 768px) {
  .ev-card {
    flex-direction: column;
  }

  .ev-card-date {
    flex-direction: row;
    gap: 0.5rem;
    min-width: auto;
    padding: 0.75rem 1rem;
  }

  .ev-card-day {
    font-size: 1.8rem;
  }

  .ev-past-grid {
    grid-template-columns: 1fr;
  }

  .ev-cta-banner {
    padding: 2rem 1.5rem;
  }
}
</style>

<script>
function submitRunForm() {
  setTimeout(function() {
    document.getElementById('run-form').style.display = 'none';
    document.getElementById('run-thank-you').style.display = 'block';
  }, 800);
}

function toggleSchool(val) {
  document.getElementById('school-group').style.display = val === 'Yes' ? 'block' : 'none';
}

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
