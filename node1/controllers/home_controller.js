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
    }

    
};