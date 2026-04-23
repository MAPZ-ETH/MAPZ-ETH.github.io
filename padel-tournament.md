---
layout: single
permalink: /padel-tournament/
title: ""
---

{% include padel-tournament.html %}

<style>
/* ============================================================
   PADEL TOURNAMENT — Premium Design
   ============================================================ */

/* ─── Decorative Background ─── */
.pt-bg-wrapper {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #dce8f5 0%, #e8eff8 30%, #f0f4fa 60%, #f5f4f0 100%);
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 2rem 2rem 2rem;
  min-height: 100vh;
}

.pt-deco {
  position: absolute;
  pointer-events: none;
  user-select: none;
  z-index: 0;
}

/* Clouds — soft, scattered, different sizes and rotations */
.pt-cloud {
  opacity: 0.35;
  width: 280px;
  animation: pt-float 20s ease-in-out infinite;
}

.pt-cloud-1 {
  top: 2%;
  left: -3%;
  width: 320px;
  transform: rotate(-5deg);
  animation-delay: 0s;
  opacity: 0.5;
}

.pt-cloud-2 {
  top: 8%;
  right: -5%;
  width: 380px;
  transform: rotate(8deg) scaleX(-1);
  animation-delay: -4s;
  opacity: 0.45;
}

.pt-cloud-3 {
  top: 35%;
  left: 10%;
  width: 220px;
  transform: rotate(3deg);
  animation-delay: -8s;
  opacity: 0.35;
}

.pt-cloud-4 {
  top: 60%;
  right: 5%;
  width: 260px;
  transform: rotate(-8deg) scaleX(-1);
  animation-delay: -12s;
  opacity: 0.3;
}

.pt-cloud-5 {
  top: 85%;
  left: 25%;
  width: 300px;
  transform: rotate(5deg);
  animation-delay: -16s;
  opacity: 0.28;
}

@keyframes pt-float {
  0%, 100% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-12px) translateX(6px); }
  50% { transform: translateY(-5px) translateX(-4px); }
  75% { transform: translateY(-15px) translateX(8px); }
}

/* Tennis balls — blurry, scattered, subtle spin */
.pt-ball {
  opacity: 0.18;
  filter: blur(3px);
  animation: pt-spin 40s linear infinite;
}

.pt-ball-1 {
  width: 100px;
  top: 5%;
  right: 12%;
  filter: blur(2px);
  opacity: 0.32;
  animation-duration: 35s;
}

.pt-ball-2 {
  width: 70px;
  top: 25%;
  left: 3%;
  filter: blur(3px);
  opacity: 0.25;
  animation-duration: 50s;
  animation-direction: reverse;
}

.pt-ball-3 {
  width: 85px;
  top: 50%;
  right: 4%;
  filter: blur(2px);
  opacity: 0.3;
  animation-duration: 45s;
}

.pt-ball-4 {
  width: 55px;
  top: 70%;
  left: 15%;
  filter: blur(3px);
  opacity: 0.22;
  animation-duration: 55s;
  animation-direction: reverse;
}

.pt-ball-5 {
  width: 90px;
  top: 90%;
  right: 20%;
  filter: blur(2px);
  opacity: 0.28;
  animation-duration: 42s;
}

@keyframes pt-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* ─── Container ─── */
.pt-container {
  position: relative;
  z-index: 1;
  max-width: 100%;
  margin: 0;
  padding: 0 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

/* ─── Hero ─── */
.pt-hero {
  text-align: center;
  padding: 2rem 1rem 1.5rem;
  margin-bottom: 0.5rem;
}

.pt-hero-badge {
  display: inline-block;
  background: linear-gradient(135deg, #5781a7, #3d6a91);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  padding: 5px 16px;
  border-radius: 50px;
  margin-bottom: 0.75rem;
  animation: pt-pulse 2s ease-in-out infinite;
}

@keyframes pt-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(87,129,167,0.4); }
  50% { box-shadow: 0 0 0 8px rgba(87,129,167,0); }
}

.pt-hero-title {
  font-size: 2rem;
  font-weight: 800;
  color: #2a2825;
  margin: 0 0 0.3rem;
  padding: 0;
}

.pt-hero-subtitle {
  font-size: 1rem;
  color: #888;
  margin: 0 0 0.75rem;
  font-weight: 500;
}

