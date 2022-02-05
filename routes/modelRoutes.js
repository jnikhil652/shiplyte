const app = require("express");
const router = app.Router();
const {
  addModel,
  getModel,
  updateModel,
  deleteModel,
  getModelByChassis,
} = require("../controllers/ModelController");

router.post("/addModel", addModel);
router.get("/getModel", getModel);
router.get("/getModelByChassis/:id", getModelByChassis);
router.patch("/updateModel/:id", updateModel);
router.delete("/deleteModel/:id", deleteModel);

module.exports = router;
