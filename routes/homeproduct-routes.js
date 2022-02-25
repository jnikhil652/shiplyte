const multer = require("multer");
var path = require("path")

var productImage = multer.diskStorage({
    destination: function (req, file, cb) { cb(null, "./upload/Image") },
    filename: function (req, file, cb) { cb(null, Date.now() + path.extname(file.originalname)) },
});
var productImage = multer({ storage: productImage });

const router = require("express").Router()
const Controller = require("../controllers/homeproduct-controller")

router.route("/addhomeproduct").post(productImage.single("myField"), Controller.addhomeproduct)
router.route("/gethomeproduct").get(Controller.gethomeproduct)
router.route("/updatehomeproduct/:id").put(productImage.single("myField"), Controller.updatehomeproduct)
router.route("/deletehomeproduct/:id").delete(Controller.deletehomeproduct)
router.route("/gethomeproductbyid/:id").get(Controller.gethomeproductbyid)

module.exports = router    