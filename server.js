const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
const dirname = path.join(__dirname, 'public');

app.use(express.static(dirname));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(dirname, 'index.html'))
}); 

app.listen(port);
console.log('Service started for personal webapp');