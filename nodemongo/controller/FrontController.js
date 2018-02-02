const Driver = require("../models/driver");

module.exports = {
    welcome(req,res){
        console.log("default route invoked via get");
        res.send({"hi":"welcome"});
    },
    contact(req,res){
        console.log("contact route invoked via post");
        console.log("req.body ",req.body);
        res.send({"hi":"contact1"});
    },
    create(req,res){
        console.log("create route invoked via post start");
        /* console.log("req.body ",req.body); */

        const driverProps = req.body;
        Driver.create(driverProps)
            .then((driver) => {
                console.log("driver created ", driver);
                res.send(driver);
            })
            .catch(err => { 
                console.error('error: ', err);
                console.error('error stack: ', err.stack);
                res.send({"return" : "error"});
            });
        
        console.log("create route invoked via post end");
    }
};