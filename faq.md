---
layout: single
permalink: /faq/
title: Frequently Asked Questions
excerpt: "Find answers to common questions about MAPZ, membership, events, and community."
---

{% include faq-list.html %}

<style>
/* ============================================================
   FAQ PAGE — Modern Design
   ============================================================ */

/* ---- Intro ---- */
.fq-intro {
  text-align: center;
  font-size: 1.05rem;
  color: #5a5754;
  line-height: 1.7;
  margin: 0 auto 2rem;
  max-width: 600px;

  a {
    color: #9f1319;
    font-weight: 600;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
}

/* ---- Category Tabs ---- */
.fq-category-tabs {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1.5rem 0 1.5rem;
}

.fq-tab {
  padding: 0.45rem 1.1rem;
  border: 1.5px solid #dcd7c9;
  background: #fff;
  color: #2a2825;
  border-radius: 50px;
  cursor: pointer;
  font-size: 0.82rem;
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

/* ---- FAQ List ---- */
.fq-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin: 0 0 2rem;
}

/* ---- FAQ Item (details/summary) ---- */
.fq-item {
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

.fq-item summary {
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

.fq-item > p,
.fq-item .fq-answer-body {
  padding: 0.75rem 1.25rem 1rem;
  margin: 0;
  font-size: 0.9rem;
  color: #5a5754;
  line-height: 1.7;
}

.fq-answer-body p {
  margin: 0 0 0.5rem 0;
  padding: 0;
  font-size: 0.9rem;
  color: #5a5754;
  line-height: 1.7;

  &:last-child { margin-bottom: 0; }
}

.fq-item ul,
.fq-item ol {
  margin: 0.5rem 0;
  padding-left: 1.5rem;

  li {
    padding: 0.2rem 0;
    font-size: 0.9rem;
    color: #5a5754;
    line-height: 1.6;
  }
}

.fq-item a {
  color: #9f1319;
  font-weight: 600;
  text-decoration: none;
  &:hover { text-decoration: underline; }
}

.fq-item strong {
  color: #2a2825;
}

/* ---- Hidden items (filtered out) ---- */
.fq-item.fq-hidden {
  display: none;
}

/* ---- Responsive ---- */
@media (max-width: 768px) {
  .fq-category-tabs {
    gap: 0.35rem;
  }

  .fq-tab {
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }

  .fq-item summary {
    padding: 0.85rem 1rem;
    font-size: 0.9rem;
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
function showCategory(cat, btn) {
  // Update active tab
  document.querySelectorAll('.fq-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  // Filter FAQ items
  document.querySelectorAll('.fq-item').forEach(item => {
    if (cat === 'all' || item.dataset.cat === cat) {
      item.classList.remove('fq-hidden');
    } else {
      item.classList.add('fq-hidden');
      item.removeAttribute('open');
    }
  });
}
</script>
