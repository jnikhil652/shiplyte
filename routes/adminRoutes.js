const app = require("express");
const router = app.Router();
const auth = require("../utils/auth");
const {
  registerAdmin,
  registerValiationsAdmin,
  loginAdmin,
  loginValiationsAdmin,
  emailSend,
  changePassword,
} = require("../controllers/AdminController");
router.post("/registerAdmin", registerValiationsAdmin, registerAdmin);
router.post("/loginAdmin", loginValiationsAdmin, loginAdmin);
router.post("/emailSend", emailSend);
router.post("/changePassword", changePassword);

module.exports = router;
