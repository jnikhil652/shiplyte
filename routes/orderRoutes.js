const { addOrder, getOrder,viewOrderById} = require("../controllers/orderController");
const app = require("express");
const router = app.Router();
const auth = require("../utils/auth");

router.post("/addOrder",auth, addOrder);
router.post("/viewOrder/:id",auth, viewOrderById);
router.get("/getOrder",auth, getOrder);


module.exports = router;