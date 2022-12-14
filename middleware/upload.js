
const path = require('path')
const multer = require('multer');
const bodyParser = require('body-parser');


const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function(req, file , cb) {
        cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname));

    }
});

const upload = multer({
    storage : storage
}) //.single('picture');

module.exports = upload

// var storage = multer.diskStorage({
//     destination: function(req, file , cb) {
//         cb(null, 'uploads/')
//     },
//     filename: function(req, file, cb) {
//         let ext = path.extname(file.originalname)
//         cb(null, Date.now() + ext)
//     }
// })

// var upload = multer({
//     storage : storage,
//     fileFilter : function(req, file, callback) {
//         if(
//             file.mimetype == "image/png" ||
//             file.mimetype == "image/jpg"
//         ){
//             callback(null, true)
//         } else {
//             console.log('only jpg & png files supported')
//             callback(null,false)
//         }
//     },
//     limits: {
//         fileSize: 1024 * 1024 *2 
//     }
// })

