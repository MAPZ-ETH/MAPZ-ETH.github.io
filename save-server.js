#!/usr/bin/env node
// Tiny save server for score-entry page
// Run: node save-server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3333;
const YAML_FILE = path.join(__dirname, '_data', 'padel_tournament.yml');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }

  if (req.method === 'POST' && req.url === '/save') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        fs.writeFileSync(YAML_FILE, body, 'utf8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true }));
        console.log('✅ Scores saved at', new Date().toLocaleTimeString());
      } catch(e) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
  } else {
    res.writeHead(404); res.end();
  }
});

server.listen(PORT, () => {
  console.log(`🏆 Score save server running on http://localhost:${PORT}`);
  console.log(`   Saving to: ${YAML_FILE}`);
});
