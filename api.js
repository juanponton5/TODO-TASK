var mongoose = require("mongoose");
var express = require("express");
var router = express.Router();
var query = "mongodb+srv://gittrabajosparque123:1234@cluster0.r4hard0.mongodb.net/taskBD?retryWrites=true&w=majority&appName=Cluster0"
const db = (query);

mongoose.Promise = global.Promise;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (error) {
    if (error) {
        console.log("Error!" + error);
    } else {
        console.log("Se ha conectado con la base de datos exitosamente");
    }
});

module.exports = router;