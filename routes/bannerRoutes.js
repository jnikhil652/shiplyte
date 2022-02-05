const app = require("express");
const router = app.Router();
const path = require("path");

var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/videos");
  },
  filename: function (req, file, cb) {
    cb(null, "banner_" + Date.now() + path.extname(file.originalname));
  },
});

var upload = multer({ storage: storage });

const {
  addBanner,
  getBanner,
  editBanner,
  deleteBanner,
} = require("../controllers/BannerController");

router.post("/addBanner", upload.single("myField"), addBanner);
router.get("/getBanner", getBanner);
router.patch("/editBanner/:id", upload.single("myField"), editBanner);
router.delete("/deleteBanner/:id", deleteBanner);

module.exports = router;
