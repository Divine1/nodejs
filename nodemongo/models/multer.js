const multer = require("multer");
const path = require("path");
module.exports = {
    checkFileType(file,cb){
        console.log("in checkFileType::file ",file);

        const fileTypes = /jpeg|jpg|png|gif/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());

        console.log("extname:: ",extname );
        const mimetype = fileTypes.test(file.mimetype);
        if(mimetype && extname){
            return cb(null,true);
        }
        else{
            cb("Error : Image only");
        }
    },
    upload(){
        const self = this;
        console.log("in multer.js upload");
        const storage = multer.diskStorage({
            destination(req, file, callback){
                callback(null, appRoot+'/public/uploads');   
            },
            filename(req, file, cb) {
                console.log("filename:: ",file);
                cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname));
            }
          });

        return multer({
            storage : storage,
            limits : {fileSize : 1000000000000000},
            fileFilter(req,file,cb){
                console.log("in file filter");
                console.log("in file filter:: file:: ", file);
                self.checkFileType(file,cb);
            }
        }).single("myimage");

    }
};