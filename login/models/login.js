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
    tokens : [
        {
            access: {
                type:String,
                required:true
            },
            token: {
                type:String,
                required:true
            }
        }
    ]
});
LoginSchema.statics.findByToken = function(token){
    var User = this;
    var decoded;

    try{
        decoded = jwt.verify(token,"divine");
        console.log("decoded- ",decoded);
    }
    catch(e){
        return new Promise((resolve,reject)=> {
            reject(e);
        });
    }
     return User.findOne({
        "_id" : decoded._id,
        "tokens.token" : token
    }) 
   // return "11";
};

LoginSchema.methods.generateAuthToken = function(){
    console.log("in generateAuthToken start");
    var user = this;
    var access="auth";
    var token = jwt.sign({
        _id : user._id.toString(),
        access
    },"divine");
    console.log("token ",token);
    user.tokens.push({access,token});
    /* console.log("user ",user); */
    return user.save().then((result)=> {
        /* console.log("result ",result); */
        return token;
    }).catch((err) =>{
        console.log("err ",err);
    });
};

const Login = mongoose.model("login",LoginSchema);

module.exports = Login;