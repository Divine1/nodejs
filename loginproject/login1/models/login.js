const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

};
const Login = mongoose.model("login",LoginSchema);

module.exports = Login;