.pt-hero-meta {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 0.88rem;
  color: #666;
}

/* ─── Tab Navigation ─── */
.pt-tabs {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 0 0 1.5rem;
  padding: 0.35rem;
  background: rgba(0,0,0,0.04);
  border-radius: 14px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.pt-tab {
  flex: 1;
  padding: 0.65rem 1rem;
  border: none;
  background: transparent;
  border-radius: 10px;
  font-size: 0.88rem;
  font-weight: 600;
  color: #666;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
}

.pt-tab:hover {
  color: #2a2825;
  background: rgba(255,255,255,0.5);
}

.pt-tab.active {
  background: #fff;
  color: #5781a7;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.pt-tab-icon {
  font-size: 1rem;
}

/* ─── Panels ─── */
.pt-panel {
  display: none;
  animation: pt-fadeIn 0.3s ease;
}

.pt-panel.active {
  display: block;
}

@keyframes pt-fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ─── Groups Grid ─── */
.pt-groups-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

@media (max-width: 900px) {
  .pt-groups-grid { grid-template-columns: 1fr; }
}

/* ─── Group Card ─── */
.pt-group-card {
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  border: 1px solid rgba(87,129,167,0.12);
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}

.pt-group-card:hover {
  box-shadow: 0 6px 24px rgba(87,129,167,0.15);
  transform: translateY(-2px);
}

.pt-group-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, #3d6a91, #5781a7);
  color: #fff;
}

.pt-group-letter {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.2);
  border-radius: 8px;
  font-weight: 800;
  font-size: 1.1rem;
}

.pt-group-label {
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
}

/* ─── Standings Table ─── */
.pt-standings-table {
  width: 100% !important;
  border-collapse: collapse;
  margin: 0 !important;
  padding: 0 !important;
  font-size: 0.85rem;
}

.pt-standings-table thead tr {
  background: #f8f7f3;
  border-bottom: 2px solid #eee;
}

.pt-standings-table th {
  padding: 0.5rem 0.4rem;
  font-weight: 700;
  color: #999;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 0.5px;
}

.pt-th-pos { width: 30px; text-align: center; }
.pt-th-team { text-align: left; width: auto; }
.pt-th-stat { text-align: center; }

.pt-standings-table tbody tr {
  border-bottom: 1px solid #f0efe8;
  transition: background 0.15s ease;
}

.pt-standings-table tbody tr:hover {
  background: #faf9f4;
}

.pt-standings-table tbody tr.pt-qualifier {
  background: rgba(153,187,226,0.1);
}

.pt-standings-table tbody tr.pt-qualifier:first-child {
  background: rgba(153,187,226,0.18);
}

.pt-pos {
  text-align: center;
  font-weight: 700;
  color: #bbb;
  padding: 0.55rem 0.4rem;
}

.pt-qualifier .pt-pos {
  color: #5781a7;
}

.pt-team-name {
  padding: 0.55rem 0.4rem;
  font-weight: 600;
  color: #2a2825;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pt-stat {
  text-align: center;
  padding: 0.55rem 0.3rem;
  color: #555;
  font-variant-numeric: tabular-nums;
}

/* ─── Group Matches ─── */
.pt-group-matches {
  padding: 0.5rem 0.75rem 0.75rem;
  border-top: 1px solid #f0efe8;
}

.pt-matches-label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #bbb;
  margin-bottom: 0.4rem;
  padding: 0 0.25rem;
}

.pt-match-row {
  display: grid;
  grid-template-columns: 38px 1fr 40px 1fr;
  align-items: center;
  gap: 0.3rem;
  padding: 0.35rem 0.5rem;
  border-radius: 6px;
  font-size: 0.78rem;
  transition: background 0.15s;
}

.pt-match-row:hover {
  background: #faf9f4;
}

.pt-match-done {
  background: rgba(211,218,89,0.1);
}

.pt-match-time {
  font-size: 0.7rem;
  color: #aaa;
  font-variant-numeric: tabular-nums;
  display: flex;
  align-items: center;
  gap: 4px;
}

.pt-live-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #d3da59;
  display: inline-block;
  animation: pt-blink 1.2s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes pt-blink {
  0%, 100% { opacity: 1; box-shadow: 0 0 4px 1px rgba(211,218,89,1); }
  50% { opacity: 1; box-shadow: 0 0 8px 3px rgba(211,218,89,1); }
}

