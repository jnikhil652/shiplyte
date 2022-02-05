const app = require("express");
const router = app.Router();
const auth = require("../utils/auth");
const {
  register,
  registerValiations,
  login,
  loginValiations,
  getUserDetail,
  updateUserDetail,
  updatePasswordValidations,
  updatePassword,
  emailSendUser,
  changePasswordUser,
} = require("../controllers/UserController");
router.post("/register", registerValiations, register);
router.post("/login", loginValiations, login);
router.post("/emailSendUser", emailSendUser);
router.post("/changePasswordUser", changePasswordUser);

router.get("/getUserDetail", auth, getUserDetail);
router.patch("/updateUserDetail", auth, updateUserDetail);
router.patch(
  "/updatePassword",
  [auth, updatePasswordValidations],
  updatePassword
);

module.exports = router;
