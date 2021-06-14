const express = require('express');
const app = new express();
const path = require('path');


const hostname = '127.0.0.1';
const port = 5000;

app.use(express.static(__dirname + "/static"))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})