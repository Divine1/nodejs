const fs = require("fs");

module.exports = (io) =>{
    io.on("connection", (socket) => {
        console.log("Server: connection success");
        
        /* socket.emit("newemail",{
            from : "divine",
            body : "infosys"
        }); */

        socket.on("disconnect",()=>{
            console.log("Server: connection terminated");
        });

        /* socket.on("newemailAck",(data)=>{
            console.log("Server: newemailAck");
            console.log(data);
            socket.broadcast.emit("newmsgbroadcast",{
                country : "india"
            });
        }); */


        fs.readFile(__dirname + '/static/image.png', function(err, buf){
            socket.emit('image', { image: true, buffer: buf.toString('base64') });
            console.log('image file is initialized');
        });

    });
};
