const FrontController = require('../controller/FrontController.js');

module.exports = (app) =>{
    app.get("/", FrontController.welcome);
    app.post("/contact", FrontController.contact);
    app.post("/create", FrontController.create);
};