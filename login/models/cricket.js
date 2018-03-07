const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CricketSchema = new Schema({
    country: {
        type : String,
        required: true
    },
    captain : {
        type : String,
        required : true
    }
});

const Cricket = mongoose.model("cricket",CricketSchema);

module.exports = Cricket;