const app =require("./app");
const path = require('path');
global.appRoot = path.resolve(__dirname);

app.listen(3050,() => {
    console.log("server is running on 3050");
});

