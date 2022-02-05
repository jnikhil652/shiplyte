const app = require("express");
const router = app.Router();
const path = require("path");

var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, "product_" + Date.now() + path.extname(file.originalname));
  },
});

var upload = multer({ storage: storage });

const {
  addProduct,
  viewProduct,
  updateProduct,
  deleteProduct,
  getFeaturedProduct,
  addFavroite
} = require("../controllers/ProductController");

router.post("/addProduct", upload.single("myField"), addProduct);
router.get("/viewProduct", viewProduct);
router.patch("/updateProduct/:id", upload.single("myField"), updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/getFeaturedProduct", getFeaturedProduct);
router.post("/add-favroite/:id", addFavroite);

module.exports = router;
