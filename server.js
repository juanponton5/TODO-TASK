const express = require('express');
const api = require('./api');
const port = process.env.PORT || 3000;
const app = express();

app.listen(port, function () {
    console.log("Server is listening at port: " + port);
});

app.get('/', function (req, res) {
    res.send("soraya , juan , martin ");
});

app.use('/api', api);