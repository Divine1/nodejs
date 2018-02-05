const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    city : {
        type : String,
        required : true
    },
    country : {
        type : String
    }
});


module.exports = AddressSchema;