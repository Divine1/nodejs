const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const {mongoose} = require("./db/mongoose");
const Login =require("./models/login");
const jwt = require("jsonwebtoken");

app.use(bodyParser.json());

app.get("/login",(req,res)=>{
    console.log("in get /login method");

    Login.find({"email" : "divine1"})
    .then((data)=>{
        res.send({"text" : data});
    }).catch((err)=>{
        res.send({"err" : err});
    });

    //new Login().generateAuthToken();
    //new Login().generateAuthToken();
   // Login.findByToken();
   
   /*  
   
   var jsonData = {name: "dave"};
    var salt = "salt123";
    var signedtoken = jwt.sign(jsonData,salt);
    console.log("signedtoken: ",signedtoken);

    var decoded = jwt.verify(signedtoken,salt);
    console.log("decoded: ",decoded);

    res.send({"text" : "login path"});  
 */
});

app.post("/login",(req,res)=>{
    console.log("in post /login method");

   console.log("username ",req.body.username);
   console.log("password ",req.body.password);
   
    Login.find({"email" : req.body.username})
    .then((data)=>{
        res.send({"text" : data});
    }).catch((err)=>{
        res.send({"err" : err});
    });
    
});



app.post("/register",(req,res)=>{
    console.log("in post /register method");

    var user = new Login({
        email : "divine",
        password: "divine123"
    });
    user.save().then((data) =>{
        console.log("data ",data);
        res.send({"text" : data});
    })
    .catch((err)=>{
        res.send({"err" : err});
    });
    
});


var server = app.listen(3000,()=>{
    var port = server.address().port;
    console.log("express server started on %s ",port);
});
