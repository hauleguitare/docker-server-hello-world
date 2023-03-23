const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.send("Hello World from Express & Nodejs & Docker");
})

const port = 3045;

app.listen(port, () => {
    console.log("app listen: ", port);
})