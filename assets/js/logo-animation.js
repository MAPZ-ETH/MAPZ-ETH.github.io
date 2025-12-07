// ============================================================================
// MAPZ Logo Scroll Animation
// ============================================================================
// Scroll-triggered animation that deconstructs the MAPZ logo into its parts
// with explanations for each symbol

(function() {
  // Check if GSAP and ScrollTrigger are loaded
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP or ScrollTrigger not loaded. Logo animation skipped.');
    return;
  }

  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('.logo-animation-section');
    if (!section) return;

    // Get logo part containers and load actual SVG files
    const mapPart = section.querySelector('[data-part="map"]');
    const ethPart = section.querySelector('[data-part="eth"]');
    const starsPart = section.querySelector('[data-part="stars"]');
    const text1Part = section.querySelector('[data-part="text-1"]');
    const text2Part = section.querySelector('[data-part="text-2"]');

    if (mapPart) {
      const img = document.createElement('img');
      img.src = '/logoSVG/map.svg';
      img.style.width = '100%';
      img.style.height = '100%';
      mapPart.appendChild(img);
    }

    if (ethPart) {
      const img = document.createElement('img');
      img.src = '/logoSVG/eth.svg';
      img.style.width = '100%';
      img.style.height = '100%';
      ethPart.appendChild(img);
    }

    if (starsPart) {
      const img = document.createElement('img');
      img.src = '/logoSVG/stars.svg';
      img.style.width = '100%';
      img.style.height = '100%';
      starsPart.appendChild(img);
    }

    if (text1Part) {
      const img = document.createElement('img');
      img.src = '/logoSVG/text-1.svg';
      img.style.width = '100%';
      img.style.height = '100%';
      text1Part.appendChild(img);
    }

    if (text2Part) {
      const img = document.createElement('img');
      img.src = '/logoSVG/text-2.svg';
      img.style.width = '100%';
      img.style.height = '100%';
      text2Part.appendChild(img);
    }

    // Set initial state - all parts visible at center
    gsap.set('[data-part="map"], [data-part="eth"], [data-part="stars"], [data-part="text-1"], [data-part="text-2"]', {
      opacity: 1,
      x: 0,
      y: 0,
    });

    // Animation timeline - spread parts apart on scroll
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'center 60%',
        end: 'bottom 60%',
        scrub: 1,
        markers: false,
      }
    });

    // Animate ETH part - spread right and up
    timeline
      .to('[data-part="eth"]', {
        x: 400,
        y: 200,
        duration: 1,
        scale: 0.7,

      }, 0)
      .to('[data-explanation="eth"]', {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, 0.2);

    // Animate MAP part - spread left and up
    timeline
      .to('[data-part="map"]', {
        x: -400,
        y: 400,
        duration: 1,
        scale: 0.7,
      }, 0)
      .to('[data-explanation="map"]', {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, 0.2);

    // Animate TEXT-1 part - spread left and down, scale down 50%
    timeline
      .to('[data-part="text-1"]', {
        x: 400,
        y: 700,
        scale: 0.6,
        duration: 1,
      }, 0);

    // Animate TEXT-2 part - spread right and down, scale down 50%
    timeline
      .to('[data-part="text-2"]', {
        x: 400,
        y: 700,
        scale: 0.6,
        duration: 1,
      }, 0);
    // Animate STARS part - fade out and spread down and right
    timeline
      .to('[data-part="stars"]', {
        opacity: 1,
        x: 400,
        y: 700,
        scale: 0.6,
        duration: 1,
      }, 0)
      .to('[data-explanation="stars"]', {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, 0.2);
    // Update explanation visibility on scroll
    ScrollTrigger.addEventListener('update', (self) => {
      const progress = self.getVelocity() >= 0 ? self.progress : self.progress;
      
      // Determine which explanation to highlight based on scroll progress
      const explanations = section.querySelectorAll('.logo-explanation');
      explanations.forEach(exp => exp.classList.remove('active'));

      if (progress < 0.4) {
        section.querySelector('[data-explanation="map"]')?.classList.add('active');
      } else if (progress < 0.7) {
        section.querySelector('[data-explanation="eth"]')?.classList.add('active');
      } else {
        section.querySelector('[data-explanation="stars"]')?.classList.add('active');
      }
    });
  });
})();
