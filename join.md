---
layout: single
permalink: /join/
title: Join MAPZ
excerpt: "Become part of a vibrant community of Moroccan students and professionals at ETH Zurich."
---

---

## Who Can Join?

<div class="jn-eligibility">
  <div class="jn-elig-card">
    <span class="jn-elig-icon">🎓</span>
    <h4>Current Students</h4>
    <p>Moroccan students at ETH Zurich — all levels and departments</p>
  </div>
  <div class="jn-elig-card">
    <span class="jn-elig-icon">🏛️</span>
    <h4>Alumni</h4>
    <p>Moroccan graduates of ETH Zurich around the world</p>
  </div>
  <div class="jn-elig-card">
    <span class="jn-elig-icon">🌍</span>
    <h4>Friends & Allies</h4>
    <p>Anyone interested in Moroccan culture and our community</p>
  </div>
</div>

---

## How to Join

<div class="jn-steps">
  <div class="jn-step">
    <div class="jn-step-num">1</div>
    <div class="jn-step-body">
      <h4>Fill Out the Form</h4>
      <p>Complete the membership form below with your basic information.</p>
    </div>
  </div>
  <div class="jn-step">
    <div class="jn-step-num">2</div>
    <div class="jn-step-body">
      <h4>Meet the Community</h4>
      <p>Attend our next event or meetup to meet fellow members.</p>
    </div>
  </div>
  <div class="jn-step">
    <div class="jn-step-num">3</div>
    <div class="jn-step-body">
      <h4>Get Connected</h4>
      <p>Join our WhatsApp group and stay updated on everything MAPZ.</p>
    </div>
  </div>
  <div class="jn-step">
    <div class="jn-step-num">4</div>
    <div class="jn-step-body">
      <h4>Start Growing</h4>
      <p>Participate in events, find a mentor, and grow with us!</p>
    </div>
  </div>
</div>

---

## Membership Form

<div class="mapz-form-wrapper">
  <form id="join-form" action="https://docs.google.com/forms/d/e/YOUR_JOIN_FORM_ID/formResponse" method="POST" target="hidden_iframe_join" onsubmit="joinFormSubmitted()">

    <div class="form-row">
      <div class="form-group">
        <label for="join-name">Full Name <span class="required">*</span></label>
        <input type="text" id="join-name" name="entry.XXXXXXX1" placeholder="e.g. Amine Alaoui" required>
      </div>
      <div class="form-group">
        <label for="join-email">Email Address <span class="required">*</span></label>
        <input type="email" id="join-email" name="entry.XXXXXXX2" placeholder="you@example.com" required>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label for="join-level">Study Level <span class="required">*</span></label>
        <select id="join-level" name="entry.XXXXXXX3" required>
          <option value="" disabled selected>Select your level…</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Master">Master</option>
          <option value="PhD">PhD</option>
          <option value="Postdoc">Postdoc</option>
          <option value="Alumni">Alumni</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div class="form-group">
        <label for="join-department">Department</label>
        <input type="text" id="join-department" name="entry.XXXXXXX4" placeholder="e.g. Computer Science">
      </div>
    </div>

    <div class="form-group">
      <label for="join-message">Anything you'd like to share?</label>
      <textarea id="join-message" name="entry.XXXXXXX5" rows="3" placeholder="Tell us what interests you about MAPZ…"></textarea>
    </div>

    <button type="submit" class="form-submit-btn">
      <span class="btn-text">Join MAPZ</span>
      <span class="btn-icon">→</span>
    </button>
  </form>

  <iframe name="hidden_iframe_join" id="hidden_iframe_join" style="display:none;" onload="if(joinSubmitted){showJoinThankYou();}"></iframe>

  <div id="join-thank-you" class="thank-you-message" style="display:none;">
    <div class="thank-you-icon">🎉</div>
    <h3>Welcome to MAPZ!</h3>
    <p>Your membership request has been received. We'll reach out to you soon!</p>
  </div>
</div>

<p class="jn-email-alt"><em>Having trouble? You can also email us directly at <a href="mailto:contact@mapz.ch">contact@mapz.ch</a>.</em></p>

---

## Frequently Asked Questions

