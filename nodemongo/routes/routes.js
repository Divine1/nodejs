const FrontController = require('../controller/FrontController.js');

module.exports = (app) =>{
    app.get("/", FrontController.welcome);
    app.post("/contact", FrontController.contact);
    app.post("/create", FrontController.create);
    app.post("/insert", FrontController.insertData);
    app.post("/search", FrontController.search);
    
    app.get("/addaddress", FrontController.addAddress);
    app.get("/finddriveraddress", FrontController.findDriverAddress);

    app.get("/getdrivercount", FrontController.getDriverCount);
    app.post("/uploadpost", FrontController.uploadPost);
    app.get("/uploadget", FrontController.uploadGet);
    app.get("/exportcsv", FrontController.exportCsv);
    
};