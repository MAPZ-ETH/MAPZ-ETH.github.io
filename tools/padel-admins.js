#!/usr/bin/env node
/*
 * Padel score-entry logins (username + password) — no server needed.
 *
 * How it works: one GitHub token (yours) is encrypted once per admin with that
 * admin's password (PBKDF2-SHA256 600k + AES-256-GCM). The encrypted copies go in
 * _data/padel_admins.json (safe to commit: useless without a password).
 * /score-entry/ decrypts the token in the browser when the password is right.
 * Passwords are random (≈59 bits), so the public file cannot be brute-forced.
 *
 * Usage (from the repo root):
 *   node tools/padel-admins.js add amine aya mehdi   add admins (random passwords), asks for the token
 *   node tools/padel-admins.js renew                 new/expired token: same passwords, asks for the token
 *   node tools/padel-admins.js reset aya             new password for aya, asks for the token
 *   node tools/padel-admins.js remove aya            remove aya, asks for the token
 *   node tools/padel-admins.js list                  print usernames + passwords
 *
 * The passwords are kept in .padel-admins.secret.json (git-ignored, never commit it).
 * The token can also be given with the PADEL_GH_TOKEN environment variable.
 * Token to create: GitHub → Settings → Developer settings → Fine-grained tokens,
 *   resource owner MAPZ-ETH, only repository MAPZ-ETH/MAPZ-ETH.github.io,
 *   permission Contents: Read and write, short expiration (e.g. the day after the event).
 */
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const REPO = 'MAPZ-ETH/MAPZ-ETH.github.io';
const ROOT = path.join(__dirname, '..');
const SECRET_FILE = path.join(ROOT, '.padel-admins.secret.json');
const OUT_FILE = path.join(ROOT, '_data', 'padel_admins.json');
const ITERATIONS = 600000;
const ALPHABET = 'abcdefghjkmnpqrstuvwxyz23456789'; // no 0/o, 1/l/i

// Must match normalisation in score-entry.html
const normUser = u => String(u || '').trim().toLowerCase();
const normPass = p => String(p || '').toLowerCase().replace(/[^a-z0-9]/g, '');

function generatePassword() {
  let s = '';
  while (s.length < 12) {
    const b = crypto.randomBytes(1)[0];
    if (b < ALPHABET.length * 8) s += ALPHABET[b % ALPHABET.length]; // rejection sampling: uniform
  }
  return s.match(/.{4}/g).join('-');
}

function encrypt(token, user, password) {
  const salt = crypto.randomBytes(16);
  const iv = crypto.randomBytes(12);
  const key = crypto.pbkdf2Sync(normPass(password), salt, ITERATIONS, 32, 'sha256');
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  const plain = Buffer.from(JSON.stringify({ user, token }), 'utf8');
  const ct = Buffer.concat([cipher.update(plain), cipher.final(), cipher.getAuthTag()]); // WebCrypto format
  return { iter: ITERATIONS, salt: salt.toString('base64'), iv: iv.toString('base64'), ct: ct.toString('base64') };
}

function decrypt(entry, password) {
  const key = crypto.pbkdf2Sync(normPass(password), Buffer.from(entry.salt, 'base64'), entry.iter, 32, 'sha256');
  const raw = Buffer.from(entry.ct, 'base64');
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, Buffer.from(entry.iv, 'base64'));
  decipher.setAuthTag(raw.subarray(raw.length - 16));
  return JSON.parse(Buffer.concat([decipher.update(raw.subarray(0, raw.length - 16)), decipher.final()]).toString('utf8'));
}

function readSecrets() {
  if (!fs.existsSync(SECRET_FILE)) return {};
  return JSON.parse(fs.readFileSync(SECRET_FILE, 'utf8')).passwords || {};
}
function writeSecrets(passwords) {
  fs.writeFileSync(SECRET_FILE, JSON.stringify({
    note: 'Padel score-entry passwords. NEVER commit this file. Share each password only with its owner.',
    passwords
  }, null, 2) + '\n', { mode: 0o600 });
}

function askHidden(question) {
  return new Promise((resolve, reject) => {
    const stdin = process.stdin;
    if (!stdin.isTTY) return reject(new Error('No terminal: set PADEL_GH_TOKEN instead.'));
    process.stdout.write(question);
    let value = '';
    stdin.setRawMode(true); stdin.resume(); stdin.setEncoding('utf8');
    const onData = chunk => {
      for (const ch of chunk) {
        if (ch === '\r' || ch === '\n' || ch === '\u0004') {
          stdin.setRawMode(false); stdin.pause(); stdin.removeListener('data', onData);
          process.stdout.write('\n'); return resolve(value.trim());
        }
        if (ch === '\u0003') { process.stdout.write('\n'); process.exit(130); }
        if (ch === '\u007f' || ch === '\b') value = value.slice(0, -1); else value += ch;
      }
    };
    stdin.on('data', onData);
  });
}

