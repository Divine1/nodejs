var Login = require("./../models/login");

var authenticate = (req,res,next) => {
    console.log("in authenticate function");

    var token = req.header("x-auth");
    console.log("token ", token);

    Login.findByToken(token).then((user) =>{
        console.log("user ",user);
        req.user = user;
        req.token = token;
        next();

        
    }).catch((err)=>{
        console.log("err ",err);
        res.send({"err":err});
    })
};

module.exports = {authenticate};