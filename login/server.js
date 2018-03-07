var express = require("express");
var {mongoose} = require("./db/mongoose");
var Cricket = require("./models/cricket");
var Login = require("./models/login");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const {authenticate}  = require("./authenticate/authenticate");


const salt = "divine";

var app = express();

var pro = express.Router();
var api = express.Router(); 

pro.use(bodyParser.json());
pro.use(bodyParser.urlencoded({ extended: false }));

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));



pro.get("/me",authenticate, function(req,res,next){
console.log("/me");
    console.log("req.user : ",req.user );
    res.status(200).send({"user":req.user});
    //next();
});

pro.get("/",function(req,res){
    var name = req.query.name;
    console.log("name1 ",name);
    var data = {
        id : 1990
    };
    var token = jwt.sign(data,salt);
    console.log("token ",token);

    var decoded = jwt.verify(token,salt);
    console.log("decoded ",decoded);


    var login = new Login({
        "email" : "divine11@gmail.com",
        "password" : "hello"
    });

    console.log("serverjs");
    login.save().then((result)=>{
       /*  console.log("serverjs result ",result); */
        /* var token = login.generateAuthToken();
        console.log("serverjs token ",token); */
        return login.generateAuthToken();
    }).then((token)=>{
        console.log("serverjs token ",token);

        res.header("x-auth",token).send(login);
        //res.send({"response":"hello world"});


    }).catch((err)=>{
        console.log("serverjs err ",err);
        res.send({"err":err});
    });

    //console.log("",);
    
    //res.json({"response":"hello worldjs"});
    //new Error("erroroccured");
    //next();
});

pro.get("/:id",function(req,res,next){
    var name = req.query.name;
    var id = req.params.id;
    console.log("name ",name);
    console.log("id ",id);
    res.send({"response":"hello world"});
    //res.json({"response":"hello worldjs"});
    //new Error("erroroccured");
    //next();
});

pro.post("/",function(req,res,next){
    var city = req.body.city;
    res.send({"response":"hello world11","city" : city});
});

api.get("/get",function(req,res,next){
    res.send({"response":"hello world myapi"});
    
    //new Error("erroroccured");
    //next();
});

/* 
api.get("/getcountry",(req,res) =>{
    console.log("in /getcountry start");
    var cricketObject = new Cricket({
        "country" : "india",
        "captain": "kohli"
    });

    cricketObject.save().then((result)=>{
        console.log("result: ",result);
        res.status(201).send({"result" : result});
    }).catch((e)=>{
        console.log("exception: ",e);
        res.status(401).send({"exception" : e});
    })
    console.log("in /getcountry end");
}); */


pro.use((err,req,res,next)=>{
    console.log("last middleware");
    if(err){
        console.log("error exists");
        res.send({"error" : err});
    }
    else{
        console.log("no errors");
        next();
    }
    
});


app.use("/pro",pro);
 app.use("/api",api); 

var server = app.listen(3000,function(){
    console.log("server is running in port %s", server.address().port);
});