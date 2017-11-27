const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HomeSchema = new Schema({
    "name" : {
        type : String,
        required : true
    },
    "city" : {
        type : String,
        required : true
    }
});

const Home = mongoose.model("home",HomeSchema);
module.exports = Home;