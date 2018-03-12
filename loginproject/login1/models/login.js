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
    var user = this;
    var access="auth";
    var data = {
        _id : user._id.toHexString(),
        access : access
    };
    console.log("user._id.toHexString(): ",user._id.toHexString());
    var token= jwt.sign(data,"salt123");
    console.log("token ",token);
    user.tokens.push({access:access,token:token});
    return user.save().then((data) =>{
        console.log("push token success ",data);
        return token;
    }).catch((err) => {
        console.log("push token failure",data );
    }); 

};
const Login = mongoose.model("login",LoginSchema);

module.exports = Login;