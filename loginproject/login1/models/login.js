const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");

const LoginSchema = new Schema({
    email:{
        type : String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    tokens : [{
        access : {
            type : String,
            required: true
        },
        token : {
            type : String,
            required : true
        }
    }]
});
LoginSchema.statics.findByToken = function(){
    console.log("in LoginSchema findByToken");

};

LoginSchema.methods.generateAuthToken = function(){
    console.log("in LoginSchema generateAuthToken");
    var use = this;
    var access="auth";
    var token= jwt.sign({});

};
const Login = mongoose.model("login",LoginSchema);

module.exports = Login;