const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AddressSchema = require("./address");

const DriverSchema = new Schema({
    email : {
        type : String,
        required : true
    },
    subject : {
        type : String
    },
    interest :{
        type : String
    },
    driving : {
        type : Boolean,
        default : false
    },
    address : [AddressSchema]
});

DriverSchema.virtual("drivercount").get(function(){
    return this.email+this.subject;
});

const Driver = mongoose.model("driver",DriverSchema);

module.exports = Driver;