.pt-match-team {
  font-weight: 500;
  color: #444;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: right;
}

.pt-match-team:last-of-type {
  text-align: left;
}

.pt-match-score {
  text-align: center;
  font-weight: 600;
  color: #5781a7;
}

.pt-match-score em {
  color: #ccc;
  font-weight: 400;
}



/* ─── Schedule ─── */
.pt-section-title {
  font-size: 1.3rem;
  font-weight: 800;
  color: #2a2825;
  margin: 0 0 1rem;
  padding: 0 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.pt-time-badge {
  font-size: 0.75rem;
  font-weight: 600;
  color: #000;
  background: linear-gradient(135deg, #d3da59, #c5cc4a);
  padding: 3px 12px;
  border-radius: 50px;
}

.pt-schedule-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.pt-timeslot {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  border: 1px solid rgba(0,0,0,0.06);
}

.pt-timeslot-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 1rem;
  background: #f8f7f3;
  border-bottom: 1px solid #eee;
}

.pt-timeslot-time {
  font-weight: 700;
  font-size: 1rem;
  color: #5781a7;
  font-variant-numeric: tabular-nums;
}

.pt-timeslot-round {
  font-size: 0.78rem;
  color: #888;
  font-weight: 500;
}

.pt-courts-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}

@media (max-width: 700px) {
  .pt-courts-row { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 420px) {
  .pt-courts-row { grid-template-columns: 1fr; }
}

.pt-court-card {
  padding: 0.65rem 0.75rem;
  border-right: 1px solid #f0efe8;
  text-align: center;
  transition: background 0.15s;
}

.pt-court-card:last-child {
  border-right: none;
}

.pt-court-card:hover {
  background: #faf9f4;
}

.pt-court-done {
  background: rgba(211,218,89,0.08);
}

.pt-court-badge {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #5781a7;
  margin-bottom: 0.2rem;
}

.pt-court-group {
  font-size: 0.68rem;
  color: #aaa;
  margin-bottom: 0.25rem;
}

.pt-court-matchup {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: #2a2825;
}

.pt-court-score {
  font-weight: 700;
  color: #5781a7;
  font-size: 0.85rem;
}

.pt-court-ko {
  border-left: 3px solid #d3da59;
}

/* ─── Bracket ─── */
.pt-bracket-scroll {
  overflow-x: auto;
  padding: 1rem 0 2rem;
  -webkit-overflow-scrolling: touch;
}

.pt-bracket {
  display: flex;
  gap: 1.5rem;
  min-width: 900px;
  align-items: flex-start;
  padding: 0 0.5rem;
}

.pt-bracket-round {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 200px;
  flex: 1;
}

.pt-round-title {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #999;
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #eee;
  margin-bottom: 0.25rem;
}

.pt-bracket-final .pt-round-title {
  color: #d3da59;
  border-bottom-color: #d3da59;
}

.pt-bracket-match {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  border: 1px solid rgba(0,0,0,0.06);
  transition: box-shadow 0.2s, transform 0.2s;
}

.pt-bracket-match:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  transform: translateY(-1px);
}

.pt-bracket-match-final {
  border: 2px solid #d3da59;
  box-shadow: 0 4px 20px rgba(211,218,89,0.2);
}

.pt-bm-pair {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.65rem;
  font-size: 0.8rem;
  border-bottom: 1px solid #f5f4ef;
  transition: background 0.15s;
}

.pt-bm-pair:last-child {
  border-bottom: none;
}

.pt-bm-winner {
  background: rgba(87,129,167,0.1);
}

.pt-bm-winner .pt-bm-name {
  font-weight: 700;
  color: #3d6a91;
}

.pt-bm-champion {
  background: linear-gradient(135deg, rgba(211,218,89,0.2), rgba(211,218,89,0.08));
}

.pt-bm-champion .pt-bm-name {
  color: #5a6020;
}

.pt-bm-name {
  font-weight: 500;
  color: #2a2825;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
}

.pt-bm-score {
  font-weight: 700;
  color: #5781a7;
  font-variant-numeric: tabular-nums;
  min-width: 20px;
  text-align: right;
}

/* Space bracket matches for visual alignment */
.pt-bracket-round:nth-child(2) .pt-bracket-match {
  margin-top: calc(0.75rem + 0.375rem);
}

