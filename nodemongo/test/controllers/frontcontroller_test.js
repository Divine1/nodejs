const app = require("../../app");
const assert = require("assert");
const request = require("supertest");
const mongoose = require("mongoose");
const Driver = mongoose.model('driver');


describe("front controller test",() =>{
    it("/create route test", (done)=>{
        Driver.count()
            .then(count =>{
              request(app)
                .post("/create")
                .send({"email" : "sun@gmail.com"})
                .end(() =>{
                    Driver.count()
                        .then(newCount =>{
                            assert((count+3) === newCount);
                            done();
                        })
                        .catch(err => {
                            console.log("assertion err ",err);
                            done();
                        });
                });
            }) 
            .catch(err => {
                console.log("err ",err);
                done();
            });
    });
});