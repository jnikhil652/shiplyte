const { addOrder, getOrder, viewOrderById, cancelOrder } = require("../controllers/orderController");
const app = require("express");
const router = app.Router();
const auth = require("../utils/auth");

router.post("/addOrder", auth, addOrder);
router.post("/viewOrder/:id", auth, viewOrderById);
router.get("/getOrder", getOrder);
router.get("/cancelOrder", auth, cancelOrder);


module.exports = router;