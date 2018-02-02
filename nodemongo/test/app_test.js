const app = require("../app");
const assert = require("assert");
const request = require("supertest");

describe("testing routes",()=>{
    it("handling / route", (done) =>{
        request(app)
            .get("/")
            .end((err,response)=>{
               /*  console.log("err");
                console.log(err);
                console.log("response");
                console.log(response.body.hi); */
                //response.body
                //response.status
                //response.statusCode
                assert(response.body.hi === "welcome");
                done();
            });
    });

    /* it("handling /contact route", (done) =>{

    }); */

});

