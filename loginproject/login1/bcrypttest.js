const bcrypt = require("bcryptjs");

var password = "divine123"
/* bcrypt.genSalt(10,(err,salt)=>{
    
    console.log("salt ",salt);
    if(err){
        console.log("err ",err);
    }
    else{
        bcrypt.hash(password,salt,(err,hash)=>{

            if(err){
                console.log("err ",err);
            }
            else{
                console.log("password ",password);
                console.log("hash ",hash);    
            }
        });
    }
}); */
//var hashValue = "$2a$10$hJSudHP8ZUdfofZrM2i0AeaxMV.2seSafxfKTvHGHWppoM7K9pHde";
//var hashValue = "$2a$10$i94H.pp01MupqUt2FEMkuefdB.Fmd6kj02yrlEPAPNOZktQSu/GnG";
var hashValue = "$2a$10$i94H.pp01MupqUt2FEMkuefdB.Fmd6kj02yrlEPAPNOZktQSu/Gnh";
bcrypt.compare(password,hashValue,(err,res)=>{
    if(err){
        console.log("err ",err);
    }
    else{
        console.log("res ",res);
    }
})
