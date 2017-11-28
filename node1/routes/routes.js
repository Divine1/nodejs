const HomeController = require("../controllers/home_controller");

module.exports = (app) => {
    app.get("/api", HomeController.greeting);
    //app.get("/api/:name", HomeController.greetingParam);

    app.post("/api", HomeController.greetingPost);
    app.get("/api/create", HomeController.createHome);
    app.get("/api/find", HomeController.findHome);
    app.get("/api/show", HomeController.showpage);
    app.get("/api/re", HomeController.showRedirect);

    app.get("/api/sub", HomeController.updateSubdocuments);

    
    
};