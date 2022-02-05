const app = require("express");
const router = app.Router();
const {
  addChassisNumber,
  getChassisNumber,
  updategetChassisNumber,
  deleteChassisNumber,
  getChassisNumberBySeries,
} = require("../controllers/ChassisNumberController");

router.post("/addChassisNumber", addChassisNumber);
router.get("/getChassisNumber", getChassisNumber);
router.get("/getChassisNumberBySeries/:id", getChassisNumberBySeries);
router.patch("/updategetChassisNumber/:id", updategetChassisNumber);
router.delete("/deleteChassisNumber/:id", deleteChassisNumber);

module.exports = router;
