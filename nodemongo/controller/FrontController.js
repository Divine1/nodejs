const Driver = require("../models/driver");
const multerconfig = require("../models/multer");
var json2csv = require('json2csv');
var fs = require('fs');

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
    },
    insertData(req,res){
        console.log("insertData route invoked via post start");

        const driver1 = new Driver({
            email : "driver1@gmail.com",
            subject : "from india. likes mutton. in chennai",
            interest : "in lion"
        });

        const driver2 = new Driver({
            email : "driver2@gmail.com",
            subject : "from pakistan. likes vegan. in islamabad",
            interest : "in cheetah"
        });

        const driver3 = new Driver({
            email : "driver3@gmail.com",
            subject : "from china. likes pulao. in beijing",
            interest : "in deer"
        });

        const driver4 = new Driver({
            email : "driver4@gmail.com",
            subject : "from singapore. likes rice. in sing",
            interest : "in goat"
        });

        const driver5 = new Driver({
            email : "driver4@gmail.com",
            subject : "from usa. likes trump. in newyork",
            interest : "in pig"
        });

        const driver6 = new Driver({
            email : "driver6@gmail.com",
            subject : "from russia. likes putin. in moscow",
            interest : "in elephant"
        });
        
        const return1 = Promise.all([
            driver1.save(),
            driver2.save(),
            driver3.save(),
            driver4.save(),
            driver5.save(),
            driver6.save(),
        ]).then((result) => {
            const ret =  {
                "driver1" : result[0],
                "driver2" : result[1],
                "driver3" : result[2],
                "driver4" : result[3],
                "driver5" : result[4],
                "driver6" : result[5]
            };
            console.log("ret  ",ret);
            return ret;
        });
        console.log("return1 ",return1);
        res.send({"ret" : return1});
    },
    search(req,res){
        console.log("in search method");
        //const searchTerm = req.query.q;
        const searchTerm = req.body.q;
        console.log("searchTerm ",searchTerm);

        Driver.find({$text : {$search : searchTerm }})
            .then((result) =>{
                console.log("result " ,result );
            })
            .catch((err) =>{
                console.log("err " ,err );
            });

        res.send({"searchTerm" : searchTerm});
    },
    addAddress(req,res){
        console.log("in addAddress method");
        const daveProp = {
            email : 'dave@gmail.com',
            interest : "like wheat",
            address : [{
                "city" : "mumbai",
                "country" : "india"
            }]
        };
        const rockProp = {
            email : 'esha@gmail.com',
            interest : "like crops"
        };
        const dave = new Driver(daveProp);
        const rock = new Driver(rockProp);

        Promise.all([
            dave.save(),
            rock.save()
        ]).then((result) => {
            res.send({"addAddress ret" : result});
        });
    },
    findDriverAddress(req,res){
        console.log("in findDriverAddress method");

        Driver.find({"address.city" : "mumbai"})
            .then(results=>{
                console.log("results: ",results[0].drivercount);
                res.send({"findDriverAddress ret" : results});
            });
    },
    getDriverCount(req,res){
        console.log("in getDriverCount method");

        /* Driver.count()
        .then((ret) => {
                console.log("ret: ",ret);
                res.send({"findDriverAddress ret" : "ss"});
        }); */


        
    },
    
    uploadPost(req,res){
        console.log("in uploadPost");
        
        const multerUpload = multerconfig.upload();
        multerUpload(req,res,(err)=>{
            console.log("called multerObject.upload ");
            if(err){
                console.log("err:: ",err);
                res.render("upload", {
                    msg: err
                });
            }
            else{
                console.log("req.body:: ",req.body);
               console.log("req:: ",req.file);
                res.send("test");
            }
        });
    },
    uploadGet(req,res){
        console.log("in uploadGet");
        res.render("upload");
    },
    exportCsv(req,res){
        console.log("in exportCsv");
//       https://stackoverflow.com/questions/32307636/export-mongodb-collection-data-to-csv-file-in-node-js

        //https://www.npmjs.com/package/json2csv

        var fields = ['car', 'price', 'color'];
        var myCars = [
        {
            "car": "Audi",
            "price": 40000,
            "color": "blue"
        }, {
            "car": "BMW",
            "price": 35000,
            "color": "black"
        }, {
            "car": "Porsche",
            "price": 60000,
            "color": "green"
        }
        ];
        var csv = json2csv({ data: myCars, fields: fields });
        
        fs.writeFile('file.csv', csv, function(err) {
        if (err) throw err;
        console.log('file saved');
        });



        res.send({"data" : "csv exported"});
    }
};