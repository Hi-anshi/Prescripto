import multer from 'multer'

//here we will create the disk storage configuration so just

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // Make sure this folder exists!
    },
    filename: function(req , file, callback){
        callback(null , file.originalname)
    }
    // now we have created the configuration for disk storage
})

const upload = multer({storage})

//now create multer config using disc storage

export default upload