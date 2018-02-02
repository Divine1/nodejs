const app = require("./app");

var server = app.listen(3050,()=>{
    var port = server.address().port;
    console.log("server started on %s ",port);
});