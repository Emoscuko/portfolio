const assert = require('assert/strict');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const distPath = path.join(root, 'dist', 'portfolio', 'browser');

const canonicalRoutes = [
    { path: '/', file: path.join(distPath, 'index.html') },
    { path: '/dev', file: path.join(distPath, 'dev', 'index.html') },
    { path: '/fitness', file: path.join(distPath, 'fitness', 'index.html') }
];

function read(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}

for (const route of canonicalRoutes) {
    const html = read(route.file);
    const canonicalUrl = `https://emirhanatar.com${route.path}`;

    assert.ok(html.includes(`<link rel="canonical" href="${canonicalUrl}">`));
    assert.match(html, /<meta name="robots" content="index, follow">/);
    assert.ok(html.includes(`<meta property="og:url" content="${canonicalUrl}">`));
    assert.match(html, /<script type="application\/ld\+json" data-seo-jsonld="true">/);
}

const robots = read(path.join(distPath, 'robots.txt'));
assert.match(robots, /User-agent: \*/);
assert.match(robots, /Allow: \//);
assert.match(robots, /Sitemap: https:\/\/emirhanatar\.com\/sitemap\.xml/);

const sitemap = read(path.join(distPath, 'sitemap.xml'));
for (const route of canonicalRoutes) {
    assert.match(sitemap, new RegExp(`<loc>https://emirhanatar.com${route.path}</loc>`));
}

console.log('SEO checks passed');
