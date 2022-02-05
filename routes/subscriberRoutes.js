let router = require("express").Router();
var Controller = require("../controllers/subscriberController");


router.route("/subscriber").post(Controller.subscriber);

module.exports = router;
