---
layout: single
permalink: /events/
title: Events
excerpt: "Join us for networking, learning, and celebrating our community together!"
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
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  position: relative;

  &:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.12);
    transform: translateY(-3px);
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
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  border-top: 3px solid transparent;

  &:hover {
    box-shadow: 0 6px 24px rgba(0,0,0,0.10);
    transform: translateY(-2px);
    border-top-color: #caa64f;
  }

  .ev-past-icon {
    font-size: 2rem;
    margin-bottom: 0.75rem;
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