.pt-bracket-round:nth-child(2) .pt-bracket-match + .pt-bracket-match {
  margin-top: calc(0.75rem * 2 + 0.75rem);
}

.pt-bracket-round:nth-child(3) .pt-bracket-match:first-of-type {
  margin-top: calc(0.75rem * 3 + 1.5rem);
}

.pt-bracket-round:nth-child(3) .pt-bracket-match + .pt-bracket-match {
  margin-top: calc(0.75rem * 6 + 3rem);
}

.pt-bracket-round:nth-child(4) .pt-bracket-match:first-of-type {
  margin-top: calc(0.75rem * 7 + 6rem);
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .pt-container { padding: 0 1rem; }
  .pt-hero-title { font-size: 1.5rem; }
  .pt-groups-grid { grid-template-columns: 1fr; }
  .pt-bracket { min-width: 700px; }
  .pt-team-name { max-width: 120px; }
}

@media (max-width: 480px) {
  .pt-tabs { max-width: 100%; }
  .pt-tab { font-size: 0.78rem; padding: 0.55rem 0.5rem; }
  .pt-hero-meta { flex-direction: column; gap: 0.3rem; }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // ─── Tab switching ───
  const tabs = document.querySelectorAll('.pt-tab');
  const panels = document.querySelectorAll('.pt-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById('panel-' + tab.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  // ─── Live match indicator ───
  // Add blinking dot to matches happening right now
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  document.querySelectorAll('.pt-match-time').forEach(timeEl => {
    const timeText = timeEl.textContent.trim();
    const timeParts = timeText.match(/^(\d{1,2}):(\d{2})$/);
    if (!timeParts) return;

    const matchMinutes = parseInt(timeParts[1]) * 60 + parseInt(timeParts[2]);
    // Match is "live" if current time is within 0-19 minutes after start
    // and the match has no score yet (not completed)
    const matchRow = timeEl.closest('.pt-match-row');
    const isCompleted = matchRow && matchRow.dataset.s1 && matchRow.dataset.s2;

    if (currentMinutes >= matchMinutes && currentMinutes < matchMinutes + 20 && !isCompleted) {
      const dot = document.createElement('span');
      dot.className = 'pt-live-dot';
      timeEl.prepend(dot);
      if (matchRow) matchRow.style.background = 'rgba(211,218,89,0.2)';
    }
  });

  // Also mark live timeslots in the schedule tab
  document.querySelectorAll('.pt-timeslot-time').forEach(timeEl => {
    const timeText = timeEl.textContent.trim();
    const timeParts = timeText.match(/^(\d{1,2}):(\d{2})$/);
    if (!timeParts) return;

    const matchMinutes = parseInt(timeParts[1]) * 60 + parseInt(timeParts[2]);
    if (currentMinutes >= matchMinutes && currentMinutes < matchMinutes + 20) {
      const dot = document.createElement('span');
      dot.className = 'pt-live-dot';
      dot.style.width = '9px';
      dot.style.height = '9px';
      dot.style.marginRight = '6px';
      timeEl.prepend(dot);
      timeEl.style.display = 'flex';
      timeEl.style.alignItems = 'center';
    }
  });

  // ─── Calculate group standings ───
  const groupData = {};

  // Parse all match rows for scores
  document.querySelectorAll('.pt-match-row').forEach(row => {
    const group = row.dataset.group;
    const p1 = parseInt(row.dataset.p1);
    const p2 = parseInt(row.dataset.p2);
    const s1 = row.dataset.s1;
    const s2 = row.dataset.s2;

    if (!groupData[group]) groupData[group] = {};

    if (s1 !== '' && s2 !== '' && s1 !== undefined && s2 !== undefined) {
      const score1 = parseInt(s1);
      const score2 = parseInt(s2);

      if (!groupData[group][p1]) groupData[group][p1] = { mp: 0, wins: 0, losses: 0, gw: 0, gl: 0, h2h: {} };
      if (!groupData[group][p2]) groupData[group][p2] = { mp: 0, wins: 0, losses: 0, gw: 0, gl: 0, h2h: {} };

      groupData[group][p1].mp++;
      groupData[group][p2].mp++;

      groupData[group][p1].gw += score1;
      groupData[group][p1].gl += score2;
      groupData[group][p2].gw += score2;
      groupData[group][p2].gl += score1;

      if (score1 > score2) {
        groupData[group][p1].wins++;
        groupData[group][p2].losses++;
        groupData[group][p1].h2h[p2] = 1;   // p1 beat p2
        groupData[group][p2].h2h[p1] = -1;  // p2 lost to p1
      } else if (score2 > score1) {
        groupData[group][p2].wins++;
        groupData[group][p1].losses++;
        groupData[group][p2].h2h[p1] = 1;   // p2 beat p1
        groupData[group][p1].h2h[p2] = -1;  // p1 lost to p2
      } else {
        groupData[group][p1].h2h[p2] = 0;   // draw
        groupData[group][p2].h2h[p1] = 0;
      }
    }
  });

  // Update standings tables
  Object.keys(groupData).forEach(group => {
    const tbody = document.getElementById('standings-' + group);
    if (!tbody) return;

    const rows = Array.from(tbody.querySelectorAll('tr'));
    const stats = groupData[group];

    // Update stats in existing rows
    rows.forEach(row => {
      const seed = parseInt(row.dataset.seed);
      const s = stats[seed] || { mp: 0, wins: 0, losses: 0, gw: 0, gl: 0, h2h: {} };
      const cells = row.querySelectorAll('.pt-stat');
      if (cells.length >= 5) {
        cells[0].textContent = s.mp;
        cells[1].textContent = s.wins;
        cells[2].textContent = s.losses;
        cells[3].textContent = s.gw - s.gl;
        cells[4].textContent = s.gw;
      }
    });

    // Sort: wins desc → GD desc → GW desc → head-to-head winner
    rows.sort((a, b) => {
      const seedA = parseInt(a.dataset.seed);
      const seedB = parseInt(b.dataset.seed);
      const sa = stats[seedA] || { wins: 0, gw: 0, gl: 0, h2h: {} };
      const sb = stats[seedB] || { wins: 0, gw: 0, gl: 0, h2h: {} };
      if (sb.wins !== sa.wins) return sb.wins - sa.wins;
      const gdA = sa.gw - sa.gl, gdB = sb.gw - sb.gl;
      if (gdB !== gdA) return gdB - gdA;
      if (sb.gw !== sa.gw) return sb.gw - sa.gw;
      // Head-to-head: if A beat B, A ranks higher
      const h2h = (sa.h2h && sa.h2h[seedB]) || 0;
      return -h2h; // h2h=1 means A won → -1 → A before B
    });

    // Re-append sorted and update position
    rows.forEach((row, idx) => {
      row.querySelector('.pt-pos').textContent = idx + 1;
      row.classList.toggle('pt-qualifier', idx < 2);
      tbody.appendChild(row);
    });
  });

  // ─── Resolve knockout bracket names ───
  // Check if all matches in a group are completed (all 6 have scores)
  function isGroupComplete(groupLetter) {
    const matches = document.querySelectorAll('.pt-match-row[data-group="' + groupLetter + '"]');
    if (matches.length === 0) return false;
    let completed = 0;
    matches.forEach(m => {
      if (m.dataset.s1 !== '' && m.dataset.s2 !== '' && m.dataset.s1 !== undefined && m.dataset.s2 !== undefined) {
        completed++;
      }
    });
    return completed === matches.length;
  }

  function getGroupStandings(groupLetter) {
    const tbody = document.getElementById('standings-' + groupLetter);
    if (!tbody) return [null, null];
    const rows = tbody.querySelectorAll('tr');
    const result = [];
    rows.forEach(r => {
      result.push(r.querySelector('.pt-team-name').textContent.trim());
    });
    return result;
  }

  function resolveKnockoutName(from) {
    if (!from) return from;
    // e.g. "1A" => 1st of group A, "2H" => 2nd of group H
    const posMatch = from.match(/^(\d)([A-H])$/);
    if (posMatch) {
      const pos = parseInt(posMatch[1]) - 1;
      const group = posMatch[2];
      // Only resolve if all group matches are completed
      if (!isGroupComplete(group)) {
        const ordinal = pos === 0 ? '1st' : '2nd';
        return ordinal + ' Group ' + group;
      }
      const standings = getGroupStandings(group);
      return standings[pos] || from;
    }
    // e.g. "W-R16-1" => winner of R16-1
    const winnerMatch = from.match(/^W-(.+)$/);
    if (winnerMatch) {
      const matchId = winnerMatch[1];
      const matchEl = document.querySelector('[data-match-id="' + matchId + '"]');
      if (matchEl) {
        const pairs = matchEl.querySelectorAll('.pt-bm-pair');
        const winner = matchEl.querySelector('.pt-bm-winner');
        if (winner) {
          return winner.querySelector('.pt-bm-name').textContent.trim();
        }
      }
      return 'TBD';
    }
    return from;
  }

  // ─── Multi-set knockout scoring ───
  // Determine knockout match winner from comma-separated set scores
  // e.g. score1="6,6" score2="1,3" → Team 1 wins (won both sets)
  // e.g. score1="6,3" score2="4,6" → 1-1 sets, compare total games
  function getKnockoutWinner(s1Str, s2Str) {
    if (!s1Str || !s2Str) return 0; // no scores yet
    const s1 = s1Str.toString().split(',').map(Number);
    const s2 = s2Str.toString().split(',').map(Number);
    const numSets = Math.min(s1.length, s2.length);

    let setsWon1 = 0, setsWon2 = 0, totalGames1 = 0, totalGames2 = 0;
    for (let i = 0; i < numSets; i++) {
      totalGames1 += s1[i];
      totalGames2 += s2[i];
      if (s1[i] > s2[i]) setsWon1++;
      else if (s2[i] > s1[i]) setsWon2++;
    }

    if (setsWon1 > setsWon2) return 1;
    if (setsWon2 > setsWon1) return -1;
    // Tied sets → total games
    if (totalGames1 > totalGames2) return 1;
    if (totalGames2 > totalGames1) return -1;
    return 0;
  }

  // Format set scores for display: "6-1  6-3" or just "6-4"
  function formatSetScores(sStr, oppStr) {
    if (!sStr || !oppStr) return '';
    const s = sStr.toString().split(',');
    const o = oppStr.toString().split(',');
    const parts = [];
    for (let i = 0; i < Math.min(s.length, o.length); i++) {
      parts.push(s[i] + '-' + o[i]);
    }
    return parts.join('  ');
  }

  // Process all bracket matches: set scores, determine winner, apply classes
  document.querySelectorAll('.pt-bracket-match').forEach(matchEl => {
    const s1 = matchEl.dataset.s1;
    const s2 = matchEl.dataset.s2;
    const pairs = matchEl.querySelectorAll('.pt-bm-pair');
    if (!pairs[0] || !pairs[1]) return;

    if (s1 && s2) {
      // Display formatted scores
      pairs[0].querySelector('.pt-bm-score').textContent = formatSetScores(s1, s2);
      pairs[1].querySelector('.pt-bm-score').textContent = formatSetScores(s2, s1);

      const winner = getKnockoutWinner(s1, s2);
      const isFinal = matchEl.classList.contains('pt-bracket-match-final');
      if (winner === 1) {
        pairs[0].classList.add('pt-bm-winner');
        if (isFinal) pairs[0].classList.add('pt-bm-champion');
      } else if (winner === -1) {
        pairs[1].classList.add('pt-bm-winner');
        if (isFinal) pairs[1].classList.add('pt-bm-champion');
      }
    }
  });

  // Resolve all bracket pair names
  document.querySelectorAll('.pt-bm-pair[data-from]').forEach(el => {
    const from = el.dataset.from;
    const resolved = resolveKnockoutName(from);
    el.querySelector('.pt-bm-name').textContent = resolved;
  });

  // Resolve schedule knockout pair names
  document.querySelectorAll('.ko-pair[data-from]').forEach(el => {
    const from = el.dataset.from;
    const resolved = resolveKnockoutName(from);
    el.textContent = resolved;
  });

  // ─── Active nav highlighting ───
  let currentPath = window.location.pathname;
  if (currentPath !== '/' && currentPath.endsWith('/')) {
    currentPath = currentPath.slice(0, -1);
  }
  document.querySelectorAll('.visible-links a').forEach(link => {
    let href = link.getAttribute('href');
    if (!href) return;
    if (href !== '/' && href.endsWith('/')) href = href.slice(0, -1);
    if (currentPath === href) link.classList.add('active');
  });
});
</script>
