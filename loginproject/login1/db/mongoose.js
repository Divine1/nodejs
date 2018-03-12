const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

var uri = "mongodb://divine:divine123@localhost/home";
var promise = mongoose.connect(uri);
mongoose.connection
.once("open",() => {
    console.log("MongoDB connected");
})
.on("error",(error) => {
    console.warn("MongoDB connection error ",error);
});


module.exports = {mongoose};