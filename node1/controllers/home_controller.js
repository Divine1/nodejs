const HomeModel = require("../models/home");

module.exports = {

    greeting(req,res){
        console.log("greeting");
        console.log(req.protocol);
        console.log(req.params);
        console.log(req.query);
        console.log(req.query.ab);
        res.send({"data" : "hello, 1", "res" : "hey1"});
    },
    greetingParam(req,res){
        console.log("greetingParam");
        console.log(req.protocol);
        console.log(req.params);
        console.log(req.params.name);
        console.log(req.query);
        console.log(req.query.name);
        res.send({"data" : "hello, 2", "res" : "hey2"});
    },
    greetingPost(req,res){
        console.log("greetingPost");
        console.log(req.body);
        res.send({"data" : "hello, 3", "res" : "hey3"});
    },
    createHome(req,res){
        console.log("createHome");
        const divine = new HomeModel({
            "name" : "divine",
            "city" : "chennai"
        });
        divine.save().then(() => {
            console.log("saved");
            res.send({"data" : "saved"});
        })
        .catch(() => {
            console.log("caught");
            res.send({"data" : "error"});
        });
    },
    updateHome(req,res){

    }
    ,
    findHome(req,res){
        /* HomeModel.find({name:"divine1"})
        .then((homes) => {
            console.log("valid");
            console.log(homes);
        })
        .catch(() => {
            console.log("error");
        }); */

        HomeModel.findByIdAndUpdate({name : "divine1"})
        .then((homes) => {
            console.log("valid");
            console.log(homes);
        })
        .catch((error) => {
            console.log("error");
            console.log(error.message);
        });

        res.send({"data" : "see console"});
    },
    showpage(req,res){
        console.log("showpage");
        console.log(__dirname);
        console.log(appRoot);
        //res.sendFile(__dirname + "/public/arena.html");
        //res.sendFile("e:/nodejs/node1/index.html");
        res.sendFile(appRoot+"/public/index.html");
        
        //res.redirect("index.html");
    },
    showRedirect(req,res){
        console.log("showRedirect");
        res.redirect("/api/show");
    },
    updateSubdocuments(req,res){
        /* const modi = new HomeModel({
            "name" : "modi",
            "city" : "gujarat",
            "post" : []
        });

        modi.save()
        .then((user) => {
            console.log(user);
        }); */

       /* 
        HomeModel.findByIdAndUpdate("5a1d3d2adebeed2c2c67c831",{"name" : "modiii"})
        .then(()=>{
            console.log("update success");
        })
        .catch(()=> {
            console.log("update failed");
        });
        res.send({"data" : "see console1 update"});
         */

         
        HomeModel.findOne({name : "modiii"})
        .then((home)=>{
             console.log("find success1");
             console.log(home);
            home.post.push({"title" : "new post"});
            home.save().then(()=>{
                console.log("save success");
            })
            .catch(()=>{
                console.log("save failed");
            });
        })
        .catch(()=> {
            console.log("find failed");
        });
        res.send({"data" : "see console1 update"});
        
    }
};