async function getToken() {
  const token = (process.env.PADEL_GH_TOKEN || await askHidden('GitHub token (input hidden): ')).trim();
  if (!/^(github_pat_|ghp_)[A-Za-z0-9_]{20,}$/.test(token)) throw new Error('That does not look like a GitHub token (github_pat_… or ghp_…).');
  try {
    const res = await fetch('https://api.github.com/repos/' + REPO, {
      headers: { Authorization: 'Bearer ' + token, Accept: 'application/vnd.github+json' }
    });
    if (res.status === 401) throw new Error('GitHub says this token is invalid or expired.');
    if (!res.ok) throw new Error('GitHub refused the token for ' + REPO + ' (HTTP ' + res.status + '). Check “Repository access” and that MAPZ-ETH approved it.');
    const repo = await res.json();
    if (repo.permissions && repo.permissions.push === false) throw new Error('This GitHub account cannot write to ' + REPO + '.');
    console.log('✓ Token accepted by GitHub for ' + REPO + ' (write access is checked on the first save).');
  } catch (e) {
    if (e instanceof TypeError) console.warn('⚠ Could not reach GitHub to check the token (offline?). Continuing anyway.');
    else throw e;
  }
  return token;
}

function printTable(passwords) {
  const users = Object.keys(passwords).sort();
  if (!users.length) { console.log('No admins yet.'); return; }
  const w = Math.max(...users.map(u => u.length), 8);
  console.log('\n' + 'Username'.padEnd(w) + '  Password');
  console.log('-'.repeat(w) + '  ' + '-'.repeat(14));
  users.forEach(u => console.log(u.padEnd(w) + '  ' + passwords[u]));
  console.log('\nSend each person only their own line, privately. Login page: https://mapz.ch/score-entry/\n');
}

async function main() {
  const [cmd, ...args] = process.argv.slice(2);
  const passwords = readSecrets();
  const names = args.map(normUser).filter(Boolean);

  if (!cmd || cmd === 'help' || cmd === '--help') {
    console.log(fs.readFileSync(__filename, 'utf8').split('*/')[0].replace(/^#!.*\n\/\*\n?/, '').replace(/^ \* ?/gm, ''));
    return;
  }
  if (cmd === 'list') { printTable(passwords); return; }

  if (cmd === 'add') {
    if (!names.length) throw new Error('Give at least one username: node tools/padel-admins.js add amine aya');
    names.forEach(n => {
      if (!/^[a-z0-9._-]{2,30}$/.test(n)) throw new Error('Invalid username "' + n + '" (use letters, digits, . _ -).');
      if (!passwords[n]) passwords[n] = generatePassword(); else console.log('· ' + n + ' already exists, password kept.');
    });
  } else if (cmd === 'reset') {
    if (!names.length) throw new Error('Which user? node tools/padel-admins.js reset aya');
    names.forEach(n => { if (!passwords[n]) throw new Error('Unknown user ' + n); passwords[n] = generatePassword(); });
  } else if (cmd === 'remove') {
    // No token needed: just drop their encrypted copy
    const out = fs.existsSync(OUT_FILE) ? JSON.parse(fs.readFileSync(OUT_FILE, 'utf8')) : { version: 1, users: {} };
    names.forEach(n => {
      if (!passwords[n] && !(out.users && out.users[n])) throw new Error('Unknown user ' + n);
      delete passwords[n]; if (out.users) delete out.users[n];
    });
    out.updated = new Date().toISOString().slice(0, 10);
    fs.writeFileSync(OUT_FILE, JSON.stringify(out, null, 2) + '\n');
    writeSecrets(passwords);
    console.log('✓ Removed ' + names.join(', ') + '. Commit and push _data/padel_admins.json.');
    return;
  } else if (cmd !== 'renew') {
    throw new Error('Unknown command "' + cmd + '". Use add, renew, reset, remove or list.');
  }

  if (!Object.keys(passwords).length) {
    if (fs.existsSync(OUT_FILE) && !fs.existsSync(SECRET_FILE)) {
      throw new Error('.padel-admins.secret.json is missing, so the existing passwords are unknown. Run "add" with all usernames to create new passwords.');
    }
    throw new Error('No admins. Start with: node tools/padel-admins.js add <user1> <user2> …');
  }

  const token = await getToken();
  const users = {};
  Object.keys(passwords).sort().forEach(u => {
    users[u] = encrypt(token, u, passwords[u]);
    if (decrypt(users[u], passwords[u]).token !== token) throw new Error('Self-check failed for ' + u);
  });
  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify({ version: 1, updated: new Date().toISOString().slice(0, 10), users }, null, 2) + '\n');
  writeSecrets(passwords);
  console.log('✓ Wrote _data/padel_admins.json (' + Object.keys(users).length + ' admins). Commit and push it.');
  if (cmd !== 'renew') printTable(cmd === 'add' || cmd === 'reset'
    ? Object.fromEntries(Object.entries(passwords).filter(([u]) => cmd === 'add' ? true : names.includes(u)))
    : passwords);
}

if (require.main === module) {
  main().catch(e => { console.error('✗ ' + e.message); process.exit(1); });
}
module.exports = { encrypt, decrypt, normPass, normUser, generatePassword };
