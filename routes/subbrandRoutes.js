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

const router = require("express").Router()
const Controller = require("../controllers/subbrandController")

router.route("/addsubbrand").post(image.single("image"), Controller.addsubbrand)
router.route("/getsubbrand").get(Controller.getsubbrand)
router.route("/updatesubbrand/:id").put(image.single("image"), Controller.updatesubbrand)
router.route("/deletesubbrand/:id").delete(Controller.deletesubbrand)
router.route("/getsubbrandbybrandid/:id").get(Controller.getsubbrandbybrandid)


module.exports = router