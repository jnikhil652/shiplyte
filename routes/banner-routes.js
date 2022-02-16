const multer = require("multer");
var path = require("path")

var bannerAdd = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload/Image");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
var bannerAdd = multer({ storage: bannerAdd });
let router = require("express").Router();
var Controller = require("../controllers/baner-Controller");
var auth = require("../utils/auth")

// BANNER ROUTES

router.route("/bannerAdd").post(bannerAdd.single("bannerimage"), Controller.bannerAdd);
router.route("/getbannerimage").get(Controller.view);
router.route("/bannerimageUpdatebyId/:id").put(bannerAdd.single("bannerimage"), Controller.updateBannerImage);
router.route("/bannerimagedeletebyId/:id").delete(Controller.deleteBannerImage);

module.exports = router;  
