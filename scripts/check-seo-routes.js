const assert = require('assert/strict');
const fs = require('fs');
const path = require('path');
const app = require('../server');

const distPath = path.join(__dirname, '..', 'dist', 'portfolio', 'browser');

function readRouteHtml(route) {
    return fs.readFileSync(path.join(distPath, route, 'index.html'), 'utf8');
}

const redirect = app.getSeoTrailingSlashRedirect;

assert.equal(redirect('/dev', '/dev'), null);
assert.equal(redirect('/fitness', '/fitness'), null);
assert.equal(redirect('/dev/', '/dev/'), '/dev');
assert.equal(redirect('/fitness/', '/fitness/'), '/fitness');
assert.equal(redirect('/dev/', '/dev/?utm=test'), '/dev?utm=test');
assert.equal(redirect('/fitness/', '/fitness/?utm=test'), '/fitness?utm=test');

assert.match(readRouteHtml('dev'), /<link rel="canonical" href="https:\/\/emirhanatar\.com\/dev">/);
assert.match(readRouteHtml('fitness'), /<link rel="canonical" href="https:\/\/emirhanatar\.com\/fitness">/);

console.log('SEO route checks passed');
