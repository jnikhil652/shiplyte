const multer = require("multer");
var path = require("path")
var image = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./upload/Image");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
var image = multer({ storage: image });

const imageUplods = image.fields([
    { name: 'audio1', maxCount: 1 },
    { name: 'audio2', maxCount: 1 },
]);


const router = require("express").Router()
const Controller = require("../controllers/exhaustController")


router.route("/addexhaust").post(imageUplods, Controller.addexhaust)
router.route("/getexhaust").get(Controller.getexaust)
router.route("/deleteexhaust").get(Controller.deleteexhaust)

module.exports = router