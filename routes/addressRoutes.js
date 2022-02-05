const app = require("express");
const router = app.Router();
const auth = require("../utils/auth");
const {
  addAddress,
  getAddress,
  deleteAddress,
  updateAddress
} = require("../controllers/AddressController");

router.post("/add-address",auth, addAddress);
router.get("/get-address/",auth, getAddress);
router.patch("/update-adress-detail/:id", auth, updateAddress);
router.get("/delete-address/:id",auth, deleteAddress);



module.exports = router;
