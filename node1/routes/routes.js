const HomeController = require("../controllers/home_controller");

module.exports = (app) => {
    app.get("/api", HomeController.greeting);
    app.get("/api/:name", HomeController.greetingParam);

    app.post("/api", HomeController.greetingPost);
};