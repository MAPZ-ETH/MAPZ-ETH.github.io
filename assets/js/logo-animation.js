// ============================================================================
// MAPZ Logo Story — Scroll Reveal
// ============================================================================
// Simple IntersectionObserver-based scroll reveal for the logo story parts.
// Each .logo-story-reveal element fades and slides in when it enters the viewport.

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const reveals = document.querySelectorAll('.logo-story-reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -60px 0px'
    });

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  });
})();
