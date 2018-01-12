var socket = io();
socket.on("connect",()=>{
    console.log("client: connection success");
});



socket.on("newemail",(data)=>{
    console.log("client: newemail received");
    console.log(data);
});

socket.emit("newemailAck",{
    from: "divine"
});


socket.on("newmsgbroadcast",(data)=>{
    console.log("client: newmsgbroadcast received");
    console.log(data);
});

socket.on("disconnect",()=>{
    console.log("client: connection terminated");
});


socket.on("image",(data)=>{
    console.log("client: image file received");
    var img = document.getElementById("img");
    console.log(img);
    console.log(data.buffer);
    //img.src= "";
    img.src = 'data:image/png;base64,' + data.buffer;
    console.log(img);
});