<div class="jn-faq">
  <details class="jn-faq-item">
    <summary>Do I have to be Moroccan to join?</summary>
    <p>While MAPZ focuses on Moroccan students and alumni, we welcome anyone interested in our community and culture. Contact us to discuss!</p>
  </details>
  <details class="jn-faq-item">
    <summary>Is there a membership fee?</summary>
    <p>No! MAPZ is completely free to join. We rely on sponsorships and member contributions for our events.</p>
  </details>
  <details class="jn-faq-item">
    <summary>When do you meet?</summary>
    <p>We organize regular events throughout the year. Check our <a href="/events/">Events page</a> for the full schedule!</p>
  </details>
  <details class="jn-faq-item">
    <summary>Can I join as an alumnus?</summary>
    <p>Absolutely! Alumni are a crucial part of our community. We'd love to have you share your experience with current students.</p>
  </details>
  <details class="jn-faq-item">
    <summary>How active do I need to be?</summary>
    <p>Join us at whatever level works for you! Whether you attend one event a year or are actively involved, you're part of the community.</p>
  </details>
  <details class="jn-faq-item">
    <summary>What if I'm shy or new to ETH?</summary>
    <p>Many of our members felt the same way. Our community is built on support and inclusivity. Come to an event — you'll feel welcomed!</p>
  </details>
  <details class="jn-faq-item">
    <summary>Can I help organize events?</summary>
    <p>Yes! We're always looking for motivated members. Talk to the board about getting involved.</p>
  </details>
</div>

<style>
/* ============================================================
   JOIN PAGE — Modern Design
   ============================================================ */

/* ---- Intro ---- */
.jn-intro {
  text-align: center;
  font-size: 1.1rem;
  color: #5a5754;
  line-height: 1.8;
  margin: 0 auto 1rem;
  max-width: 680px;
}

.jn-email-alt {
  text-align: center;
  color: #888;
  font-size: 0.9rem;
}

/* ---- Eligibility Cards ---- */
.jn-eligibility {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin: 2rem 0;
}

.jn-elig-card {
  background: #fff;
  border-radius: 14px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  border-top: 3px solid #9f1319;

  &:hover {
    box-shadow: 0 6px 24px rgba(0,0,0,0.10);
    transform: translateY(-3px);
  }
}

.jn-elig-icon {
  font-size: 2.4rem;
  display: block;
  margin-bottom: 0.75rem;
}

.jn-elig-card h4 {
  font-size: 1.1rem;
  color: #2a2825;
  margin: 0 0 0.5rem 0;
  padding: 0;
  font-weight: 700;
}

.jn-elig-card p {
  font-size: 0.9rem;
  color: #5a5754;
  line-height: 1.5;
  margin: 0;
  padding: 0;
}

/* ---- Steps ---- */
.jn-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin: 2rem 0;
}

.jn-step {
  text-align: center;
  position: relative;
}

.jn-step-num {
  width: 48px;
  height: 48px;
  margin: 0 auto 1rem;
  background: linear-gradient(135deg, #9f1319, #c0392b);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 700;
  box-shadow: 0 3px 10px rgba(159, 19, 25, 0.3);
}

.jn-step-body {
  h4 {
    font-size: 1rem;
    color: #2a2825;
    margin: 0 0 0.4rem 0;
    padding: 0;
    font-weight: 700;
  }

  p {
    font-size: 0.85rem;
    color: #5a5754;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }
}

/* ---- FAQ Accordion ---- */
.jn-faq {
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.jn-faq-item {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  }

  &[open] {
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  }

  &[open] summary {
    color: #9f1319;
    border-bottom: 1px solid #f1efe7;
  }

  &[open] summary::after {
    transform: rotate(180deg);
  }
}

.jn-faq-item summary {
  padding: 1rem 1.25rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #2a2825;
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: color 0.2s ease;

  &::-webkit-details-marker {
    display: none;
  }

  &::after {
    content: "▾";
    font-size: 1rem;
    color: #9f1319;
    transition: transform 0.25s ease;
    flex-shrink: 0;
    margin-left: 1rem;
  }
}

.jn-faq-item p {
  padding: 0 1.25rem 1rem;
  margin: 0;
  font-size: 0.9rem;
  color: #5a5754;
  line-height: 1.6;
}

/* ---- Responsive ---- */
@media (max-width: 768px) {
  .jn-eligibility {
    grid-template-columns: 1fr;
  }

  .jn-steps {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .jn-steps {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
var joinSubmitted = false;

function joinFormSubmitted() {
  joinSubmitted = true;
}

function showJoinThankYou() {
  document.getElementById('join-form').style.display = 'none';
  document.getElementById('join-thank-you').style.display = 'block';
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
