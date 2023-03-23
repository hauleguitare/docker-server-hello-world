const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.send("Hello World from Express & Nodejs & Docker");
})

const PORT = 3045;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`app listen: ${PORT}`);
})