const app = require("express");
const router = app.Router();
const {
  addCategory,
  viewCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/CategoryController");

router.post("/addCategory", addCategory);
router.get("/viewCategory", viewCategory);
router.patch("/updateCategory/:id", updateCategory);
router.delete("/deleteCategory/:id", deleteCategory);

module.exports = router;
