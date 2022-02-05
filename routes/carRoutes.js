const app = require("express");
const router = app.Router();
const {
  addCar,
  viewCar,
  updateCar,
  deleteCar,
} = require("../controllers/CarController");

router.post("/addCar", addCar);
router.get("/viewCar", viewCar);
router.patch("/updateCar/:id", updateCar);
router.delete("/deleteCar/:id", deleteCar);

module.exports = router;
