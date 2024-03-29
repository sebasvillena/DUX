const express = require('express');
const app = new express();
const path = require('path');


const hostname = 'localhost';
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/static"))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})