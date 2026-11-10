---
layout: splash
permalink: /padel-tournament/
title: ""
description: "LSVZ × MAPZ Padel Tournament Vol. 2 — live scores, groups, your matches and the knockout bracket. Saturday 14 November 2026, Unipadel Zurich."
---

{% include padel-tournament.html %}

<script>
// Highlight the current page in the site menu
document.addEventListener('DOMContentLoaded', function () {
  var path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.visible-links a').forEach(function (link) {
    var href = (link.getAttribute('href') || '').replace(/\/$/, '') || '/';
    if (href === path) link.classList.add('active');
  });
});
</script>
