const express = require('express');
const path = require('path');
const app = express();

// Change 'portfolio' to match the folder name inside your 'dist' folder
const distPath = path.join(__dirname, 'dist/portfolio/browser');

const canonicalHost = 'emirhanatar.com';
const prerenderedRoutes = ['/dev', '/fitness'];
const seoTrailingSlashRoutePattern = /^\/(dev|fitness)\/$/;

function getSeoTrailingSlashRedirect(pathname, originalUrl) {
    if (!seoTrailingSlashRoutePattern.test(pathname)) {
        return null;
    }

    const queryString = originalUrl.slice(pathname.length);
    return `${pathname.slice(0, -1)}${queryString}`;
}

app.set('trust proxy', true);

app.use((req, res, next) => {
    const host = req.hostname.toLowerCase();
    const forwardedProto = req.get('x-forwarded-proto');
    const shouldUseApexHost = host === `www.${canonicalHost}`;
    const shouldUseHttps = forwardedProto !== undefined && forwardedProto !== 'https';

    if (shouldUseApexHost || shouldUseHttps) {
        res.redirect(301, `https://${canonicalHost}${req.originalUrl}`);
        return;
    }

    next();
});

app.get(seoTrailingSlashRoutePattern, (req, res) => {
    res.redirect(301, getSeoTrailingSlashRedirect(req.path, req.originalUrl));
});

app.get(prerenderedRoutes, (req, res) => {
    res.sendFile(path.join(distPath, req.path, 'index.html'));
});

app.use(express.static(distPath));

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

const port = process.env.PORT || 3000;

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = app;
module.exports.getSeoTrailingSlashRedirect = getSeoTrailingSlashRedirect;
