const express = require('express');
const path = require('path');
const app = express();

// Change 'portfolio' to match the folder name inside your 'dist' folder
const distPath = path.join(__dirname, 'dist/portfolio/browser');

app.use(express.static(distPath));

app.get('/*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});