/*
 * /padel-tournament/ — mobile-first page (Live · Groups · My matches · Bracket).
 * Data: <script id="pt-data"> (from _data/padel_tournament.yml at build time).
 * Logic shared with /score-entry/: assets/js/padel-core.js.
 *
 * Preview another moment: add ?now=16:47 (tournament day at 16:47) or ?now=before / ?now=after.
 */
(function () {
  'use strict';

  var TOURNAMENT_DAY = '2026-11-14';
  var KO_MINUTES = { r16: 30, qf: 30, sf: 30, final: 45 };
  var GROUP_MINUTES = 20;
  var STAGE_LABEL = { r16: 'Round of 16', qf: 'Quarter-finals', sf: 'Semi-finals', final: 'Final' };
  var TABS = ['live', 'groups', 'mine', 'bracket'];
  var TAB_TITLE = { groups: 'GROUPS', mine: 'MY MATCHES', bracket: 'KNOCKOUT' };
  var REFRESH_MS = 120000;

  var C = window.PadelCore;
  var app = document.getElementById('padel-app');
  if (!app) return;
  var T;
  try { T = JSON.parse(document.getElementById('pt-data').textContent); } catch (e) { T = null; }
  if (!C || !T || !T.groups) {
    document.getElementById('pd-panel-live').innerHTML = '<p class="pd-note" style="margin-top:20px">Scores could not be loaded. Please refresh the page.</p>';
    return;
  }

  // ─── Helpers ───
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s === undefined || s === null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function mins(t) { var p = String(t || '').split(':'); return p.length === 2 ? parseInt(p[0], 10) * 60 + parseInt(p[1], 10) : 0; }
  function hhmm(m) { return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'); }
  function fold(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim(); }
  function store(key, val) {
    try { if (val === undefined) return localStorage.getItem(key); localStorage.setItem(key, val); } catch (e) { return null; }
    return null;
  }
  function isPlaceholder(name) { return /^(TBD|1st Group|2nd Group)/.test(name || ''); }

  // ─── Time ───
  function getNow() {
    var param = new URLSearchParams(location.search).get('now');
    if (param === 'before') return { day: 'before', min: 0 };
    if (param === 'after') return { day: 'after', min: 24 * 60 };
    if (param && /^\d{1,2}:\d{2}$/.test(param)) return { day: 'today', min: mins(param), simulated: true };
    var d = new Date();
    var today = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    if (today < TOURNAMENT_DAY) return { day: 'before', min: 0 };
    if (today > TOURNAMENT_DAY) return { day: 'after', min: 24 * 60 };
    return { day: 'today', min: d.getHours() * 60 + d.getMinutes() };
  }
  var NOW = getNow();

  // ─── Model ───
  var GROUP_KEYS = Object.keys(T.groups).sort();
  var BR = C.bracket(T);

  function stateOf(m) {
    if (m.done) return 'done';
    if (NOW.day === 'after') return 'late';
    if (NOW.day !== 'today') return 'next';
    if (NOW.min >= m.start + m.dur) return 'late';      // should be over, score not entered yet
    if (NOW.min >= m.start) return 'live';
    return 'next';
  }

  var MATCHES = [];
  GROUP_KEYS.forEach(function (g) {
    var grp = T.groups[g], names = {};
    (grp.pairs || []).forEach(function (p) { names[p.seed] = p.name; });
    (grp.matches || []).forEach(function (m, i) {
      var played = C.isGroupMatchPlayed(m);
      var s1 = played ? C.groupScore(m.score1) : null, s2 = played ? C.groupScore(m.score2) : null;
      MATCHES.push({
        kind: 'group', group: g, key: g + i, time: m.time, start: mins(m.time), dur: GROUP_MINUTES, court: m.court,
        p1: names[m.pair1] || '?', p2: names[m.pair2] || '?', done: played,
        sc1: played ? String(s1) : '', sc2: played ? String(s2) : '',
        win: played ? (s1 > s2 ? 1 : s2 > s1 ? -1 : 0) : 0
      });
    });
  });
  C.KO_STAGES.forEach(function (st) {
    ((T.knockout || {})[st] || []).forEach(function (m) {
      var info = BR.matches[m.id] || { name1: 'TBD', name2: 'TBD', winner: 0 };
      var a = C.parseSets(m.score1), b = C.parseSets(m.score2);
      var played = !!(a && b) && info.winner !== 0;
      MATCHES.push({
        kind: 'ko', stage: st, id: m.id, key: m.id, time: m.time, start: mins(m.time), dur: KO_MINUTES[st] || 30, court: m.court,
        p1: info.name1, p2: info.name2, done: played,
        sc1: played ? a.join(' ') : '', sc2: played ? b.join(' ') : '', win: played ? info.winner : 0
      });
    });
  });
  MATCHES.forEach(function (m) { m.state = stateOf(m); });
  MATCHES.sort(function (a, b) { return (a.start - b.start) || (a.court - b.court); });

  var GROUP_MATCHES = MATCHES.filter(function (m) { return m.kind === 'group'; });
  var groupsDone = GROUP_MATCHES.filter(function (m) { return m.done; }).length;
  var finalMatch = MATCHES.filter(function (m) { return m.kind === 'ko' && m.stage === 'final'; })[0];
  var champion = finalMatch && finalMatch.done ? (finalMatch.win === 1 ? finalMatch.p1 : finalMatch.p2) : null;
  var anyLive = MATCHES.some(function (m) { return m.state === 'live'; });

  // ─── Small render helpers ───
  function tag(m) { return m.kind === 'group' ? 'Group ' + m.group : m.id; }
  function badge(m) {
    if (m.state === 'done') return '<span class="pd-badge done pd-num">' + esc(m.sc1) + '–' + esc(m.sc2) + '</span>';
    if (m.state === 'live') return '<span class="pd-badge live">LIVE</span>';
    if (m.state === 'late') return '<span class="pd-badge late">score soon</span>';
    return '<span class="pd-badge next">vs</span>';
  }
  function sideCls(m, side) {
    if (!m.done || !m.win) return '';
    return (m.win === 1) === (side === 1) ? 'pd-win' : 'pd-lose';
  }
  function minutesIn(m) { return Math.max(0, Math.min(m.dur, NOW.min - m.start)); }

  // ─── LIVE ───
  function renderLive() {
    var h = '';
    if (champion) {
      h += '<div class="pd-sec"><div class="pd-champ">' + trophy(34) +
        '<div><div class="pd-sub">Champions · LSVZ × MAPZ Padel Vol.2</div><div class="pd-champ-name">' + esc(champion) + '</div></div></div></div>';
    }
    var live = MATCHES.filter(function (m) { return m.state === 'live'; });
    var pending = MATCHES.filter(function (m) { return m.state === 'late'; });
    var upcoming = MATCHES.filter(function (m) { return m.state === 'next'; });
    var nextStart = upcoming.length ? upcoming[0].start : null;
    var nextSlot = upcoming.filter(function (m) { return m.start === nextStart; });
    var done = MATCHES.filter(function (m) { return m.done; });
    var lastStart = done.length ? Math.max.apply(null, done.map(function (m) { return m.start; })) : null;
    var latest = done.filter(function (m) { return m.start === lastStart; });

    if (NOW.day === 'before') {
      h += '<div class="pd-sec"><div class="pd-note"><b style="color:#fff">Kick-off Saturday 14 November at 15:00.</b><br>' +
        'Find your pair in <a class="pd-lime" href="#mine" data-goto="mine">My matches</a> to see when and where you play.</div></div>';
    }

    if (live.length) {
      var s = live[0];
      h += '<div class="pd-sec"><div class="pd-sec-head"><h2 class="pd-h2">On court now</h2><span class="pd-sub pd-num">' +
        esc(s.time) + ' – ' + hhmm(s.start + s.dur) + '</span></div><div class="pd-grid-courts">';
      live.forEach(function (m) {
        var pct = Math.round(100 * minutesIn(m) / m.dur);
        h += '<div class="pd-court"><div class="pd-court-top"><span class="pd-court-name">COURT ' + esc(m.court) + '</span><span class="pd-tag">' + esc(tag(m)) + '</span></div>' +
          '<span class="pd-pname">' + esc(m.p1) + '</span><span class="pd-vs">VS</span><span class="pd-pname">' + esc(m.p2) + '</span>' +
          '<div class="pd-bar"><span style="width:' + pct + '%"></span></div><span class="pd-sub pd-num" style="font-size:11px">' + minutesIn(m) + '′ of ' + m.dur + '′</span></div>';
      });
      h += '</div></div>';
    } else if (NOW.day === 'today' && nextStart !== null && done.length) {
      h += '<div class="pd-sec"><div class="pd-note">Short break — next matches at <b class="pd-lime">' + hhmm(nextStart) + '</b>.</div></div>';
    }

    if (pending.length && NOW.day === 'today') {
      h += '<div class="pd-sec"><div class="pd-sec-head"><h2 class="pd-h2">Just finished</h2><span class="pd-sub">score coming</span></div><div class="pd-list">';
      pending.slice(-4).forEach(function (m) {
        h += '<div class="pd-row pd-row-next"><span class="pd-wide pd-lime" style="font-style:normal">C' + esc(m.court) + '</span><span>' + esc(m.p1) + ' <span class="pd-sub">–</span> ' + esc(m.p2) + '</span><span class="pd-sub">' + esc(tag(m)) + '</span></div>';
      });
      h += '</div></div>';
    }

    if (nextSlot.length) {
      h += '<div class="pd-sec"><div class="pd-sec-head"><h2 class="pd-h2">' + (NOW.day === 'before' ? 'First matches' : 'Up next') + '</h2><span class="pd-sub pd-lime pd-num" style="font-weight:700">' +
        hhmm(nextStart) + ' · be ready</span></div><div class="pd-list">';
      nextSlot.forEach(function (m) {
        h += '<div class="pd-row pd-row-next"><span class="pd-wide pd-lime" style="font-style:normal">C' + esc(m.court) + '</span><span>' + esc(m.p1) + ' <span class="pd-sub">–</span> ' + esc(m.p2) + '</span><span class="pd-sub">' + esc(tag(m)) + '</span></div>';
      });
      h += '</div></div>';
    }

    if (latest.length) {
      h += '<div class="pd-sec"><h2 class="pd-h2">Latest results</h2><div class="pd-list">';
      latest.forEach(function (m) {
        h += '<div class="pd-row pd-row-res">' +
          '<span class="' + sideCls(m, 1) + '">' + esc(m.p1) + '</span><span class="pd-num ' + sideCls(m, 1) + '" style="font-weight:800;text-align:right">' + esc(m.sc1) + '</span>' +
          '<span class="' + sideCls(m, 2) + '">' + esc(m.p2) + '</span><span class="pd-num ' + sideCls(m, 2) + '" style="font-weight:800;text-align:right">' + esc(m.sc2) + '</span>' +
          '<span class="pd-meta">' + esc(tag(m)) + ' · Court ' + esc(m.court) + ' · ' + esc(m.time) + '</span></div>';
      });
      h += '</div></div>';
    }

    h += '<div class="pd-sec"><div class="pd-progress"><div style="display:flex;justify-content:space-between;font-size:12px;color:#9fb5c4"><span>Group matches played</span><span class="pd-num" style="color:#fff;font-weight:700">' +
      groupsDone + ' / ' + GROUP_MATCHES.length + '</span></div><div class="pd-bar"><span style="width:' +
      Math.round(100 * groupsDone / Math.max(1, GROUP_MATCHES.length)) + '%"></span></div></div></div>';

    // Full day programme, collapsed
    h += '<div class="pd-sec"><details class="pd-note" style="padding:0"><summary style="padding:14px;cursor:pointer;font-weight:700;color:#fff">Full schedule (' + MATCHES.length + ' matches)</summary><div class="pd-list" style="border-radius:0;border:0">';
    MATCHES.forEach(function (m) {
      h += '<div class="pd-row pd-row-next" style="grid-template-columns:44px 30px minmax(0,1fr) auto"><span class="pd-num" style="font-weight:700">' + esc(m.time) + '</span><span class="pd-sub">C' + esc(m.court) + '</span><span style="font-size:13px">' +
        esc(m.p1) + ' <span class="pd-sub">–</span> ' + esc(m.p2) + '</span>' + badge(m) + '</div>';
    });
    h += '</div></details></div>';
    $('pd-panel-live').innerHTML = h;
  }

  // ─── GROUPS ───
  var selectedGroup = store('pd_group');
  if (GROUP_KEYS.indexOf(selectedGroup) === -1) {
    var liveGroup = MATCHES.filter(function (m) { return m.state === 'live' && m.kind === 'group'; })[0];
    selectedGroup = liveGroup ? liveGroup.group : GROUP_KEYS[0];
  }
  function renderGroups() {
    var h = '<div class="pd-chips" role="group" aria-label="Choose a group">';
    GROUP_KEYS.forEach(function (g) {
      h += '<button type="button" class="pd-chip" data-group="' + esc(g) + '" aria-pressed="' + (g === selectedGroup) + '">' + esc(g) + '</button>';
    });
    h += '</div>';

    var grp = T.groups[selectedGroup];
    var st = C.groupStandings(grp);
    var gm = GROUP_MATCHES.filter(function (m) { return m.group === selectedGroup; });
    var played = gm.filter(function (m) { return m.done; }).length;
    h += '<div class="pd-sec"><div class="pd-gcard"><div class="pd-ghead"><span class="pd-gletter">' + esc(selectedGroup) + '</span><div><div class="pd-wide" style="font-size:22px">GROUP ' + esc(selectedGroup) +
      '</div><div class="pd-sub">' + played + ' of ' + gm.length + ' matches played' + (played === gm.length ? ' · final standings' : '') + '</div></div></div>' +
      '<div class="pd-trow is-head"><span>#</span><span>PAIR</span><span class="c">P</span><span class="c">W</span><span class="c">L</span><span class="r">GD</span></div>';
    st.forEach(function (r, i) {
      h += '<div class="pd-trow' + (i < 2 ? ' is-q' : '') + '"><span class="pos pd-num">' + (i + 1) + '</span><span style="font-weight:600;overflow-wrap:anywhere">' + esc(r.name) + '</span>' +
        '<span class="c pd-num pd-sub">' + r.mp + '</span><span class="c pd-num" style="font-weight:800">' + r.w + '</span><span class="c pd-num pd-sub">' + r.l + '</span><span class="r pd-num" style="color:#c9d8e2">' + (r.gd > 0 ? '+' : '') + r.gd + '</span></div>';
    });
    h += '<div style="padding:12px 16px 6px;font-size:11px;letter-spacing:.1em;color:#9fb5c4;border-top:1px solid rgba(255,255,255,.08)">MATCHES</div>';
    gm.forEach(function (m) {
      h += '<div class="pd-mrow"><div class="pd-mtime"><b class="pd-num">' + esc(m.time) + '</b><span>Court ' + esc(m.court) + '</span></div>' +
        '<div style="display:flex;flex-direction:column;gap:2px;font-size:14px"><span class="' + sideCls(m, 1) + '">' + esc(m.p1) + '</span><span class="' + sideCls(m, 2) + '">' + esc(m.p2) + '</span></div>' + badge(m) + '</div>';
    });
    h += '</div><p class="pd-sub" style="padding:0 4px">Top 2 go to the Round of 16 (highlighted). Ranking: wins → head-to-head → game difference → games won.</p></div>';

    h += '<div class="pd-sec"><h2 class="pd-h2" style="font-size:20px">All groups</h2><div class="pd-minis">';
    GROUP_KEYS.forEach(function (g) {
      var s = C.groupStandings(T.groups[g]);
      var started = GROUP_MATCHES.some(function (m) { return m.group === g && m.done; });
      h += '<button type="button" class="pd-mini" data-group="' + esc(g) + '" aria-pressed="' + (g === selectedGroup) + '"><span class="k">GROUP ' + esc(g) + '</span>' +
        (started ? '<span class="n">1. ' + esc(s[0].name) + '</span><span class="n">2. ' + esc(s[1].name) + '</span>'
                 : '<span class="n" style="color:#9fb5c4;font-weight:500">' + s.map(function (r) { return esc(r.name); }).join(' · ') + '</span>') + '</button>';
    });
    h += '</div></div>';
    $('pd-panel-groups').innerHTML = h;
  }

  // ─── MY MATCHES ───
  function allPairs() {
    var out = [];
    GROUP_KEYS.forEach(function (g) { (T.groups[g].pairs || []).forEach(function (p) { out.push({ group: g, seed: p.seed, name: p.name }); }); });
    return out;
  }
  var PAIRS = allPairs();
  function findPairs(q) {
    var f = fold(q);
    if (!f) return [];
    return PAIRS.filter(function (p) { return fold(p.name).indexOf(f) !== -1; });
  }
  var chosenPair = null;
  function renderMine() {
    var q = $('pd-q').value;
    var out = $('pd-mine-out');
    if (!fold(q)) {
      var sugs = [PAIRS[2], PAIRS[13], PAIRS[24]].filter(Boolean);
      out.innerHTML = '<div class="pd-sec"><p class="pd-sub">Pairs are listed by the surname of the person who bought the ticket.</p><div class="pd-sugs">' +
        sugs.map(function (p) { return '<button type="button" class="pd-sug" data-q="' + esc(p.name) + '">' + esc(p.name) + '</button>'; }).join('') + '</div></div>';
      return;
    }
    var hits = findPairs(q);
    if (!hits.length) {
      out.innerHTML = '<div class="pd-sec"><div class="pd-note"><b style="color:#fff">No pair found.</b><br>Pairs are listed by the surname of the person who bought the ticket — try your partner’s name.</div></div>';
      return;
    }
    if (hits.length > 1 && !(chosenPair && hits.some(function (p) { return p.name === chosenPair; }))) {
      out.innerHTML = '<div class="pd-sec"><p class="pd-sub">Several pairs match — pick yours:</p><div class="pd-sugs">' +
        hits.map(function (p) { return '<button type="button" class="pd-sug" data-pick="' + esc(p.name) + '">' + esc(p.name) + ' · ' + esc(p.group) + '</button>'; }).join('') + '</div></div>';
      return;
    }
    var me = hits.length === 1 ? hits[0] : hits.filter(function (p) { return p.name === chosenPair; })[0];
    var name = me.name, g = me.group;
    var mine = MATCHES.filter(function (m) { return m.p1 === name || m.p2 === name; });
    var groupMine = mine.filter(function (m) { return m.kind === 'group'; });
    var koMine = mine.filter(function (m) { return m.kind === 'ko'; });
    var upcoming = mine.filter(function (m) { return !m.done; })[0];
    var st = C.groupStandings(T.groups[g]);
    var pos = st.map(function (r) { return r.name; }).indexOf(name) + 1;
    var row = st[pos - 1];
    var complete = C.isGroupComplete(T.groups[g]);
    var ord = ['', '1st', '2nd', '3rd', '4th'];
    var h = '';

    // Next match card
    var label = upcoming ? (upcoming.state === 'live' ? 'ON COURT NOW' : upcoming.state === 'late' ? 'WAITING FOR THE SCORE' : 'YOUR NEXT MATCH')
      : (champion === name ? 'CHAMPIONS!' : (complete && pos > 2 && !koMine.length ? 'GROUP STAGE FINISHED' : 'ALL YOUR MATCHES ARE PLAYED'));
    h += '<div class="pd-sec"><div class="pd-nextcard"><div class="pd-nextcard-top"><span class="pd-wide" style="font-size:15px">' + label + '</span><span style="font-weight:700;font-size:13px">' +
      esc(upcoming ? tag(upcoming) : 'Group ' + g) + '</span></div>';
    if (upcoming) {
      var opp = upcoming.p1 === name ? upcoming.p2 : upcoming.p1;
      h += '<div class="pd-nextcard-body"><div style="display:flex;align-items:flex-end;gap:14px;flex-wrap:wrap"><span class="pd-bigtime pd-num">' + esc(upcoming.time) +
        '</span><span class="pd-wide pd-lime" style="font-style:normal;font-size:22px;padding-bottom:4px">COURT ' + esc(upcoming.court) + '</span></div>' +
        '<div><div class="pd-sub" style="letter-spacing:.1em;font-size:12px">AGAINST</div><div style="font-weight:700;font-size:20px">' + esc(opp) + '</div></div>' +
        '<div class="pd-sub" style="background:rgba(255,255,255,.06);border-radius:10px;padding:10px 12px;color:#c9d8e2">Be at the court 5 minutes before — ' + upcoming.dur + '-minute match.</div></div>';
    } else if (champion === name) {
      h += '<div class="pd-nextcard-body" style="flex-direction:row;align-items:center">' + trophy(40) + '<span style="font-weight:700;font-size:18px">You won LSVZ × MAPZ Padel Vol.2. Congratulations!</span></div>';
    } else {
      h += '<div class="pd-nextcard-body"><span style="color:#c9d8e2">Thanks for playing — check the <a class="pd-lime" href="#bracket" data-goto="bracket">bracket</a> for the rest of the evening.</span></div>';
    }
    h += '</div></div>';

    // Group status
    h += '<div class="pd-sec"><div class="pd-me"><span class="pd-me-pos">' + ord[pos] + '</span><div style="min-width:0"><div style="font-weight:700;font-size:17px;overflow-wrap:anywhere">' + esc(name) +
      '</div><div class="pd-sub">Group ' + esc(g) + ' · ' + row.w + ' W · ' + row.l + ' L · ' + (row.gd > 0 ? '+' : '') + row.gd + ' games' + (complete ? ' · final' : '') + '</div></div></div></div>';

    // Their matches
    h += '<div class="pd-sec"><h2 class="pd-h2" style="font-size:20px">Your matches</h2><div style="display:flex;flex-direction:column;gap:8px">';
    groupMine.concat(koMine).forEach(function (m) {
      var opp = m.p1 === name ? m.p2 : m.p1;
      var b;
      if (m.done) {
        var mine1 = m.p1 === name;
        var won = (m.win === 1) === mine1 && m.win !== 0;
        var my = mine1 ? m.sc1 : m.sc2, th = mine1 ? m.sc2 : m.sc1;
        b = '<span class="pd-badge pd-num ' + (won ? 'won' : 'done') + '">' + (m.win === 0 ? 'D ' : won ? 'W ' : 'L ') + esc(my) + '–' + esc(th) + '</span>';
      } else b = badge(m);
      h += '<div class="pd-mymatch' + (m === upcoming ? ' is-next' : '') + '"><div class="pd-mtime"><b class="pd-num" style="font-size:16px">' + esc(m.time) + '</b><span>Court ' + esc(m.court) + '</span></div>' +
        '<span style="font-size:15px;overflow-wrap:anywhere">' + (m.kind === 'ko' ? '<span class="pd-sub">' + esc(m.id) + ' · </span>' : '') + 'vs <b>' + esc(opp) + '</b></span>' + b + '</div>';
    });
    h += '</div></div>';

    // Knockout path (while the group is still being played)
    if (!complete) {
      h += '<div class="pd-sec"><h2 class="pd-h2" style="font-size:20px">If you qualify</h2><div class="pd-list">';
      ['1', '2'].forEach(function (p) {
        var code = p + g;
        var r = ((T.knockout || {}).r16 || []).filter(function (m) { return m.pair1_from === code || m.pair2_from === code; })[0];
        if (!r) return;
        var other = r.pair1_from === code ? r.pair2_from : r.pair1_from;
        h += '<div class="pd-row" style="display:grid;grid-template-columns:70px minmax(0,1fr);gap:12px;align-items:center"><span class="pd-wide pd-lime" style="font-style:normal">' +
          (p === '1' ? '1st →' : '2nd →') + '</span><span>' + esc(r.id) + ' · ' + esc(r.time) + ' · Court ' + esc(r.court) + '<br><span class="pd-sub">vs ' +
          esc(BR.nameFor(other)) + '</span></span></div>';
      });
      h += '</div></div>';
    }
    out.innerHTML = h;
  }

  // ─── BRACKET ───
  function koCard(m) {
    var t1 = isPlaceholder(m.p1) ? ' is-tbd' : '', t2 = isPlaceholder(m.p2) ? ' is-tbd' : '';
    var w1 = m.done && m.win === 1 ? ' is-win' : '', w2 = m.done && m.win === -1 ? ' is-win' : '';
    return '<div class="pd-kocard"><div class="pd-kotime"><b class="pd-num">' + esc(m.time) + '</b><span>Court ' + esc(m.court) + '</span>' +
      (m.state === 'live' ? '<span class="pd-badge live" style="padding:2px 6px;min-width:0;font-size:10px;margin-top:2px">LIVE</span>' : '') + '</div><div>' +
      '<div class="pd-koside' + t1 + w1 + '"><span>' + esc(m.p1) + '</span><span class="pd-num">' + esc(m.sc1) + '</span></div>' +
      '<div class="pd-koside' + t2 + w2 + '"><span>' + esc(m.p2) + '</span><span class="pd-num">' + esc(m.sc2) + '</span></div></div></div>';
  }
  function renderBracket() {
    var h = '<nav class="pd-rounds" aria-label="Rounds">';
    C.KO_STAGES.forEach(function (st) {
      h += '<button type="button" class="pd-roundlink" data-round="' + st + '"' + (st === 'final' ? ' style="background:#e1fb2a;color:#0b2233;border-color:#e1fb2a"' : '') + '>' + STAGE_LABEL[st] + '</button>';
    });
    h += '</nav>';
    C.KO_STAGES.forEach(function (st) {
      var list = MATCHES.filter(function (m) { return m.kind === 'ko' && m.stage === st; });
      if (!list.length) return;
      var times = list.map(function (m) { return m.time; }).filter(function (t, i, a) { return a.indexOf(t) === i; }).join(' & ');
      if (st === 'final') {
        var f = list[0];
        h += '<div class="pd-sec" id="pd-round-final"><div class="pd-final"><div style="display:flex;align-items:center;gap:10px">' + trophy(28) +
          '<span class="pd-brush-lime" style="font-size:26px;padding:4px 18px 0;transform:rotate(-3deg)">THE FINAL</span></div>' +
          '<span class="pd-wide pd-num" style="font-style:normal;font-size:20px">' + esc(f.time) + ' · COURT ' + esc(f.court) + ' · ' + f.dur + ' MIN</span>' + koCard(f) +
          (champion ? '<div class="pd-champ" style="border-width:1.5px">' + trophy(30) + '<div><div class="pd-sub">Champions</div><div class="pd-champ-name">' + esc(champion) + '</div></div></div>'
                    : '<span class="pd-sub">Followed by the prize-giving and the final photo.</span>') + '</div></div>';
        return;
      }
      h += '<div class="pd-sec" id="pd-round-' + st + '"><div class="pd-sec-head"><h2 class="pd-h2">' + STAGE_LABEL[st] + '</h2><span class="pd-sub pd-num">' + esc(times) + ' · ' + list[0].dur + ' min</span></div><div class="pd-cols">';
      list.forEach(function (m) { h += koCard(m); });
      h += '</div></div>';
    });
    $('pd-panel-bracket').innerHTML = h;
  }

  function trophy(size) {
    return '<svg aria-hidden="true" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="#e1fb2a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:0 0 auto"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3"/><path d="M7 5H4v2a3 3 0 0 0 3 3"/></svg>';
  }

  // ─── Status chip ───
  function renderStatus() {
    var chip = $('pd-status'), text = $('pd-status-text');
    if (champion || NOW.day === 'after') { text.textContent = 'FINISHED'; chip.classList.remove('is-live'); }
    else if (NOW.day === 'today' && (anyLive || (NOW.min >= 15 * 60 && NOW.min < 22 * 60))) { text.textContent = NOW.simulated ? 'LIVE · ' + hhmm(NOW.min) : 'LIVE'; chip.classList.add('is-live'); }
    else text.textContent = 'SAT 14.11';
  }

  // ─── Tabs ───
  function currentTab() {
    var h = (location.hash || '').slice(1);
    if (h === 'schedule') return 'live';         // old links
    return TABS.indexOf(h) !== -1 ? h : 'live';
  }
  function showTab(tab, scroll) {
    TABS.forEach(function (t) { $('pd-panel-' + t).hidden = t !== tab; });
    document.querySelectorAll('.pd-tab').forEach(function (a) {
      if (a.getAttribute('data-tab') === tab) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    app.classList.toggle('is-compact', tab !== 'live');
    $('pd-tabtitle').textContent = TAB_TITLE[tab] || '';
    if (scroll) window.scrollTo({ top: Math.max(0, app.getBoundingClientRect().top + window.pageYOffset - 10), behavior: 'auto' });
  }
  function goTo(tab) {
    try { history.replaceState(null, '', location.pathname + location.search + '#' + tab); } catch (e) { location.hash = tab; }
    showTab(tab, true);
    if (tab === 'mine' && !$('pd-q').value) setTimeout(function () { $('pd-q').focus(); }, 50);
  }

  // ─── Events ───
  app.addEventListener('click', function (e) {
    var el = e.target.closest('[data-tab],[data-goto],[data-group],[data-q],[data-pick],[data-round]');
    if (!el) return;
    if (el.hasAttribute('data-tab') || el.hasAttribute('data-goto')) {
      e.preventDefault();
      goTo(el.getAttribute('data-tab') || el.getAttribute('data-goto'));
    } else if (el.hasAttribute('data-group')) {
      selectedGroup = el.getAttribute('data-group');
      store('pd_group', selectedGroup);
      renderGroups();
      if (el.classList.contains('pd-mini')) $('pd-panel-groups').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (el.hasAttribute('data-q')) {
      $('pd-q').value = el.getAttribute('data-q'); store('pd_q', $('pd-q').value); chosenPair = null; renderMine();
    } else if (el.hasAttribute('data-pick')) {
      chosenPair = el.getAttribute('data-pick'); store('pd_pick', chosenPair); renderMine();
    } else if (el.hasAttribute('data-round')) {
      var target = $('pd-round-' + el.getAttribute('data-round'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
  $('pd-q').addEventListener('input', function () { chosenPair = null; store('pd_q', $('pd-q').value); renderMine(); });
  window.addEventListener('hashchange', function () { showTab(currentTab(), false); });

  // ─── Init ───
  $('pd-q').value = store('pd_q') || '';
  chosenPair = store('pd_pick');
  renderStatus();
  renderLive();
  renderGroups();
  renderMine();
  renderBracket();
  showTab(currentTab(), false);

  // Tournament day: reload every 2 minutes (fresh ?t= so the 10-minute page cache is skipped).
  // Skipped while someone is typing in the search box.
  if (NOW.day === 'today' && !NOW.simulated) {
    setInterval(function () {
      if (document.visibilityState !== 'visible') return;
      if (document.activeElement && document.activeElement.id === 'pd-q') return;
      location.replace(location.pathname + '?t=' + Date.now() + location.hash);
    }, REFRESH_MS);
  }
})();
