const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const app = express();

mongoose.Promise = global.Promise;

var uri = "mongodb://divine:123456@localhost/home";
//var uri = "mongodb://localhost/home";

var promise = mongoose.connect(uri, {
    useMongoClient: true
});

mongoose.connection
.once("open",() => {
    console.log("connected");
})
.on("error",(error) => {
    console.warn("warning",error);
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);
module.exports = app;