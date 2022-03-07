const app = require("express");
const { getTrackingDetails } = require('../controllers/TrackingController');
const router = app.Router();

router.get("/getTracking", getTrackingDetails);