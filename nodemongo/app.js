const express= require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./routes/routes");
const path = require("path");
const ejs = require("ejs");
global.appRoot = path.resolve(__dirname);

const app = express();
app.set("view engine", "ejs");
app.use(express.static("./public"));



mongoose.Promise = global.Promise;
var uri = "mongodb://divine:123456@localhost/home";
var promise = mongoose.connect(uri);
mongoose.connection
.once("open",() => {
    console.log("MongoDB connected");
})
.on("error",(error) => {
    console.warn("MongoDB connection error ",error);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

module.exports = app;