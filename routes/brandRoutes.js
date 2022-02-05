const app = require("express");
const router = app.Router();

const path = require("path");

var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, "brandLogo_" + Date.now() + path.extname(file.originalname));
  },
});

var upload = multer({ storage: storage });
const {
  addBrand,
  getBrand,
  updateBrand,
  deleteBrand,
  addBrandLogo,
  getBrandLogo,
  updateBrandLogo,
  deleteBrandLogo,
  addQuality,
  getQuality,
  updateQuality,
  deleteQuality,
} = require("../controllers/BrandController");
router.post("/addBrand", addBrand);
router.get("/getBrand", getBrand);
router.patch("/updateBrand/:id", updateBrand);
router.delete("/deleteBrand/:id", deleteBrand);

router.post("/addBrandLogo", upload.single("myField"), addBrandLogo);
router.get("/getBrandLogo", getBrandLogo);
router.patch("/updateBrandLogo/:id", upload.single("myField"), updateBrandLogo);
router.delete("/deleteBrandLogo/:id", deleteBrandLogo);

router.post("/addQuality", addQuality);
router.get("/getQuality", getQuality);
router.patch("/updateQuality/:id", updateQuality);
router.delete("/deleteQuality/:id", deleteQuality);

module.exports = router;
