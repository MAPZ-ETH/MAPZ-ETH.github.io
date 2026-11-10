/*
 * Padel tournament — shared logic.
 * Used by /padel-tournament/ (public page) and /score-entry/ (admin), so both
 * always agree on standings, tiebreakers and knockout names.
 *
 * Data shape: _data/padel_tournament.yml
 *   groups:   { A: { pairs: [{seed, name}], matches: [{pair1, pair2, score1, score2, time, court}] }, ... }
 *   knockout: { r16: [{id, pair1_from, pair2_from, score1, score2, time, court}], qf: [...], sf: [...], final: [...] }
 *   pairX_from: "1A" (1st of group A), "2H" (2nd of group H) or "W-<match id>" (winner of that match)
 *   Group scores are games ("6"). Knockout scores are games per set, comma-separated ("6,4").
 */
(function (root) {
  'use strict';

  var KO_STAGES = ['r16', 'qf', 'sf', 'final'];

  function isBlank(v) {
    return v === undefined || v === null || String(v).trim() === '';
  }

  // "6" -> [6], "6,4" or "6/4" -> [6, 4], "" -> null, garbage -> [NaN]
  function parseSets(v) {
    if (isBlank(v)) return null;
    return String(v).split(/[,\/;]/).map(function (s) { return s.trim(); })
      .filter(function (s) { return s !== ''; })
      .map(function (s) { return /^\d+$/.test(s) ? parseInt(s, 10) : NaN; });
  }

  // Group-stage score: a single number of games, otherwise null
  function groupScore(v) {
    var p = parseSets(v);
    return p && p.length === 1 && !isNaN(p[0]) ? p[0] : null;
  }

  function isGroupMatchPlayed(m) {
    return !!m && groupScore(m.score1) !== null && groupScore(m.score2) !== null;
  }

  function isGroupComplete(group) {
    var ms = (group && group.matches) || [];
    return ms.length > 0 && ms.every(isGroupMatchPlayed);
  }

  /*
   * Group standings, ordered by the VOL.2 rules:
   *   1. wins  2. head-to-head between the tied pairs  3. game difference
   *   4. games won  5. organisers' draw (here: seed order, fix by hand if needed).
   * With 3+ tied pairs, 2–4 are first applied to the matches between the tied
   * pairs only, then (if still tied) to the whole group stage.
   * Returns [{seed, name, mp, w, l, gw, gl, gd}] best first.
   */
  function groupStandings(group) {
    var pairs = (group && group.pairs) || [];
    var st = {};
    pairs.forEach(function (p) {
      st[Number(p.seed)] = { seed: Number(p.seed), name: p.name, mp: 0, w: 0, l: 0, gw: 0, gl: 0, gd: 0, h2h: {} };
    });
    var played = [];
    ((group && group.matches) || []).forEach(function (m) {
      var a = st[Number(m.pair1)], b = st[Number(m.pair2)];
      if (!a || !b || !isGroupMatchPlayed(m)) return;
      var s1 = groupScore(m.score1), s2 = groupScore(m.score2);
      played.push({ p1: a.seed, p2: b.seed, s1: s1, s2: s2 });
      a.mp++; b.mp++;
      a.gw += s1; a.gl += s2; b.gw += s2; b.gl += s1;
      if (s1 > s2) { a.w++; b.l++; a.h2h[b.seed] = 1; b.h2h[a.seed] = -1; }
      else if (s2 > s1) { b.w++; a.l++; b.h2h[a.seed] = 1; a.h2h[b.seed] = -1; }
      else { a.h2h[b.seed] = 0; b.h2h[a.seed] = 0; }
    });
    Object.keys(st).forEach(function (k) { st[k].gd = st[k].gw - st[k].gl; });

    function splitBy(list, key) {
      var blocks = [];
      list.forEach(function (x) {
        var last = blocks[blocks.length - 1];
        if (last && key(last[0]) === key(x)) last.push(x); else blocks.push([x]);
      });
      return blocks;
    }
    function flat(blocks, fn) {
      return blocks.reduce(function (acc, b) { return acc.concat(fn(b)); }, []);
    }
    function overall(seeds) {
      return seeds.slice().sort(function (a, b) {
        return (st[b].gd - st[a].gd) || (st[b].gw - st[a].gw) || (a - b);
      });
    }
    function mini(seeds) {
      var inTie = {}, out = {};
      seeds.forEach(function (s) { inTie[s] = true; out[s] = { w: 0, gw: 0, gl: 0 }; });
      played.forEach(function (m) {
        if (!inTie[m.p1] || !inTie[m.p2]) return;
        out[m.p1].gw += m.s1; out[m.p1].gl += m.s2;
        out[m.p2].gw += m.s2; out[m.p2].gl += m.s1;
        if (m.s1 > m.s2) out[m.p1].w++; else if (m.s2 > m.s1) out[m.p2].w++;
      });
      return out;
    }
    function breakTie(seeds) {
      if (seeds.length < 2) return seeds;
      if (seeds.length === 2) {
        var h = st[seeds[0]].h2h[seeds[1]] || 0;
        if (h > 0) return [seeds[0], seeds[1]];
        if (h < 0) return [seeds[1], seeds[0]];
        return overall(seeds);
      }
      var m = mini(seeds);
      var byWins = seeds.slice().sort(function (a, b) { return m[b].w - m[a].w; });
      var winBlocks = splitBy(byWins, function (s) { return m[s].w; });
      if (winBlocks.length > 1) return flat(winBlocks, breakTie);
      var byGames = seeds.slice().sort(function (a, b) {
        return ((m[b].gw - m[b].gl) - (m[a].gw - m[a].gl)) || (m[b].gw - m[a].gw);
      });
      var gameBlocks = splitBy(byGames, function (s) { return (m[s].gw - m[s].gl) + '/' + m[s].gw; });
      if (gameBlocks.length > 1) return flat(gameBlocks, breakTie);
      return overall(seeds);
    }

    var bySeedWins = Object.keys(st).map(Number).sort(function (a, b) { return (st[b].w - st[a].w) || (a - b); });
    var order = flat(splitBy(bySeedWins, function (s) { return st[s].w; }), breakTie);
    return order.map(function (s) {
      var r = st[s];
      return { seed: r.seed, name: r.name, mp: r.mp, w: r.w, l: r.l, gw: r.gw, gl: r.gl, gd: r.gd };
    });
  }

  /*
   * Knockout winner: more sets won; if sets are level, more games in total.
   * Returns 1 (pair 1), -1 (pair 2) or 0 (not played / invalid / tied).
   */
  function knockoutWinner(score1, score2) {
    var a = parseSets(score1), b = parseSets(score2);
    if (!a || !b || a.length !== b.length) return 0;
    if (a.some(isNaN) || b.some(isNaN)) return 0;
    var sets1 = 0, sets2 = 0, g1 = 0, g2 = 0;
    for (var i = 0; i < a.length; i++) {
      g1 += a[i]; g2 += b[i];
      if (a[i] > b[i]) sets1++; else if (b[i] > a[i]) sets2++;
    }
    if (sets1 !== sets2) return sets1 > sets2 ? 1 : -1;
    if (g1 !== g2) return g1 > g2 ? 1 : -1;
    return 0;
  }

  /*
   * Resolves every knockout slot to a pair name (or a placeholder).
   * Returns { matches: { id: {id, name1, name2, winner} }, nameFor(from) }.
   */
  function bracket(data) {
    var groups = (data && data.groups) || {};
    var ko = (data && data.knockout) || {};
    var byId = {};
    Object.keys(ko).forEach(function (stage) {
      (ko[stage] || []).forEach(function (m) { if (m && m.id) byId[m.id] = m; });
    });
    var standingsCache = {}, memo = {};

    function nameFor(from, depth) {
      if (isBlank(from)) return 'TBD';
      var f = String(from).trim();
      var pm = f.match(/^([12])([A-Z])$/);
      if (pm) {
        var pos = parseInt(pm[1], 10), g = pm[2];
        var placeholder = (pos === 1 ? '1st' : '2nd') + ' Group ' + g;
        if (!groups[g] || !isGroupComplete(groups[g])) return placeholder;
        var s = standingsCache[g] || (standingsCache[g] = groupStandings(groups[g]));
        return (s[pos - 1] && s[pos - 1].name) || placeholder;
      }
      var wm = f.match(/^W-(.+)$/);
      if (wm) {
        var info = matchInfo(wm[1], (depth || 0) + 1);
        if (!info || !info.winner) return 'TBD';
        return info.winner === 1 ? info.name1 : info.name2;
      }
      return f;
    }
    function matchInfo(id, depth) {
      if (memo[id]) return memo[id];
      var m = byId[id];
      if (!m || depth > 10) return null;
      memo[id] = {
        id: id,
        name1: nameFor(m.pair1_from, depth),
        name2: nameFor(m.pair2_from, depth),
        winner: knockoutWinner(m.score1, m.score2)
      };
      return memo[id];
    }
    var matches = {};
    Object.keys(byId).forEach(function (id) { matches[id] = matchInfo(id, 0); });
    return { matches: matches, nameFor: function (from) { return nameFor(from, 0); } };
  }

  var api = {
    KO_STAGES: KO_STAGES,
    isBlank: isBlank,
    parseSets: parseSets,
    groupScore: groupScore,
    isGroupMatchPlayed: isGroupMatchPlayed,
    isGroupComplete: isGroupComplete,
    groupStandings: groupStandings,
    knockoutWinner: knockoutWinner,
    bracket: bracket
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.PadelCore = api;
})(this);
