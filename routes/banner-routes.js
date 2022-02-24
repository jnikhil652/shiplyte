const app = require("express");
const path = require("path");

var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/image");
  },
  filename: function (req, file, cb) {
    cb(null, + Date.now() + path.extname(file.originalname));
  },
});

var upload = multer({ storage: storage });
let router = require("express").Router();
var Controller = require("../controllers/baner-Controller");
var auth = require("../utils/auth")

// BANNER ROUTES

router.route("/bannerAdd").post(upload.single("bannerimage"), Controller.bannerAdd);
router.route("/getbannerimage").get(Controller.view);
router.route("/bannerimageUpdatebyId/:id").put(upload.single("bannerimage"), Controller.updateBannerImage);
router.route("/bannerimagedeletebyId/:id").delete(Controller.deleteBannerImage);

module.exports = router;  
