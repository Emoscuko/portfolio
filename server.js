const express = require('express');
const path = require('path');
const app = express();

// Change 'portfolio' to match the folder name inside your 'dist' folder
const distPath = path.join(__dirname, 'dist/portfolio/browser');

const prerenderedRoutes = new Set(['/dev', '/fitness']);

app.get(['/dev/', '/fitness/'], (req, res, next) => {
    if (req.path.endsWith('/')) {
        const queryString = req.originalUrl.slice(req.path.length);
        res.redirect(301, `${req.path.slice(0, -1)}${queryString}`);
        return;
    }

    next();
});

app.get([...prerenderedRoutes], (req, res) => {
    res.sendFile(path.join(distPath, req.path, 'index.html'));
});

app.use(express.static(distPath));

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
