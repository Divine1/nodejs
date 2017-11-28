const mongoose = require("mongoose");
const PostSchema = require("./post");

const Schema = mongoose.Schema;

const HomeSchema = new Schema({
    "name" : {
        type : String,
        required : true
    },
    "city" : {
        type : String,
        required : true
    },
    post : [PostSchema]
});

const Home = mongoose.model("home",HomeSchema);
module.exports = Home;